'use client'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Mi Agencia</div>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="#services">Servicios</Link></li>
          <li><Link href="#testimonials">Testimonios</Link></li>
          <li><Link href="#contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
