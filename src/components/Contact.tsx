'use client';
import React from 'react';
import { User, Mail, Phone, MessageSquare, ArrowRight, MapPin, Clock, Send, CheckCircle, Star } from 'lucide-react';
import { Metadata } from 'next';

// Metadata para SEO
export const metadata: Metadata = {
  title: 'Contacto - CodeNova | Desarrollo Web en Río Cuarto',
  description: 'Contacta a CodeNova para tu proyecto de desarrollo web. Consulta gratuita, respuesta en 24h. Especializados en React, Next.js en Río Cuarto, Córdoba.',
  keywords: ['contacto desarrollo web', 'consulta gratuita', 'presupuesto web', 'Río Cuarto', 'Córdoba', 'programación'],
  openGraph: {
    title: 'Contacta con CodeNova - Desarrollo Web en Río Cuarto',
    description: 'Obtén tu consulta gratuita y presupuesto personalizado. Respuesta garantizada en 24 horas.',
    images: ['/contact-og.jpg'],
  },
};

export default function Contacto() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí integrarías con tu backend o servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setFormData({ nombre: '', email: '', telefono: '', tipoProyecto: '', mensaje: '' });
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      detail: 'agustin.dardanelli@gmail.com',
      description: 'Respuesta en 24hs',
      href: 'mailto:agustin.dardanelli@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Teléfono',
      detail: '+54 9 358 123-4567',
      description: 'Lun - Vie: 9AM - 6PM',
      href: 'tel:+5493581234567'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Ubicación',
      detail: 'Río Cuarto, Córdoba',
      description: 'Argentina',
      href: '#'
    }
  ];

  const benefits = [
    'Consulta inicial completamente gratuita',
    'Presupuesto sin compromiso en 24h',
    'Soporte técnico incluido en proyectos',
    'Garantía de satisfacción del 100%',
    'Metodología ágil y entregas iterativas'
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma un proyecto?',
      answer: 'Depende de la complejidad. Un sitio básico toma 2-3 semanas, aplicaciones complejas 2-3 meses.'
    },
    {
      question: '¿Incluyen hosting y dominio?',
      answer: 'Te ayudamos con la configuración, pero se contratan por separado. Te recomendamos las mejores opciones.'
    },
    {
      question: '¿Ofrecen mantenimiento?',
      answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, backups y soporte técnico continuo.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-blue to-custom-teal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-custom-lime/20 text-custom-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contacto Profesional
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¡Hablemos de tu <span className="text-custom-lime">Proyecto</span>!
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para transformar tus ideas en realidad digital. 
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar el éxito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-custom-lime" />
                Información de Contacto
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Estamos aquí para ayudarte a materializar tu proyecto. Ponte en contacto con nosotros y conversemos sobre tus ideas.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_blank' : '_self'}
                    rel={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-custom-lime to-white rounded-lg flex items-center justify-center text-custom-blue group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-custom-lime font-medium">{info.detail}</p>
                      <p className="text-white/70 text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Response Time Info */}
            <div className="bg-gradient-to-r from-custom-lime/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-custom-lime/30">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-custom-lime" />
                <h3 className="text-white font-semibold">Tiempo de Respuesta</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Nos comprometemos a responder todos los mensajes en un plazo máximo de 24 horas durante días hábiles.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-custom-lime" />
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-custom-lime mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-white/90 font-medium text-sm hover:text-custom-lime transition-colors">
                      {faq.question}
                      <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-custom-blue mb-2">
                Envíanos un Mensaje
              </h2>
              <p className="text-custom-blue/70">
                Completa el formulario y te contactaremos pronto
              </p>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">
                    ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-custom-blue font-medium mb-2" htmlFor="nombre">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-custom-blue font-medium mb-2" htmlFor="email">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-custom-blue font-medium mb-2" htmlFor="telefono">
                  Teléfono (Opcional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+54 9 358 123-4567"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-custom-blue font-medium mb-2" htmlFor="tipoProyecto">
                  Tipo de Proyecto
                </label>
                <select 
                  id="tipoProyecto"
                  name="tipoProyecto"
                  value={formData.tipoProyecto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue transition-all duration-300"
                >
                  <option value="">Selecciona el tipo de proyecto</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="ecommerce">Tienda Online / E-commerce</option>
                  <option value="optimizacion">Optimización de Sitio</option>
                  <option value="consultoria">Consultoría Técnica</option>
                  <option value="app-movil">Aplicación Móvil</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-custom-blue font-medium mb-2" htmlFor="mensaje">
                  Mensaje *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-custom-teal w-5 h-5" />
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto: objetivos, funcionalidades deseadas, timeline, presupuesto aproximado y cualquier detalle importante..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 resize-none text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !formData.nombre || !formData.email || !formData.mensaje}
                className="w-full flex items-center justify-center bg-gradient-to-r from-custom-teal to-custom-blue text-white rounded-xl py-4 font-semibold text-lg tracking-wide hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    ENVIAR MENSAJE
                  </>
                )}
              </button>
            </form>
            
            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-custom-green/50">
              <div className="flex items-center justify-center space-x-2 text-custom-blue/70 text-sm">
                <div className="w-2 h-2 bg-custom-teal rounded-full animate-pulse"></div>
                <span>Respuesta garantizada en 24 horas</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-custom-blue/70 text-sm mt-2">
                <div className="w-2 h-2 bg-custom-lime rounded-full"></div>
                <span>Consulta inicial completamente gratuita</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Prefieres una llamada directa?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Si tienes un proyecto urgente o prefieres hablar directamente, 
              no dudes en llamarnos. Estamos disponibles para consultas inmediatas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+5493581234567"
                className="bg-custom-lime text-custom-blue px-8 py-4 rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center"
                aria-label="Llamar a CodeNova"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
              <a 
                href="https://wa.me/5493581234567?text=Hola%2C%20me%20interesa%20un%20proyecto%20de%20desarrollo%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-custom-blue transition-all duration-300 flex items-center justify-center"
                aria-label="Contactar por WhatsApp"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Schema.org structured data for local business */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contacto - CodeNova",
              "description": "Contacta a CodeNova para tu proyecto de desarrollo web en Río Cuarto, Córdoba",
              "mainEntity": {
                "@type": "Organization",
                "name": "CodeNova",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+54-358-123-4567",
                  "contactType": "customer service",
                  "email": "agustin.dardanelli@gmail.com",
                  "availableLanguage": ["Spanish"],
                  "hoursAvailable": "Mo-Fr 09:00-18:00"
                }
              }
            })
          }}
        />
      </div>
    </div>
  );
}