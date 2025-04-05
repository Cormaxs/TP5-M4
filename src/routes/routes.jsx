import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import {CrearProduct} from "../pages/crear"
import { Productos } from "../pages/productos";
import { Producto } from "../pages/producto";
import { EditarProducto } from "../pages/actualizar";
import { NotFound } from "../pages/error404";

export function Ubicaciones(){

    return(
        <>
       
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/productos" element={<Productos/>}/>
            <Route path="/producto/:id" element={<Producto/>}/>

            <Route path="/crearproduct" element={<CrearProduct/>}/>

            <Route path="/actualizarproduct/:id" element={<EditarProducto/>}/>

            <Route path="/delete/:id" element={"delete"}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes></>
    )
}