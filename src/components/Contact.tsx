"use client"
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario después de enviar
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    // Mostrar mensaje de éxito
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">¿Listo para impulsar tu negocio? Hablemos hoy mismo</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-1">Ubicación</h4>
                <p className="text-gray-600">Calle Principal 123, Ciudad</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-1">Email</h4>
                <p className="text-gray-600">info@miagencia.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-1">Teléfono</h4>
                <p className="text-gray-600">+34 612 345 678</p>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                />
              </div>
              <div>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-blue-900 text-white py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}