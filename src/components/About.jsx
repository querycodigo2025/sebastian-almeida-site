const impacts = [
  'Superação de bloqueios emocionais profundos',
  'Restauração da autoestima e clareza interior',
  'Alinhamento entre mente, corpo e propósito',
  'Desbloqueio da força espiritual e prosperidade',
]

const credentials = [
  { icon: '🎓', text: 'Pós-graduado em Neurociência' },
  { icon: '🧠', text: 'Especialista em PNL e Psicanálise' },
  { icon: '🌀', text: 'Especialista em Renascimento (Rebirth)' },
  { icon: '🌍', text: 'Europa, América Latina e Brasil' },
  { icon: '✍️', text: 'Autor de 3 livros bestsellers' },
  { icon: '🎤', text: 'Palestrante e Treinador Internacional' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Sobre Mim</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Two photos stacked properly */}
          <div className="relative space-y-4">
            {/* Main speaker photo — portrait, full visible */}
            <div className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '3/4' }}>
              <img
                src="/images/speaker-vest.jpg"
                alt="Sebastian Almeida palestrando"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.4) 0%, transparent 50%)' }} />
              {/* Gold corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold/50" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold/50" />
            </div>

            {/* Second photo — landscape event */}
            <div className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '16/7' }}>
              <img
                src="/images/event-large.jpg"
                alt="Evento com grande público"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.6) 0%, transparent 40%, rgba(13,13,13,0.3) 100%)' }} />
              <div className="absolute bottom-3 left-4">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold">Impacto real</p>
                <p className="text-white font-serif text-sm">Treinamento de Alto Impacto</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Uma vida dedicada à<br />
                <span className="gold-text">transformação humana</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Sou Sebastian Almeida, formado em Administração e Comércio Exterior, com
                pós-graduação em Neurociência e especialista em Renascimento (Rebirth),
                Programação Neurolinguística e Psicanálise.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Atuo como mentor, escritor, treinador e palestrante internacional,
                com vivências na <span className="text-gold">Europa, América Latina e Brasil</span>.
                Através dos meus métodos e mentorias, já impactei <strong className="text-white">milhares de vidas</strong>.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-start gap-3 bg-dark-3/50 border border-white/5 rounded-sm p-3">
                  <span className="text-xl mt-0.5 flex-shrink-0">{c.icon}</span>
                  <span className="text-white/70 text-sm leading-snug">{c.text}</span>
                </div>
              ))}
            </div>

            {/* Impact list */}
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">
                Ajudo pessoas a:
              </p>
              <ul className="space-y-3">
                {impacts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
