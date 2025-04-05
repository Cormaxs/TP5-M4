import { createContext, useEffect, useState } from "react";
import {
    API_GET,
    API_GET_ID, 
    API_POST, 
    API_PUT_ID,
    API_DELETE_ID} from "../api/api"

export const FuncionesContext = createContext();




export function FuncionesProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] =useState([])
    const [loading, setLoading] = useState(false);
    



    const crearProduct = async (nuevoProducto) => {
        console.log(nuevoProducto)
       try{
        const carga = await API_POST(nuevoProducto);
        console.log(carga);
        return carga;
       }catch(err){
        console.error(err)
       }finally{

       }
    };

    const editarProduct = async (id, datosActualizados) => {
        const editar = await API_PUT_ID(id, datosActualizados)
        return editar;
    };

    const eliminarProduct = async (id) => {
       const eliminar = await API_DELETE_ID(id);
        console.log(eliminar)
        return eliminar;
    };

    const traerProduct = async (id) => {
        const product = await API_GET_ID(id);
        return setProducto(product) ;
    };

    const traerProductos = async () => {
        try {
          setLoading(true); // Correcto: establecer loading directamente a true
          console.log("Cargando productos...");
          
          const data = await API_GET();
          setProductos(data);
          return data;
        } catch (err) {
          console.error("Error al obtener productos:", err);
          setProductos([]); // Resetear productos en caso de error
          throw err; // Propagar el error
        } finally {
          setLoading(false); // Correcto: establecer loading directamente a false
          console.log("fin carga");
        }
      };


    
    return (
        <FuncionesContext.Provider 
            value={{ crearProduct, editarProduct, eliminarProduct, traerProduct, traerProductos, productos, loading, producto }}
        >
            {children}
        </FuncionesContext.Provider>
    );
}