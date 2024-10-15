'use client'
const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Marketing Digital</h3>
            <p className="text-gray-700">Estrategias personalizadas para tu negocio.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">SEO</h3>
            <p className="text-gray-700">Optimización para motores de búsqueda.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Publicidad en Redes</h3>
            <p className="text-gray-700">Anuncios efectivos en plataformas digitales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
