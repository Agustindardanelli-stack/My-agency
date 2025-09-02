import React from 'react';
import { Award, Target, Users, Lightbulb, Code, Zap, TrendingUp, CheckCircle, Star, Heart, Rocket, Shield } from 'lucide-react';
import { Metadata } from 'next';

// Metadata para SEO
export const metadata: Metadata = {
  title: 'Nosotros - CodeNova | Equipo de Desarrollo Web en Río Cuarto',
  description: 'Conoce al equipo de CodeNova: desarrolladores especializados en React, Next.js y marketing digital en Río Cuarto, Córdoba. Más de 3 años de experiencia.',
  keywords: ['equipo desarrollo web', 'programadores Río Cuarto', 'desarrolladores React', 'marketing digital Córdoba', 'sobre nosotros'],
  openGraph: {
    title: 'Conoce al Equipo de CodeNova - Desarrollo Web en Río Cuarto',
    description: 'Desarrolladores apasionados por la tecnología con más de 3 años creando soluciones digitales exitosas.',
    images: ['/team-og.jpg'],
  },
};

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Agustín Dardanelli",
      role: "CEO & Full Stack Developer",
      specializations: ["React & Next.js", "Node.js & Express", "Database Design", "UI/UX Design"],
      description: "Especialista en desarrollo web moderno con más de 3 años de experiencia creando soluciones digitales innovadoras que transforman negocios y generan resultados reales.",
      experience: "3+ años",
      projects: "50+",
      education: "Ing. en Sistemas de Información",
      certifications: ["React Developer", "AWS Cloud Practitioner", "Google Analytics"],
      skills: ["Frontend", "Backend", "DevOps", "UI/UX"]
    },
    {
      name: "Especialista Marketing",
      role: "Marketing Digital & Design",
      specializations: ["Marketing Digital", "SEO & SEM", "Redes Sociales", "Branding & Design"],
      description: "Experta en estrategias de marketing digital y diseño, enfocada en crear marcas que conecten emocionalmente con su audiencia objetivo y generen conversiones.",
      experience: "2+ años",
      projects: "40+",
      education: "Lic. en Marketing Digital",
      certifications: ["Google Ads", "Facebook Blueprint", "HubSpot"],
      skills: ["SEO/SEM", "Social Media", "Analytics", "Design"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Fashion",
      description: "Plataforma de comercio electrónico con carrito avanzado y gestión de inventario en tiempo real",
      tags: ["React", "Next.js", "Stripe", "MongoDB"],
      icon: "🛒",
      metric: "+250% ventas",
      category: "E-commerce",
      client: "Tienda de Moda Online"
    },
    {
      title: "Dashboard Empresarial",
      description: "Sistema de gestión con analytics en tiempo real para toma de decisiones estratégicas",
      tags: ["React", "Chart.js", "Express", "PostgreSQL"],
      icon: "📊",
      metric: "98% uptime",
      category: "SaaS",
      client: "Empresa de Consultoría"
    },
    {
      title: "App de Reservas",
      description: "Sistema de reservas online para restaurantes con gestión inteligente de mesas y horarios",
      tags: ["Next.js", "Prisma", "Tailwind", "API REST"],
      icon: "📅",
      metric: "500+ reservas/día",
      category: "Hospitality",
      client: "Cadena de Restaurantes"
    },
    {
      title: "Campaña Digital",
      description: "Estrategia integral de marketing que multiplicó la presencia online y las conversiones",
      tags: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      icon: "📈",
      metric: "+300% ROI",
      category: "Marketing",
      client: "Startup Fintech"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: <CheckCircle className="w-6 h-6" />, description: "En diversos sectores" },
    { number: "100%", label: "Clientes Satisfechos", icon: <Award className="w-6 h-6" />, description: "Garantía de calidad" },
    { number: "3+", label: "Años de Experiencia", icon: <Target className="w-6 h-6" />, description: "Creciendo constantemente" },
    { number: "24/7", label: "Soporte Técnico", icon: <Zap className="w-6 h-6" />, description: "Siempre disponibles" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías para crear soluciones que marquen la diferencia en el mercado.",
      examples: ["React 18", "Next.js 13", "TypeScript", "AI Integration"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración",
      description: "Trabajamos como socios estratégicos, no solo como proveedores de servicios técnicos.",
      examples: ["Metodología Ágil", "Comunicación Constante", "Feedback Continuo", "Trabajo en Equipo"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resultados",
      description: "Nos enfocamos en métricas reales que impacten positivamente en el crecimiento de tu negocio.",
      examples: ["ROI Medible", "Conversiones", "Performance", "Analytics"]
    }
  ];

  const technologies = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Framework" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 70, category: "DevOps" }
  ];

  const generateAvatar = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=160&background=2F52E0&color=ffffff&font-size=0.5&rounded=true`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-custom-green to-white relative" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-custom-teal/10 text-custom-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4 mr-2" />
            Nuestro Equipo
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
            Conoce a <span className="text-custom-teal">CodeNova</span>
          </h1>
          <p className="text-xl text-custom-blue/80 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado por la tecnología y el marketing digital, 
            comprometidos en transformar ideas en soluciones digitales que generen resultados reales y duraderos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-custom-green/30 text-center group">
              <div className="flex justify-center mb-3 text-custom-teal group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-custom-blue mb-2">
                {stat.number}
              </div>
              <div className="text-custom-blue/70 font-medium text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-custom-blue/50 text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-custom-green/30 overflow-hidden">
              <div className="bg-gradient-to-br from-custom-teal to-custom-blue p-8 text-white relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <Code className="w-16 h-16" />
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white/30 flex-shrink-0">
                    <img 
                      src={generateAvatar(member.name)}
                      alt={`Foto de perfil de ${member.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                    <p className="text-custom-lime font-semibold mb-3">{member.role}</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {member.experience}
                      </div>
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {member.projects}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-custom-blue/80 mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Education & Certifications */}
                <div className="mb-6">
                  <h3 className="font-semibold text-custom-blue mb-2">Formación:</h3>
                  <p className="text-custom-blue/70 text-sm mb-3">{member.education}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="px-2 py-1 bg-custom-lime/20 text-custom-teal text-xs rounded-lg font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-custom-blue mb-3">Especializaciones:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {member.specializations.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-custom-lime rounded-full mr-3"></div>
                          <span className="text-custom-blue font-medium text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-custom-blue mb-3">Habilidades Clave:</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-custom-green text-custom-blue text-sm rounded-lg font-medium border border-custom-green/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-blue mb-4">
              Stack <span className="text-custom-teal">Tecnológico</span>
            </h2>
            <p className="text-custom-blue/80 max-w-2xl mx-auto">
              Trabajamos con las tecnologías más modernas y demandadas del mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-custom-green/30">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-custom-blue">{tech.name}</h3>
                  <span className="text-sm text-custom-teal font-medium">{tech.level}%</span>
                </div>
                <div className="w-full bg-custom-green rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-custom-teal to-custom-lime h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-custom-blue/60">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-blue mb-4">
              Nuestros <span className="text-custom-teal">Valores</span>
            </h2>
            <p className="text-custom-blue/80 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra relación con cada cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <article key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-custom-green/30">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-custom-teal to-custom-blue text-white rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-custom-blue mb-4">{value.title}</h3>
                <p className="text-custom-blue/80 leading-relaxed mb-6">{value.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-custom-teal mb-3">Ejemplos:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {value.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-2 py-1 bg-custom-green text-custom-blue text-xs rounded-lg font-medium">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-blue mb-4">
              Casos de <span className="text-custom-teal">Éxito</span>
            </h2>
            <p className="text-custom-blue/80 max-w-2xl mx-auto">
              Proyectos que demuestran nuestro compromiso con la excelencia y los resultados
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {projects.map((project, index) => (
              <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-custom-green/30">
                <div className="aspect-video bg-gradient-to-br from-custom-teal to-custom-blue flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center p-4 relative z-10">
                    <div className="text-4xl mb-2">{project.icon}</div>
                    <div className="font-semibold text-sm">{project.title}</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-custom-lime text-custom-blue px-2 py-1 rounded-full text-xs font-bold">
                    {project.metric}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-custom-blue mb-2">
                    {project.title}
                  </h3>
                  <p className="text-custom-blue/80 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-custom-blue/60 text-xs mb-4">
                    Cliente: {project.client}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-custom-green text-custom-blue rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-custom-green text-custom-blue rounded-lg text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-custom-teal to-custom-blue rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-custom-lime" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para el siguiente nivel?
              </h2>
              <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
                Combinamos tecnología de vanguardia con estrategias de marketing efectivas 
                para crear soluciones que realmente impulsen tu negocio hacia el éxito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-custom-blue px-8 py-4 rounded-xl font-semibold hover:bg-custom-lime hover:text-custom-blue hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Comenzar Proyecto
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-custom-blue transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Ver Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Schema.org structured data - PARTE COMPLETA */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Sobre CodeNova - Equipo de Desarrollo Web",
              "description": "Conoce al equipo de CodeNova, especialistas en desarrollo web y marketing digital en Río Cuarto, Córdoba",
              "mainEntity": {
                "@type": "Organization",
                "name": "CodeNova",
                "foundingDate": "2021",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Agustín Dardanelli",
                    "jobTitle": "CEO & Full Stack Developer",
                    "hasCredential": [
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Professional Certification",
                        "name": "React Developer Certified"
                      },
                      {
                        "@type": "EducationalOccupationalCredential", 
                        "credentialCategory": "Cloud Certification",
                        "name": "AWS Cloud Practitioner"
                      },
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Analytics Certification", 
                        "name": "Google Analytics Certified"
                      }
                    ],
                    "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "UI/UX Design"],
                    "alumniOf": {
                      "@type": "EducationalOrganization",
                      "name": "Universidad Tecnológica Nacional"
                    }
                  }
                ],
                "numberOfEmployees": "2-5",
                "employee": [
                  {
                    "@type": "Person",
                    "name": "Agustín Dardanelli",
                    "jobTitle": "CEO & Full Stack Developer",
                    "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript"],
                    "hasCredential": [
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Professional Certification",
                        "name": "React Developer Certified"
                      },
                      {
                        "@type": "EducationalOccupationalCredential", 
                        "credentialCategory": "Cloud Certification",
                        "name": "AWS Cloud Practitioner"
                      }
                    ]
                  },
                  {
                    "@type": "Person",
                    "name": "Especialista Marketing",
                    "jobTitle": "Marketing Digital & Design",
                    "knowsAbout": ["Digital Marketing", "SEO", "Social Media", "Design"],
                    "hasCredential": [
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Marketing Certification",
                        "name": "Google Ads Certified"
                      },
                      {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Social Media Certification",
                        "name": "Facebook Blueprint Certified"
                      }
                    ]
                  }
                ],
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Río Cuarto",
                    "addressRegion": "Córdoba",
                    "addressCountry": "AR"
                  }
                },
                "award": ["100% Client Satisfaction", "50+ Projects Completed", "3+ Years Experience"],
                "knowsAbout": [
                  "React Development",
                  "Next.js Applications", 
                  "Digital Marketing",
                  "Web Optimization",
                  "UI/UX Design",
                  "Full Stack Development",
                  "Database Design",
                  "Cloud Infrastructure"
                ],
                "memberOf": {
                  "@type": "Organization",
                  "name": "Argentina Tech Community"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development",
                        "description": "Modern web applications with React and Next.js"
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Optimization",
                        "description": "Website speed and performance improvements"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service", 
                        "name": "Technical Consulting",
                        "description": "Expert technical advice and architecture planning"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "50",
                  "bestRating": "5"
                },
                "review": [
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "reviewBody": "CodeNova transformó completamente nuestra presencia digital. El resultado superó nuestras expectativas.",
                    "author": {
                      "@type": "Person",
                      "name": "María González"
                    }
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating", 
                      "ratingValue": "5"
                    },
                    "reviewBody": "Profesionalismo excepcional y entrega a tiempo. Definitivamente los recomiendo.",
                    "author": {
                      "@type": "Person",
                      "name": "Carlos Ruiz"
                    }
                  }
                ],
                "slogan": "Transformamos ideas en experiencias digitales excepcionales",
                "url": "https://codenova.com.ar",
                "sameAs": [
                  "https://github.com/Agustindardanelli-stack"
                ]
              }
            })
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;