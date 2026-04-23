export default function Footer() {
  return (
    <footer className="bg-[#F8F6F2] py-16 border-t border-black/5">
      <div className="flex flex-col items-center">
        {/* Contenedor del Logo y Texto */}
        <div className="flex flex-col items-center group">
          <img 
            src="/logo-falcatio.png" 
            alt="Falcatio" 
            className="w-12 h-auto opacity-40 mb-3" // He reducido el margen inferior (mb-3)
          />
          <div className="flex flex-col items-center text-center">
            <span className="text-[12px] tracking-[0.2em] text-black/60 uppercase font-medium leading-none">
              Falcatio Librorum
            </span>
            <span className="text-[8px] tracking-[0.15em] text-black/30 uppercase mt-1.5">
              Curaduría Bibliográfica Privada
            </span>
          </div>
        </div>
        
        {/* Copyright o enlaces adicionales si los tienes */}
        <div className="mt-10 text-[9px] tracking-widest text-black/20 uppercase">
          © {new Date().getFullYear()} — Madrid
        </div>
      </div>
    </footer>
  );
}