'use client'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-cover bg-center  h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Impulsa tu negocio</h1>
        <p className="text-lg md:text-2xl mb-6">Con nuestra agencia de marketing digital</p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Contáctanos</a>
      </div>
    </section>
  );
};

export default Hero;
