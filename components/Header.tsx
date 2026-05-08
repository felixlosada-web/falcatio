"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F6F2]/95 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex items-center justify-between gap-12">
        <Link href="/" className="flex flex-col items-start gap-4 group shrink-0">
          <img
            src="/logo-falcatio.png"
            alt="Falcatio"
            className="w-20 h-auto opacity-90 transition-opacity group-hover:opacity-100"
          />

          <div className="flex flex-col text-left">
            <span className="text-[15px] tracking-[0.18em] text-black uppercase font-medium leading-none">
              Falcatio Librorum
            </span>

            <span className="text-[9px] tracking-[0.12em] text-black/40 uppercase mt-2">
              Curaduría Bibliográfica Privada
            </span>
          </div>
        </Link>

        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-3 text-[10px] tracking-[0.16em] uppercase">
          <Link href="/filosofia" className="transition-colors text-black/40 hover:text-black">
            Filosofía
          </Link>

          <Link href="/scrinium" className="transition-colors text-black/40 hover:text-black">
            Obra mínima
          </Link>

          <Link href="/custodia" className="transition-colors text-black/40 hover:text-black">
            Custodia
          </Link>

          <Link href="/conversacion" className="transition-colors text-black/40 hover:text-black">
            La conversación
          </Link>

          <Link href="/acceso" className="transition-colors text-black/40 hover:text-black">
            El Acceso
          </Link>
        </nav>
      </div>
    </header>
  );
}