export default function FilosofiaPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-64 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[750px] mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-16 font-light text-center">Nuestra Filosofía</p>
        <h1 className="text-4xl md:text-5xl text-black mb-20 font-serif italic leading-tight text-center">
          De la ubicuidad simulada al arraigo verdadero
        </h1>
        
        <div className="space-y-12 text-black/85 font-light leading-[1.9] text-lg">
          
          <h2 className="text-xl font-serif text-black mt-16 mb-6">I. La ilusión de la ubicuidad</h2>
          <p>Nos han prometido que podemos habitar todos los tiempos y todos los lugares a la vez. Que basta deslizar un dedo para estar en cualquier parte, saber cualquier cosa, conversar con cualquiera. Que somos, por fin, globales y eternos. Pero esa promesa, examinada con lucidez, esconde una sustracción silenciosa: cuanto más creemos estar en todas partes, menos estamos verdaderamente en alguna.</p>
          <p>La ubicuidad que la época nos ofrece no es plenitud del mundo, sino su contrario exacto -una circulación sin cuerpo por una infraestructura invisible, un tránsito que no dirigen ni el deseo ni la biografía, sino una arquitectura de algoritmos que nos mueve sin que nos movamos.</p>
          <p>En esa deriva perdemos lo que nunca debió cederse: la pluralidad densa del mundo. No la información -de eso hay sobreabundancia hasta el ahogo-, sino la textura de las épocas que no son la nuestra, de las geografías que no pisamos, de las mentes que no coinciden con la nuestra en el tiempo. Perdemos el peso de otras historias, el espesor de otras ideas, la opacidad fértil de las personas reales.</p>

          <div className="py-12 border-y border-black/10 my-16 px-8">
            <p className="text-2xl font-serif italic text-black/90 text-center leading-relaxed">
              "Lo que la hiperconectividad nos entrega como libertad es, en verdad, una forma nueva y sofisticada de indigencia: la del sujeto que, por estar en todas partes, ha dejado de estar en sí mismo."
            </p>
          </div>

          <h2 className="text-xl font-serif text-black mt-16 mb-6">II. La conversación analógica</h2>
          <p>Frente a esa deshabitación, proponemos otra cosa. Proponemos pensar, disfrutar y ser analógicamente -no como gesto nostálgico, sino como fidelidad a lo que la palabra misma contiene. Aná-logos significa relación, proporción, correspondencia. Pensar analógicamente es pensar en relación: restaurar los vínculos que la lógica de lo inmediato disuelve, devolver al tiempo su espesor y a las distancias su sentido.</p>
          <p>Es reconocer que la vida humana sólo se vuelve inteligible cuando está arraigada en un lugar, atravesada por una historia, abierta al encuentro con aquello que nos resiste. A esa forma de existir la llamamos vivir en conversación. Conversación con uno mismo en la intimidad más profunda y con los otros en la exposición buscada o fortuita. Con los pensamientos propios y con los ajenos. Con los contemporáneos y con los que escribieron hace siglos. Con los que están al lado y con los que nos llegan desde orillas que nunca visitaremos.</p>
          <p>La conversación, así entendida, no es el intercambio veloz que la época confunde con el diálogo: es la forma paciente en que la identidad se construye cuando acepta salir de sí para volver transformada. Es lo opuesto al desplazamiento sin destino. Es, sencillamente, el modo humano de ser.</p>

          <h2 className="text-xl font-serif text-black mt-16 mb-6">III. El Scrinium como refugio</h2>
          <p>La biblioteca que concebimos no es archivo, ni repositorio, ni decoración -tareas en las que lo digital nos supera sin esfuerzo y sin consecuencia. Es otra cosa, más antigua y más urgente: un instrumento de identidad y un signo de pertenencia cultural. Facilitamos la conversación con títulos y autores, con visiones y pensamientos; pero la conversación que se quiere tener, no otra; aquella en la que se quiere estar, no otra; aquella en la que se desea ser visto, no otra.</p>
          <p>En esa triple soberanía -tener, estar, ser visto- la biblioteca recupera su función primigenia: refugio íntimo donde uno se guarece y signo legible por el que uno se declara. Una biblioteca bien concebida, mínima o magnífica, no adorna una vida: la facilita. Y al facilitarla, la revela.</p>

          <h2 className="text-xl font-serif text-black mt-16 mb-6">IV. El verdadero lujo</h2>
          <p>De ahí nuestra tesis, que reordena con lucidez el mapa del lujo contemporáneo. En una época que ha convertido la inmediatez en norma y la disponibilidad en rutina, el verdadero lujo no reside en la posibilidad satisfecha al instante, sino en aquella que uno pone a su alcance pero a la que hay que llegar. Ni la distancia absoluta -que es pobreza- ni la inmediatez total -que se devalúa en el acto-, sino la distancia curada: el trayecto que uno decide conservar hacia lo que ha elegido.</p>
          <p>Es fricción querida. Es tiempo debidamente habitado. Es la forma más antigua, y quizá la más difícil de sostener, del privilegio. Frente a la hiperconectividad, proponemos fricción. Frente a la dispersión, concentración. Frente a la superficialidad, profundidad. Frente a la identidad visual, comprensión. En un mundo donde todos pueden aparentar cualquier cosa al instante, nuestro privilegio es otro: haber llegado, con tiempo, a una forma legible de uno mismo.</p>
          <p>El nuevo lujo no consiste en tener, sino en llegar; no en aparecer, sino en ser entendido; no en la velocidad, sino en el arraigo. Los libros, cuando se reúnen en verdadera conversación, son el instrumento exacto -y acaso el último refugio civilizado- de ese modo de ser.</p>
        </div>

        <div className="mt-32 text-center">
          <a
            href="/scrinium"
            className="text-[11px] tracking-[0.3em] uppercase text-black border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Comprender la forma
          </a>
        </div>

      </div>
    </main>
  );
}