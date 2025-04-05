import { useContext, useEffect } from "react";
import { FuncionesContext } from "../context/funcionesContext";
import { useParams, Link } from "react-router-dom";


export function Producto() {
  const { traerProduct,eliminarProduct, producto } = useContext(FuncionesContext);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await traerProduct(id);
    })();
  }, [id]);


  if (!producto) return <div className="text-center py-10 text-white">Cargando producto...</div>;
  if (!producto.detalles) return <div className="text-center py-10 text-white">Producto sin detalles</div>;

  return (
     <section className="py-25 min-h-screen bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="h-64 md:h-auto">
            <img
              src={producto.imagen}
              alt={`Imagen de ${producto.detalles.modelo}`}
              className="w-full h-full object-cover md:rounded-l-3xl rounded-t-3xl md:rounded-t-none"
            />
          </div>

          {/* Detalles */}
          <div className="p-8 md:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-red-500">
                {producto.detalles.modelo}
              </h2>
              <p className="text-lg text-gray-300">
                Fabricante:{" "}
                <span className="text-white font-semibold">
                  {producto.detalles.fabricante}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Lanzamiento: {producto.detalles.fecha_lanzamiento}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-800 p-5 rounded-xl shadow-inner">
                  <p className="text-sm text-gray-400">Memoria</p>
                  <p className="text-xl font-semibold text-white">
                    {producto.detalles.memoria}
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl shadow-inner">
                  <p className="text-sm text-gray-400">Núcleos CUDA</p>
                  <p className="text-xl font-semibold text-white">
                    {producto.detalles.nucleos_cuda}
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl shadow-inner col-span-full">
                  <p className="text-sm text-gray-400">Velocidad de reloj</p>
                  <p className="text-xl font-semibold text-white">
                    {producto.detalles.velocidad_reloj}
                  </p>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={async () => await eliminarProduct(id)}
                className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
              >
                Eliminar
              </button>

              
                <button className="bg-gray-700 hover:bg-gray-600 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                 <Link to={`/actualizarproduct/${id}`}> Editar </Link>
                </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
