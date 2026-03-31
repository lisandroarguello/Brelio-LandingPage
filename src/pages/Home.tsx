import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Code, Layers, LayoutTemplate, XCircle, Check, Terminal, Zap, BarChart3, Settings, Truck } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[96px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm text-xs md:text-sm font-mono text-emerald-400 tracking-wider uppercase"
          >
            Software a medida + Automatización + Criterio de Producto
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Ordenamos tu operación y la convertimos en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              software que realmente funciona.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Para empresas que ya crecieron y necesitan salir del Excel, WhatsApp y los procesos manuales.{' '}
            <span className="text-white font-medium">Menos caos. Más control.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contacto"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
            >
              Agendar diagnóstico express
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/soluciones"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium text-lg transition-all flex items-center justify-center"
            >
              Ver cómo trabajamos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem / Contrast Section */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Cuando la operación crece, <br />
              <span className="text-red-400">improvisar deja de ser opción</span>.
            </h2>
            <div className="space-y-8 text-lg text-slate-400 leading-relaxed">
              <p>
                Muchas empresas no tienen un problema de ganas de crecer.
                <strong className="text-white block mt-2 text-xl">Tienen un problema de estructura.</strong>
              </p>
              <p>
                Procesos en Excel, WhatsApp y personas clave. Datos duplicados. Sin trazabilidad. Cuando crece el volumen, crecen los desvíos y los costos.
              </p>
              <div className="p-6 bg-emerald-500/5 border-l-4 border-emerald-500 rounded-r-xl text-emerald-400 text-lg font-medium">
                Necesitás un sistema pensado para cómo funciona tu negocio.
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid gap-6">
              {/* Traditional Failures - Muted visuals for "Problem" */}
              <div className="p-8 rounded-2xl bg-bg-dark/50 border border-red-500/10 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500/30" />
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <XCircle className="text-red-500" />
                  Cómo suele fallar el desarrollo tradicional
                </h3>
                <ul className="space-y-4">
                  {[
                    "Empieza por pantallas antes de entender el proceso",
                    "Agrega complejidad antes de validar lo esencial",
                    "Construye funcionalidades sin criterio de prioridad",
                    "Entrega software que depende demasiado de las personas",
                    "Tarda meses en mostrar valor real"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="text-red-500/70 mt-1 font-bold">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brelio Approach - Active visuals for "Solution" */}
              <div className="p-8 rounded-2xl bg-bg-dark border border-emerald-500/30 relative overflow-hidden shadow-2xl shadow-emerald-500/5 transform md:scale-105 z-10">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="text-emerald-500" />
                  Cómo trabajamos en Brelio
                </h3>
                <ul className="space-y-4">
                  {[
                    "Entendemos primero el proceso y el cuello de botella",
                    "Definimos qué construir y qué no construir",
                    "Recortamos un MVP con lógica de negocio",
                    "Construimos por etapas, con entregables concretos",
                    "Automatizamos donde realmente genera impacto"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-200 text-sm font-medium">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5 text-center font-mono text-emerald-400 text-sm tracking-wide">
                  NO ARRANCAMOS POR CÓDIGO. ARRANCAMOS POR CLARIDAD.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              No hacemos software por hacer. <br />
              <span className="text-slate-500">Diseñamos soluciones para destrabar la operación.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Para equipos que necesitan convertir un proceso manual en una solución concreta y escalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Sistemas internos de gestión",
                desc: "Para ordenar operaciones caóticas.",
                icon: <LayoutTemplate className="w-8 h-8 text-blue-400" />
              },
              {
                title: "Automatización de procesos",
                desc: "Repetitivos y manuales.",
                icon: <Zap className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Dashboards y métricas",
                desc: "Para tener visibilidad real.",
                icon: <BarChart3 className="w-8 h-8 text-purple-400" />
              },
              {
                title: "Integraciones API",
                desc: "Conectamos tus herramientas actuales.",
                icon: <Terminal className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Sistemas Logísticos/Comerciales",
                desc: "Soluciones operativas a medida.",
                icon: <Truck className="w-8 h-8 text-orange-400" />
              },
              {
                title: "MVPs y Productos Digitales",
                desc: "Para validar y crecer con criterio.",
                icon: <Code className="w-8 h-8 text-pink-400" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-300">
              No se trata de tener una app. <span className="text-emerald-400 font-bold block mt-2">Se trata de resolver el problema real con un sistema que funcione.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Un proceso claro</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
              Entender, recortar y construir. <span className="text-white font-medium">Simple.</span>
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                step: "01",
                title: "Diagnóstico y criterio",
                desc: "Mapeamos tu operación, detectamos cuellos de botella y definimos dónde se pierde tiempo o control.",
                icon: <Settings className="w-8 h-8 text-emerald-500" />
              },
              {
                step: "02",
                title: "Definición del sistema",
                desc: "Traducimos el problema en estructura: alcance, MVP y prioridades concretas.",
                icon: <LayoutTemplate className="w-8 h-8 text-emerald-500" />
              },
              {
                step: "03",
                title: "Implementación y evolución",
                desc: "Desarrollamos, automatizamos lo repetitivo y mejoramos por iteraciones con foco en impacto.",
                icon: <Layers className="w-8 h-8 text-emerald-500" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-bg-dark border border-white/5 hover:border-emerald-500/50 transition-all relative h-full flex flex-col"
              >
                <div className="absolute top-6 right-6 text-5xl font-mono font-bold text-white/5 group-hover:text-emerald-500/10 transition-colors select-none">
                  {item.step}
                </div>
                <div className="mb-6 mt-2">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center text-slate-500 font-mono text-sm uppercase tracking-widest">
            Sin roadmap eterno. Sin complejidad innecesaria.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Lo que cambia cuando el sistema está bien pensado
            </h2>
            <ul className="space-y-6">
              {[
                "Menos tareas manuales y menos errores humanos",
                "Más orden operativo y mejor trazabilidad",
                "Decisiones con datos más confiables",
                "Menor dependencia de personas clave",
                "Más velocidad para operar y escalar",
                "Tecnología alineada al negocio, no al revés"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 border-l-4 border-emerald-500 bg-white/5 rounded-r-xl">
              <p className="text-xl text-white italic font-medium">
                "El software correcto no agrega trabajo: libera al equipo para enfocarse en lo que sí mueve el negocio."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
             <div className="relative bg-bg-card border border-white/10 rounded-3xl p-10 aspect-square flex flex-col justify-center shadow-2xl">
                <div className="space-y-6 opacity-80">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="py-8 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative">
                       <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full transform -rotate-45" />
                       <BarChart3 className="w-12 h-12 text-emerald-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trabajamos mejor con empresas que ya sienten el costo del desorden
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-bg-dark p-10 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <CheckCircle className="text-emerald-500" />
                Brelio es para vos si:
              </h3>
              <ul className="space-y-5">
                {[
                  "Tu operación depende demasiado de Excel, WhatsApp o procesos manuales",
                  "Sentís que el equipo resuelve “como puede”, pero sin sistema",
                  "Querés digitalizar un proceso sin empezar por una solución sobredimensionada",
                  "Necesitás claridad para decidir qué construir",
                  "Querés una solución real, no una consultoría que termina en slides"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 text-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center p-4">
              <div className="mb-8">
                <h4 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">PERFIL IDEAL</h4>
                <p className="text-2xl md:text-3xl text-white font-bold leading-tight">
                  PyMEs, empresas medianas, equipos operativos y founders no técnicos.
                </p>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                Modelos validados que necesitan estructura tecnológica para escalar sin romper lo que funciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differential */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Estrategia, criterio de producto y ejecución en un mismo proceso
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                O consultoras que piensan pero no construyen, o desarrollo sin criterio de negocio. <span className="text-white font-bold text-xl">En Brelio, unificamos ambas partes.</span>
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Pensamos como negocio", desc: "No solo como desarrollo." },
                  { title: "Recortamos alcance con criterio", desc: "Para evitar sobrecostos." },
                  { title: "Construimos por iteraciones", desc: "Para mostrar valor antes." },
                  { title: "Automatizamos donde suma", desc: "No por moda." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 font-mono text-emerald-500 font-bold text-lg">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900/50 p-2 rounded-3xl border border-emerald-500/20">
              <div className="bg-bg-dark rounded-[20px] p-10 h-full flex flex-col justify-center text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                 <h3 className="text-2xl font-bold mb-6 relative z-10">El Resultado</h3>
                 <p className="text-slate-300 text-xl mb-10 relative z-10 font-medium leading-relaxed">
                   "Primero ordenamos el sistema. Después lo construimos."
                 </p>
                 <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="text-emerald-400 font-bold mb-2 text-lg">Diagnóstico</div>
                      <div className="text-sm text-slate-500">Con foco en negocio</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="text-emerald-400 font-bold mb-2 text-lg">MVP</div>
                      <div className="text-sm text-slate-500">Recortado con criterio</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="text-emerald-400 font-bold mb-2 text-lg">Automatización</div>
                      <div className="text-sm text-slate-500">Aplicable y real</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="text-emerald-400 font-bold mb-2 text-lg">Desarrollo</div>
                      <div className="text-sm text-slate-500">Orientado a uso</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-bg-card border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Si hoy tu operación depende de tareas manuales, <br />
            <span className="text-emerald-400">ya hay algo para ordenar.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Entendemos el problema, definimos el sistema y construimos la solución.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <Link
              to="/contacto"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-slate-900 rounded-xl font-bold text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 transform hover:-translate-y-1"
            >
              Agendar diagnóstico express
            </Link>
            <Link
              to="/contacto"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-xl font-bold text-xl hover:bg-white/10 border border-white/10 transition-colors"
            >
              Contanos tu proceso
            </Link>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Sin compromiso. Una conversación para entender tu contexto. O escribinos a{' '}
            <a href={`mailto:${company.email}`} className="text-emerald-400 hover:underline">
              {company.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
