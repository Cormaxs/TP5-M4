import { createContext, useState } from "react";
import {
  API_GET,
  API_GET_ID,
  API_POST,
  API_PUT_ID,
  API_DELETE_ID,
} from "../api/api";

export const FuncionesContext = createContext();

export function FuncionesProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  const crearProduct = async (nuevoProducto) => {
    try {
      setLoading(true)
      const carga = await API_POST(nuevoProducto);
      return carga;
    } catch (err) {
      console.error("Error al crear producto:", err);
      throw err;
    }finally{
      setLoading(false)
    }
  };

  const editarProduct = async (id, datosActualizados) => {
    try {
      setLoading(true)
      const editar = await API_PUT_ID(id, datosActualizados);
      console.log("Producto editado:", editar);
      return editar;
    } catch (err) {
      console.error(`Error al editar el producto con ID ${id}:`, err);
      throw err;
    }finally{
      setLoading(false)
    }
  };

  const eliminarProduct = async (id) => {
    try {
      setLoading(true)
      const eliminar = await API_DELETE_ID(id);
      console.log("Producto eliminado:", eliminar);
      return eliminar;
    } catch (err) {
      console.error(`Error al eliminar el producto con ID ${id}:`, err);
      throw err;
    }finally{
      setLoading(false)
    }
  };

  const traerProduct = async (id) => {
    try {
      setLoading(true)
      const product = await API_GET_ID(id);
      setProducto(product);
      return product;
    } catch (err) {
      console.error(`Error al obtener producto con ID ${id}:`, err);
      throw err;
    }finally{
      setLoading(false)
    }
  };

  const traerProductos = async () => {
    try {
      setLoading(true);
      const data = await API_GET();
      setProductos(data);
      return data;
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setProductos([]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const Cargando = ()=>{
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin shadow-xl"></div>
      </div>
    );
  }


  return (
    <FuncionesContext.Provider
      value={{
        crearProduct,
        editarProduct,
        eliminarProduct,
        traerProduct,
        traerProductos,
        Cargando,
        productos,
        loading,
        producto,
      }}
    >
      {children}
    </FuncionesContext.Provider>
  );
}
