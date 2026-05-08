export default function Footer() {
  return (
    <footer className="bg-[#F8F6F2] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col items-center">
        <img
          src="/logo-falcatio.png"
          alt="Falcatio Librorum"
          className="w-10 h-auto opacity-35 mb-4"
        />

        <p className="text-[11px] tracking-[0.18em] uppercase text-black/45">
          Falcatio Librorum
        </p>

        <p className="text-[8px] tracking-[0.14em] uppercase text-black/30 mt-2">
          Curaduría Bibliográfica Privada
        </p>

        <p className="mt-8 text-[9px] tracking-[0.18em] uppercase text-black/25">
          © 2026 — Madrid
        </p>
      </div>
    </footer>
  );
}