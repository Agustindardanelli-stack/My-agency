import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-800 to-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CN</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Code<span className="text-green-600">Nova</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">
              Proyectos
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Servicios
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="#home" className="block py-2 text-gray-700 hover:text-green-600">
              Inicio
            </Link>
            <Link href="#projects" className="block py-2 text-gray-700 hover:text-green-600">
              Proyectos
            </Link>
            <Link href="#services" className="block py-2 text-gray-700 hover:text-green-600">
              Servicios
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-green-600">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};