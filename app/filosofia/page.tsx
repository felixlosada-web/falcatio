import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://falcatiolibrorum.es/filosofia";

export const metadata: Metadata = {
  title: "Filosofía | Falcatio Librorum",
  description:
    "La filosofía de Falcatio Librorum: curaduría bibliográfica privada, conversación analógica, arraigo, biblioteca como refugio y forma legible de identidad.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Filosofía | Falcatio Librorum",
    description:
      "De la ubicuidad simulada al arraigo verdadero: una defensa de la conversación analógica, la biblioteca y la curaduría bibliográfica privada.",
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
    title: "Filosofía | Falcatio Librorum",
    description:
      "Una defensa del arraigo, la conversación analógica y la biblioteca como forma de identidad.",
    images: ["https://falcatiolibrorum.es/logo-share.png"],
  },
};

export default function FilosofiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "De la ubicuidad simulada al arraigo verdadero",
    description:
      "La filosofía de Falcatio Librorum: curaduría bibliográfica privada, conversación analógica, arraigo, biblioteca como refugio y forma legible de identidad.",
    url: pageUrl,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "Falcatio Librorum",
      url: "https://falcatiolibrorum.es",
    },
    about: [
      "curaduría bibliográfica privada",
      "conversación analógica",
      "biblioteca privada",
      "arraigo",
      "identidad cultural",
      "lujo contemporáneo",
      "lectura",
      "legado",
      "Scrinium",
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
            Nuestra Filosofía
          </p>

          <h1 className="text-4xl md:text-5xl text-black mb-20 font-serif italic leading-tight">
            De la ubicuidad simulada al arraigo verdadero
          </h1>
        </header>

        <section className="space-y-24 text-[16px] leading-[1.95] text-black/75 font-light">
          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              I. La ilusión de la ubicuidad
            </h2>

            <div className="space-y-7">
              <p>
                Nos han prometido que podemos habitar todos los tiempos y todos
                los lugares a la vez. Que basta deslizar un dedo para estar en
                cualquier parte, saber cualquier cosa, conversar con cualquiera.
                Que somos, por fin, globales y eternos. Pero esa promesa,
                examinada con lucidez, esconde una sustracción silenciosa:
                cuanto más creemos estar en todas partes, menos estamos
                verdaderamente en alguna.
              </p>

              <p>
                La ubicuidad que la época nos ofrece no es plenitud del mundo,
                sino su contrario exacto: una circulación sin cuerpo por una
                infraestructura invisible, un tránsito que no dirigen ni el deseo
                ni la biografía, sino una arquitectura de algoritmos que nos
                mueve sin que nos movamos.
              </p>

              <p>
                En esa deriva perdemos lo que nunca debió cederse: la pluralidad
                densa del mundo. No la información —de eso hay sobreabundancia
                hasta el ahogo—, sino la textura de las épocas que no son la
                nuestra, de las geografías que no pisamos, de las mentes que no
                coinciden con la nuestra en el tiempo. Perdemos el peso de otras
                historias, el espesor de otras ideas, la opacidad fértil de las
                personas reales.
              </p>
            </div>

            <div className="my-20 border-y border-black/10 py-14">
              <p className="text-2xl md:text-3xl font-serif italic text-black/85 text-center leading-relaxed">
                “Lo que la hiperconectividad nos entrega como libertad es, en
                verdad, una forma nueva y sofisticada de indigencia: la del
                sujeto que, por estar en todas partes, ha dejado de estar en sí
                mismo.”
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              II. La conversación analógica
            </h2>

            <div className="space-y-7">
              <p>
                Frente a esa deshabitación, proponemos otra cosa. Proponemos
                pensar, disfrutar y ser analógicamente —no como gesto nostálgico,
                sino como fidelidad a lo que la palabra misma contiene.
                Aná-logos significa relación, proporción, correspondencia.
                Pensar analógicamente es pensar en relación: restaurar los
                vínculos que la lógica de lo inmediato disuelve, devolver al
                tiempo su espesor y a las distancias su sentido.
              </p>

              <p>
                Es reconocer que la vida humana solo se vuelve inteligible
                cuando está arraigada en un lugar, atravesada por una historia,
                abierta al encuentro con aquello que nos resiste. A esa forma de
                existir la llamamos vivir en conversación. Conversación con uno
                mismo en la intimidad más profunda y con los otros en la
                exposición buscada o fortuita. Con los pensamientos propios y con
                los ajenos. Con los contemporáneos y con los que escribieron
                hace siglos. Con los que están al lado y con los que nos llegan
                desde orillas que nunca visitaremos.
              </p>

              <p>
                La conversación, así entendida, no es el intercambio veloz que la
                época confunde con el diálogo: es la forma paciente en que la
                identidad se construye cuando acepta salir de sí para volver
                transformada. Es lo opuesto al desplazamiento sin destino. Es,
                sencillamente, el modo humano de ser.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              III. El Scrinium como refugio
            </h2>

            <div className="space-y-7">
              <p>
                La biblioteca que concebimos no es archivo, ni repositorio, ni
                decoración —tareas en las que lo digital nos supera sin esfuerzo
                y sin consecuencia—. Es otra cosa, más antigua y más urgente: un
                instrumento de identidad y un signo de pertenencia cultural.
                Facilitamos la conversación con títulos y autores, con visiones
                y pensamientos; pero la conversación que se quiere tener, no
                otra; aquella en la que se quiere estar, no otra; aquella en la
                que se desea ser visto, no otra.
              </p>

              <p>
                En esa triple soberanía —tener, estar, ser visto— la biblioteca
                recupera su función primigenia: refugio íntimo donde uno se
                guarece y signo legible por el que uno se declara. Una biblioteca
                bien concebida, mínima o magnífica, no adorna una vida: la
                facilita. Y al facilitarla, la revela.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-[28px] leading-tight font-light tracking-[-0.02em] text-black mb-8">
              IV. El verdadero lujo
            </h2>

            <div className="space-y-7">
              <p>
                De ahí nuestra tesis, que reordena con lucidez el mapa del lujo
                contemporáneo. En una época que ha convertido la inmediatez en
                norma y la disponibilidad en rutina, el verdadero lujo no reside
                en la posibilidad satisfecha al instante, sino en aquella que uno
                pone a su alcance pero a la que hay que llegar. Ni la distancia
                absoluta —que es pobreza— ni la inmediatez total —que se devalúa
                en el acto—, sino la distancia curada: el trayecto que uno decide
                conservar hacia lo que ha elegido.
              </p>

              <p>
                Es fricción querida. Es tiempo debidamente habitado. Es la forma
                más antigua, y quizá la más difícil de sostener, del privilegio.
                Frente a la hiperconectividad, proponemos fricción. Frente a la
                dispersión, concentración. Frente a la superficialidad,
                profundidad. Frente a la identidad visual, comprensión. En un
                mundo donde todos pueden aparentar cualquier cosa al instante,
                nuestro privilegio es otro: haber llegado, con tiempo, a una
                forma legible de uno mismo.
              </p>

              <p>
                El nuevo lujo no consiste en tener, sino en llegar; no en
                aparecer, sino en ser entendido; no en la velocidad, sino en el
                arraigo. Los libros, cuando se reúnen en verdadera conversación,
                son el instrumento exacto —y acaso el último refugio civilizado—
                de ese modo de ser.
              </p>
            </div>
          </article>
        </section>

        <div className="mt-28 text-center">
          <Link
            href="/scrinium"
            className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
          >
            Comprender la forma
          </Link>
        </div>
      </section>
    </main>
  );
}