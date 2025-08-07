'use client';
import React from 'react';
import { User, Mail, Phone, MessageSquare, ArrowRight, MapPin, Clock, Send } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('¡Mensaje enviado exitosamente! Te responderemos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      detail: 'agustin.dardanelli@gmail.com',
      description: 'Respuesta en 24hs'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Teléfono',
      detail: '+54 9 358 123-4567',
      description: 'Lun - Vie: 9AM - 6PM'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Ubicación',
      detail: 'Río Cuarto, Córdoba',
      description: 'Argentina'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-blue to-custom-teal py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¡Hablemos de tu <span className="text-custom-lime">Proyecto</span>!
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para transformar tus ideas en realidad digital. 
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-custom-lime" />
                Información de Contacto
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Estamos aquí para ayudarte a materializar tu proyecto. Ponte en contacto con nosotros y conversemos sobre tus ideas.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-custom-lime to-white rounded-lg flex items-center justify-center text-custom-blue">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-custom-lime font-medium">{info.detail}</p>
                      <p className="text-white/70 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Response Time Info */}
            <div className="bg-gradient-to-r from-custom-lime/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-custom-lime/30">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-custom-lime" />
                <h4 className="text-white font-semibold">Tiempo de Respuesta</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Nos comprometemos a responder todos los mensajes en un plazo máximo de 24 horas durante días hábiles.
              </p>
            </div>

            {/* Additional Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-4">¿Por qué elegirnos?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-lime rounded-full"></div>
                  <span className="text-white/80 text-sm">Consulta inicial gratuita</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-lime rounded-full"></div>
                  <span className="text-white/80 text-sm">Presupuesto sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-lime rounded-full"></div>
                  <span className="text-white/80 text-sm">Soporte técnico incluido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-lime rounded-full"></div>
                  <span className="text-white/80 text-sm">Garantía de satisfacción</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-custom-blue mb-2">
                Envíanos un Mensaje
              </h3>
              <p className="text-custom-blue/70">
                Completa el formulario y te contactaremos pronto
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-custom-blue font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                    <input
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-custom-blue font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                    <input
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-custom-blue font-medium mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-custom-teal w-5 h-5" />
                  <input
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
                <label className="block text-custom-blue font-medium mb-2">
                  Tipo de Proyecto
                </label>
                <select 
                  name="tipoProyecto"
                  className="w-full px-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 text-custom-blue transition-all duration-300"
                >
                  <option value="">Selecciona el tipo de proyecto</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="optimizacion">Optimización de Sitio</option>
                  <option value="consultoria">Consultoría Técnica</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app-movil">Aplicación Móvil</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-custom-blue font-medium mb-2">
                  Mensaje *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-custom-teal w-5 h-5" />
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline y cualquier detalle importante..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-custom-green border border-custom-green focus:border-custom-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-teal/20 resize-none text-custom-blue placeholder-custom-blue/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-gradient-to-r from-custom-teal to-custom-blue text-white rounded-xl py-4 font-semibold text-lg tracking-wide hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
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
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Prefieres una llamada directa?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Si tienes un proyecto urgente o prefieres hablar directamente, 
              no dudes en llamarnos. Estamos disponibles para consultas inmediatas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+5493581234567"
                className="bg-custom-lime text-custom-blue px-8 py-4 rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
              <a 
                href="https://wa.me/5493581234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-custom-blue transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}