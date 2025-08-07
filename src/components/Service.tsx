import React from 'react';
import { 
  Code, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  Database,
  Palette,
  Search,
  BarChart3,
  MessageSquare
} from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
  included: boolean;
}

interface ServicePlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: ServiceFeature[];
  popular?: boolean;
  cta: string;
}

interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  benefits: string[];
  process: string[];
  plans: ServicePlan[];
  portfolio: {
    title: string;
    description: string;
    result: string;
  }[];
}

const services: ServiceData[] = [
  {
    id: 'desarrollo-web',
    icon: <Code className="w-8 h-8" />,
    title: 'Desarrollo Web',
    subtitle: 'Aplicaciones modernas y escalables',
    description: 'Creamos aplicaciones web de alto rendimiento utilizando las últimas tecnologías como React, Next.js y Node.js.',
    fullDescription: 'Desarrollamos aplicaciones web modernas, escalables y optimizadas que impulsan tu negocio. Utilizamos tecnologías de vanguardia y mejores prácticas para garantizar un producto final excepcional.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    benefits: [
      'Rendimiento superior y carga rápida',
      'Diseño responsivo para todos los dispositivos',
      'SEO optimizado desde el desarrollo',
      'Código limpio y mantenible',
      'Seguridad y escalabilidad garantizada'
    ],
    process: [
      'Análisis de requerimientos y planificación',
      'Diseño de arquitectura y UI/UX',
      'Desarrollo frontend y backend',
      'Testing y optimización',
      'Deploy y configuración',
      'Soporte y mantenimiento'
    ],
    plans: [
      {
        name: 'Básico',
        price: '$800',
        duration: '2-3 semanas',
        description: 'Ideal para landing pages y sitios corporativos',
        features: [
          { title: 'Hasta 5 páginas', description: 'Diseño responsivo completo', included: true },
          { title: 'Formulario de contacto', description: 'Integración con email', included: true },
          { title: 'SEO básico', description: 'Optimización on-page', included: true },
          { title: 'Panel de administración', description: 'Gestión de contenido', included: false },
          { title: 'E-commerce', description: 'Tienda online completa', included: false }
        ],
        cta: 'Comenzar Proyecto'
      },
      {
        name: 'Profesional',
        price: '$1,500',
        duration: '4-6 semanas',
        description: 'Para aplicaciones web complejas y e-commerce',
        features: [
          { title: 'Páginas ilimitadas', description: 'Sin restricciones de contenido', included: true },
          { title: 'Panel de administración', description: 'CMS personalizado', included: true },
          { title: 'Base de datos', description: 'Gestión de datos avanzada', included: true },
          { title: 'E-commerce básico', description: 'Hasta 100 productos', included: true },
          { title: 'Analytics avanzado', description: 'Reportes detallados', included: false }
        ],
        popular: true,
        cta: 'Más Popular'
      },
      {
        name: 'Enterprise',
        price: '$3,000+',
        duration: '6-12 semanas',
        description: 'Soluciones empresariales a medida',
        features: [
          { title: 'Desarrollo personalizado', description: 'Funcionalidades a medida', included: true },
          { title: 'E-commerce avanzado', description: 'Sin límite de productos', included: true },
          { title: 'Integraciones API', description: 'Sistemas externos', included: true },
          { title: 'Analytics premium', description: 'Dashboard ejecutivo', included: true },
          { title: 'Soporte prioritario', description: '24/7 dedicado', included: true }
        ],
        cta: 'Consultar'
      }
    ],
    portfolio: [
      {
        title: 'E-commerce Fashion',
        description: 'Tienda online con carrito avanzado y gestión de inventario',
        result: '+250% en ventas online'
      },
      {
        title: 'Sistema Universitario',
        description: 'Plataforma integral de gestión académica',
        result: '500+ usuarios activos'
      }
    ]
  },
  {
    id: 'optimizacion',
    icon: <Zap className="w-8 h-8" />,
    title: 'Optimización Web',
    subtitle: 'Velocidad y rendimiento superior',
    description: 'Mejoramos la velocidad y rendimiento de sitios web existentes, optimizando Core Web Vitals y experiencia de usuario.',
    fullDescription: 'Transformamos sitios web lentos en experiencias ultra-rápidas. Nuestro enfoque técnico garantiza mejoras significativas en velocidad, SEO y conversiones.',
    technologies: ['Performance Audit', 'Lighthouse', 'PageSpeed Insights', 'GTMetrix', 'Webpack', 'Vite', 'CDN', 'Image Optimization'],
    benefits: [
      'Reducción del tiempo de carga hasta 70%',
      'Mejora en ranking de Google',
      'Aumento de conversiones y ventas',
      'Mejor experiencia de usuario',
      'Reducción de bounce rate'
    ],
    process: [
      'Auditoría completa de rendimiento',
      'Identificación de bottlenecks',
      'Optimización de código y assets',
      'Implementación de CDN y caching',
      'Testing y validación',
      'Monitoreo continuo'
    ],
    plans: [
      {
        name: 'Auditoría',
        price: '$200',
        duration: '3-5 días',
        description: 'Análisis completo de rendimiento',
        features: [
          { title: 'Reporte detallado', description: 'Análisis técnico completo', included: true },
          { title: 'Plan de optimización', description: 'Roadmap de mejoras', included: true },
          { title: 'Recomendaciones', description: 'Priorización de tareas', included: true },
          { title: 'Implementación', description: 'Ejecución de mejoras', included: false },
          { title: 'Soporte continuo', description: 'Mantenimiento', included: false }
        ],
        cta: 'Solicitar Auditoría'
      },
      {
        name: 'Optimización',
        price: '$500',
        duration: '1-2 semanas',
        description: 'Implementación completa de mejoras',
        features: [
          { title: 'Auditoría incluida', description: 'Análisis sin costo adicional', included: true },
          { title: 'Optimización completa', description: 'Todas las mejoras técnicas', included: true },
          { title: 'Compresión de imágenes', description: 'Reducción de peso 80%', included: true },
          { title: 'Setup de CDN', description: 'Distribución global', included: true },
          { title: 'Garantía de resultados', description: '30 días de garantía', included: true }
        ],
        popular: true,
        cta: 'Optimizar Ahora'
      },
      {
        name: 'Premium',
        price: '$800',
        duration: '2-3 semanas',
        description: 'Optimización avanzada + monitoreo',
        features: [
          { title: 'Todo lo anterior', description: 'Optimización completa', included: true },
          { title: 'Monitoreo 24/7', description: 'Alertas automáticas', included: true },
          { title: 'Reportes mensuales', description: 'Métricas detalladas', included: true },
          { title: 'Soporte prioritario', description: 'Respuesta inmediata', included: true },
          { title: 'Re-optimizaciones', description: 'Ajustes continuos', included: true }
        ],
        cta: 'Plan Premium'
      }
    ],
    portfolio: [
      {
        title: 'E-commerce Retail',
        description: 'Optimización completa de tienda online',
        result: '65% mejora en velocidad'
      },
      {
        title: 'Blog Corporativo',
        description: 'Optimización de CMS y contenido',
        result: '+40% tráfico orgánico'
      }
    ]
  },
  {
    id: 'consultoria',
    icon: <Users className="w-8 h-8" />,
    title: 'Consultoría Técnica',
    subtitle: 'Asesoramiento especializado',
    description: 'Brindamos consultoría técnica para arquitectura de software, selección de tecnologías y optimización de procesos de desarrollo.',
    fullDescription: 'Ofrecemos asesoramiento estratégico para tomar las mejores decisiones técnicas en tu proyecto. Desde arquitectura hasta implementación, te guiamos en cada paso.',
    technologies: ['Architecture Design', 'Tech Stack Selection', 'Code Review', 'DevOps', 'CI/CD', 'Security Audit', 'Scalability Planning', 'Team Training'],
    benefits: [
      'Decisiones técnicas informadas',
      'Reducción de riesgos en desarrollo',
      'Optimización de costos y tiempos',
      'Mejores prácticas implementadas',
      'Team building y capacitación'
    ],
    process: [
      'Evaluación del proyecto actual',
      'Análisis de requerimientos técnicos',
      'Recomendaciones estratégicas',
      'Plan de implementación',
      'Acompañamiento en ejecución',
      'Evaluación y feedback continuo'
    ],
    plans: [
      {
        name: 'Consulta',
        price: '$100',
        duration: '1 sesión',
        description: 'Sesión única de consultoría',
        features: [
          { title: 'Videollamada 1h', description: 'Sesión personalizada', included: true },
          { title: 'Diagnóstico inicial', description: 'Evaluación del proyecto', included: true },
          { title: 'Recomendaciones', description: 'Plan de acción básico', included: true },
          { title: 'Seguimiento', description: 'Soporte post-consulta', included: false },
          { title: 'Documentación', description: 'Reporte detallado', included: false }
        ],
        cta: 'Agendar Consulta'
      },
      {
        name: 'Mensual',
        price: '$300',
        duration: '1 mes',
        description: 'Acompañamiento mensual continuo',
        features: [
          { title: '4 sesiones incluidas', description: '1 sesión por semana', included: true },
          { title: 'Code review', description: 'Revisión de código', included: true },
          { title: 'Documentación', description: 'Reportes semanales', included: true },
          { title: 'Chat prioritario', description: 'Soporte vía WhatsApp', included: true },
          { title: 'Recursos exclusivos', description: 'Templates y guías', included: false }
        ],
        popular: true,
        cta: 'Plan Mensual'
      },
      {
        name: 'Proyecto',
        price: '$800+',
        duration: 'Personalizado',
        description: 'Consultoría integral para proyectos',
        features: [
          { title: 'Sesiones ilimitadas', description: 'Disponibilidad completa', included: true },
          { title: 'Arquitectura completa', description: 'Diseño del sistema', included: true },
          { title: 'Tech stack selection', description: 'Selección de tecnologías', included: true },
          { title: 'Team training', description: 'Capacitación del equipo', included: true },
          { title: 'Implementación guiada', description: 'Acompañamiento total', included: true }
        ],
        cta: 'Consultar Proyecto'
      }
    ],
    portfolio: [
      {
        title: 'Startup Fintech',
        description: 'Arquitectura escalable para aplicación financiera',
        result: 'Soporte a 10K+ usuarios'
      },
      {
        title: 'Migración Legacy',
        description: 'Modernización de sistema empresarial',
        result: '50% reducción en costos'
      }
    ]
  }
];

