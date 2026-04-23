"use client";

import { useState } from 'react';

export default function ConversacionForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className="mt-16 text-center text-[13px] text-negro font-light font-body py-12 border-t border-negro/10">
        La solicitud ha sido recibida.<br /><br />
        Falcatio Librorum responderá personalmente cuando el encargo lo requiera.
      </div>
    );
  }

  return (
    <form className="space-y-8 text-left font-body mt-16" onSubmit={handleSubmit}>
      <input 
        required
        type="text" 
        placeholder="Su nombre" 
        className="w-full bg-transparent border-b border-negro/20 py-4 text-negro placeholder-negro/30 focus:outline-none focus:border-negro transition-colors font-light text-[13px]"
      />
      <input 
        required
        type="email" 
        placeholder="Su correo electrónico" 
        className="w-full bg-transparent border-b border-negro/20 py-4 text-negro placeholder-negro/30 focus:outline-none focus:border-negro transition-colors font-light text-[13px]"
      />
      <textarea 
        required
        placeholder="Mensaje o propósito" 
        rows={2}
        className="w-full bg-transparent border-b border-negro/20 py-4 text-negro placeholder-negro/30 focus:outline-none focus:border-negro transition-colors font-light text-[13px] resize-none overflow-hidden"
      ></textarea>
      
      <div className="pt-8 flex justify-center">
        <button 
          type="submit"
          className="text-negro border-b border-negro pb-1 hover:text-gris hover:border-gris transition-all text-[11px] uppercase tracking-[0.2em]"
        >
          Solicitar conversación
        </button>
      </div>
    </form>
  );
}
