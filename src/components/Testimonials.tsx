'use client'
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 font-sans">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#a26e63] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 font-sans text-white">
            <p className="italic">"¡Increíble servicio! Mi negocio ha crecido gracias a su equipo."</p>
            <p className="mt-4 font-bold">- Cliente Satisfecho</p>
          </div>
          <div className="bg-[#a26e63] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 font-sans text-white">
            <p className="italic">"El trabajo realizado superó nuestras expectativas. ¡Recomendados!"</p>
            <p className="mt-4 font-bold">- Otro Cliente Satisfecho</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
