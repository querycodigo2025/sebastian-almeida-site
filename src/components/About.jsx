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
  { icon: '🌍', text: 'Atuação em Europa, América Latina e Brasil' },
  { icon: '✍️', text: 'Autor de 3 livros bestsellers' },
  { icon: '🎤', text: 'Palestrante e Treinador Internacional' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Sobre Mim</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo */}
          <div className="relative">
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Sebastian Almeida apresentando"
                className="w-full max-w-sm md:max-w-md mx-auto object-cover rounded-sm"
                style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-purple/40" />
            </div>

            {/* Second image side by side on larger screens */}
            <div className="hidden lg:block absolute -right-16 bottom-12 w-48 h-64 shadow-2xl rounded-sm overflow-hidden border border-gold/20">
              <img
                src="/images/stage-blue.jpg"
                alt="Sebastian no palco"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
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
                  <span className="text-xl mt-0.5">{c.icon}</span>
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

        {/* Gallery strip */}
        <div className="mt-20 grid grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { src: '/images/stage-5etapas.jpg', alt: 'Sebastian no palco — As 5 Etapas' },
            { src: '/images/workshop-group.jpg', alt: 'Grupo no workshop' },
            { src: '/images/brain.jpg', alt: 'Explicando neurociência' },
            { src: '/images/workshop-audience.jpg', alt: 'Plateia no workshop' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden rounded-sm aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-DEFAULT/20 hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
