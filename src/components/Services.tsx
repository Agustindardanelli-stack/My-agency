"use client"

export default function Servicios() {
  const servicios = [
    {
      icono: "fa-search",
      titulo: "SEO",
      descripcion: "Optimizamos tu sitio web para los motores de búsqueda, aumentando tu visibilidad online."
    },
    {
      icono: "fa-bullhorn",
      titulo: "Social Media",
      descripcion: "Estrategias personalizadas para potenciar tu presencia en redes sociales."
    },
    {
      icono: "fa-ad",
      titulo: "Publicidad Digital",
      descripcion: "Campañas de anuncios optimizadas para maximizar el retorno de inversión."
    },
    {
      icono: "fa-laptop-code",
      titulo: "Desarrollo Web",
      descripcion: "Sitios web atractivos y funcionales que convierten visitas en clientes."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Soluciones digitales diseñadas para hacer crecer tu negocio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <i className={`fas ${servicio.icono}`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}