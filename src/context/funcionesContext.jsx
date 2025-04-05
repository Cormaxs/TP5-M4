import { createContext, useEffect, useState } from "react";
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
      const carga = await API_POST(nuevoProducto);
      console.log("Producto creado:", carga);
      return carga;
    } catch (err) {
      console.error("Error al crear producto:", err);
      throw err;
    }
  };

  const editarProduct = async (id, datosActualizados) => {
    try {
      const editar = await API_PUT_ID(id, datosActualizados);
      console.log("Producto editado:", editar);
      return editar;
    } catch (err) {
      console.error(`Error al editar el producto con ID ${id}:`, err);
      throw err;
    }
  };

  const eliminarProduct = async (id) => {
    try {
      const eliminar = await API_DELETE_ID(id);
      console.log("Producto eliminado:", eliminar);
      return eliminar;
    } catch (err) {
      console.error(`Error al eliminar el producto con ID ${id}:`, err);
      throw err;
    }
  };

  const traerProduct = async (id) => {
    try {
      const product = await API_GET_ID(id);
      setProducto(product);
      return product;
    } catch (err) {
      console.error(`Error al obtener producto con ID ${id}:`, err);
      throw err;
    }
  };

  const traerProductos = async () => {
    try {
      setLoading(true);
      console.log("Cargando productos...");

      const data = await API_GET();
      setProductos(data);
      return data;
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setProductos([]);
      throw err;
    } finally {
      setLoading(false);
      console.log("Fin de la carga");
    }
  };

  return (
    <FuncionesContext.Provider
      value={{
        crearProduct,
        editarProduct,
        eliminarProduct,
        traerProduct,
        traerProductos,
        productos,
        loading,
        producto,
      }}
    >
      {children}
    </FuncionesContext.Provider>
  );
}
