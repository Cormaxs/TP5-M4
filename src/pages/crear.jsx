import { useContext } from "react";
import { FuncionesContext } from "../context/funcionesContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export function CrearProduct() {
  const { crearProduct } = useContext(FuncionesContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValues = Object.fromEntries(new FormData(e.target).entries());

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

    try {
      const resultado = await crearProduct(nuevoProducto);
      toast.success(`Producto ${nuevoProducto.detalles.modelo} creado correctamente`);
      navigate("/productos");
    } catch (error) {
      console.error("Error al crear producto:", error);
      toast.error(`Error al crear ${nuevoProducto.detalles.modelo}`);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4 pt-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-red-600">Crear Producto</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="modelo" type="text" placeholder="Modelo" required className="input-style" />
          <input name="fabricante" type="text" placeholder="Fabricante" required className="input-style" />
          <input name="fecha" type="date" required className="input-style" />
          <input name="memoria" type="text" placeholder="Memoria" required className="input-style" />
          <input name="nucleos" type="number" placeholder="Núcleos CUDA" required className="input-style" />
          <input name="velocidad" type="text" placeholder="Velocidad de reloj" required className="input-style" />
          <input name="imagen" type="url" placeholder="URL de la imagen" required className="input-style sm:col-span-2" />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg"
        >
          Crear
        </button>
      </form>
    </section>
  );
}


