"use client"
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 md:pt-0 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 h-screen bg-opacity-90 bg-blend-overlay" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Impulsa tu negocio</h1>
          <p className="text-xl md:text-2xl text-white mb-10 opacity-90 animate-fade-in-delay">Con nuestra agencia de marketing digital especializada en resultados</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
            <Link href="#contacto" className="bg-orange-500 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
              Contáctanos
            </Link>
            <Link href="#servicios" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
              Nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}