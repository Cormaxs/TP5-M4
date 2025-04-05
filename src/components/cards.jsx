import { useContext, useEffect } from "react";
import { FuncionesContext } from "../context/funcionesContext";
import { Producto } from "../pages/producto";
import { Link } from "react-router-dom";


export function Cards() {
  const { traerProductos, productos } = useContext(FuncionesContext);

  useEffect(() => {
    (async () => {await traerProductos();})();
  }, []); 

  // Protección contra accesos a propiedades undefined


  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((product) => (
            <Link
              key={product.id}
              to={`/producto/${product.id}`}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={product.imagen}
                  alt={`Imagen de ${product.detalles.modelo}`}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 space-y-2">
                  <h3 className="text-2xl font-bold text-red-500 group-hover:underline">
                    {product.detalles.modelo}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {product.detalles.fabricante}
                  </p>

                  <div className="text-sm text-gray-400 space-y-1">
                    <p>
                      <span className="text-white font-semibold">Lanzamiento:</span>{" "}
                      {product.detalles.fecha_lanzamiento}
                    </p>
                    <p>
                      <span className="text-white font-semibold">Memoria:</span>{" "}
                      {product.detalles.memoria}
                    </p>
                    <p>
                      <span className="text-white font-semibold">Núcleos CUDA:</span>{" "}
                      {product.detalles.nucleos_cuda}
                    </p>
                    <p>
                      <span className="text-white font-semibold">Velocidad:</span>{" "}
                      {product.detalles.velocidad_reloj}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}