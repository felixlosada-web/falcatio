export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-44 pb-28 px-6 md:px-10">
      <section className="max-w-[720px] mx-auto">
        <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-14 font-light text-center">
          Falcatio Librorum
        </p>

        <h1 className="text-4xl md:text-5xl text-black mb-14 font-serif italic leading-tight text-center">
          Proponemos pensar, disfrutar y ser analógicamente.
        </h1>

        <div className="max-w-[620px] mx-auto space-y-7 text-black/80 font-light leading-[1.9] text-[17px]">
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

        <div className="mt-24 text-center">
          <a
            href="/filosofia"
            className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
          >
            Adentrarse en la filosofía
          </a>
        </div>
      </section>
    </main>
  );
}