import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/scrinium";

export const metadata: Metadata = {
  title: "Obra mínima | El Scrinium | Falcatio Librorum",
  description:
    "El Scrinium como forma indivisible de curaduría bibliográfica privada: biblioteca curada, dispositivo intelectual y contenedor noble.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Obra mínima | El Scrinium | Falcatio Librorum",
    description:
      "La obra mínima de Falcatio Librorum: una biblioteca curada, un dispositivo intelectual y una pieza de custodia concebidas como una única forma.",
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
    title: "Obra mínima | El Scrinium | Falcatio Librorum",
    description:
      "El Scrinium como forma indivisible de biblioteca, pensamiento y custodia.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function ScriniumPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Curaduría Bibliográfica Privada",
    description:
      "El Scrinium como forma indivisible de curaduría bibliográfica privada: biblioteca curada, dispositivo intelectual y contenedor noble.",
    url: pageUrl,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "Scrinium",
      "curaduría bibliográfica privada",
      "biblioteca privada",
      "contenedor noble",
      "arquitectura bibliográfica",
      "certificado de obra",
      "legado",
      "ebanistería",
      "colección bibliográfica",
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-44 pb-32 px-6 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-[760px] mx-auto">
        <header className="mb-28 text-center">
          <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-14">
            El Oficio
          </p>

          <h1 className="text-4xl md:text-5xl text-black mb-16 font-serif italic leading-tight">
            Curaduría Bibliográfica Privada
          </h1>

          <div className="max-w-[660px] mx-auto space-y-7 text-[17px] leading-[1.95] text-black/75 font-light text-left">
            <p>
              Falcatio Librorum no vende libros; ejerce la curaduría
              bibliográfica privada. Nuestro oficio consiste en concebir obras
              indivisibles donde una biblioteca curada, el dispositivo
              intelectual que la articula y un contenedor noble que la custodia
              dejan de ser piezas separadas para convertirse en una única forma.
            </p>

            <p>
              A este refugio de conocimiento, a esta unidad patrimonial
              perfecta, la llamamos Scrinium.
            </p>
          </div>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-8">
              El Método
            </p>

            <div className="space-y-7">
              <p>
                Nuestro oficio comienza con la escucha. Cada encargo se inicia
                en una conversación privada, conducida personalmente por el
                curador de la casa, en la que se exploran motivaciones,
                territorios de interés y espacios de destino. La decisión de
                aceptar un encargo —así como la de rechazarlo— se toma en ese
                mismo acto.
              </p>

              <p>
                A partir de esa conversación, construimos una arquitectura
                bibliográfica regida por tres exigencias innegociables:
                selección sin concesiones, jerarquización precisa y coherencia
                narrativa. El resultado nunca es una simple suma de volúmenes,
                sino un ecosistema completo donde cada obra adquiere sentido por
                cómo acompaña, articula y enriquece el pensamiento, la
                identidad y el patrimonio de su anfitrión.
              </p>
            </div>
          </article>

          <article>
            <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-8">
              La Obra
            </p>

            <h2 className="text-4xl md:text-5xl text-black mb-12 font-serif italic leading-tight">
              El Scrinium
            </h2>

            <div className="space-y-7">
              <p>
                El término Scrinium, recuperado del latín clásico, designaba el
                arca donde se custodiaban los documentos más valiosos. Hoy, en
                Falcatio Librorum, recupera su significado pleno para dar nombre
                a la materialización de nuestro oficio.
              </p>

              <p>
                No se trata de libros en un contenedor. La dualidad tradicional
                desaparece: el cliente no adquiere una biblioteca envuelta,
                adquiere un Scrinium. Cada obra integra de manera indivisible:
              </p>

              <div className="space-y-7 border-l border-black/10 pl-6 my-10">
                <p>
                  <span className="text-black">El contenido:</span> una
                  colección bibliográfica curada con extrema precisión temática.
                </p>

                <p>
                  <span className="text-black">El alma:</span> un dispositivo
                  intelectual que la articula y dota de sentido.
                </p>

                <p>
                  <span className="text-black">El continente:</span> una pieza
                  de ebanistería mayor, concebida expresamente para cada
                  colección en colaboración con talleres escogidos por la casa.
                </p>
              </div>

              <p>
                Sus materiales nobles, proporciones calculadas y acabados
                destinados a envejecer con dignidad hacen del Scrinium un objeto
                heredable por derecho propio. Es una forma cerrada de
                conocimiento concebida para ser habitada por quien la encarga,
                interpretada por quienes la frecuentan y transmitida a quienes
                vengan después.
              </p>

              <p>
                Para garantizar esta vocación de legado, cada Scrinium se
                entrega acompañado de un Certificado de Obra nominado, que lo
                inscribe en el registro permanente de la casa y lo constituye
                formalmente en una pieza de transmisión intergeneracional.
              </p>
            </div>
          </article>
        </section>

        <div className="mt-28 text-center">
          <Link
            href="/conversacion"
            className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
          >
            Entrar en la conversación
          </Link>
        </div>
      </section>
    </main>
  );
}