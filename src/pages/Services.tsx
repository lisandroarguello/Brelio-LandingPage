import { motion } from 'motion/react';
import { Check, Code, GitBranch, Terminal, ArrowRight, Zap, Search, PenTool, Play, ShieldCheck, Rocket, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/src/hooks/usePageMeta';
import { pageMeta } from '@/src/content/siteConfig';

const services = [
  {
    title: "Automatización de Procesos",
    desc: "Eliminamos tareas repetitivas y conectamos tus herramientas para que la operación fluya con menos errores y más velocidad.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    features: [
      "Integraciones entre ERPs, CRMs y herramientas internas",
      "Automatización de flujos (altas, pedidos, aprobaciones, reportes)",
      "Bots y notificaciones (WhatsApp / email) cuando suma valor",
      "Menos pasos manuales, menos fallas operativas"
    ]
  },
  {
    title: "Desarrollo de Software a Medida",
    desc: "Construimos sistemas internos y productos digitales alineados a tu proceso real: claros, escalables y mantenibles.",
    icon: <Code className="w-8 h-8 text-blue-500" />,
    features: [
      "Sistemas de gestión operativa (internos o SaaS)",
      "Apps web (y mobile si realmente aplica)",
      "Arquitectura preparada para crecer sin reescribir todo",
      "Seguridad, performance y escalabilidad desde el inicio"
    ]
  },
  {
    title: "Desarrollo de MVP",
    desc: "Recortamos el alcance al mínimo viable real y lo llevamos a producción rápido para validar y generar impacto sin quemar presupuesto.",
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    features: [
      "Definición de MVP defendible (qué sí / qué no)",
      "Entregas por iteraciones con feedback temprano",
      "Time-to-value: valor visible en semanas, no meses",
      "Base sólida para escalar sin “parches”"
    ]
  },
  {
    title: "Consultoría PO & Estrategia",
    desc: "Actuamos como Product Owners para convertir ideas y procesos en un sistema ejecutable: backlog claro, prioridades y entregables.",
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    features: [
      "Discovery: entender proceso, usuarios y reglas del negocio",
      "Backlog priorizado con criterios de aceptación claros",
      "Roadmap por iteraciones (sin roadmap infinito)",
      "Alineación negocio–tecnología y gestión de stakeholders"
    ]
  }
];

const methodologySteps = [
  {
    title: "Discovery & Análisis",
    desc: "Mapeamos tu operación, detectamos cuellos de botella y definimos qué problema vale la pena resolver.",
    icon: <Search className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Diseño de Solución",
    desc: "Traducimos el proceso en sistema: alcance, reglas, roles, flujos y un MVP recortado.",
    icon: <PenTool className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Desarrollo Iterativo",
    desc: "Construimos por etapas con entregables concretos y validación temprana.",
    icon: <Code className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "QA & Testing",
    desc: "Probamos lo que importa: escenarios reales, reglas y errores que en operación cuestan caro.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Despliegue & Monitoreo",
    desc: "Lanzamos, monitoreamos y estabilizamos para que el sistema sea confiable en el día a día.",
    icon: <Play className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Mejora Continua",
    desc: "Iteramos con métricas y feedback: automatizar más, optimizar tiempos y sumar valor sin inflar el alcance.",
    icon: <BarChart className="w-5 h-5 text-emerald-500" />
  }
];

export default function Services() {
  usePageMeta(pageMeta.services.title, pageMeta.services.description);
  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Servicios pensados para ordenar, automatizar y escalar tu operación.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-4"
          >
            Combinamos criterio de producto + automatización + desarrollo para transformar procesos manuales en sistemas que se usan de verdad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-sm font-mono text-emerald-400"
          >
            Tecnología con propósito de negocio.
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block w-fit group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-4 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-bg-card border border-white/5 rounded-3xl p-8 md:p-16 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Un proceso único: <br />
                <span className="text-slate-500">del problema a la solución en producción.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                No vendemos “desarrollo” suelto.
                <br />
                Seguimos un ciclo end-to-end para asegurar claridad, entregas y mejora continua.
              </p>
              <div className="inline-flex items-center gap-2 text-emerald-500 font-mono text-sm uppercase tracking-wider border border-emerald-500/20 px-4 py-2 rounded-full bg-emerald-500/5 mb-8">
                <Terminal size={16} />
                End-to-End Delivery
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">¿No sabés por dónde empezar?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  En 30 minutos podemos identificar el cuello de botella principal y el próximo paso más lógico.
                </p>
                <Link 
                  to="/contacto"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                >
                  Agendar diagnóstico express
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {methodologySteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 bg-bg-dark border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
