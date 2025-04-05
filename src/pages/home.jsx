import { Link } from "react-router-dom";

export  function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Potencia tu PC con <span className="text-red-600">la mejor placa de video</span>
          </h1>
          <p className="text-lg text-gray-300">
            Encontrá las últimas GPUs de NVIDIA, AMD y más. Rendimiento sin límites para gaming, diseño, machine learning y desarrollo.
          </p>
          <Link
            to="/productos"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
          >
            Ver productos
          </Link>
        </div>

        {/* Imagen ilustrativa */}
        <div className="flex justify-center">
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1767/innergigabyteimages/kf-img.png"
            alt="Imagen de GPU"
            className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
