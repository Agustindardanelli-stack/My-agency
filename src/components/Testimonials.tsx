'use client'
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">"¡Increíble servicio! Mi negocio ha crecido gracias a su equipo."</p>
            <p className="font-bold">- Cliente Satisfecho</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">"Resultados impresionantes en poco tiempo. Altamente recomendados."</p>
            <p className="font-bold">- Otro Cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
