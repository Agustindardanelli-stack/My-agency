import React from 'react';
import { Award, Target, Users, Lightbulb, Code, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Agustín Dardanelli",
      role: "CEO & Full Stack Developer",
      specializations: ["React & Next.js", "Node.js & Express", "Database Design", "UI/UX Design"],
      description: "Especialista en desarrollo web moderno con más de 3 años de experiencia creando soluciones digitales innovadoras que transforman negocios.",
      experience: "3+ años",
      projects: "50+"
    },
    {
      name: "Nombre de tu Pareja",
      role: "Marketing Digital & Design",
      specializations: ["Marketing Digital", "SEO & SEM", "Redes Sociales", "Branding & Design"],
      description: "Experta en estrategias de marketing digital y diseño, enfocada en crear marcas que conecten emocionalmente con su audiencia objetivo.",
      experience: "2+ años",
      projects: "40+"
    }
  ];

  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma de comercio electrónico con React y Stripe, aumentó ventas 250%",
      tags: ["React", "Next.js", "Stripe", "MongoDB"],
      icon: "🛒",
      metric: "+250% ventas"
    },
    {
      title: "Dashboard Empresarial",
      description: "Sistema de gestión con analytics en tiempo real para toma de decisiones",
      tags: ["React", "Chart.js", "Express", "PostgreSQL"],
      icon: "📊",
      metric: "98% uptime"
    },
    {
      title: "App de Reservas",
      description: "Sistema de reservas online para restaurantes con gestión inteligente",
      tags: ["Next.js", "Prisma", "Tailwind", "API REST"],
      icon: "📅",
      metric: "500+ reservas/día"
    },
    {
      title: "Campaña Digital",
      description: "Estrategia de marketing que multiplicó la presencia online del cliente",
      tags: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      icon: "📈",
      metric: "+300% ROI"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100%", label: "Clientes Satisfechos", icon: <Award className="w-6 h-6" /> },
    { number: "3+", label: "Años de Experiencia", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Soporte Técnico", icon: <Zap className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías para crear soluciones que marquen la diferencia."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración",
      description: "Trabajamos como socios estratégicos, no solo como proveedores de servicios."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resultados",
      description: "Nos enfocamos en métricas reales que impacten positivamente en tu negocio."
    }
  ];

  const generateAvatar = (name) => {
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
          <h2 className="text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
            Conoce a <span className="text-custom-teal">CodeNova</span>
          </h2>
          <p className="text-xl text-custom-blue/80 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado por la tecnología y el marketing digital, 
            comprometidos en transformar ideas en soluciones digitales que generen resultados reales.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-custom-green/30 text-center">
              <div className="flex justify-center mb-3 text-custom-teal">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-custom-blue mb-2">
                {stat.number}
              </div>
              <div className="text-custom-blue/70 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-custom-green/30 overflow-hidden">
              <div className="bg-gradient-to-br from-custom-teal to-custom-blue p-8 text-white relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <Code className="w-16 h-16" />
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white/30 flex-shrink-0">
                    <img 
                      src={generateAvatar(member.name)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-custom-lime font-semibold mb-3">{member.role}</p>
                    <div className="flex space-x-4 text-sm">
                      <div className="bg-white/20 px-3 py-1 rounded-full">
                        {member.experience}
                      </div>
                      <div className="bg-white/20 px-3 py-1 rounded-full">
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
                <div className="space-y-3">
                  <h4 className="font-semibold text-custom-blue mb-3">Especializaciones:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {member.specializations.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-custom-lime rounded-full mr-3"></div>
                        <span className="text-custom-blue font-medium text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-custom-blue mb-4">
              Nuestros <span className="text-custom-teal">Valores</span>
            </h3>
            <p className="text-custom-blue/80 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra relación con cada cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-custom-green/30">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-custom-teal to-custom-blue text-white rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-custom-blue mb-4">{value.title}</h4>
                <p className="text-custom-blue/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-custom-blue mb-4">
              Casos de <span className="text-custom-teal">Éxito</span>
            </h3>
            <p className="text-custom-blue/80 max-w-2xl mx-auto">
              Proyectos que demuestran nuestro compromiso con la excelencia y los resultados
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-custom-green/30">
              <div className="aspect-video bg-gradient-to-br from-custom-teal to-custom-blue flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-center p-4 relative z-10">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <div className="font-semibold text-sm">{project.title}</div>
                </div>
                <div className="absolute top-2 right-2 bg-custom-lime text-custom-blue px-2 py-1 rounded-full text-xs font-bold">
                  {project.metric}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-custom-blue mb-3">
                  {project.title}
                </h4>
                <p className="text-custom-blue/80 mb-4 text-sm leading-relaxed">
                  {project.description}
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
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-custom-teal to-custom-blue rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para el siguiente nivel?
              </h3>
              <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
                Combinamos tecnología de vanguardia con estrategias de marketing efectivas 
                para crear soluciones que realmente impulsen tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-custom-blue px-8 py-4 rounded-xl font-semibold hover:bg-custom-lime hover:text-custom-blue hover:scale-105 transition-all duration-300 shadow-lg">
                  Comenzar Proyecto
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-custom-blue transition-all duration-300">
                  Ver Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;