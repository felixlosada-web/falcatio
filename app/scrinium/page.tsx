export default function ScriniumPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-64 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[750px] mx-auto space-y-24">

        {/* EL OFICIO */}
        <section className="space-y-10 text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light text-center">
            El Oficio
          </p>

          <h1 className="text-3xl md:text-4xl text-black font-serif italic leading-tight text-center">
            Curaduría Bibliográfica Privada
          </h1>

          <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg">
            <p>
              Falcatio Librorum no vende libros; ejerce la curaduría bibliográfica privada. Nuestro oficio consiste en concebir obras indivisibles donde una biblioteca curada, el dispositivo intelectual que la articula y un contenedor noble que la custodia dejan de ser piezas separadas para convertirse en una única forma.
            </p>

            <p>
              A este refugio de conocimiento, a esta unidad patrimonial perfecta, la llamamos Scrinium.
            </p>
          </div>
        </section>

        {/* EL MÉTODO */}
        <section className="space-y-10 text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light text-center">
            El Método
          </p>

          <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg">
            <p>
              Nuestro oficio comienza con la escucha. Cada encargo se inicia en una conversación privada, conducida personalmente por el curador de la casa, en la que se exploran motivaciones, territorios de interés y espacios de destino. La decisión de aceptar un encargo —así como la de rechazarlo— se toma en ese mismo acto.
            </p>

            <p>
              A partir de esa conversación, construimos una arquitectura bibliográfica regida por tres exigencias innegociables: selección sin concesiones, jerarquización precisa y coherencia narrativa. El resultado nunca es una simple suma de volúmenes, sino un ecosistema completo donde cada obra adquiere sentido por cómo acompaña, articula y enriquece el pensamiento, la identidad y el patrimonio de su anfitrión.
            </p>
          </div>
        </section>

        {/* LA OBRA */}
        <section className="space-y-10 text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light text-center">
            La Obra
          </p>

          <h2 className="text-3xl md:text-4xl text-black font-serif italic leading-tight text-center">
            El Scrinium
          </h2>

          <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg">
            <p>
              El término Scrinium, recuperado del latín clásico, designaba el arca donde se custodiaban los documentos más valiosos. Hoy, en Falcatio Librorum, recupera su significado pleno para dar nombre a la materialización de nuestro oficio.
            </p>

            <p>
              No se trata de libros contenidos en una caja. La dualidad tradicional desaparece: el cliente no adquiere una biblioteca y un mueble por separado, adquiere un Scrinium. Cada obra integra de manera indivisible:
            </p>

            <div className="space-y-6">
              <p>
                <strong>El contenido:</strong> Una colección bibliográfica curada con extrema precisión temática.
              </p>

              <p>
                <strong>El alma:</strong> Un dispositivo intelectual que la articula y dota de sentido.
              </p>

              <p>
                <strong>El continente:</strong> Una pieza de ebanistería mayor, concebida expresamente para cada colección en colaboración con talleres escogidos por la casa.
              </p>
            </div>

            <p>
              Sus materiales nobles, proporciones calculadas y acabados destinados a envejecer con dignidad hacen del Scrinium un objeto heredable por derecho propio. Es una forma cerrada de conocimiento concebida para ser habitada por quien la encarga, interpretada por quienes la frecuentan y transmitida a quienes vengan después.
            </p>

            <p>
              Para garantizar esta vocación de legado, cada Scrinium se entrega acompañado de un Certificado de Obra nominado, que lo inscribe en el registro permanente de la casa y lo constituye formalmente en una pieza de transmisión intergeneracional.
            </p>
          </div>
        </section>

        <div className="mt-32 text-center">
          <a
            href="/conversacion"
            className="text-[11px] tracking-[0.3em] uppercase text-black border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Entrar en la conversación
          </a>
        </div>

      </div>
    </main>
  );
}