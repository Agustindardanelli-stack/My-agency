"use client"
import { useState } from 'react';
import Hero from '@/components/Hero';
import Servicios from '@/components/Services';
import Testimonios from '@/components/Testimonials';
import Contacto from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-gray-900 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link href="/">
              Mi Agencia
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={`md:flex ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-gray-900 p-4' : 'hidden'} md:relative md:top-0 md:bg-transparent md:p-0`}>
            <ul className="md:flex md:space-x-8">
              <li className="mb-2 md:mb-0">
                <Link href="#inicio" className="text-white hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all duration-300">
                  Inicio
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link href="#servicios" className="text-white hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all duration-300">
                  Servicios
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link href="#testimonios" className="text-white hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all duration-300">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-xl focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Servicios />
        <Testimonios />
        <Contacto />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Logo y descripción */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mi Agencia</h3>
              <p className="text-gray-400 mb-6">Soluciones de marketing digital para impulsar tu negocio.</p>
            </div>
            
            {/* Enlaces rápidos */}
            <div>
              <h4 className="text-xl font-bold mb-4 relative inline-block">
                Enlaces rápidos
                <span className="absolute bottom-0 left-0 w-10 h-1 bg-orange-500"></span>
              </h4>
              <ul className="space-y-2">
                <li><Link href="#inicio" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Inicio</Link></li>
                <li><Link href="#servicios" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Servicios</Link></li>
                <li><Link href="#testimonios" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Testimonios</Link></li>
                <li><Link href="#contacto" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Contacto</Link></li>
              </ul>
            </div>
            
            {/* Redes sociales */}
            <div>
              <h4 className="text-xl font-bold mb-4 relative inline-block">
                Síguenos
                <span className="absolute bottom-0 left-0 w-10 h-1 bg-orange-500"></span>
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">&copy; 2025 Mi Agencia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}