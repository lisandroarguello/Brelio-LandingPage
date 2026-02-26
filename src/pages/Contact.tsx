import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, ArrowRight, Check, AlertCircle, RefreshCw } from 'lucide-react';
import React, { useState, FormEvent } from 'react';
import { company, pageMeta } from '@/src/content/siteConfig';
import { usePageMeta } from '@/src/hooks/usePageMeta';

type FormData = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  goals: string[];
  problem: string;
  stage: string;
  timeline: string;
  budget: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  goals: [],
  problem: '',
  stage: '',
  timeline: '',
  budget: '',
};

const GOALS = [
  'Automatizar procesos internos',
  'Crear un sistema desde cero',
  'Reemplazar procesos manuales',
  'Lanzar un MVP',
  'Ordenar y definir producto',
  'No estoy seguro, necesito claridad',
];

const STAGES = [
  'Tengo solo la idea',
  'Tengo proceso funcionando pero desordenado',
  'Tengo algo construido que necesita mejoras',
  'Ya trabajé con una agencia y no funcionó',
  'Busco escalar algo que ya está validado',
];

const TIMELINES = [
  'Lo antes posible',
  'En el próximo mes',
  'Próximos 3 meses',
  'Solo explorando',
];

const BUDGETS = [
  'Menos de USD 2.000',
  'USD 2.000 – 5.000',
  'USD 5.000 – 10.000',
  'Más de USD 10.000',
  'No estoy seguro aún',
];

const inputClass =
  'w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600';

