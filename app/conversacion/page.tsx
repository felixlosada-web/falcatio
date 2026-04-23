export default function ConversacionPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-64 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[750px] mx-auto space-y-24">

        <section className="space-y-10 text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light text-center">
            La Conversación
          </p>

          <h1 className="text-3xl md:text-4xl text-black font-serif italic leading-tight text-center">
            Los Cuadernos de Contexto
          </h1>

          <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg">

            <p>
              El Scrinium no se agota en la disposición de sus obras. Su sentido no reside únicamente en lo que contiene, sino en la forma en que se accede a ello.
            </p>

            <p>
              Los Cuadernos de Contexto constituyen el instrumento que hace posible esa entrada. No acompañan al Scrinium como un apéndice explicativo, sino que articulan la forma en que la obra ha de ser habitada.
            </p>

            <p>
              Cada Cuaderno se concibe como una guía de acceso. No ordena los libros, sino la lectura que los recorre. No describe la colección, sino que establece las condiciones para que el conjunto pueda desplegar su sentido.
            </p>

            <p>
              A través de ellos, el Scrinium deja de ser un sistema estático y se convierte en una estructura activa. La relación entre el anfitrión y la obra no es de consulta, sino de implicación.
            </p>

            <p>
              En ese tránsito, el acto de leer se transforma en conversación.
            </p>

          </div>
        </section>

        <section className="space-y-10 text-left">

          <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg">

            <p>
              La conversación no es aquí una metáfora. Designa el modo en que el Scrinium se activa: una interlocución sostenida entre quien lo habita y la arquitectura intelectual que lo constituye.
            </p>

            <p>
              El Cuaderno no impone un recorrido cerrado, pero tampoco abandona al lector a la dispersión. Propone una cartografía precisa, un ritmo, una secuencia de aproximaciones que permiten atravesar la obra sin disolver su coherencia.
            </p>

            <p>
              Cada anotación, cada referencia cruzada, cada silencio deliberado forma parte de ese dispositivo. El Cuaderno no explica: dispone.
            </p>

            <p>
              Así, la conversación no consiste en extraer contenidos, sino en sostener una relación. Una relación que transforma la lectura en experiencia, la acumulación en forma y el conocimiento en legado.
            </p>

            <p>
              El Scrinium no solo se lee. Se conversa. Y quien lo conversa, vive en él.
            </p>

          </div>
        </section>

        <div className="mt-32 text-center">
          <a
            href="/acceso"
            className="text-[11px] tracking-[0.3em] uppercase text-black border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Iniciar una conversación
          </a>
        </div>

      </div>
    </main>
  );
}