import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Menuu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold text-red-600 tracking-wide hover:scale-110 transition-all ease-in-out duration-75">GraphicStore</h1>
          </Link>

          {/* Botón menú mobile */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-black"
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menú desktop */}
          <ol className="hidden md:flex space-x-8 text-black font-medium">
            <li>
              <Link to="/" className="hover:text-red-600 transition-colors">Inicio</Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-red-600 transition-colors">Productos</Link>
            </li>
            <li>
              <Link to="/crearproduct" className="hover:text-red-600 transition-colors">Agregar producto</Link>
            </li>
          </ol>
        </div>
      </div>

      {/* Menú mobile con animación */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-300 shadow-md"
          >
            <ol className="flex flex-col space-y-4 p-4 text-black font-medium">
              <li>
                <Link to="/" className="hover:text-red-600" onClick={() => setMenuAbierto(false)}>Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-red-600" onClick={() => setMenuAbierto(false)}>Productos</Link>
              </li>
              <li>
                <Link to="/crearproduct" className="hover:text-red-600" onClick={() => setMenuAbierto(false)}>Agregar producto</Link>
              </li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
