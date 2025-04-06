# 🎮 GraphicStore - Gestor de Productos de GPUs

Aplicación web construida con **React** para gestionar un catálogo de tarjetas gráficas (GPUs). Permite **crear**, **leer**, **actualizar** y **eliminar** productos con un diseño moderno, animaciones suaves y una interfaz responsive.

### Enlace para ver el despliegue
[Tp5-M4-GraphicStore](https://tp-5-m4.vercel.app/)

## 🚀 Características principales
- 🖥️ Catálogo completo de GPUs con detalles técnicos  
- ➕ Creación de nuevos productos  
- ✏️ Edición de productos existentes  
- 🗑️ Eliminación de productos  
- 🔍 Visualización detallada de cada producto  
- 🌐 Diseño responsive para todos los dispositivos  
- 🎨 Interfaz moderna con TailwindCSS  
- ⚡ Animaciones fluidas con Framer Motion  

## 🛠️ Tecnologías utilizadas
### Frontend
- React 19  
- React Router DOM  
- TailwindCSS  
- Framer Motion (animaciones)  
- SweetAlert2 (alertas interactivas)  
- React Toastify (notificaciones)  
- Axios (llamadas HTTP)  
### Backend
- mockapi.io

## 📦 Instalación
1. **Clona el repositorio:**
```bash
git clone [git@github.com:Cormaxs/TP5-M4.git]
```

2. **Instala las dependencias:**
```bash 
npm install 
```

 3. **Inicia el servidor de desarrollo:**
 ```bash
 npm run dev
```
---

 ## 🧱 Estructura del proyecto
  ```bash
 src/
├── api                       # carpeta llamado al backend
│   ├── api.js
├── components/               # Componentes reutilizables
│   ├── cards.jsx             # Tarjetas de productos
│   ├── footer.jsx            # Pie de página
│   └── menu.jsx              # Barra de navegación
├── context/
│   └── funcionesContext.jsx  # Contexto global (estado y lógica)
├── pages/                    # Vistas principales
│   ├── actualizar.jsx        # Edición de productos
│   ├── crear.jsx             # Crear nuevo producto
│   ├── error404.jsx          # Página de error 404
│   ├── home.jsx              # Página de inicio
│   ├── producto.jsx          # Detalle de producto
│   └── productos.jsx         # Listado de productos
├── routes/
│   └── routes.jsx            # Definición de rutas
└── App.jsx                   # Componente principal
 ```

Archivo de funciones API (uso con Axios)

```bash
import axios from "axios";

const baseUrl = "https://67efd81f2a80b06b8895fce5.mockapi.io/Api/v1/graficas";

// Obtener todos los productos
export async function API_GET() {
  try {
    const peticion = await axios.get(baseUrl);
    return peticion.data;
  } catch (err) {
    console.error("Error en API_GET:", err);
    throw err;
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
```
----

### Scripts disponibles

**Inicia el servidor de desarrollo**
```bash
npm run dev
```
**Genera versión optimizada para producción**
```bash
npm run build
```
**Ejecuta linter para verificar el código**
```bash
npm run lint
```
**Previsualiza la app de producción**
```bash
npm run preview
```