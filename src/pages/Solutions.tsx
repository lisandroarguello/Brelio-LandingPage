import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Package, Stethoscope, HardHat, ShoppingCart, Users, DollarSign, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/src/hooks/usePageMeta';
import { pageMeta } from '@/src/content/siteConfig';

const solutions = [
  {
    id: 1,
    title: "Plataforma de Automatización Comercial con WhatsApp",
    category: "CRM & Ventas",
    description: "Sistema integral para captación, seguimiento y cierre automático de leads.",
    problem: "Leads dispersos en WhatsApp, Instagram y Excel. Seguimiento manual y pérdida de oportunidades por falta de respuesta rápida.",
    solution: "CRM con bot conversacional integrado a WhatsApp Business API, pipeline visual de ventas y automatización de seguimientos.",
    impact: ["+40% aumento en tasa de respuesta", "Reducción de 60% en tareas manuales", "Seguimiento 100% trazable"],
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    image: "https://picsum.photos/seed/whatsappcrm/800/600"
  },
  {
    id: 2,
    title: "Plataforma de Gestión de Inventario Inteligente",
    category: "Logística & Stock",
    description: "Control de stock en tiempo real con alertas predictivas.",
    problem: "Quiebres de stock y sobrestock por falta de visibilidad. Dependencia de Excel sin proyecciones.",
    solution: "Dashboard centralizado con alertas inteligentes, predicción de reposición basada en ventas históricas y rotación.",
    impact: ["-35% quiebres de stock", "Reducción de capital inmovilizado", "Decisiones basadas en datos reales"],
    icon: <Package className="w-6 h-6 text-blue-400" />,
    image: "https://picsum.photos/seed/inventory/800/600"
  },
  {
    id: 3,
    title: "Plataforma de Gestión de Clínicas y Turnos",
    category: "Salud & Administración",
    description: "Sistema digital para administración médica y agenda automatizada.",
    problem: "Turnos gestionados por teléfono, cancelaciones sin control y caos administrativo.",
    solution: "Sistema de agenda online con recordatorios automáticos vía WhatsApp y panel administrativo central.",
    impact: ["-50% ausentismo", "Eliminación de doble reserva", "Gestión 100% digital"],
    icon: <Stethoscope className="w-6 h-6 text-teal-400" />,
    image: "https://picsum.photos/seed/clinic/800/600"
  },
  {
    id: 4,
    title: "Plataforma para Constructoras y Estudios Técnicos",
    category: "Construcción & Obras",
    description: "Control integral de obra, materiales y avances.",
    problem: "Seguimiento manual de materiales y tareas, falta de trazabilidad y sobrecostos inesperados.",
    solution: "App de cuantificación automática, registro de avances, novedades y control de stock por obra.",
    impact: ["-25% desperdicio de material", "Seguimiento en tiempo real", "Mejora en planificación de compras"],
    icon: <HardHat className="w-6 h-6 text-orange-400" />,
    image: "https://picsum.photos/seed/construction/800/600"
  },
  {
    id: 5,
    title: "Plataforma de Ecommerce B2B Personalizado",
    category: "E-commerce B2B",
    description: "Sistema de ventas online para distribuidores y mayoristas.",
    problem: "Pedidos por teléfono o WhatsApp sin control de stock ni precios personalizados.",
    solution: "Ecommerce con precios por cliente, integración a ERP y automatización de pedidos.",
    impact: ["+30% eficiencia operativa", "Eliminación de errores en pedidos", "Escalabilidad sin aumentar personal"],
    icon: <ShoppingCart className="w-6 h-6 text-indigo-400" />,
    image: "https://picsum.photos/seed/b2b/800/600"
  },
  {
    id: 6,
    title: "Plataforma de Gestión de Recursos Humanos",
    category: "RRHH & Gestión",
    description: "Sistema para control de asistencia, tareas y desempeño.",
    problem: "Falta de visibilidad sobre productividad y asistencia. Procesos manuales y reportes tardíos.",
    solution: "Dashboard de control horario, seguimiento de tareas y métricas de rendimiento en tiempo real.",
    impact: ["+20% mejora en productividad", "Reducción de ausentismo", "Reportes automáticos mensuales"],
    icon: <Users className="w-6 h-6 text-pink-400" />,
    image: "https://picsum.photos/seed/hr/800/600"
  },
  {
    id: 7,
    title: "Plataforma de Gestión Financiera para PYMEs",
    category: "Finanzas & Control",
    description: "Sistema simplificado para control de ingresos, gastos y flujo de caja.",
    problem: "Finanzas mezcladas en Excel, sin proyección clara de flujo de caja.",
    solution: "Dashboard financiero con categorización automática y proyección mensual.",
    impact: ["Visibilidad inmediata de rentabilidad", "Proyección de caja a 90 días", "Mejora en decisiones estratégicas"],
    icon: <DollarSign className="w-6 h-6 text-green-400" />,
    image: "https://picsum.photos/seed/finance/800/600"
  },
  {
    id: 8,
    title: "Plataforma de Gestión de Concesionarias",
    category: "Automotriz & Ventas",
    description: "Sistema de cotización, simulación y seguimiento de ventas automotrices.",
    problem: "Cotizaciones manuales y simulaciones financieras externas. Falta de seguimiento estructurado de prospectos.",
    solution: "Simulador integrado con APIs financieras, CRM comercial y automatización de seguimiento.",
    impact: ["+35% conversión de leads", "Reducción en tiempos de cotización", "Centralización total del proceso comercial"],
    icon: <Car className="w-6 h-6 text-red-400" />,
    image: "https://picsum.photos/seed/automotive/800/600"
  }
];

const Solutions = () => {
  usePageMeta(pageMeta.solutions.title, pageMeta.solutions.description);
  return (
    <div className="min-h-screen pt-20 pb-10">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transforman</span> Negocios
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Explora cómo nuestras implementaciones resuelven problemas reales en diversas industrias. 
              Desde la automatización de procesos hasta el desarrollo de productos digitales escalables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-emerald-400">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                      <h4 className="text-red-400 text-sm font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        El Problema
                      </h4>
                      <p className="text-slate-400 text-sm">{item.problem}</p>
                    </div>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                      <h4 className="text-emerald-400 text-sm font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        La Solución
                      </h4>
                      <p className="text-slate-400 text-sm">{item.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-white text-sm font-semibold mb-4">Impacto Clave:</h4>
                    <ul className="space-y-2">
                      {item.impact.map((impact, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
              ¿Tu industria no está en la lista?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
              Hemos trabajado con diversos sectores adaptando nuestra tecnología a sus necesidades específicas. 
              Agenda una llamada para explorar cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 group"
              >
                Hablar con un experto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-all"
              >
                Ver nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
