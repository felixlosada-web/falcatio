import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/custodia/mare-hispanicum";

export const metadata: Metadata = {
  title: "Scrinium XIV — Mare Hispanicum | Hegemonía Naval Española",
  description:
    "Scrinium dedicado a la hegemonía naval de la Corona Española: navegación, cartografía, Armada, ciencia ilustrada, soberanía oceánica y memoria marítima.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Scrinium XIV — Mare Hispanicum",
    description:
      "Una arquitectura bibliográfica sobre la inteligencia naval de la Monarquía Hispánica: ciencia, navegación, cartografía, Armada y soberanía oceánica.",
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
    title: "Scrinium XIV — Mare Hispanicum",
    description:
      "Scrinium dedicado a la hegemonía naval de la Corona Española y a la inteligencia marítima de la Monarquía Hispánica.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function MareHispanicumPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Scrinium XIV — Mare Hispanicum",
    alternateName: "Hegemonía Naval de la Corona Española",
    description:
      "Scrinium dedicado a la hegemonía naval de la Corona Española: navegación, cartografía, Armada, ciencia ilustrada, soberanía oceánica y memoria marítima.",
    url: pageUrl,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "Monarquía Hispánica",
      "hegemonía naval",
      "historia marítima española",
      "Armada española",
      "cartografía histórica",
      "navegación oceánica",
      "Malaspina",
      "Fernández Duro",
      "Mare Hispanicum",
    ],
    genre: [
      "curaduría bibliográfica",
      "historia naval",
      "biblioteca privada",
      "arquitectura bibliográfica",
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
            Scrinium XIV
          </p>

          <h1 className="text-4xl md:text-5xl leading-tight font-serif italic text-black mb-8">
            Mare Hispanicum
          </h1>

          <p className="text-[11px] tracking-[0.16em] uppercase text-black/40 mb-12">
            Hegemonía Naval de la Corona Española
          </p>

          <p className="text-[17px] leading-[1.95] text-black/75 font-light">
            Mare Hispanicum es un Scrinium dedicado al primer sistema marítimo
            verdaderamente global de la historia: el de la Monarquía Hispánica.
            Su tesis no es épica, sino estructural. El dominio naval no se
            sostuvo únicamente sobre escuadras, arsenales o pilotos, sino sobre
            una constelación de saberes: tratados de esfera, manuales de
            navegación, atlas costeros, cartas de Ultramar, diccionarios
            marítimos, catálogos de instrumentos, diarios científicos, corpus
            documentales e historia institucional.
          </p>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El Scrinium
            </h2>

            <p className="mb-7">
              El Scrinium reúne esas voces en una arquitectura bibliográfica
              articulada. Falero y Chaves establecen la gramática primera del
              arte de marear; Texeira y la cartografía de Antillas y Filipinas
              convierten el espacio en imagen de gobierno; O’Scanlan fija la
              lengua técnica de la mar; Malaspina despliega la navegación como
              ciencia ilustrada; Fernández Duro ordena la memoria de la Armada;
              y La batalla del Mar Océano, Riaño y Mattingly someten 1588 a
              documento, estrategia e interpretación.
            </p>

            <p>
              El conjunto no dice simplemente “España y el mar”. Dice algo más
              preciso: el mar se domina cuando se sabe medir, nombrar,
              representar, cruzar, defender, archivar e interpretar.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El contenedor
            </h2>

            <p className="mb-7">
              El contenedor, concebido como pieza de ebanistería mayor inspirada
              en las naos españolas, completa la obra. No actúa como simple
              custodia, sino como forma física de la tesis: cámara, archivo,
              instrumento y continente de travesía.
            </p>

            <p>
              Como la nao, este Scrinium contiene una empresa de navegación; no
              ya sobre el agua, sino a través del tiempo, de las fuentes y de la
              memoria. Su presencia material prolonga la vida intelectual del
              conjunto y convierte la arquitectura bibliográfica en objeto de
              custodia, contemplación y transmisión.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              La conversación
            </h2>

            <p className="mb-7">
              La conversación, articulada mediante el Cuaderno de Contexto,
              activa el conjunto. El Cuaderno no explica desde fuera ni ordena
              mecánicamente los volúmenes: dispone la lectura, propone
              recorridos, abre relaciones y permite que la obra despliegue su
              sentido.
            </p>

            <p className="mb-7">
              En él, el destinatario encuentra la forma de entrar en Mare
              Hispanicum: medir el océano, representar el dominio, pensar 1588,
              seguir la ciencia ilustrada y comprender la Armada como
              institución de larga duración.
            </p>

            <p>
              Así, Mare Hispanicum no es una colección sobre la mar. Es una
              forma de conversación con la inteligencia naval de la Monarquía
              Hispánica: el océano leído como ciencia, soberanía, conflicto,
              memoria y legado.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              Arquitectura bibliográfica
            </h2>

            <ul className="space-y-4 list-disc pl-5">
              <li>La gramática primera del océano: Falero y Chaves.</li>
              <li>La imagen del dominio: Texeira, Antillas y Filipinas.</li>
              <li>La Armada como institución: Fernández Duro y Bordejé.</li>
              <li>
                1588 como archivo y estrategia: La batalla del Mar Océano, Riaño
                y Mattingly.
              </li>
              <li>
                La Ilustración naval: Malaspina y los instrumentos científicos
                del Museo Naval.
              </li>
              <li>La lengua técnica de la mar: O’Scanlan.</li>
              <li>
                El horizonte americano: Díaz del Río, Ultramar y el Pacífico
                ilustrado.
              </li>
            </ul>
          </article>

          <nav className="border-t border-black/10 pt-12 flex flex-col gap-4 text-[10px] tracking-[0.18em] uppercase">
            <Link
              href="/custodia/el-gobierno-de-si"
              className="text-black/40 hover:text-black transition-colors duration-300"
            >
              Scrinium IX — El Gobierno de Sí
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