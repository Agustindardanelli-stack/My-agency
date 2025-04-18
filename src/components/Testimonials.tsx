"use client"

export default function Testimonios() {
  const testimonios = [
    {
      texto: "Mi Agencia transformó completamente nuestra presencia online. Las ventas han aumentado un 40% desde que comenzamos a trabajar con ellos.",
      autor: "Carlos Rodríguez",
      cargo: "CEO, TechSolutions"
    },
    {
      texto: "El equipo de Mi Agencia realmente entiende nuestro negocio. Su enfoque estratégico ha sido clave para nuestro crecimiento.",
      autor: "Laura Martínez",
      cargo: "Directora de Marketing, InnovaShop"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Testimonios</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Lo que nuestros clientes dicen sobre nosotros</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 relative">
                <p className="text-gray-600 mb-4 italic">&quot;{testimonio.texto}&quot;</p>
                <div className="flex items-center mt-6">
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonio.autor}</h4>
                    <p className="text-gray-500 text-sm">{testimonio.cargo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}