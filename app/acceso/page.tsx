export default function AccesoPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pt-64 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[750px] mx-auto">
        <p className="text-[10px] tracking-[0.26em] uppercase text-black/40 mb-12 font-light text-center">
          Iniciar una conversación
        </p>

        <h1 className="text-4xl md:text-5xl text-black mb-16 font-serif italic leading-tight text-center">
          Falcatio Librorum no se ofrece; se descubre.
        </h1>

        <div className="space-y-8 text-black/85 font-light leading-[1.9] text-lg text-left">
          <p>
            La casa opera exclusivamente bajo invitación o solicitud de conversación privada.
          </p>

          <p>
            El acceso se articula mediante un proceso deliberadamente pausado.
          </p>

          <p>
            Quien accede a Falcatio Librorum no realiza una compra. Inicia un proceso de custodia intelectual.
          </p>

          <p>
            Quien reconozca en estas páginas una forma de estar en el mundo que le pertenece, puede solicitar una conversación privada.
          </p>
        </div>

        <div className="mt-20 text-center">
          <a
            href="mailto:curador@falcatiolibrorum.es"
            className="text-[11px] tracking-[0.3em] uppercase text-black border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Solicitar conversación privada
          </a>
        </div>
      </div>
    </main>
  );
}