export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-64 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[750px] mx-auto text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-16 font-light">
          Falcatio Librorum
        </p>

        <h1 className="text-4xl md:text-5xl text-black mb-16 font-serif italic leading-tight">
          Proponemos pensar, disfrutar y ser analógicamente.
        </h1>

        <div className="max-w-[640px] mx-auto space-y-8 text-black/85 font-light leading-[1.9] text-lg text-left">
          <p>
            Falcatio Librorum es una casa de curaduría bibliográfica privada
            concebida para quienes reconocen en los libros no solo una fuente de
            conocimiento, sino una forma de arraigo, de conversación y de mundo.
          </p>

          <p>
            No reúne volúmenes: compone arquitecturas de sentido. Cada proyecto
            nace de una escucha atenta, se ordena con criterio y culmina en una
            forma destinada a ser habitada, interpretada y transmitida.
          </p>

          <p>
            En una época atravesada por la aceleración, la saturación y la
            lectura sin permanencia, Falcatio propone otra temporalidad: la de
            la selección, la conversación y el legado.
          </p>
        </div>

        <div className="mt-32 text-center">
          <a
            href="/filosofia"
            className="text-[11px] tracking-[0.3em] uppercase text-black border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Adentrarse en la filosofía
          </a>
        </div>
      </div>
    </main>
  );
}