export default function Contact() {
  usePageMeta(pageMeta.contact.title, pageMeta.contact.description);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const selectOption = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? '' : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Error ${response.status}`);
      }

      setFormState('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Ocurrió un error inesperado. Intentá nuevamente.';
      setErrorMessage(message);
      setFormState('error');
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setFormData(initialForm);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Column - Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Hablemos de tu <br />
                <span className="text-emerald-400">Sistema Operativo.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Contame tu proceso actual y te digo qué conviene construir primero.
                <br /><br />
                <span className="text-white font-medium">Sin compromiso, pero con criterio.</span>
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">¿Qué pasa después de enviar?</h3>
              <ul className="space-y-4">
                {[
                  'Analizamos tu caso en 24hs.',
                  'Te contactamos si podemos ayudarte.',
                  'Agendamos una call de diagnóstico.',
                  'Recibís una propuesta de arquitectura.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-500">
              <p>O escribinos directo:</p>
              <a href={`mailto:${company.email}`} className="text-emerald-400 hover:underline block">
                {company.email}
              </a>
              <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline block">
                WhatsApp: {company.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-bg-card border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {/* SUCCESS STATE */}
                {formState === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
                      className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-8"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-white">¡Solicitud Recibida!</h3>
                    <p className="text-slate-400 max-w-md text-lg mb-8">
                      Gracias por completar el diagnóstico inicial. Nuestro equipo analizará tu caso
                      y te contactará en menos de 24 horas hábiles.
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-8 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Enviar otra consulta
                    </button>
                  </motion.div>
                )}

                {/* ERROR STATE */}
                {formState === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mb-8">
                      <AlertCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Algo salió mal</h3>
                    <p className="text-slate-400 max-w-md mb-4">
                      {errorMessage}
                    </p>
                    <p className="text-slate-500 text-sm mb-8">
                      También podés escribirnos directo a{' '}
                      <a href={`mailto:${company.email}`} className="text-emerald-400 hover:underline">
                        {company.email}
                      </a>
                    </p>
                    <div className="flex gap-3 flex-wrap justify-center">
                      <button
                        onClick={() => setFormState('idle')}
                        className="px-8 py-3 rounded-xl bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition-colors"
                      >
                        Reintentar
                      </button>
                      <button
                        onClick={resetForm}
                        className="px-8 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
                      >
                        Limpiar formulario
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* FORM STATE */}
                {(formState === 'idle' || formState === 'submitting') && (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-12 relative z-10"
                  >
                    {/* Block 1: Basic Info */}
                    <section className="space-y-6">
                      <SectionHeader number={1} title="Información Básica" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">
                            Nombre Completo <span className="text-red-400">*</span>
                          </label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={inputClass}
                            placeholder="Tu nombre"
                            disabled={formState === 'submitting'}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">Empresa</label>
                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className={inputClass}
                            placeholder="Nombre de tu empresa"
                            disabled={formState === 'submitting'}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">
                            Email Profesional <span className="text-red-400">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={inputClass}
                            placeholder="tu@empresa.com"
                            disabled={formState === 'submitting'}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">
                            WhatsApp <span className="text-slate-600">(opcional)</span>
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className={inputClass}
                            placeholder="+54 9 ..."
                            disabled={formState === 'submitting'}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">
                        Usaremos esta información solo para responder a tu consulta. No enviamos spam.
                      </p>
                    </section>

                    {/* Block 2: Problem Context */}
                    <section className="space-y-6">
                      <SectionHeader number={2} title="Contexto del Problema" />
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-400">
                          ¿Qué querés resolver hoy?
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {GOALS.map((goal) => (
                            <ToggleButton
                              key={goal}
                              label={goal}
                              active={formData.goals.includes(goal)}
                              onClick={() => toggleGoal(goal)}
                              disabled={formState === 'submitting'}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">
                          Contanos brevemente el problema actual
                        </label>
                        <textarea
                          name="problem"
                          value={formData.problem}
                          onChange={handleInputChange}
                          maxLength={500}
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="¿Dónde se pierde tiempo, dinero o claridad hoy?"
                          disabled={formState === 'submitting'}
                        />
                        <p className="text-xs text-slate-600 text-right">
                          {formData.problem.length}/500
                        </p>
                      </div>
                    </section>

                    {/* Block 3: Stage */}
                    <section className="space-y-6">
                      <SectionHeader number={3} title="Nivel de Madurez" />
                      <div className="grid md:grid-cols-2 gap-3">
                        {STAGES.map((option) => (
                          <ToggleButton
                            key={option}
                            label={option}
                            active={formData.stage === option}
                            onClick={() => selectOption('stage', option)}
                            disabled={formState === 'submitting'}
                          />
                        ))}
                      </div>
                    </section>

                    {/* Block 4: Urgency */}
                    <section className="space-y-6">
                      <SectionHeader number={4} title="Urgencia" />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {TIMELINES.map((option) => (
                          <ToggleButton
                            key={option}
                            label={option}
                            active={formData.timeline === option}
                            onClick={() => selectOption('timeline', option)}
                            disabled={formState === 'submitting'}
                            centered
                          />
                        ))}
                      </div>
                    </section>

                    {/* Block 5: Budget */}
                    <section className="space-y-6">
                      <SectionHeader number={5} title="Presupuesto Estimado" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {BUDGETS.map((option) => (
                          <ToggleButton
                            key={option}
                            label={option}
                            active={formData.budget === option}
                            onClick={() => selectOption('budget', option)}
                            disabled={formState === 'submitting'}
                            centered
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-600">
                        Esto nos ayuda a dimensionar alcance y recomendar el camino correcto.
                      </p>
                    </section>

                    <div className="pt-6 border-t border-white/5">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="w-full bg-emerald-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando diagnóstico...
                          </>
                        ) : (
                          <>
                            Enviar Diagnóstico
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-componentes ─────────────────────────────────────────────────────────

function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <h3 className="text-lg font-semibold text-white flex items-center gap-3">
      <span className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs flex items-center justify-center text-emerald-400 font-bold shrink-0">
        {number}
      </span>
      {title}
    </h3>
  );
}

function ToggleButton({
  label,
  active,
  onClick,
  disabled,
  centered = false,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  centered?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`p-4 rounded-xl text-sm transition-all border ${centered ? 'text-center' : 'text-left'} ${
        active
          ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
          : 'bg-bg-dark border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-300'
      } disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {active && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 mb-0.5" />
      )}
      {label}
    </button>
  );
}
