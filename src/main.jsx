import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import {FuncionesProvider} from "./context/funcionesContext.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-black min-h-screen'> 
    <FuncionesProvider>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </FuncionesProvider>
    </div>
  </StrictMode>,
)
