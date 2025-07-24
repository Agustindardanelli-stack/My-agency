'use client';
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Zap, Users, ArrowRight, Menu, X } from 'lucide-react';
import Contacto from './Contact';

const CodeNovaLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas con React, Next.js y tecnologías de vanguardia.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimización',
      description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultoría',
      description: 'Asesoramiento técnico para proyectos de desarrollo y arquitectura de software.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-800 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CN</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Code<span className="text-green-600">Nova</span>
              </span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Inicio
              </a>
              <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Proyectos
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Servicios
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contacto
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
                Inicio
              </a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
                Proyectos
              </a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
                Servicios
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-600 font-medium">
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Innovación en
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent block">
              Desarrollo Web
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transformamos ideas en soluciones digitales excepcionales. Especialistas en React, Next.js y tecnologías modernas.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
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
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-teal-50 transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section centrado */}
      <section
        id="contact"
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16"
      >
        <div className="w-full max-w-xl">
          <Contacto />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900">CodeNova</span>
            <span className="text-green-600">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Agustindardanelli-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
            >
              <Github className="w-5 h-5 mr-1" />
              GitHub
            </a>
            <a
              href="mailto:agustin.dardanelli@gmail.com"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeNovaLanding;
