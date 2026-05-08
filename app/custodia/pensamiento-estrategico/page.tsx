import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://falcatiolibrorum.es/custodia/pensamiento-estrategico";

export const metadata: Metadata = {
  title: "Scrinium XXVII — El Pensamiento Estratégico | Poder y Decisión",
  description:
    "Scrinium dedicado a la inteligencia del mando: pensamiento estratégico, razón de Estado, poder, prudencia, guerra, empresa y decisión bajo incertidumbre.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Scrinium XXVII — El Pensamiento Estratégico",
    description:
      "Una arquitectura bibliográfica sobre poder, mando, estrategia, prudencia política, guerra, empresa y decisión bajo incertidumbre.",
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
    title: "Scrinium XXVII — El Pensamiento Estratégico",
    description:
      "Scrinium dedicado a la inteligencia del mando, la razón estratégica y la decisión bajo incertidumbre.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function PensamientoEstrategicoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Scrinium XXVII — El Pensamiento Estratégico",
    alternateName: "Del Príncipe a la Sala de Consejo",
    description:
      "Scrinium dedicado a la inteligencia del mando: pensamiento estratégico, razón de Estado, poder, prudencia, guerra, empresa y decisión bajo incertidumbre.",
    url: pageUrl,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "pensamiento estratégico",
      "razón de Estado",
      "poder",
      "mando",
      "prudencia política",
      "estrategia empresarial",
      "teoría militar",
      "decisión bajo incertidumbre",
      "Maquiavelo",
      "Sun Tzu",
      "Clausewitz",
      "Gracián",
      "Saavedra Fajardo",
      "Schopenhauer",
      "Toffler",
      "Naím",
      "Ferguson",
    ],
    genre: [
      "curaduría bibliográfica",
      "pensamiento estratégico",
      "filosofía política",
      "biblioteca privada",
      "arquitectura bibliográfica",
      "historia del poder",
    ],
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-28 md:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/custodia"
        className="inline-block mb-16 text-[10px] tracking-[0.22em] uppercase text-black/40 hover:text-black transition-colors"
      >
        Volver a custodia
      </Link>

      <header className="mb-20">
        <p className="text-[10px] tracking-[0.28em] uppercase text-black/40 mb-6">
          Scrinium XXVII
        </p>

        <h1 className="text-3xl md:text-5xl leading-tight font-light tracking-[-0.03em] mb-6">
          El Pensamiento Estratégico
        </h1>

        <p className="text-[11px] tracking-[0.18em] uppercase text-black/45 mb-10">
          Del Príncipe a la Sala de Consejo
        </p>

        <p className="text-base md:text-lg leading-relaxed text-black/70 max-w-3xl">
          El Pensamiento Estratégico: del Príncipe a la Sala de Consejo es un
          Scrinium dedicado a la inteligencia del mando. Su tesis no consiste en
          reunir libros sobre poder, guerra o empresa, sino en disponer una
          genealogía de la decisión: desde el príncipe renacentista hasta el
          general moderno, desde la prudencia barroca hasta la sala de consejo
          contemporánea, desde la razón de Estado hasta las redes que hoy
          modifican la naturaleza visible del poder.
        </p>
      </header>

      <section className="space-y-20 text-[15px] leading-relaxed text-black/70">
        <article>
          <h2 className="text-2xl font-light tracking-[-0.02em] text-black mb-6">
            El Scrinium
          </h2>

          <p className="mb-6">
            El Scrinium reúne una tradición larga del pensamiento estratégico,
            no como sucesión cronológica de doctrinas, sino como anatomía
            intelectual del poder. El Príncipe, de Nicolás Maquiavelo, abre el
            conjunto en el punto donde la política deja de pensarse únicamente
            como virtud abstracta y comienza a leerse como conservación,
            oportunidad, cálculo y conocimiento de los hombres.
          </p>

          <p className="mb-6">
            A su lado, El arte de la guerra, de Sun Tzu, introduce una matriz
            anterior y distinta: la estrategia indirecta, la anticipación, el
            dominio de la información, la economía del conflicto y la posibilidad
            de vencer antes de combatir.
          </p>

          <p className="mb-6">
            Con De la guerra, de Carl von Clausewitz, el Scrinium incorpora el
            eje moderno de la teoría militar: la guerra como fenómeno político,
            moral, incierto y sometido a fricción. Jomini, Villamartín, San
            Miguel, Vicente Rojo y Peter Paret amplían ese núcleo con una
            tradición doctrinal que permite seguir la formación del pensamiento
            militar contemporáneo.
          </p>

          <p className="mb-6">
            El núcleo hispánico aporta una dimensión menos mecánica y más moral:
            Baltasar Gracián y Diego Saavedra Fajardo introducen prudencia,
            disimulo, reputación, virtud política, símbolo y gobierno de sí. En
            ellos, el mando no es solo acción exterior, sino disciplina de la
            apariencia, dominio de la palabra, medida del tiempo y administración
            de la imagen pública.
          </p>

          <p>
            El conjunto no se articula por acumulación, sino por correspondencia
            interna: muestra que mandar nunca ha sido solo imponerse, sino leer
            fuerzas, medir tiempos, custodiar información, formar criterio y
            decidir bajo incertidumbre.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-light tracking-[-0.02em] text-black mb-6">
            El contenedor
          </h2>

          <p className="mb-6">
            El contenedor no acompaña al conjunto: lo completa. Concebido como
            pieza de ebanistería mayor, desarrollado en colaboración con
            talleres escogidos por la casa, toma como inspiración los arcones,
            escritorios portátiles, utensilios de campaña y enseres de los
            estados mayores.
          </p>

          <p className="mb-6">
            Su forma remite a un mundo en el que el mando debía desplazarse,
            ocultar documentos, preservar órdenes, desplegar mapas y convertir
            cualquier lugar en centro provisional de decisión.
          </p>

          <p className="mb-6">
            La pieza debe sugerir severidad, movilidad, secreto y deliberación.
            No es una biblioteca doméstica reducida a mueble, sino un gabinete
            estratégico: una arquitectura material que evoca, al mismo tiempo,
            la tienda del general, la mesa de mapas, el despacho del estadista y
            la sala de consejo del gran ejecutivo contemporáneo.
          </p>

          <p>
            Así como los tratados del Scrinium ordenan la inteligencia del
            poder, el contenedor ordena físicamente sus instrumentos. Custodia
            estos libros no como volúmenes de consulta ocasional, sino como
            piezas de decisión: textos llamados a permanecer cerca de quien
            gobierna, negocia, dirige, resiste o transforma.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-light tracking-[-0.02em] text-black mb-6">
            La conversación
          </h2>

          <p className="mb-6">
            La conversación se articula mediante el Cuaderno de Contexto, que no
            explica desde fuera ni reduce el conjunto a una guía de lectura. Su
            función es disponer entradas, itinerarios y correspondencias para que
            el destinatario comprenda la continuidad profunda entre guerra,
            política, empresa y gobierno.
          </p>

          <p className="mb-6">
            El recorrido puede comenzar en la formación del mando individual:
            carácter, prudencia, reputación, secreto, oportunidad. Puede avanzar
            después hacia la organización del conflicto: estrategia directa e
            indirecta, cálculo de fuerzas, incertidumbre, doctrina, moral y
            fricción. Finalmente, conduce hacia los sistemas complejos: redes,
            tecnología, poder distribuido, debilitamiento de jerarquías y nuevas
            formas de influencia.
          </p>

          <p className="mb-6">
            La conversación activa preguntas que no pertenecen solo al pasado.
            Qué permanece constante en el ejercicio del poder desde Maquiavelo
            hasta el CEO contemporáneo. En qué se parecen un príncipe
            renacentista, un general napoleónico, un presidente de consejo y un
            dirigente empresarial. Cuándo la estrategia es cálculo, cuándo
            prudencia y cuándo intuición.
          </p>

          <p>
            El Scrinium no enseña una doctrina única del poder; invita a
            reconocer sus permanencias, sus mutaciones y sus costes.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-light tracking-[-0.02em] text-black mb-6">
            Arquitectura bibliográfica
          </h2>

          <ul className="space-y-3 list-disc pl-5">
            <li>La fundación política del mando: Maquiavelo y El Príncipe.</li>
            <li>
              La estrategia indirecta: Sun Tzu y El arte de la guerra, con su
              prolongación hacia el management en Michaelson.
            </li>
            <li>La teoría moderna de la guerra: Clausewitz y De la guerra.</li>
            <li>
              La doctrina militar: Jomini, Villamartín, San Miguel, Vicente Rojo
              y Peter Paret.
            </li>
            <li>La prudencia hispánica: Gracián y Saavedra Fajardo.</li>
            <li>La controversia y la razón estratégica: Schopenhauer.</li>
            <li>
              La mutación contemporánea del poder: Toffler, Naím y Ferguson.
            </li>
          </ul>
        </article>

        <article className="border-t border-black/10 pt-12">
          <p>
            El Pensamiento Estratégico: del Príncipe a la Sala de Consejo no es
            una colección sobre liderazgo. Es una forma de conversación con la
            inteligencia histórica del poder: poder como mando, cálculo,
            prudencia, conflicto, persuasión, reputación, red y legado. Su valor
            reside en haber convertido una tradición dispersa —política, militar,
            filosófica y empresarial— en una arquitectura legible para quien
            entiende que decidir no es solo elegir, sino hacerse cargo de las
            consecuencias del mundo que se pone en movimiento.
          </p>
        </article>

        <nav className="border-t border-black/10 pt-10 flex flex-col gap-3 text-[10px] tracking-[0.18em] uppercase">
          <Link href="/custodia/mare-hispanicum" className="text-black/40 hover:text-black">
            Scrinium XIV — Mare Hispanicum
          </Link>
          <Link href="/custodia/el-gobierno-de-si" className="text-black/40 hover:text-black">
            Scrinium IX — El Gobierno de Sí
          </Link>
          <Link href="/custodia/peninsula-romanica" className="text-black/40 hover:text-black">
            Scrinium XLI — La Península Románica
          </Link>
        </nav>
      </section>
    </main>
  );
}