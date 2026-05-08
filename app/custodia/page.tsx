import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custodia | Falcatio Librorum",
  description:
    "Scrinia disponibles para custodia: tesis bibliográficas singulares concebidas como obras únicas, cerradas y destinadas a un único custodio.",
};

const scrinia = [
  {
    title: "Scrinium XIV — Mare Hispanicum",
    subtitle: "Hegemonía Naval de la Corona Española",
    thesis:
      "Una exploración de la soberanía naval y la medición del mundo, donde el océano se lee como una arquitectura de ciencia, logística y destino histórico.",
    content:
      "Un itinerario intelectual que recorre desde la cosmografía teórica de Alonso de Chaves hasta las crónicas de las expediciones de Malaspina y los tratados históricos fundamentales de Fernández Duro.",
    container:
      "Pieza de ebanistería mayor inspirada en la sobriedad técnica y el rigor de las cámaras de navegación de los navíos del siglo XVIII.",
    href: "/custodia/mare-hispanicum",
    linkText: "Descubrir la arquitectura de esta obra",
  },
  {
    title: "Scrinium IX — El Gobierno de Sí",
    subtitle: "Prudencia, Deber y Sabiduría",
    thesis:
      "Dispositivo intelectual diseñado para la formación del juicio propio y el ejercicio de la templanza a través del legado de la gran tradición moral europea.",
    content:
      "Una conversación que vincula la ética clásica de Aristóteles y los estoicos con la lucidez ensayística de Montaigne y la serenidad política de Marco Aurelio.",
    container:
      "Contenedor noble con proporciones calculadas para favorecer el refugio íntimo, la concentración y el estudio silencioso.",
    href: "/custodia/el-gobierno-de-si",
    linkText: "Habitar la conversación",
  },
  {
    title: "Scrinium XXVII — El Pensamiento Estratégico",
    subtitle: "Del Príncipe a la Sala de Consejo",
    thesis:
      "Arquitectura de pensamiento sobre la razón estratégica: una genealogía que viaja desde el origen de la Razón de Estado hasta su vigencia en la alta dirección contemporánea.",
    content:
      "Un diálogo estructurado entre los fundamentos de Maquiavelo y Clausewitz con la visión atemporal de la inteligencia estratégica de Sun Tzu.",
    container:
      "Objeto patrimonial concebido para presidir espacios de decisión, proyectando una imagen de autoridad, pausa y profundidad de criterio.",
    href: "/custodia/pensamiento-estrategico",
    linkText: "Adentrarse en la tesis",
  },
  {
    title: "Scrinium XLI — La Península Románica",
    subtitle: "Piedra, Territorio y Memoria",
    thesis:
      "La biblioteca como archivo territorial: una lectura del románico no solo como estilo artístico, sino como el lenguaje que ordena el paisaje y la memoria de la península.",
    content:
      "Una cartografía visual y teórica que reúne las obras capitales de García de Cortázar y Enríquez de Salamanca, constituyendo un registro exhaustivo del territorio.",
    container:
      "Estructura de custodia adecuada para albergar la monumentalidad del Scrinium en su residencia definitiva.",
    href: "/custodia/peninsula-romanica",
    linkText: "Explorar el dispositivo intelectual",
  },
];

export default function CustodiaPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-28 md:py-36">
      <section className="max-w-3xl mb-24">
        <p className="text-[10px] tracking-[0.28em] uppercase text-black/40 mb-6">
          Custodia
        </p>

        <h1 className="text-3xl md:text-5xl leading-tight font-light tracking-[-0.03em] mb-8">
          Scrinia en espera de custodio
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-black/70">
          Inspirado por sus propias conversaciones, el curador de la casa
          materializa tesis bibliográficas singulares que se integran en nuestro
          registro y quedan a la espera de un único custodio que les dé lugar.
        </p>
      </section>

      <section className="space-y-24">
        {scrinia.map((item) => (
          <article
            key={item.title}
            className="border-t border-black/10 pt-12 grid md:grid-cols-[1fr_2fr] gap-10"
          >
            <div>
              <h2 className="text-2xl leading-snug font-light tracking-[-0.02em]">
                {item.title}
              </h2>
              <p className="mt-3 text-[11px] tracking-[0.18em] uppercase text-black/45">
                {item.subtitle}
              </p>
            </div>

            <div className="space-y-6 text-[15px] leading-relaxed text-black/70">
              <p>
                <span className="text-black">La tesis:</span> {item.thesis}
              </p>

              <p>
                <span className="text-black">El contenido:</span>{" "}
                {item.content}
              </p>

              <p>
                <span className="text-black">El continente:</span>{" "}
                {item.container}
              </p>

              <Link
                href={item.href}
                className="inline-block mt-4 text-[11px] tracking-[0.18em] uppercase text-black border-b border-black/30 pb-1 hover:border-black transition-colors"
              >
                {item.linkText}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-black/10 mt-28 pt-12 max-w-3xl">
        <p className="text-base md:text-lg leading-relaxed text-black/70">
          Cada Scrinium es una obra única y cerrada. Si reconoce en alguna de
          estas tesis un territorio que le pertenece, puede solicitar los
          detalles de su arquitectura y estado de custodia en una audiencia
          privada.
        </p>
      </section>
    </main>
  );
}