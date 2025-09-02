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
  MessageSquare,
  Award,
  Target
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
  savings?: string;
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
    industry?: string;
    year?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

const services: ServiceData[] = [
  {
    id: 'desarrollo-web',
    icon: <Code className="w-8 h-8" />,
    title: 'Desarrollo Web',
    subtitle: 'Aplicaciones modernas y escalables',
    description: 'Creamos aplicaciones web de alto rendimiento utilizando las últimas tecnologías como React, Next.js y Node.js.',
    fullDescription: 'Desarrollamos aplicaciones web modernas, escalables y optimizadas que impulsan tu negocio. Utilizamos tecnologías de vanguardia y mejores prácticas para garantizar un producto final excepcional que destaque en el mercado digital.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
    benefits: [
      'Rendimiento superior y carga rápida (menos de 3 segundos)',
      'Diseño responsivo para todos los dispositivos',
      'SEO optimizado desde el desarrollo',
      'Código limpio y mantenible',
      'Seguridad y escalabilidad garantizada',
      'Integración con APIs y servicios externos',
      'Panel de administración intuitivo',
      'Soporte técnico incluido'
    ],
    process: [
      'Análisis de requerimientos y planificación estratégica',
      'Diseño de arquitectura y prototipado UI/UX',
      'Desarrollo frontend con React/Next.js',
      'Desarrollo backend y base de datos',
      'Testing exhaustivo y optimización',
      'Deploy, configuración y lanzamiento'
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
          { title: 'Hosting setup', description: 'Configuración inicial', included: true },
          { title: 'SSL Certificate', description: 'Seguridad incluida', included: true },
          { title: 'Panel de administración', description: 'Gestión de contenido', included: false },
          { title: 'E-commerce', description: 'Tienda online completa', included: false },
          { title: 'Integraciones API', description: 'Servicios externos', included: false }
        ],
        cta: 'Comenzar Proyecto'
      },
      {
        name: 'Profesional',
        price: '$1,500',
        duration: '4-6 semanas',
        description: 'Para aplicaciones web complejas y e-commerce',
        savings: 'Ahorra $300',
        features: [
          { title: 'Páginas ilimitadas', description: 'Sin restricciones de contenido', included: true },
          { title: 'Panel de administración', description: 'CMS personalizado', included: true },
          { title: 'Base de datos', description: 'Gestión de datos avanzada', included: true },
          { title: 'E-commerce básico', description: 'Hasta 100 productos', included: true },
          { title: 'Integraciones API', description: 'Servicios de pago y envío', included: true },
          { title: 'SEO avanzado', description: 'Schema markup incluido', included: true },
          { title: 'Analytics setup', description: 'Google Analytics 4', included: true },
          { title: 'Capacitación', description: '2 horas de training', included: true }
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
          { title: 'Múltiples integraciones', description: 'CRM, ERP, APIs externas', included: true },
          { title: 'Analytics premium', description: 'Dashboard ejecutivo', included: true },
          { title: 'Soporte prioritario', description: '24/7 dedicado', included: true },
          { title: 'Multi-idioma', description: 'Internacionalización', included: true },
          { title: 'Performance premium', description: 'CDN global incluido', included: true },
          { title: 'Consultoría estratégica', description: 'Asesoramiento continuo', included: true }
        ],
        cta: 'Consultar'
      }
    ],
    portfolio: [
      {
        title: 'E-commerce Fashion',
        description: 'Tienda online con carrito avanzado y gestión de inventario en tiempo real',
        result: '+250% en ventas online',
        industry: 'Retail',
        year: '2024'
      },
      {
        title: 'Sistema Universitario',
        description: 'Plataforma integral de gestión académica con portal estudiantil',
        result: '500+ usuarios activos diarios',
        industry: 'Educación',
        year: '2023'
      },
      {
        title: 'Portal Inmobiliario',
        description: 'Plataforma de búsqueda y gestión de propiedades con mapas interactivos',
        result: '40% más consultas',
        industry: 'Inmobiliario',
        year: '2024'
      }
    ],
    faq: [
      {
        question: '¿Qué incluye el desarrollo web?',
        answer: 'Incluye diseño responsivo, desarrollo frontend y backend, base de datos, SEO básico, formularios de contacto, hosting setup y SSL certificate.'
      },
      {
        question: '¿Puedo hacer cambios durante el desarrollo?',
        answer: 'Sí, trabajamos con metodología ágil que permite ajustes durante el proceso. Cambios menores están incluidos, cambios mayores se evalúan por separado.'
      },
      {
        question: '¿Qué pasa después del lanzamiento?',
        answer: 'Ofrecemos 30 días de soporte gratuito post-lanzamiento. Después puedes contratar planes de mantenimiento mensual.'
      }
    ]
  },
  {
    id: 'optimizacion',
    icon: <Zap className="w-8 h-8" />,
    title: 'Optimización Web',
    subtitle: 'Velocidad y rendimiento superior',
    description: 'Mejoramos la velocidad y rendimiento de sitios web existentes, optimizando Core Web Vitals y experiencia de usuario.',
    fullDescription: 'Transformamos sitios web lentos en experiencias ultra-rápidas. Nuestro enfoque técnico garantiza mejoras significativas en velocidad, SEO y conversiones, con resultados medibles y duraderos.',
    technologies: ['Performance Audit', 'Lighthouse', 'PageSpeed Insights', 'GTMetrix', 'Webpack', 'Vite', 'CDN', 'Image Optimization'],
    benefits: [
      'Reducción del tiempo de carga hasta 70%',
      'Mejora en ranking de Google (SEO técnico)',
      'Aumento de conversiones y ventas hasta 40%',
      'Mejor experiencia de usuario',
      'Reducción de bounce rate significativa',
      'Optimización de Core Web Vitals',
      'Mejor rendimiento en móviles',
      'Reducción de costos de hosting'
    ],
    process: [
      'Auditoría completa de rendimiento y análisis técnico',
      'Identificación de bottlenecks y oportunidades',
      'Optimización de código, imágenes y assets',
      'Implementación de CDN y estrategias de caching',
      'Testing exhaustivo y validación de mejoras',
      'Monitoreo continuo y reportes de resultados'
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
          { title: 'Recomendaciones priorizadas', description: 'Quick wins identificados', included: true },
          { title: 'Core Web Vitals analysis', description: 'Métricas de Google', included: true },
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
        savings: 'Auditoría incluida',
        features: [
          { title: 'Auditoría incluida', description: 'Análisis sin costo adicional', included: true },
          { title: 'Optimización completa', description: 'Todas las mejoras técnicas', included: true },
          { title: 'Compresión de imágenes', description: 'Reducción de peso 80%', included: true },
          { title: 'Setup de CDN', description: 'Distribución global', included: true },
          { title: 'Caché optimizado', description: 'Estrategias avanzadas', included: true },
          { title: 'Code splitting', description: 'Carga progresiva', included: true },
          { title: 'Garantía de resultados', description: '30 días de garantía', included: true },
          { title: 'Reporte final', description: 'Antes vs después', included: true }
        ],
        popular: true,
        cta: 'Optimizar Ahora'
      },
      {
        name: 'Premium',
        price: '$800',
        duration: '2-3 semanas',
        description: 'Optimización avanzada + monitoreo continuo',
        features: [
          { title: 'Todo lo anterior', description: 'Optimización completa', included: true },
          { title: 'Monitoreo 24/7', description: 'Alertas automáticas', included: true },
          { title: 'Reportes mensuales', description: 'Métricas detalladas', included: true },
          { title: 'Soporte prioritario', description: 'Respuesta inmediata', included: true },
          { title: 'Re-optimizaciones', description: 'Ajustes continuos', included: true },
          { title: 'Advanced caching', description: 'Redis, Memcached', included: true },
          { title: 'Database optimization', description: 'Queries optimizadas', included: true },
          { title: 'Performance budget', description: 'Límites automáticos', included: true }
        ],
        cta: 'Plan Premium'
      }
    ],
    portfolio: [
      {
        title: 'E-commerce Retail',
        description: 'Optimización completa de tienda online con 10k+ productos',
        result: '65% mejora en velocidad de carga',
        industry: 'E-commerce',
        year: '2024'
      },
      {
        title: 'Blog Corporativo',
        description: 'Optimización de CMS y contenido multimedia pesado',
        result: '+40% tráfico orgánico SEO',
        industry: 'Media',
        year: '2023'
      },
      {
        title: 'SaaS Platform',
        description: 'Optimización de dashboard con datos en tiempo real',
        result: '300% mejora en métricas Core Web Vitals',
        industry: 'SaaS',
        year: '2024'
      }
    ],
    faq: [
      {
        question: '¿Qué incluye la optimización?',
        answer: 'Incluye optimización de código, imágenes, configuración de CDN, caché, compresión y todas las mejoras técnicas necesarias para mejorar la velocidad.'
      },
      {
        question: '¿Garantizan mejoras específicas?',
        answer: 'Sí, garantizamos mejoras medibles en PageSpeed Insights y Core Web Vitals. Si no se alcanzan los objetivos, devolvemos el dinero.'
      },
      {
        question: '¿Afecta el diseño del sitio?',
        answer: 'No, nos enfocamos en optimizaciones técnicas que no alteran el diseño visual ni la funcionalidad del sitio.'
      }
    ]
  },
  {
    id: 'consultoria',
    icon: <Users className="w-8 h-8" />,
    title: 'Consultoría Técnica',
    subtitle: 'Asesoramiento especializado',
    description: 'Brindamos consultoría técnica para arquitectura de software, selección de tecnologías y optimización de procesos de desarrollo.',
    fullDescription: 'Ofrecemos asesoramiento estratégico para tomar las mejores decisiones técnicas en tu proyecto. Desde arquitectura hasta implementación, te guiamos en cada paso con experiencia comprobada.',
    technologies: ['Architecture Design', 'Tech Stack Selection', 'Code Review', 'DevOps', 'CI/CD', 'Security Audit', 'Scalability Planning', 'Team Training'],
    benefits: [
      'Decisiones técnicas informadas y estratégicas',
      'Reducción de riesgos en desarrollo',
      'Optimización de costos y tiempos de desarrollo',
      'Mejores prácticas implementadas desde el inicio',
      'Team building y capacitación especializada',
      'Roadmap tecnológico claro',
      'Evitar deuda técnica costosa',
      'Escalabilidad planificada'
    ],
    process: [
      'Evaluación del proyecto y stack tecnológico actual',
      'Análisis de requerimientos técnicos y de negocio',
      'Recomendaciones estratégicas y roadmap',
      'Plan de implementación detallado',
      'Acompañamiento en ejecución',
      'Evaluación continua y feedback especializado'
    ],
    plans: [
      {
        name: 'Consulta',
        price: '$100',
        duration: '1 sesión',
        description: 'Sesión única de consultoría especializada',
        features: [
          { title: 'Videollamada 1h', description: 'Sesión personalizada', included: true },
          { title: 'Diagnóstico inicial', description: 'Evaluación del proyecto', included: true },
          { title: 'Recomendaciones', description: 'Plan de acción básico', included: true },
          { title: 'Q&A session', description: 'Resolución de dudas', included: true },
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
        savings: '70% vs sesiones individuales',
        features: [
          { title: '4 sesiones incluidas', description: '1 sesión por semana', included: true },
          { title: 'Code review', description: 'Revisión de código semanal', included: true },
          { title: 'Documentación técnica', description: 'Reportes semanales', included: true },
          { title: 'Chat prioritario', description: 'Soporte vía WhatsApp', included: true },
          { title: 'Architecture review', description: 'Evaluación de estructura', included: true },
          { title: 'Best practices guide', description: 'Guías personalizadas', included: true },
          { title: 'Tool recommendations', description: 'Stack tecnológico', included: true },
          { title: 'Team training', description: '2 horas incluidas', included: false }
        ],
        popular: true,
        cta: 'Plan Mensual'
      },
      {
        name: 'Proyecto',
        price: '$800+',
        duration: 'Personalizado',
        description: 'Consultoría integral para proyectos complejos',
        features: [
          { title: 'Sesiones ilimitadas', description: 'Disponibilidad completa', included: true },
          { title: 'Arquitectura completa', description: 'Diseño del sistema', included: true },
          { title: 'Tech stack selection', description: 'Selección optimizada', included: true },
          { title: 'Team training completo', description: 'Capacitación especializada', included: true },
          { title: 'Code review continuo', description: 'Revisiones semanales', included: true },
          { title: 'DevOps setup', description: 'CI/CD y deployment', included: true },
          { title: 'Security audit', description: 'Análisis de seguridad', included: true },
          { title: 'Documentation completa', description: 'Documentación técnica', included: true }
        ],
        cta: 'Consultar Proyecto'
      }
    ],
    portfolio: [
      {
        title: 'Startup Fintech',
        description: 'Arquitectura escalable para aplicación financiera con alta concurrencia',
        result: 'Soporte a 10K+ usuarios simultáneos',
        industry: 'Fintech',
        year: '2024'
      },
      {
        title: 'Migración Legacy',
        description: 'Modernización de sistema empresarial de PHP a Node.js',
        result: '50% reducción en costos operativos',
        industry: 'Enterprise',
        year: '2023'
      },
      {
        title: 'E-commerce Scale',
        description: 'Escalabilidad para Black Friday con microservicios',
        result: '1000% aumento de tráfico soportado',
        industry: 'E-commerce',
        year: '2024'
      }
    ],
    faq: [
      {
        question: '¿Qué incluye la consultoría?',
        answer: 'Incluye análisis técnico, recomendaciones de arquitectura, selección de tecnologías, code review y acompañamiento en la implementación.'
      },
      {
        question: '¿Trabajan con equipos existentes?',
        answer: 'Sí, nos adaptamos a equipos de cualquier tamaño y proporcionamos capacitación para que tu equipo implemente las mejores prácticas.'
      },
      {
        question: '¿Ofrecen consultoría remota?',
        answer: 'Sí, toda la consultoría se puede realizar de forma remota a través de videollamadas, chat y herramientas colaborativas.'
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
              <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
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
            <h2 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-custom-teal" />
              Tecnologías y Herramientas
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-custom-green text-custom-blue rounded-lg text-sm font-medium border border-custom-green/50 hover:bg-custom-teal hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-custom-teal" />
              Beneficios y Resultados
            </h2>
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
            <h2 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-custom-teal" />
              Proceso de Trabajo
            </h2>
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
            <h2 className="text-xl font-bold text-custom-blue mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-custom-teal" />
              Casos de Éxito
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.portfolio.map((project, index) => (
                <div key={index} className="bg-white border border-custom-green/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-custom-blue">{project.title}</h3>
                    {project.year && (
                      <span className="text-xs text-custom-blue/60 bg-custom-green px-2 py-1 rounded-full">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="text-custom-blue/70 text-sm mb-3">{project.description}</p>
                  {project.industry && (
                    <p className="text-custom-blue/50 text-xs mb-3">Industria: {project.industry}</p>
                  )}
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
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-custom-green/30 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-custom-teal to-custom-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="text-white/20 text-right">
            <div className="text-4xl font-bold opacity-30">
              {service.title.split(' ')[0].charAt(0)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-custom-blue mb-2">{service.title}</h2>
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
    </article>
  );
};