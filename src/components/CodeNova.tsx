'use client';
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Zap, Users, Menu, X, Star, ArrowRight, Mail, Phone, MapPin, Award, Rocket, Shield, Clock, CheckCircle, ArrowDown, Play } from 'lucide-react';

const CodeNovaLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll suave para enlaces del navbar
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'UARC System',
      description: 'Sistema integral de gestión universitaria con panel de administración, gestión de estudiantes y reportes en tiempo real.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Agustindardanelli-stack/uarc-system',
      demo: '#',
      category: 'Web App',
      status: 'Production',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50MCkiLz4KPHN2ZyB4PSIxNzUiIHk9IjEyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYmRlZDBiIiBvcGFjaXR5PSIwLjgiPgo8L3N2Zz4KPHN2ZyB4PSIxMDAiIHk9IjgwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNlY2VjZWMiIG9wYWNpdHk9IjAuNiI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjMiLz4KPC9zdmc+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMkY1MkUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzMDQ1RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=',
      results: ['90% mejora en eficiencia', '500+ usuarios activos', '99.9% uptime'],
    },
    {
      id: 2,
      title: 'Journal App',
      description: 'Aplicación de journaling personal con autenticación, categorización de entradas y búsqueda avanzada.',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/Agustindardanelli-stack/journal-app',
      demo: '#',
      category: 'Mobile App',
      status: 'Beta',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50MSkiLz4KPHN2ZyB4PSIxNzUiIHk9IjEyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYmRlZDBiIiBvcGFjaXR5PSIwLjgiPgo8L3N2Zz4KPHN2ZyB4PSIzMDAiIHk9IjUwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiNlY2VjZWMiIG9wYWNpdHk9IjAuNSI+CjxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE1Ii8+Cjwvc3ZnPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzJGNTJFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMzA0NUUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
      results: ['Interfaz intuitiva', 'Sync en tiempo real', 'Búsqueda avanzada'],
    },
    {
      id: 3,
      title: 'Heroes Database',
      description: 'Base de datos interactiva de superhéroes con búsqueda, filtros y comparación de estadísticas.',
      tech: ['Vue.js', 'TypeScript', 'Tailwind', 'API REST'],
      github: 'https://github.com/Agustindardanelli-stack/heroes-db',
      demo: '#',
      category: 'Web App',
      status: 'Production',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50MikiLz4KPHN2ZyB4PSIxNzUiIHk9IjEyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYmRlZDBiIiBvcGFjaXR5PSIwLjgiPgo8L3N2Zz4KPHN2ZyB4PSI2MCIgeT0iMjAwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNlY2VjZWMiIG9wYWNpdHk9IjAuNCI+Cjxwb2x5Z29uIHBvaW50cz0iMjAsMCAzOSwyOSAyMCw0MCAyMCwzMCAwLDMwIDIwLDAiLz4KPC9zdmc+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMkY1MkUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzMDQ1RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=',
      results: ['1000+ héroes', 'Filtros avanzados', 'Comparativa visual'],
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas con React, Next.js y tecnologías de vanguardia para impulsar tu negocio.',
      features: ['React & Next.js', 'Diseño Responsivo', 'Optimización SEO'],
      price: 'Desde $1200'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimización',
      description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes hasta un 300%.',
      features: ['Performance', 'Core Web Vitals', 'Carga Rápida'],
      price: 'Desde $800'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultoría',
      description: 'Asesoramiento técnico especializado para proyectos de desarrollo y arquitectura de software.',
      features: ['Arquitectura', 'Best Practices', 'Code Review'],
      price: 'Desde $600'
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, TechStart',
      text: 'CodeNova transformó completamente nuestra presencia digital. El resultado superó nuestras expectativas.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Founder, InnovateCorp',
      text: 'Profesionalismo excepcional y entrega a tiempo. Definitivamente los recomiendo.',
      rating: 5,
      avatar: 'CR'
    },
    {
      name: 'Ana Martínez',
      role: 'CTO, DataFlow',
      text: 'La optimización que hicieron a nuestra app mejoró la velocidad en un 250%. Increíble trabajo.',
      rating: 5,
      avatar: 'AM'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis',
      description: 'Estudiamos tu proyecto y definimos la mejor estrategia técnica.',
      icon: <Award className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Desarrollo',
      description: 'Creamos tu solución usando las mejores prácticas y tecnologías.',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Testing',
      description: 'Probamos exhaustivamente para garantizar calidad y rendimiento.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Entrega',
      description: 'Desplegamos tu proyecto y te acompañamos en el lanzamiento.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-blue via-custom-teal to-custom-blue">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-custom-green/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-custom-teal to-custom-blue rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">CN</span>
              </div>
              <span className="text-2xl font-bold text-custom-blue">
                Code<span className="text-custom-teal">Nova</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Inicio', 'Proyectos', 'Servicios', 'Proceso', 'Contacto'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('ó', 'o')}`} 
                  className="text-custom-blue hover:text-custom-teal transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-lime group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-custom-green/20 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-custom-blue" /> : 
                <Menu className="w-6 h-6 text-custom-blue" />
              }
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-custom-green/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {['Inicio', 'Proyectos', 'Servicios', 'Proceso', 'Contacto'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('ó', 'o')}`} 
                  className="block py-3 px-4 text-custom-blue hover:text-custom-teal hover:bg-custom-green/10 rounded-lg transition-all duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-custom-blue to-custom-teal relative overflow-hidden min-h-screen flex items-center"
        data-animate
      >
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-custom-lime/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-custom-lime/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 transform transition-all duration-1000 ${
            isVisible.inicio ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-custom-lime/20 text-custom-blue px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Star className="w-4 h-4 mr-2 text-custom-lime" />
              Desarrollo Web Premium
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-custom-blue mb-6 leading-tight">
              Innovación en
              <span className="bg-gradient-to-r from-custom-teal to-custom-blue bg-clip-text text-transparent block mt-2">
                Desarrollo Web
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-custom-blue/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transformamos ideas en experiencias digitales excepcionales. Especialistas en React, Next.js y tecnologías de vanguardia que impulsan tu negocio al siguiente nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="#proyectos"
                className="group bg-gradient-to-r from-custom-teal to-custom-blue text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto"
                className="border-2 border-custom-teal text-custom-teal px-8 py-4 rounded-xl font-semibold hover:bg-custom-teal hover:text-white transition-all duration-300 flex items-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Hablar con Experto
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-custom-green/30">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-custom-teal group-hover:scale-110 transition-transform">50+</div>
                <div className="text-custom-blue/70 text-sm md:text-base">Proyectos</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-custom-teal group-hover:scale-110 transition-transform">100%</div>
                <div className="text-custom-blue/70 text-sm md:text-base">Satisfacción</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-custom-teal group-hover:scale-110 transition-transform">3+</div>
                <div className="text-custom-blue/70 text-sm md:text-base">Años</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-custom-teal group-hover:scale-110 transition-transform">24h</div>
                <div className="text-custom-blue/70 text-sm md:text-base">Respuesta</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-20 bg-gradient-to-br from-custom-blue to-custom-teal relative" data-animate>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.proyectos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Proyectos <span className="text-custom-lime">Destacados</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más representativos y las tecnologías que utilizamos
            </p>
          </div>
          
          {/* Featured Project Carousel */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-custom-lime text-custom-blue rounded-full text-sm font-semibold">
                      {projects[activeProject].category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      projects[activeProject].status === 'Production' 
                        ? 'bg-custom-lime text-custom-blue'
                        : 'bg-yellow-400 text-yellow-900'
                    }`}>
                      {projects[activeProject].status}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{projects[activeProject].title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{projects[activeProject].description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 text-white text-sm rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {projects[activeProject].results.map((result, index) => (
                      <div key={index} className="flex items-center text-white/90">
                        <CheckCircle className="w-5 h-5 mr-3 text-custom-lime" />
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={projects[activeProject].github}
                      className="flex items-center text-custom-lime hover:text-white transition-colors font-medium bg-white/10 px-4 py-2 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Código
                    </a>
                    <a
                      href={projects[activeProject].demo}
                      className="flex items-center text-custom-lime hover:text-white transition-colors font-medium bg-white/10 px-4 py-2 rounded-lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Project navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeProject ? 'bg-custom-lime' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 ${
                  isVisible.proyectos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-custom-teal to-custom-blue relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Production' 
                          ? 'bg-custom-lime text-custom-blue'
                          : 'bg-yellow-400 text-yellow-900'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="text-white text-right">
                      <div className="text-4xl opacity-30 font-bold">0{project.id}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-custom-blue mb-3">{project.title}</h3>
                  <p className="text-custom-blue/80 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-custom-green text-custom-blue text-sm rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-custom-green to-white relative" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.servicios ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-custom-blue mb-4">
              Nuestros <span className="text-custom-teal">Servicios</span>
            </h2>
            <p className="text-xl text-custom-blue/80 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para llevar tu proyecto digital al siguiente nivel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-custom-green/30 hover:border-custom-teal/30 transform hover:-translate-y-2 ${
                  isVisible.servicios ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-custom-teal to-custom-blue text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-custom-blue mb-4">{service.title}</h3>
                  <p className="text-custom-blue/80 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-custom-lime mr-3" />
                        <span className="text-custom-blue font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-2xl font-bold text-custom-teal mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-custom-teal to-custom-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-gradient-to-br from-custom-blue to-custom-teal relative" data-animate>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.proceso ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestro <span className="text-custom-lime">Proceso</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Un enfoque metodológico que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-1000 ${
                  isVisible.proceso ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-custom-lime/30">
                    <div className="text-custom-lime">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-custom-lime text-custom-blue rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-custom-lime/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-custom-green to-white relative" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-custom-blue mb-4">
              Lo que dicen nuestros <span className="text-custom-teal">Clientes</span>
            </h2>
            <p className="text-xl text-custom-blue/80 max-w-2xl mx-auto">
              Testimonios reales de clientes satisfechos con nuestro trabajo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-custom-blue/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-custom-teal to-custom-blue rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-custom-blue">{testimonial.name}</div>
                    <div className="text-custom-blue/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-br from-custom-blue to-custom-teal relative"
        data-animate
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible.contacto ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              ¡Conversemos!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              ¿Listo para llevar tu proyecto al siguiente nivel? Completa el formulario y te responderemos en menos de 24 horas.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-custom-lime focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-custom-lime focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Servicio de Interés</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:border-custom-lime focus:outline-none transition-colors">
                  <option value="">Selecciona un servicio</option>
                  <option value="desarrollo">Desarrollo Web</option>
                  <option value="optimizacion">Optimización</option>
                  <option value="consultoria">Consultoría</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-custom-lime focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-custom-lime text-custom-blue py-4 rounded-lg font-bold text-lg hover:bg-custom-lime/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <Mail className="w-8 h-8 text-custom-lime mx-auto mb-3" />
                <div className="text-white font-medium">Email</div>
                <div className="text-white/80">agustin.dardanelli@gmail.com</div>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-custom-lime mx-auto mb-3" />
                <div className="text-white font-medium">Teléfono</div>
                <div className="text-white/80">+54 9 358 123-4567</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-custom-lime mx-auto mb-3" />
                <div className="text-white font-medium">Ubicación</div>
                <div className="text-white/80">Río Cuarto, Córdoba</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-custom-blue/95 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-custom-teal to-custom-lime rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-custom-blue font-bold text-lg">CN</span>
                </div>
                <span className="text-2xl font-bold text-white">CodeNova</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Transformamos ideas en experiencias digitales excepcionales con tecnología de vanguardia y un enfoque centrado en resultados.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Agustindardanelli-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-custom-lime hover:bg-white/20 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:agustin.dardanelli@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-custom-lime hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <div className="space-y-3">
                {['Desarrollo Web', 'Optimización', 'Consultoría', 'Mantenimiento'].map((service) => (
                  <div key={service} className="text-white/70 hover:text-custom-lime transition-colors cursor-pointer">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces</h4>
              <div className="space-y-3">
                {['Inicio', 'Proyectos', 'Servicios', 'Contacto'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-white/70 hover:text-custom-lime transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/70 text-center md:text-left">
              © {new Date().getFullYear()} CodeNova. Todos los derechos reservados.
            </div>
            <div className="text-white/70 text-center md:text-right mt-4 md:mt-0">
              Hecho con ❤️ en Río Cuarto, Córdoba
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeNovaLanding;