'use client'
const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 font-sans">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#a26e63] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 font-sans text-white">
            <h3 className="text-2xl font-semibold mb-4">Marketing Digital</h3>
            <p>Estrategias personalizadas para tu negocio.</p>
          </div>
          <div className="bg-[#a26e63] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 font-sans text-white">
            <h3 className="text-2xl font-semibold mb-4">SEO</h3>
            <p>Optimización para motores de búsqueda.</p>
          </div>
          <div className="bg-[#a26e63] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 font-sans text-white">
            <h3 className="text-2xl font-semibold mb-4">Publicidad en Redes</h3>
            <p>Anuncios efectivos en plataformas digitales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
