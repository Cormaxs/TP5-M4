import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FuncionesContext } from "../context/funcionesContext";

export function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { producto, traerProduct, editarProduct } = useContext(FuncionesContext);

  const [formData, setFormData] = useState({
    modelo: "",
    fabricante: "",
    fecha_lanzamiento: "",
    memoria: "",
    nucleos_cuda: "",
    velocidad_reloj: "",
    imagen: "",
  });

  useEffect(() => {
    (async () => {await traerProduct(id);})();
  }, [id]);

  useEffect(() => {
    if (producto.detalles) {
      setFormData({
        modelo: producto.detalles.modelo || "",
        fabricante: producto.detalles.fabricante || "",
        fecha_lanzamiento: producto.detalles.fecha_lanzamiento || "",
        memoria: producto.detalles.memoria || "",
        nucleos_cuda: producto.detalles.nucleos_cuda || "",
        velocidad_reloj: producto.detalles.velocidad_reloj || "",
        imagen: producto.imagen || "",
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datosActualizados = {
      id,
      detalles: {
        modelo: formData.modelo,
        fabricante: formData.fabricante,
        fecha_lanzamiento: formData.fecha_lanzamiento,
        memoria: formData.memoria,
        nucleos_cuda: parseInt(formData.nucleos_cuda),
        velocidad_reloj: formData.velocidad_reloj,
      },
      imagen: formData.imagen,
    };

    await editarProduct(id, datosActualizados);
    navigate(`/producto/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white flex items-center justify-center px-4 py-16">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-3xl bg-gray-900 rounded-3xl p-10 space-y-8 shadow-2xl border border-gray-800"
  >
    <h2 className="text-4xl font-extrabold text-center text-red-600">Editar GPU</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="modelo"
        type="text"
        value={formData.modelo}
        onChange={handleChange}
        placeholder="Modelo"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="fabricante"
        type="text"
        value={formData.fabricante}
        onChange={handleChange}
        placeholder="Fabricante"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="fecha_lanzamiento"
        type="date"
        value={formData.fecha_lanzamiento}
        onChange={handleChange}
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="memoria"
        type="text"
        value={formData.memoria}
        onChange={handleChange}
        placeholder="Memoria"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="nucleos_cuda"
        type="number"
        value={formData.nucleos_cuda}
        onChange={handleChange}
        placeholder="Núcleos CUDA"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="velocidad_reloj"
        type="text"
        value={formData.velocidad_reloj}
        onChange={handleChange}
        placeholder="Velocidad de reloj"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      />
      <input
        name="imagen"
        type="url"
        value={formData.imagen}
        onChange={handleChange}
        placeholder="URL de la imagen"
        required
        className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition md:col-span-2"
      />
    </div>

    <div className="text-center pt-4">
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 px-8 py-3 text-white rounded-2xl font-bold shadow-lg transition-all"
      >
        Guardar Cambios
      </button>
    </div>
  </form>
</div>

  );
}
