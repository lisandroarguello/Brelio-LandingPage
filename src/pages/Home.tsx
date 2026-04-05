import { motion } from 'motion/react';
import {
  ArrowRight,
  Search,
  Code2,
  Infinity as InfinityIcon,
  Wrench,
  Shield,
  AlertTriangle,
  UserX,
  Puzzle,
  EyeOff,
  Sparkles,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/src/hooks/usePageMeta';
import { pageMeta } from '@/src/content/siteConfig';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-24 pb-24">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs md:text-sm font-mono text-emerald-400 tracking-wider uppercase">
              Software que funciona. Punto.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]"
          >
            Desarrollamos el{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">
                software exacto
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 120 3 180 6C220 8 260 7 298 4"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            que tu operación necesita.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Desarrollamos sistemas hechos para tu operación — para que tu
            negocio escale sin depender de procesos manuales ni soluciones que
            no se adaptan.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contacto"
              className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_0_60px_-8px_rgba(16,185,129,0.8)]"
            >
              Contanos qué te está frenando
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto px-8 py-4 text-slate-300 hover:text-white rounded-xl font-medium text-lg transition-colors flex items-center justify-center gap-2"
            >
              Cómo trabajamos
              <span className="text-emerald-400">↓</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 flex justify-center"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROBLEMA — Grid de señales visuales
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-bg-card border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
                Señales de alerta
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Si te pasa alguna de estas cosas,{' '}
              <span className="text-emerald-400">seguí leyendo.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              No son problemas raros. Son los mismos que vemos una y otra vez
              en negocios que ya funcionan — pero sobre una base frágil.
            </p>
          </motion.div>

          {/* Problem cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                icon: <UserX className="w-6 h-6" />,
                title: 'Todo depende de vos',
                desc: 'Los procesos funcionan porque estás encima. El día que no estás, algo se rompe.',
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: 'Tareas a mano por costumbre',
                desc: 'Se hacen porque siempre fue así. Nunca hubo tiempo de ordenarlas.',
              },
              {
                icon: <Puzzle className="w-6 h-6" />,
                title: 'Sistemas genéricos que no calzan',
                desc: 'Probaste herramientas que prometían todo y tu equipo terminó usándolas a medias.',
              },
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                title: 'Software huérfano',
                desc: 'Te hicieron algo, funcionó un tiempo, y después no había quien lo mantuviera.',
              },
              {
                icon: <EyeOff className="w-6 h-6" />,
                title: 'Tecnología opaca',
                desc: 'Pagás, no entendés bien qué recibís, y cuando falla no sabés a quién llamar.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Base frágil + crecimiento',
                desc: 'Tu negocio sigue creciendo sobre algo que en algún punto va a colapsar.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-bg-dark/60 border border-white/5 hover:border-red-500/30 transition-all backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-red-500/10 text-red-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CÓMO FUNCIONA — Proceso con línea conectora
          ═══════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Nuestro proceso
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tres pasos.{' '}
              <span className="text-slate-500">Sin vueltas.</span>
            </h2>
            <p className="text-lg text-slate-400">
              Una forma simple de trabajar porque los problemas complejos no
              necesitan procesos complejos — necesitan criterio.
            </p>
          </div>

          {/* Process steps with connecting line */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 md:gap-6 relative"
            >
              {[
                {
                  step: '01',
                  title: 'Entendemos tu negocio',
                  desc: 'No arrancamos con tecnología. Arrancamos con preguntas. Cómo trabajás, dónde perdés tiempo, dónde está el riesgo, qué depende de quién.',
                  icon: <Search className="w-7 h-7" />,
                  highlight: 'Recién cuando entendemos eso, sabemos qué construir.',
                },
                {
                  step: '02',
                  title: 'Construimos lo que necesitás',
                  desc: 'Nada genérico. Nada de más. Un sistema hecho para tu operación que tu equipo pueda usar sin capacitaciones de una semana.',
                  icon: <Code2 className="w-7 h-7" />,
                  highlight: 'Resolvemos exactamente el problema que te trajo acá.',
                },
                {
                  step: '03',
                  title: 'Nos quedamos',
                  desc: 'No entregamos y desaparecemos. Lo monitoreamos, lo mantenemos y lo hacemos crecer con tu negocio.',
                  icon: <InfinityIcon className="w-7 h-7" />,
                  highlight: 'Cada mes sabés exactamente qué hicimos y por qué.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 mb-8">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
                    <div className="relative w-20 h-20 rounded-full bg-bg-card border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-slate-900 font-mono font-bold text-sm flex items-center justify-center shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all w-full h-full">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                      {item.desc}
                    </p>
                    <p className="text-emerald-400 text-sm font-medium leading-relaxed pt-4 border-t border-white/5">
                      {item.highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICIOS — Layout asimétrico
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-bg-card border-y border-white/5 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Cómo te acompañamos
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Dos momentos.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Una sola relación.
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              Construimos lo que necesitás — y nos quedamos para que funcione
              en el tiempo.
            </p>
          </div>

          {/* Services — card with two halves */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Proyecto a medida */}
            <div className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-bg-dark to-bg-dark/50 border border-white/10 hover:border-emerald-500/40 transition-all overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                    <Wrench className="w-7 h-7 text-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    01 / Build
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  Proyecto a medida
                </h3>
                <p className="text-emerald-400 font-medium mb-6 text-base">
                  Construimos lo que tu negocio necesita.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Cada proyecto empieza por mapear tu operación — no por
                  proponer tecnología. Entendemos dónde están los procesos que
                  no escalan, dónde está la dependencia crítica y dónde está el
                  riesgo real.
                </p>

                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {[
                    'Un sistema que tu equipo realmente usa',
                    'Resuelve lo que te trajo acá, nada más',
                    'No depende de una sola persona',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Retainer */}
            <div className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-bg-dark to-bg-dark/50 border border-white/10 hover:border-emerald-500/40 transition-all overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                    <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    02 / Operate
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  Retainer — Operaciones continuas
                </h3>
                <p className="text-cyan-400 font-medium mb-6 text-base">
                  Tu equipo de tecnología, sin armarlo.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Una vez construido el sistema, Brelio se queda. Monitoreamos,
                  prevenimos y resolvemos. La mayoría de los problemas los
                  evitamos antes de que los notes.
                </p>

                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {[
                    'Monitoreo y mantenimiento continuo',
                    'Reporte claro cada mes',
                    'Sin tecnicismos, sin cajas negras',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Connector line between services */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-bg-dark border border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Construir
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Mantener
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Escalar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage:
                'radial-gradient(ellipse 60% 50% at 50% 50%, #000 30%, transparent 100%)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Primera conversación gratis
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
            ¿Reconociste tu negocio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              en algo de lo que leíste?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Entonces tiene sentido que hablemos. Nos contás qué te está
            frenando y te decimos con honestidad si podemos ayudarte — y cómo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contacto"
              className="group w-full sm:w-auto px-10 py-5 bg-emerald-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-[0_0_40px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_0_60px_-8px_rgba(16,185,129,0.9)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Escribinos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">
            Sin compromiso · Sin tecnicismos · Sin sorpresas
          </p>
        </motion.div>
      </section>
    </div>
  );
}