interface ServiceCardProps {
  service: ServiceData;
  variant?: 'card' | 'detailed';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'card' }) => {
  if (variant === 'detailed') {
    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-custom-green/20">
        {/* Header */}
        <div className="bg-gradient-to-br from-custom-teal to-custom-blue p-8 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-20">
            <div className="w-20 h-20 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              {service.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              <p className="text-custom-lime text-lg">{service.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-custom-blue/80 text-lg leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-custom-teal" />
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-custom-green text-custom-blue rounded-lg text-sm font-medium border border-custom-green/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-custom-teal" />
              Beneficios
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-lime rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-custom-blue/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 mr-2 text-custom-teal" />
              Proceso
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 bg-custom-green/30 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-custom-teal text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-custom-blue font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Examples */}
          <div>
            <h3 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-custom-teal" />
              Casos de Éxito
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {service.portfolio.map((project, index) => (
                <div key={index} className="bg-white border border-custom-green/30 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-custom-blue mb-2">{project.title}</h4>
                  <p className="text-custom-blue/70 text-sm mb-3">{project.description}</p>
                  <div className="inline-flex items-center bg-custom-lime/20 text-custom-teal px-3 py-1 rounded-full text-sm font-semibold">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {project.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card variant (default)
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-custom-green/30 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-custom-teal to-custom-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-custom-blue mb-2">{service.title}</h3>
        <p className="text-custom-teal font-medium mb-4">{service.subtitle}</p>
        <p className="text-custom-blue/80 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {service.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-custom-green text-custom-blue text-xs rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="px-2 py-1 bg-custom-green text-custom-blue text-xs rounded-lg font-medium">
              +{service.technologies.length - 4}
            </span>
          )}
        </div>
        
        <button className="w-full bg-gradient-to-r from-custom-teal to-custom-blue text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group">
          Ver Detalles
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Pricing Plans Component
export const ServicePricing: React.FC<{ plans: ServicePlan[] }> = ({ plans }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
            plan.popular 
              ? 'border-custom-teal ring-2 ring-custom-teal/20' 
              : 'border-custom-green/30'
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-custom-teal to-custom-blue text-white text-center py-2 text-sm font-semibold">
              🔥 Más Popular
            </div>
          )}
          
          <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-custom-blue mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-custom-teal mb-1">{plan.price}</div>
              <div className="text-custom-blue/60 text-sm mb-4">{plan.duration}</div>
              <p className="text-custom-blue/80">{plan.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    feature.included 
                      ? 'bg-custom-lime text-custom-blue' 
                      : 'bg-custom-green/30 text-custom-blue/40'
                  }`}>
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${
                      feature.included ? 'text-custom-blue' : 'text-custom-blue/40 line-through'
                    }`}>
                      {feature.title}
                    </div>
                    <div className={`text-sm ${
                      feature.included ? 'text-custom-blue/70' : 'text-custom-blue/30'
                    }`}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${
              plan.popular
                ? 'bg-gradient-to-r from-custom-teal to-custom-blue text-white shadow-lg hover:shadow-xl'
                : 'border-2 border-custom-teal text-custom-teal hover:bg-custom-teal hover:text-white'
            }`}>
              {plan.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Service Comparison Component
export const ServiceComparison: React.FC = () => {
  const features = [
    'Desarrollo Frontend',
    'Desarrollo Backend', 
    'Base de Datos',
    'Diseño UI/UX',
    'SEO Optimizado',
    'Hosting Setup',
    'SSL Certificate',
    'Analytics',
    'Soporte 24/7',
    'Mantenimiento'
  ];

  const serviceComparison = [
    { name: 'Desarrollo Web', features: [true, true, true, true, true, true, true, true, false, false] },
    { name: 'Optimización', features: [false, false, false, true, true, false, false, true, true, true] },
    { name: 'Consultoría', features: [false, false, false, false, false, false, false, false, true, false] }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-custom-green/20">
      <div className="bg-gradient-to-r from-custom-teal to-custom-blue p-6 text-white">
        <h3 className="text-2xl font-bold text-center">Comparación de Servicios</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-custom-green/20">
            <tr>
              <th className="text-left p-4 font-semibold text-custom-blue">Funcionalidad</th>
              {serviceComparison.map((service, index) => (
                <th key={index} className="text-center p-4 font-semibold text-custom-blue">
                  {service.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="border-b border-custom-green/20 hover:bg-custom-green/10">
                <td className="p-4 font-medium text-custom-blue">{feature}</td>
                {serviceComparison.map((service, serviceIndex) => (
                  <td key={serviceIndex} className="text-center p-4">
                    {service.features[featureIndex] ? (
                      <CheckCircle className="w-5 h-5 text-custom-lime mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-custom-green/30 rounded-full mx-auto"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// FAQ Component
export const ServiceFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'El tiempo varía según la complejidad. Un sitio básico toma 2-3 semanas, mientras que aplicaciones complejas pueden tomar 2-3 meses. Te damos un timeline detallado después del análisis inicial.'
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer: 'Trabajamos con tecnologías modernas como React, Next.js, Node.js, TypeScript, y bases de datos como MongoDB y PostgreSQL. Seleccionamos la tecnología más adecuada para cada proyecto.'
    },
    {
      question: '¿Incluyen hosting y dominio?',
      answer: 'Ayudamos con la configuración pero el hosting y dominio se contratan por separado. Te recomendamos las mejores opciones según tu presupuesto y necesidades técnicas.'
    },
    {
      question: '¿Ofrecen soporte post-lanzamiento?',
      answer: 'Sí, ofrecemos diferentes planes de soporte que incluyen actualizaciones, backups, monitoreo y resolución de issues. El soporte básico está incluido los primeros 30 días.'
    },
    {
      question: '¿Pueden trabajar con mi equipo existente?',
      answer: 'Absolutamente. Tenemos experiencia colaborando con equipos internos, proporcionando desde consultoría hasta desarrollo completo, adaptándonos a tus procesos y metodologías.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-custom-green/20 overflow-hidden">
      <div className="bg-gradient-to-r from-custom-blue to-custom-teal p-6 text-white">
        <h3 className="text-2xl font-bold text-center">Preguntas Frecuentes</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-custom-green/30 rounded-xl overflow-hidden">
              <button
                className="w-full p-4 text-left bg-custom-green/10 hover:bg-custom-green/20 transition-colors flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-custom-blue">{faq.question}</span>
                <ArrowRight className={`w-5 h-5 text-custom-teal transition-transform ${
                  openIndex === index ? 'rotate-90' : ''
                }`} />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t border-custom-green/20">
                  <p className="text-custom-blue/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Service Component Export
export { services };
export default ServiceCard;