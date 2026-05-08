import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/conversacion";

export const metadata: Metadata = {
  title: "La conversación | Cuadernos de Contexto | Falcatio Librorum",
  description:
    "Los Cuadernos de Contexto como instrumento de acceso al Scrinium: lectura, conversación, arquitectura intelectual y legado.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "La conversación | Falcatio Librorum",
    description:
      "El Scrinium no solo se lee. Se conversa. Los Cuadernos de Contexto articulan la forma en que la obra puede ser habitada.",
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
    title: "La conversación | Falcatio Librorum",
    description:
      "Los Cuadernos de Contexto articulan la forma en que el Scrinium puede ser leído, habitado y conversado.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function ConversacionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Los Cuadernos de Contexto",
    description:
      "Los Cuadernos de Contexto como instrumento de acceso al Scrinium: lectura, conversación, arquitectura intelectual y legado.",
    url: pageUrl,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "Cuadernos de Contexto",
      "Scrinium",
      "conversación privada",
      "lectura",
      "arquitectura intelectual",
      "curaduría bibliográfica",
      "biblioteca privada",
      "legado",
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
            La Conversación
          </p>

          <h1 className="text-4xl md:text-5xl text-black mb-16 font-serif italic leading-tight">
            Los Cuadernos de Contexto
          </h1>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <div className="space-y-7">
              <p>
                El Scrinium no se agota en la disposición de sus obras. Su
                sentido no reside únicamente en lo que contiene, sino en la forma
                en que se accede a ello.
              </p>

              <p>
                Los Cuadernos de Contexto constituyen el instrumento que hace
                posible esa entrada. No acompañan al Scrinium como un apéndice
                explicativo, sino que articulan la forma en que la obra ha de ser
                habitada.
              </p>

              <p>
                Cada Cuaderno se concibe como una guía de acceso. No ordena los
                libros, sino la lectura que los recorre. No describe la
                colección, sino que establece las condiciones para que el
                conjunto pueda desplegar su sentido.
              </p>

              <p>
                A través de ellos, el Scrinium deja de ser un sistema estático y
                se convierte en una estructura activa. La relación entre el
                anfitrión y la obra no es de consulta, sino de implicación.
              </p>

              <p>
                En ese tránsito, el acto de leer se transforma en conversación.
              </p>
            </div>
          </article>

          <article className="border-t border-black/10 pt-16">
            <div className="space-y-7">
              <p>
                La conversación no es aquí una metáfora. Designa el modo en que
                el Scrinium se activa: una interlocución sostenida entre quien lo
                habita y la arquitectura intelectual que lo constituye.
              </p>

              <p>
                El Cuaderno no impone un recorrido cerrado, pero tampoco
                abandona al lector a la dispersión. Propone una cartografía
                precisa, un ritmo, una secuencia de aproximaciones que permiten
                atravesar la obra sin disolver su coherencia.
              </p>

              <p>
                Cada anotación, cada referencia cruzada, cada silencio deliberado
                forma parte de ese dispositivo. El Cuaderno no explica: dispone.
              </p>

              <p>
                Así, la conversación no consiste en extraer contenidos, sino en
                sostener una relación. Una relación que transforma la lectura en
                experiencia, la acumulación en forma y el conocimiento en
                legado.
              </p>

              <p>
                El Scrinium no solo se lee. Se conversa. Y quien lo conversa,
                vive en él.
              </p>
            </div>
          </article>
        </section>

        <div className="mt-28 text-center">
          <Link
            href="/acceso"
            className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
          >
            Iniciar una conversación
          </Link>
        </div>
      </section>
    </main>
  );
}