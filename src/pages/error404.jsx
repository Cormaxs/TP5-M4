import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto principal */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-red-600">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            Página no encontrada
          </h2>
          <p className="text-gray-300 text-lg">
            Lo sentimos, no pudimos encontrar lo que estabas buscando. Es posible que el enlace esté roto o que la página haya sido movida.
          </p>
          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Imagen ilustrativa */}
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/qIufhof.png" // puedes cambiarla si tienes otra preferida
            alt="Página no encontrada"
            className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
