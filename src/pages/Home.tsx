import { motion } from 'motion/react';
import { ArrowRight, Settings, LayoutTemplate, Layers, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/src/hooks/usePageMeta';
import { pageMeta, company } from '@/src/content/siteConfig';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[96px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Tu negocio funciona. Pero depende demasiado de vos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              — y de que todo el mundo haga bien su trabajo.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Construimos el software exacto que tu operación necesita y nos quedamos para mantenerlo. Sin tecnicismos, sin sorpresas, sin armar un equipo propio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-lg transition-all group shadow-lg shadow-emerald-500/20"
            >
              Contanos qué te está frenando
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              Si te pasa alguna de estas cosas,{' '}
              <span className="text-emerald-400">seguí leyendo.</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Tenés procesos que funcionan — pero funcionan porque vos estás encima.{' '}
                <span className="text-white font-medium">El día que no estás, algo se rompe.</span>
              </p>
              <p>
                Hay tareas que se hacen a mano porque siempre fue así y nunca hubo tiempo para ordenarlas. Tareas que dependen de que alguien se acuerde, de que alguien quiera, de que alguien esté.
              </p>
              <p>
                Ya probaste con algún sistema. Uno genérico que prometía resolver todo y terminó siendo una herramienta que tu equipo usa a medias — o directamente abandonó.
              </p>
              <p>
                O contrataste a alguien que te desarrolló algo, funcionó un tiempo, y después no había quien lo mantuviera ni quien entendiera qué había hecho.
              </p>
              <p>
                Y la tecnología siempre te pareció cara, opaca y lejana. Pagás, no entendés bien qué recibís, y cuando algo falla no sabés a quién llamar ni qué preguntar.
              </p>
              <p className="text-white font-medium text-xl">
                Mientras tanto tu negocio sigue creciendo sobre una base frágil. Y en algún punto de ese crecimiento, algo va a colapsar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tres pasos. Sin vueltas.
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Entendemos tu negocio",
                desc: "No arrancamos con tecnología. Arrancamos con preguntas. Cómo trabajás, dónde perdés tiempo, dónde está el riesgo, qué depende de quién. Recién cuando entendemos eso, sabemos qué construir.",
                icon: <Settings className="w-8 h-8 text-emerald-500" />
              },
              {
                step: "02",
                title: "Construimos lo que necesitás",
                desc: "Nada genérico. Nada de más. Un sistema hecho para tu operación — que tu equipo pueda usar sin capacitaciones de una semana y que resuelva exactamente el problema que te trajo acá.",
                icon: <LayoutTemplate className="w-8 h-8 text-emerald-500" />
              },
              {
                step: "03",
                title: "Nos quedamos",
                desc: "No entregamos y desaparecemos. El sistema queda en nuestras manos. Lo monitoreamos, lo mantenemos y lo hacemos crecer con tu negocio. Y cada mes sabés exactamente qué hicimos y por qué.",
                icon: <Layers className="w-8 h-8 text-emerald-500" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-all relative h-full flex flex-col"
              >
                <div className="absolute top-6 right-6 text-5xl font-mono font-bold text-white/5 group-hover:text-emerald-500/10 transition-colors select-none">
                  {item.step}
                </div>
                <div className="mb-6 mt-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Dos momentos. Una sola relación.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proyecto a medida */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-2xl bg-bg-dark border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-emerald-500/10 rounded-xl inline-block w-fit">
                <Wrench className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proyecto a medida</h3>
              <p className="text-emerald-400 font-medium mb-6">Construimos lo que tu negocio necesita.</p>
              <p className="text-slate-400 leading-relaxed">
                Cada proyecto empieza por mapear tu operación — no por proponer tecnología. Entendemos dónde están los procesos que no escalan, dónde está la dependencia crítica y dónde está el riesgo real. El resultado es un sistema que tu equipo usa, que resuelve lo que te trajo acá, y que no depende de una sola persona para funcionar.
              </p>
            </motion.div>

            {/* Retainer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-bg-dark border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-emerald-500/10 rounded-xl inline-block w-fit">
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Retainer — Operaciones continuas</h3>
              <p className="text-emerald-400 font-medium mb-6">Tu equipo de tecnología, sin armarlo.</p>
              <p className="text-slate-400 leading-relaxed">
                Una vez construido el sistema, Brelio se queda. Monitoreamos, prevenimos y resolvemos. La mayoría de los problemas los evitamos antes de que los notes. Y cada mes recibís un reporte claro de qué hicimos, qué protegimos y qué impacto tuvo en tu operación. Sin tecnicismos, sin cajas negras.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            ¿Reconociste tu negocio en algo de lo que leíste?
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Entonces tiene sentido que hablemos. Nos contás qué te está frenando y te decimos con honestidad si podemos ayudarte — y cómo. La primera conversación es gratis y sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 transform hover:-translate-y-1 group"
          >
            Escribinos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
