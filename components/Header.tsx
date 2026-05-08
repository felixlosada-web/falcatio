"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F6F2]/96 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        
        <Link
          href="/"
          className="flex items-center gap-4 group shrink-0"
        >
          <img
            src="/logo-falcatio.png"
            alt="Falcatio Librorum"
            className="w-17 h-auto opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="leading-none">
            <div className="text-[13px] tracking-[0.14em] uppercase text-black font-medium">
              Falcatio Librorum
            </div>

            <div className="text-[8px] tracking-[0.12em] uppercase text-black/35 mt-2">
              Curaduría bibliográfica privada
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-[10px] tracking-[0.12em] uppercase text-black/45">
          <Link
            href="/filosofia"
            className="hover:text-black transition-colors duration-300"
          >
            Filosofía
          </Link>

          <Link
            href="/scrinium"
            className="hover:text-black transition-colors duration-300"
          >
            Obra mínima
          </Link>

          <Link
            href="/custodia"
            className="hover:text-black transition-colors duration-300"
          >
            Custodia
          </Link>

          <Link
            href="/conversacion"
            className="hover:text-black transition-colors duration-300"
          >
            La conversación
          </Link>

          <Link
            href="/acceso"
            className="hover:text-black transition-colors duration-300"
          >
            El acceso
          </Link>
        </nav>

      </div>
    </header>
  );
}