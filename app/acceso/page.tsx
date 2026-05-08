import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/acceso";

export const metadata: Metadata = {
  title: "El Acceso | Falcatio Librorum",
  description:
    "Acceso a Falcatio Librorum mediante conversación privada: curaduría bibliográfica, discernimiento, custodia intelectual y legado.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "El Acceso | Falcatio Librorum",
    description:
      "Falcatio Librorum no se ofrece; se descubre. El acceso comienza mediante una conversación privada.",
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
    title: "El Acceso | Falcatio Librorum",
    description:
      "El acceso a Falcatio Librorum comienza mediante una conversación privada.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function AccesoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "El Acceso",
    description:
      "Acceso a Falcatio Librorum mediante conversación privada: curaduría bibliográfica, discernimiento, custodia intelectual y legado.",
    url: pageUrl,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "conversación privada",
      "curaduría bibliográfica",
      "biblioteca privada",
      "Scrinium",
      "custodia intelectual",
      "legado",
      "discernimiento",
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-44 pb-32 px-6 md:px-10 flex items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-[760px] mx-auto text-center">
        <header className="mb-24">
          <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-14">
            El Acceso
          </p>

          <h1 className="text-4xl md:text-5xl text-black mb-16 font-serif italic leading-tight">
            Falcatio Librorum no se ofrece; se descubre.
          </h1>
        </header>

        <div className="max-w-[660px] mx-auto space-y-7 text-[17px] leading-[1.95] text-black/75 font-light text-left">
          <p>
            La casa opera exclusivamente bajo invitación o solicitud de
            conversación privada.
          </p>

          <p>
            El acceso se articula mediante un proceso deliberadamente pausado.
          </p>

          <p>
            Quien accede a Falcatio Librorum no realiza una compra. Inicia un
            proceso de custodia intelectual.
          </p>

          <p>
            Quien reconozca en estas páginas una forma de estar en el mundo que
            le pertenece, puede solicitar una conversación privada.
          </p>
        </div>

        <div className="mt-24">
          <Link
            href="mailto:curador@falcatiolibrorum.es"
            className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
          >
            Solicitar conversación privada
          </Link>
        </div>
      </section>
    </main>
  );
}