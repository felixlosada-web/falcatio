import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/custodia/el-gobierno-de-si";

export const metadata: Metadata = {
  title: "Scrinium IX — El Gobierno de Sí | Prudencia y Sabiduría",
  description:
    "Scrinium dedicado a la formación del juicio: prudencia, deber, sabiduría clásica, filosofía antigua, tradición moral europea y gobierno de sí.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Scrinium IX — El Gobierno de Sí",
    description:
      "Una arquitectura bibliográfica sobre prudencia, deber, sabiduría, filosofía clásica y formación del juicio.",
    url: pageUrl,
    siteName: "Falcatio Librorum",
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "https://falcatiolibrorum.es/logo-share.png",
        width: 1200,
        height: 630,
        alt: "Falcatio Librorum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrinium IX — El Gobierno de Sí",
    description:
      "Scrinium dedicado a la prudencia, el deber, la sabiduría clásica y la formación del juicio.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function ElGobiernoDeSiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Scrinium IX — El Gobierno de Sí",
    alternateName: "Prudencia, Deber y Sabiduría",
    description:
      "Scrinium dedicado a la formación del juicio: prudencia, deber, sabiduría clásica, filosofía antigua, tradición moral europea y gobierno de sí.",
    url: pageUrl,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "prudencia",
      "sabiduría clásica",
      "filosofía antigua",
      "formación del juicio",
      "gobierno de sí",
      "ética clásica",
      "tradición moral europea",
      "estoicismo",
      "Aristóteles",
      "Marco Aurelio",
      "Montaigne",
      "Gracián",
      "Kant",
    ],
    genre: [
      "curaduría bibliográfica",
      "filosofía moral",
      "biblioteca privada",
      "arquitectura bibliográfica",
      "pensamiento clásico",
    ],
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
  };

  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-44 pb-32 px-6 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-[760px] mx-auto">
        <Link
          href="/custodia"
          className="inline-block mb-20 text-[10px] tracking-[0.22em] uppercase text-black/40 hover:text-black transition-colors duration-300"
        >
          Volver a custodia
        </Link>

        <header className="mb-28">
          <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-10">
            Scrinium IX
          </p>

          <h1 className="text-4xl md:text-5xl leading-tight font-serif italic text-black mb-8">
            El Gobierno de Sí
          </h1>

          <p className="text-[11px] tracking-[0.16em] uppercase text-black/40 mb-12">
            Prudencia, Deber y Sabiduría
          </p>

          <p className="text-[17px] leading-[1.95] text-black/75 font-light">
            El Gobierno de Sí es un Scrinium dedicado a la formación del juicio.
            Su tesis no es la reunión ornamental de clásicos, sino la
            construcción de una biblioteca de prudencia: un itinerario que
            conduce desde la ciudad justa hasta la conciencia del deber, desde la
            observación de la naturaleza hasta el gobierno de las pasiones, desde
            la historia trágica de los pueblos hasta la ironía moral frente a la
            necedad.
          </p>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El Scrinium
            </h2>

            <p className="mb-7">
              El Scrinium se abre sobre el gran eje clásico de la vida buena. La
              República, de Platón, sitúa la justicia como problema de la ciudad
              y del alma; la Ética nicomáquea, de Aristóteles, convierte la
              virtud, la deliberación y la prudencia en arquitectura práctica de
              la existencia. A esa base griega se añade la tradición romana del
              deber: Cicerón, Séneca y Marco Aurelio trasladan la filosofía al
              campo de la obligación, la serenidad, la disciplina interior y el
              dominio de sí. La posterior presencia de Kant prolonga ese eje
              hacia una moral de la responsabilidad racional, donde el deber ya
              no se entiende como costumbre heredada, sino como exigencia de la
              razón práctica.
            </p>

            <p className="mb-7">
              Junto a esa línea ética, el conjunto incorpora una segunda
              gramática: la de la naturaleza, el cuerpo y el cambio. Demócrito y
              Lucrecio abren la mirada hacia la materia, el azar y la
              constitución física del mundo; Hipócrates introduce el arte del
              pronóstico y la atención al cuerpo como forma de conocimiento;
              Ovidio, con las Metamorfosis, recuerda que toda identidad vive
              bajo la ley de la transformación.
            </p>

            <p className="mb-7">
              El tercer movimiento desplaza la prudencia hacia la historia y el
              gobierno. Tucídides ofrece la matriz severa del conflicto político;
              Maquiavelo, en los Discursos, piensa la república, la virtud
              cívica, la memoria de Roma y las condiciones reales de la acción
              pública. Erasmo introduce el ideal humanista del gobernante
              educado; Gracián condensa en El arte de la prudencia una ciencia
              barroca de la ocasión, la reputación y el trato con los hombres.
            </p>

            <p>
              El conjunto no dice simplemente “sabiduría clásica”. Dice algo más
              preciso: la prudencia se forma cuando el pensamiento aprende a
              pasar de la idea a la conducta, de la conducta al deber, del deber
              a la experiencia y de la experiencia a la memoria.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El contenedor
            </h2>

            <p className="mb-7">
              El contenedor de este Scrinium se articula desde la propia unidad
              material de la colección. Todos los ejemplares forman un cuerpo
              completo en folio estrecho, sobre papel Modigliani Insize Neve de
              145 gramos, con ilustraciones —fundamentalmente grabados— y
              encuadernación artesanal en piel de cabra.
            </p>

            <p className="mb-7">
              No se trata de una presentación accesoria, sino de una forma física
              coherente con la tesis: la sabiduría práctica exige peso, tacto,
              permanencia, ritmo y presencia.
            </p>

            <p>
              La encuadernación común no borra la diferencia de las obras; la
              convierte en conversación heredable. El contenedor no acompaña al
              conjunto: lo disciplina.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              La conversación
            </h2>

            <p className="mb-7">
              El Cuaderno de Contexto activa el Scrinium como itinerario de
              formación. Su función no es explicar cada título de modo aislado,
              sino disponer entradas para que el destinatario atraviese la obra
              completa: de la justicia a la prudencia, de la prudencia al deber,
              del deber a la experiencia y de la experiencia al gobierno de sí.
            </p>

            <p className="mb-7">
              La conversación puede comenzar con una pregunta clásica: qué hace
              buena una vida. Desde ahí, el recorrido se abre hacia otras
              cuestiones: cómo se educa el juicio, qué diferencia hay entre
              sabiduría y conocimiento, cuándo la prudencia es virtud y cuándo
              cálculo, qué debe una persona a la ciudad y cómo se reconoce la
              necedad.
            </p>

            <p>
              El destinatario no se enfrenta a una colección muda, sino a una
              cámara de resonancias. Cada lectura remite a otra: la ciudad
              platónica dialoga con la república maquiaveliana; la virtud
              aristotélica con el deber ciceroniano y kantiano; la serenidad
              estoica con la experiencia montaigniana; la necedad de Brant con
              la prudencia de Gracián.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              Arquitectura bibliográfica
            </h2>

            <ul className="space-y-4 list-disc pl-5">
              <li>La ciudad y la virtud: Platón y Aristóteles.</li>
              <li>
                El deber y la soberanía interior: Cicerón, Séneca, Marco Aurelio
                y Kant.
              </li>
              <li>
                La materia, el cuerpo y el pronóstico: Demócrito, Lucrecio e
                Hipócrates.
              </li>
              <li>
                La historia y el conflicto político: Tucídides y Maquiavelo.
              </li>
              <li>
                El príncipe, la prudencia y la necedad: Erasmo, Gracián y
                Sebastian Brant.
              </li>
              <li>
                La mediación moral entre culturas: Fray Juan Cobo y el Espejo
                rico del claro corazón.
              </li>
              <li>
                La experiencia, la metamorfosis y la circunstancia: Ovidio,
                Montaigne y Ortega.
              </li>
            </ul>
          </article>

          <article className="border-t border-black/10 pt-12">
            <p>
              El Gobierno de Sí no es una colección de clásicos morales. Es una
              forma de conversación con las grandes disciplinas de la conducta:
              justicia, virtud, deber, serenidad, experiencia, prudencia, cuerpo,
              naturaleza, historia y transformación. Su valor reside en haber
              convertido una tradición dispersa —filosófica, política, médica,
              literaria y espiritual— en una arquitectura legible para quien
              entiende que la sabiduría no consiste en poseer respuestas, sino
              en formar el juicio capaz de habitarlas.
            </p>
          </article>

          <nav className="border-t border-black/10 pt-12 flex flex-col gap-4 text-[10px] tracking-[0.18em] uppercase">
            <Link
              href="/custodia/mare-hispanicum"
              className="text-black/40 hover:text-black transition-colors duration-300"
            >
              Scrinium XIV — Mare Hispanicum
            </Link>

            <Link
              href="/custodia/pensamiento-estrategico"
              className="text-black/40 hover:text-black transition-colors duration-300"
            >
              Scrinium XXVII — El Pensamiento Estratégico
            </Link>

            <Link
              href="/custodia/peninsula-romanica"
              className="text-black/40 hover:text-black transition-colors duration-300"
            >
              Scrinium XLI — La Península Románica
            </Link>
          </nav>
        </section>
      </section>
    </main>
  );
}