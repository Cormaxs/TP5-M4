import { useContext } from "react";
import { FuncionesContext } from "../context/funcionesContext";

export function CrearProduct() {
  const { crearProduct } = useContext(FuncionesContext);

  const handleSubmit = async (e) => {  // Hacer la función async
    e.preventDefault();
    
    // 1. Capturar datos del formulario
    const formValues = Object.fromEntries(new FormData(e.target).entries());
    
    // 2. Formatear a la estructura que espera tu API
    const nuevoProducto = {
      detalles: {
        modelo: formValues.modelo,
        fabricante: formValues.fabricante,
        fecha_lanzamiento: formValues.fecha,
        memoria: formValues.memoria,
        nucleos_cuda: parseInt(formValues.nucleos),
        velocidad_reloj: formValues.velocidad
      },
      imagen: formValues.imagen
    };

    console.log("Datos formateados:", nuevoProducto);
    
    try {
      // 3. Llamar a la función crearProduct
      const resultado = await crearProduct(nuevoProducto);
      console.log("Producto creado:", resultado);
      // Aquí podrías redirigir o mostrar mensaje de éxito
    } catch (error) {
      console.error("Error al crear producto:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

    return (
        <div className="pt-20 min-h-screen">
       <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto ls:min-w-[90%] bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200 transition-all duration-300"
>
  <h2 className="text-2xl font-bold text-center text-red-600">Crear Producto</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      name="modelo"
      type="text"
      placeholder="Modelo"
      required
      className="input-field"
    />
    <input
      name="fabricante"
      type="text"
      placeholder="Fabricante"
      required
      className="input-field"
    />
    <input
      name="fecha"
      type="date"
      placeholder="Fecha de lanzamiento"
      required
      className="input-field"
    />
    <input
      name="memoria"
      type="text"
      placeholder="Memoria"
      required
      className="input-field"
    />
    <input
      name="nucleos"
      type="number"
      placeholder="Núcleos CUDA"
      required
      className="input-field"
    />
    <input
      name="velocidad"
      type="text"
      placeholder="Velocidad de reloj"
      required
      className="input-field"
    />
    <input
      name="imagen"
      type="url"
      placeholder="URL de la imagen"
      required
      className="input-field col-span-full"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
  >
    Crear
  </button>
</form>
</div>
    );
}