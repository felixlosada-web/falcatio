"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F6F2]/95 px-6 md:px-12 lg:px-24 py-10 flex justify-between items-center border-b border-black/5">
      <Link href="/" className="flex flex-col items-center gap-4 group">
        <img 
          src="/logo-falcatio.png" 
          alt="Falcatio" 
          className="w-20 h-auto opacity-90 transition-opacity group-hover:opacity-100" 
        />
        <div className="flex flex-col items-center text-center">
          <span className="text-[15px] tracking-[0.18em] text-black uppercase font-medium leading-none">
            Falcatio Librorum
          </span>
          <span className="text-[9px] tracking-[0.12em] text-black/40 uppercase mt-2">
            Curaduría Bibliográfica Privada
          </span>
        </div>
      </Link>
      
      <nav className="flex gap-x-8 text-[10px] tracking-[0.2em] uppercase">
        <Link href="/filosofia" className={`transition-colors ${pathname === '/filosofia' ? 'text-black' : 'text-black/40 hover:text-black'}`}>Filosofía</Link>
        <Link href="/scrinium" className={`transition-colors ${pathname === '/scrinium' ? 'text-black' : 'text-black/40 hover:text-black'}`}>Obra mínima</Link>
        <Link href="/conversacion" className={`transition-colors ${pathname === '/conversacion' ? 'text-black' : 'text-black/40 hover:text-black'}`}>La conversación</Link>
        <Link href="/acceso" className={`transition-colors ${pathname === '/acceso' ? 'text-black' : 'text-black/40 hover:text-black'}`}>El Acceso</Link>
      </nav>
    </header>
  );
}