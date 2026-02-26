import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';

// ─── Tipos ──────────────────────────────────────────────────────────────────

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  whatsapp?: string;
  goals?: string[];
  problem?: string;
  stage?: string;
  timeline?: string;
  budget?: string;
};

// ─── Handler principal ──────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  // CORS para desarrollo local
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const data: ContactPayload = req.body;

  // ─── Validación ────────────────────────────────────────────────────────────
  if (!data.name || !data.email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return res.status(400).json({ error: 'El email no es válido.' });
  }

  // Ejecutamos email y Notion en paralelo para mayor velocidad
  const results = await Promise.allSettled([
    sendEmail(data),
    createNotionLead(data),
  ]);

  // Si ambos fallan, devolvemos error
  const allFailed = results.every((r) => r.status === 'rejected');
  if (allFailed) {
    console.error('Email error:', (results[0] as PromiseRejectedResult).reason);
    console.error('Notion error:', (results[1] as PromiseRejectedResult).reason);
    return res.status(500).json({
      error: 'No se pudo procesar tu solicitud. Intentá nuevamente o escribinos directo.',
    });
  }

  // Log de errores parciales pero no bloqueamos
  results.forEach((result, i) => {
    if (result.status === 'rejected') {
      console.error(`Error en paso ${i === 0 ? 'email' : 'Notion'}:`, result.reason);
    }
  });

  return res.status(200).json({ success: true });
}

// ─── Envío de Email ─────────────────────────────────────────────────────────

async function sendEmail(data: ContactPayload) {
  const {
    SMTP_HOST = 'smtp.gmail.com',
    SMTP_PORT = '587',
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    throw new Error('Variables de entorno SMTP no configuradas.');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const goalsText = data.goals?.length ? data.goals.join(', ') : '—';

  const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0a; color: #e5e5e5; margin: 0; padding: 20px; }
    .card { background: #121212; border: 1px solid #222; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #064e3b, #065f46); padding: 32px; text-align: center; }
    .header h1 { color: #10b981; font-size: 24px; margin: 0 0 4px; }
    .header p { color: #6ee7b7; font-size: 14px; margin: 0; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin-bottom: 4px; }
    .value { font-size: 15px; color: #f9fafb; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 10px 14px; }
    .value.multiline { white-space: pre-wrap; }
    .footer { padding: 20px 32px; border-top: 1px solid #1f1f1f; text-align: center; color: #4b5563; font-size: 12px; }
    .tag { display: inline-block; background: #064e3b; color: #6ee7b7; border-radius: 4px; padding: 2px 8px; font-size: 12px; margin: 2px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Nuevo Lead — Brelio</h1>
      <p>Diagnóstico Express recibido</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Nombre</div>
        <div class="value">${escape(data.name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${escape(data.email)}</div>
      </div>
      ${data.company ? `
      <div class="field">
        <div class="label">Empresa</div>
        <div class="value">${escape(data.company)}</div>
      </div>` : ''}
      ${data.whatsapp ? `
      <div class="field">
        <div class="label">WhatsApp</div>
        <div class="value">${escape(data.whatsapp)}</div>
      </div>` : ''}
      <div class="field">
        <div class="label">Objetivos</div>
        <div class="value">
          ${data.goals?.map((g) => `<span class="tag">${escape(g)}</span>`).join('') || '—'}
        </div>
      </div>
      ${data.problem ? `
      <div class="field">
        <div class="label">Problema actual</div>
        <div class="value multiline">${escape(data.problem)}</div>
      </div>` : ''}
      ${data.stage ? `
      <div class="field">
        <div class="label">Etapa del proyecto</div>
        <div class="value">${escape(data.stage)}</div>
      </div>` : ''}
      ${data.timeline ? `
      <div class="field">
        <div class="label">Urgencia</div>
        <div class="value">${escape(data.timeline)}</div>
      </div>` : ''}
      ${data.budget ? `
      <div class="field">
        <div class="label">Presupuesto estimado</div>
        <div class="value">${escape(data.budget)}</div>
      </div>` : ''}
    </div>
    <div class="footer">Enviado el ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })} desde brelio.com.ar</div>
  </div>
</body>
</html>`;

  await transporter.sendMail({
    from: `"Brelio Leads" <${SMTP_USER}>`,
    to: MAIL_TO,
    subject: `[Nuevo Lead] ${data.name}${data.company ? ` — ${data.company}` : ''}`,
    html: htmlBody,
    replyTo: data.email,
  });
}

// ─── Crear Lead en Notion ───────────────────────────────────────────────────

async function createNotionLead(data: ContactPayload) {
  const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env;

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    throw new Error('Variables de entorno Notion no configuradas.');
  }

  const notion = new Client({ auth: NOTION_TOKEN });

  await notion.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      // La columna título de tu base de datos debe llamarse "Nombre"
      Nombre: {
        title: [{ text: { content: data.name } }],
      },
      Empresa: {
        rich_text: [{ text: { content: data.company || '' } }],
      },
      Email: {
        email: data.email,
      },
      WhatsApp: {
        phone_number: data.whatsapp || '',
      },
      Objetivo: {
        multi_select: (data.goals || []).map((g) => ({ name: g })),
      },
      Problema: {
        rich_text: [{ text: { content: data.problem || '' } }],
      },
      Etapa: {
        select: data.stage ? { name: data.stage } : null,
      },
      Urgencia: {
        select: data.timeline ? { name: data.timeline } : null,
      },
      Presupuesto: {
        select: data.budget ? { name: data.budget } : null,
      },
      Fecha: {
        date: { start: new Date().toISOString().split('T')[0] },
      },
    },
  });
}

// ─── Utilidades ─────────────────────────────────────────────────────────────

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
