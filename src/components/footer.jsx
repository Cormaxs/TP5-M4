export function Footer(){
    return(
        <>
         <footer className="w-full bg-gray-900/80 backdrop-blur-md border-t border-black shadow-inner text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-center text-sm w-full">&copy; {new Date().getFullYear()} <span className="text-[#e7000b] font-semibold">GraphicStore</span>. Todos los derechos reservados.</p>
        
        
      </div>
    </footer>

        </>
    )
}