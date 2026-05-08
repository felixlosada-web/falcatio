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
    <main className="min-h-screen bg-[#F8F6F2] pt-44 pb-32 px-6 md:px-10">
      <section className="max-w-[760px] mx-auto mb-32">
        <p className="text-[10px] tracking-[0.22em] uppercase text-black/35 mb-10">
          Custodia
        </p>

        <h1 className="text-4xl md:text-5xl leading-tight font-serif italic text-black mb-12">
          Scrinia en espera de custodio
        </h1>

        <p className="text-[17px] leading-[1.95] text-black/75 font-light">
          Inspirado por sus propias conversaciones, el curador de la casa
          materializa tesis bibliográficas singulares que se integran en nuestro
          registro y quedan a la espera de un único custodio que les dé lugar.
        </p>
      </section>

      <section className="max-w-[760px] mx-auto">
        {scrinia.map((item, index) => (
          <article
            key={item.title}
            className={`${
              index !== 0 ? "border-t border-black/10 pt-20" : ""
            } pb-24`}
          >
            <div className="mb-10">
              <h2 className="text-[30px] leading-[1.2] font-light tracking-[-0.02em] text-black mb-4">
                {item.title}
              </h2>

              <p className="text-[11px] tracking-[0.16em] uppercase text-black/40">
                {item.subtitle}
              </p>
            </div>

            <div className="space-y-7 text-[16px] leading-[1.95] text-black/72 font-light">
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
            </div>

            <div className="mt-10">
              <Link
                href={item.href}
                className="text-[10px] tracking-[0.22em] uppercase text-black/55 border-b border-black/20 pb-2 hover:text-black hover:border-black transition-all duration-300"
              >
                {item.linkText}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-[760px] mx-auto border-t border-black/10 pt-16 mt-10">
        <p className="text-[17px] leading-[1.95] text-black/75 font-light">
          Cada Scrinium es una obra única y cerrada. Si reconoce en alguna de
          estas tesis un territorio que le pertenece, puede solicitar los
          detalles de su arquitectura y estado de custodia en una audiencia
          privada.
        </p>
      </section>
    </main>
  );
}