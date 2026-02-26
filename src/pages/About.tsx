import { motion } from 'motion/react';
import { Award, Briefcase, Layout, CheckCircle, ArrowRight, Target, ShieldCheck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/src/hooks/usePageMeta';
import { pageMeta } from '@/src/content/siteConfig';

export default function About() {
  usePageMeta(pageMeta.about.title, pageMeta.about.description);
  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-sm font-mono text-emerald-400 uppercase tracking-wider">
              Sobre Brelio
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Arquitectura de Producto para <br />
              <span className="text-slate-500">operaciones reales.</span>
            </h1>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed mb-12">
              <p>
                No somos una agencia tradicional.
                <br />
                No vendemos pantallas ni líneas de código aisladas.
              </p>
              <p className="text-white font-medium text-xl">
                Diseñamos sistemas que resuelven procesos reales.
              </p>
              <p>
                Actuamos como el punto de unión entre negocio y tecnología:
                entendemos cómo opera tu empresa, detectamos dónde se pierde claridad y lo traducimos en un sistema ejecutable.
              </p>
              <div className="pl-6 border-l-2 border-emerald-500 italic text-slate-300">
                Antes de construir, ordenamos.
                <br />
                Antes de desarrollar, definimos.
                <br />
                Antes de escalar, estructuramos.
              </div>
              <p>
                Porque un negocio serio no debería depender de improvisación operativa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                <Briefcase className="w-8 h-8 text-emerald-500 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">+50</div>
                <div className="font-medium text-white mb-1">Procesos estructurados</div>
                <div className="text-sm text-slate-500">Soluciones con foco operativo real.</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                <Award className="w-8 h-8 text-blue-500 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">+5 Años</div>
                <div className="font-medium text-white mb-1">Diseñando sistemas</div>
                <div className="text-sm text-slate-500">Experiencia en producto y negocio.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
            <div className="bg-bg-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8">Nuestro rol no es solo programar.</h3>
              
              <ul className="space-y-6">
                {[
                  "Definir qué construir y qué no.",
                  "Recortar alcance para evitar sobrecostos.",
                  "Priorizar con criterio de negocio.",
                  "Traducir procesos en reglas claras.",
                  "Construir sistemas que puedan crecer sin rehacerse."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-lg font-medium text-white">
                  La tecnología es una herramienta. <br />
                  <span className="text-emerald-400">El sistema es lo que genera orden.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles Section */}
        <div className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Principios que guían cada decisión</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Reglas claras para evitar el caos y asegurar resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Primero el proceso",
                desc: "La herramienta no corrige el caos. El orden sí. Entendemos cómo funciona tu operación antes de proponer cualquier solución.",
                icon: <Layout className="w-8 h-8 text-emerald-500" />,
                number: "01"
              },
              {
                title: "El alcance define el costo",
                desc: "Sin claridad en el qué, no hay claridad en el cuánto. Recortar bien el sistema evita meses de retrabajo.",
                icon: <Target className="w-8 h-8 text-blue-500" />,
                number: "02"
              },
              {
                title: "Los sistemas nacen pequeños",
                desc: "Todo gran sistema empieza como un MVP bien pensado. Construimos en etapas para validar y escalar con lógica.",
                icon: <Scale className="w-8 h-8 text-purple-500" />,
                number: "03"
              },
              {
                title: "Claridad antes que complejidad",
                desc: "Si no se puede explicar, no está bien definido. Si no está bien definido, no se debería construir.",
                icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
                number: "04"
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-bg-card rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-4xl font-bold group-hover:opacity-20 transition-opacity">
                  {principle.number}
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block group-hover:bg-white/10 transition-colors">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{principle.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="py-24 text-center bg-gradient-to-b from-transparent to-bg-card rounded-3xl border border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              No construimos software por moda. <br />
              <span className="text-slate-500">Diseñamos sistemas que sostienen crecimiento.</span>
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Definir mi sistema
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
