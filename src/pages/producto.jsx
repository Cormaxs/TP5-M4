import { useContext, useEffect } from "react";
import { FuncionesContext } from "../context/funcionesContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



export function Producto() {
  const { traerProduct,eliminarProduct, producto, Cargando, loading } = useContext(FuncionesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await traerProduct(id);
    })();
  }, [id]);


  if(loading){return Cargando() }
   if(producto.detalles){
  return (
    
     <section className="py-25 min-h-screen bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="h-64 md:h-auto">
            <img
              src={producto.imagen}
              alt={`Imagen de ${producto.detalles.modelo}`}
              className="w-full h-full object-contain bg-black/90 md:rounded-l-3xl rounded-t-3xl md:rounded-t-none"
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
  onClick={() => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#b91c1c', 
      cancelButtonColor: '#1e40af',  
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#1f2937', 
      color: '#fff',
      customClass: {
        popup: 'rounded-2xl shadow-lg',
        title: 'text-red-500 text-2xl font-bold',
        confirmButton: 'px-6 py-2 font-semibold rounded-md',
        cancelButton: 'px-6 py-2 font-semibold rounded-md'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarProduct(id);
        Swal.fire({
          title: 'Eliminado',
          text: 'El producto fue eliminado con éxito.',
          icon: 'success',
          background: '#1f2937',
          color: '#fff',
          confirmButtonColor: '#16a34a', 
          confirmButtonText: 'OK',
          customClass: {
            popup: 'rounded-2xl shadow-md',
            title: 'text-green-500 text-xl font-bold',
            confirmButton: 'px-5 py-2 rounded-lg font-medium'
          }
        });
        navigate('/productos');
      }
    });
  }}
  className="bg-red-600 hover:bg-red-700 transition-all text-white font-bold px-8 py-3 rounded-2xl shadow-lg"
>
  Eliminar Producto
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
}
