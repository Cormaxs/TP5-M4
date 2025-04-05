import axios from "axios";

const baseUrl = "https://67efd81f2a80b06b8895fce5.mockapi.io/Api/v1/graficas";

// Obtener todos los productos
export async function API_GET() {
  try {
    const peticion = await axios.get(baseUrl);
    return peticion.data;
  } catch (err) {
    console.error("Error en API_GET:", err);
    throw err; // Propagamos el error para que lo maneje el componente llamador
  }
}

// Obtener un producto por ID
export async function API_GET_ID(id) {
  try {
    const peticion = await axios.get(`${baseUrl}/${id}`);
    return peticion.data;
  } catch (err) {
    console.error(`Error en API_GET_ID con ID ${id}:`, err);
    throw err;
  }
}

// Crear un nuevo producto
export async function API_POST(datos) {
  try {
    const peticion = await axios.post(baseUrl, datos);
    return peticion.data;
  } catch (err) {
    console.error("Error en API_POST:", err);
    throw err;
  }
}

// Editar un producto por ID
export async function API_PUT_ID(id, datos) {
  try {
    const peticion = await axios.put(`${baseUrl}/${id}`, datos);
    return peticion.data;
  } catch (err) {
    console.error(`Error en API_PUT_ID con ID ${id}:`, err);
    throw err;
  }
}

// Eliminar un producto por ID
export async function API_DELETE_ID(id) {
  try {
    const peticion = await axios.delete(`${baseUrl}/${id}`);
    return peticion.data;
  } catch (err) {
    console.error(`Error en API_DELETE_ID con ID ${id}:`, err);
    throw err;
  }
}
