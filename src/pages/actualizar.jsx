import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FuncionesContext } from "../context/funcionesContext";
import Swal from 'sweetalert2';

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
    (async () => {
      await traerProduct(id);
    })();
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

  const handleSubmit = async () => {
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

    Swal.fire({
      title: 'Modificado',
      text: 'El producto fue actualizado con éxito.',
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

    navigate(`/producto/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex items-center justify-center px-4 py-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-3xl bg-gray-900 rounded-3xl p-10 space-y-10 shadow-2xl border border-gray-800"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-600">
          Editar GPU
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "modelo", placeholder: "Modelo" },
            { name: "fabricante", placeholder: "Fabricante" },
            { name: "fecha_lanzamiento", placeholder: "Fecha de lanzamiento", type: "date" },
            { name: "memoria", placeholder: "Memoria" },
            { name: "nucleos_cuda", placeholder: "Núcleos CUDA", type: "number" },
            { name: "velocidad_reloj", placeholder: "Velocidad de reloj" },
          ].map(({ name, placeholder, type = "text" }) => (
            <input
              key={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="bg-gray-800 text-white px-5 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
          ))}

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

        <div className="text-center">
          <button
            onClick={() => {
              Swal.fire({
                title: '¿Guardar cambios?',
                text: 'Estás por modificar los datos del producto.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#16a34a', // verde-600
                cancelButtonColor: '#1e40af',  // azul oscuro
                confirmButtonText: 'Sí, modificar',
                cancelButtonText: 'Cancelar',
                background: '#1f2937',
                color: '#fff',
                customClass: {
                  popup: 'rounded-2xl shadow-lg',
                  title: 'text-yellow-400 text-2xl font-bold',
                  confirmButton: 'px-6 py-2 font-semibold rounded-md',
                  cancelButton: 'px-6 py-2 font-semibold rounded-md'
                }
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await handleSubmit();
                }
              });
            }}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 text-white rounded-2xl font-bold shadow-lg transition-all"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}
