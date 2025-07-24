'use client';
import React from 'react';
import { User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  interface FormData {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  }

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias!');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
        {/* Decorativos */}
        <span className="absolute top-6 left-8 text-yellow-300 text-2xl">+</span>
        <span className="absolute top-10 right-10 text-blue-400 text-2xl">+</span>
        <span className="absolute bottom-8 left-10 text-yellow-300 text-xl">+</span>
        <span className="absolute bottom-10 right-8 text-blue-400 text-xl">+</span>
        <span className="absolute top-4 right-1 text-gray-400 text-xl">×</span>
        <span className="absolute bottom-4 left-2 text-gray-400 text-xl">×</span>
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-custom-teal mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="nombre"
              placeholder="Username"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal text-gray-700"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal text-gray-700"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="telefono"
              type="tel"
              placeholder="Phone"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal text-gray-700"
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-gray-400" />
            <textarea
              name="mensaje"
              placeholder="Message"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-custom-teal resize-none text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-custom-teal text-white rounded-full py-3 font-bold text-lg tracking-wide hover:bg-custom-green transition-all duration-300 mt-2"
          >
            SEND <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}