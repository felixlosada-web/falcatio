import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curaduría bibliográfica privada | Falcatio Librorum",
  description:
    "Qué es la curaduría bibliográfica privada, su sentido y su función como práctica de selección, pensamiento y transmisión.",
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-[15px] leading-relaxed">
      <h1 className="text-2xl mb-10">
        Curaduría bibliográfica privada
      </h1>

      <p className="mb-6">
        La curaduría bibliográfica no consiste en recomendar libros. Consiste en
        establecer una relación deliberada entre un sujeto y un conjunto de
        obras que, en su disposición y en su lectura, permiten la construcción
        de una forma inteligible de sí mismo.
      </p>

      <p className="mb-6">
        En un contexto de disponibilidad ilimitada, donde el acceso a los textos
        se ha vuelto inmediato y continuo, la dificultad ya no reside en
        encontrar libros, sino en discernir cuáles deben ser leídos, en qué
        orden, y bajo qué marco de sentido. La curaduría introduce una distancia
        necesaria entre el sujeto y el flujo indiscriminado de información,
        restituyendo la posibilidad de elección significativa.
      </p>

      <h2 className="text-xl mt-16 mb-6">
        Qué es la curaduría bibliográfica
      </h2>

      <p className="mb-6">
        La curaduría bibliográfica es una práctica de selección, articulación y
        transmisión. No se limita a agrupar textos, sino que los organiza como
        una arquitectura de pensamiento en la que cada obra ocupa un lugar
        preciso dentro de una totalidad coherente.
      </p>

      <p className="mb-6">
        Esta práctica responde a la necesidad de restaurar vínculos que la lógica
        de la inmediatez disuelve: vínculos entre disciplinas, entre épocas y,
        sobre todo, entre el lector y aquello que lee. El resultado no es una
        lista de lecturas, sino un sistema de orientación.
      </p>

      <h2 className="text-xl mt-16 mb-6">
        Para quién es
      </h2>

      <p className="mb-6">
        Está dirigida a quienes no buscan acumular libros, sino habitar una
        biblioteca. A quienes entienden la lectura como una práctica formativa y
        no como consumo, y requieren un criterio que permita atravesar la
        abundancia sin disolverse en ella.
      </p>

      <p className="mb-6">
        Es, en este sentido, una práctica exigente. Requiere tiempo, atención y
        disposición para sostener una relación prolongada con las obras. No está
        orientada a la rapidez, sino a la construcción de continuidad.
      </p>

      <h2 className="text-xl mt-16 mb-6">
        Cómo funciona
      </h2>

      <p className="mb-6">
        El proceso parte de una interlocución inicial en la que se delimita el
        horizonte intelectual del destinatario. A partir de esa escucha, se
        establece una selección cerrada de obras que no responde a criterios
        generales, sino a una configuración específica.
      </p>

      <p className="mb-6">
        Estas obras se integran en una unidad indivisible que no separa contenido
        y forma. La biblioteca resultante no es un conjunto abierto, sino una
        estructura completa que puede ser habitada, transmitida y reconocida
        como tal.
      </p>

      <h2 className="text-xl mt-16 mb-6">
        Contexto contemporáneo
      </h2>

      <p className="mb-6">
        La sobreabundancia de información ha producido una paradoja: cuanto más
        accesibles son los textos, menos legible resulta su conjunto. La
        multiplicación de estímulos no ha ampliado la comprensión, sino que ha
        fragmentado la atención.
      </p>

      <p className="mb-6">
        En este contexto, la curaduría bibliográfica se presenta como una forma
        de resistencia a la dispersión. Introduce fricción allí donde todo tiende
        a la inmediatez y restituye el espesor del tiempo en la relación con las
        ideas.
      </p>

      <p className="mb-6">
        Su finalidad no es facilitar el acceso, sino hacerlo significativo.
      </p>
    </main>
  );
}