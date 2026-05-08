import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/custodia/peninsula-romanica";

export const metadata: Metadata = {
  title: "Scrinium XLI — La Península Románica | Románico Peninsular",
  description:
    "Scrinium dedicado al románico peninsular como archivo territorial: piedra, monasterios, aldeas, caminos, diócesis, frontera, paisaje y memoria medieval.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Scrinium XLI — La Península Románica",
    description:
      "Una arquitectura bibliográfica sobre el románico peninsular como memoria territorial: piedra, monasterio, aldea, camino, diócesis y paisaje.",
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
    title: "Scrinium XLI — La Península Románica",
    description:
      "Scrinium dedicado al románico peninsular como archivo territorial, artístico, histórico y patrimonial.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function PeninsulaRomanicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Scrinium XLI — La Península Románica",
    alternateName: "Piedra, Territorio y Memoria",
    description:
      "Scrinium dedicado al románico peninsular como archivo territorial: piedra, monasterios, aldeas, caminos, diócesis, frontera, paisaje y memoria medieval.",
    url: pageUrl,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "románico peninsular",
      "arte románico",
      "arquitectura medieval",
      "patrimonio medieval",
      "memoria territorial",
      "Castilla y León",
      "prerrománico asturiano",
      "monasterios medievales",
      "iglesias románicas",
      "paisaje medieval",
      "Fundación Santa María la Real",
      "Enciclopedia del Románico",
    ],
    genre: [
      "curaduría bibliográfica",
      "historia del arte",
      "patrimonio cultural",
      "biblioteca privada",
      "arquitectura bibliográfica",
      "memoria medieval",
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
            Scrinium XLI
          </p>

          <h1 className="text-4xl md:text-5xl leading-tight font-serif italic text-black mb-8">
            La Península Románica
          </h1>

          <p className="text-[11px] tracking-[0.16em] uppercase text-black/40 mb-12">
            Piedra, Territorio y Memoria
          </p>

          <p className="text-[17px] leading-[1.95] text-black/75 font-light">
            La Península Románica es un Scrinium dedicado a la inteligencia
            medieval del territorio. Su tesis no se limita al estudio de un
            estilo artístico, sino que convierte la Enciclopedia del Románico en
            la Península Ibérica en una arquitectura patrimonial de lectura:
            piedra, monasterio, aldea, camino, diócesis, frontera y paisaje
            reunidos como un gran archivo material de los siglos centrales de la
            Edad Media.
          </p>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El Scrinium
            </h2>

            <p className="mb-7">
              El Scrinium se articula en torno a una empresa bibliográfica
              excepcional: leer el románico no como repertorio monumental
              aislado, sino como sistema territorial. Palencia, Burgos, León,
              Zamora, Valladolid, Salamanca, Segovia, Soria y Ávila forman el
              gran cuerpo castellano y leonés del conjunto, allí donde la
              densidad de monasterios, parroquias rurales, torres, portadas
              esculpidas y pequeños núcleos de repoblación permite comprender el
              románico como idioma común de la comunidad medieval.
            </p>

            <p className="mb-7">
              A ese núcleo se suma Asturias en una doble dimensión: como
              territorio románico y como memoria prerrománica. Los tomos
              dedicados al prerrománico asturiano incorporan el antecedente
              altomedieval, la monarquía asturiana, la imagen del poder y las
              formas tempranas de sacralización del espacio. El Scrinium no
              comienza, por tanto, únicamente en el pleno románico: reconoce sus
              raíces, sus persistencias y sus modos de transición.
            </p>

            <p className="mb-7">
              La presencia de A Coruña y Pontevedra desplaza la mirada hacia el
              occidente atlántico; La Rioja, Zaragoza y Euskadi-País Vasco abren
              el corredor oriental y las relaciones con caminos, valles, puertos
              y ámbitos culturales de frontera. Guadalajara, Cuenca y Madrid
              completan la lectura hacia el centro y la frontera meridional,
              allí donde el románico se vuelve más discontinuo y significativo
              precisamente por su aparición selectiva.
            </p>

            <p>
              El conjunto no dice simplemente “arte románico”. Dice algo más
              preciso: la piedra medieval se comprende cuando se la lee a la vez
              como forma artística, documento histórico, huella litúrgica, signo
              político y memoria del poblamiento.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              El contenedor
            </h2>

            <p className="mb-7">
              El contenedor debe responder a la escala documental de la obra. No
              puede ser una mera estantería para grandes volúmenes, sino un
              armarium de territorio: una pieza de ebanistería mayor inspirada en
              los armarios monásticos, las cajoneras de archivo, los atriles de
              consulta y las mesas de trabajo del historiador del arte y del
              arquitecto patrimonial.
            </p>

            <p className="mb-7">
              Su arquitectura material puede organizarse por grandes regiones,
              con cuerpos o calles diferenciadas para Castilla y León, Asturias,
              Galicia, el corredor oriental y las áreas centrales. La madera,
              los herrajes sobrios y la proporción severa deben evocar
              permanencia, custodia y orden, sin caer en una imitación literal
              de lo medieval.
            </p>

            <p>
              La pieza completa la tesis porque convierte la enciclopedia en
              territorio ordenado. Así como los tomos levantan acta de iglesias,
              monasterios y vestigios dispersos, el contenedor recompone
              físicamente esa dispersión. Es, a la vez, biblioteca, archivo
              topográfico y gabinete de consulta.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              La conversación
            </h2>

            <p className="mb-7">
              El Cuaderno de Contexto activa el Scrinium como recorrido por la
              memoria románica. No debe limitarse a explicar la colección ni a
              resumir provincias; debe enseñar a entrar en la obra por preguntas
              de fondo: cómo se forma un territorio cristiano medieval, qué
              relación existe entre parroquia, monasterio, linaje y camino, por
              qué ciertos espacios concentran una densidad extraordinaria de
              testimonios, y qué nos dice la escultura románica sobre el miedo,
              la salvación, el poder, la comunidad y el tiempo.
            </p>

            <p className="mb-7">
              La conversación puede organizarse en varios itinerarios. Uno
              territorial, que conduzca desde la Meseta hacia Asturias, Galicia,
              el Ebro y la frontera interior. Otro formal, centrado en ábsides,
              portadas, capiteles, torres, claustros, canecillos y programas
              iconográficos. Otro histórico, dedicado a repoblación, diócesis,
              señoríos, rutas de peregrinación y construcción del paisaje
              medieval.
            </p>

            <p>
              El destinatario no se enfrenta a una suma de tomos, sino a un mapa
              de piedra. Cada volumen remite a un lugar, cada lugar a una
              comunidad, cada comunidad a una forma de habitar el tiempo.
            </p>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              Arquitectura bibliográfica
            </h2>

            <ul className="space-y-4 list-disc pl-5">
              <li>
                La matriz castellana y leonesa: Palencia, Burgos, León, Zamora,
                Valladolid, Salamanca, Segovia, Soria y Ávila.
              </li>
              <li>El norte altomedieval: Asturias y Prerrománico Asturias.</li>
              <li>El occidente atlántico: A Coruña y Pontevedra.</li>
              <li>
                El corredor oriental: La Rioja, Zaragoza y Euskadi-País Vasco.
              </li>
              <li>La frontera interior: Guadalajara, Cuenca y Madrid.</li>
              <li>
                El método enciclopédico: estudios históricos, catálogo por
                localidades, documentación gráfica, apéndices, bibliografía e
                índices.
              </li>
              <li>
                La piedra como archivo: iglesias rurales, monasterios,
                capiteles, portadas, inscripciones, caminos y paisaje.
              </li>
            </ul>
          </article>

          <article className="border-t border-black/10 pt-12">
            <p>
              La Península Románica no es una colección sobre arquitectura
              medieval. Es una forma de conversación con el territorio construido
              por la piedra: una lectura de la Edad Media a través de sus
              iglesias menores, sus monasterios, sus aldeas, sus rutas y sus
              imágenes. Su valor reside en haber convertido una obra
              enciclopédica de gran alcance en un Scrinium de memoria
              territorial, donde cada tomo no solo documenta un patrimonio, sino
              que devuelve presencia a una civilización dispersa en el paisaje.
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
          </nav>
        </section>
      </section>
    </main>
  );
}