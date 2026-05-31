const credentials = [
  { icon: '🎓', text: 'Pós-graduado em Neurociência' },
  { icon: '🧠', text: 'Especialista em PNL e Psicanálise' },
  { icon: '🌀', text: 'Especialista em Renascimento (Rebirth)' },
  { icon: '🌍', text: 'Europa, América Latina e Brasil' },
  { icon: '✍️', text: 'Autor de 3 livros bestsellers' },
  { icon: '🎤', text: 'Palestrante e Treinador Internacional' },
]

const impacts = [
  'Superação de bloqueios emocionais profundos',
  'Restauração da autoestima e clareza interior',
  'Alinhamento entre mente, corpo e propósito',
  'Desbloqueio da força espiritual e propósito',
]

export default function About() {
  return (
    <section 
      id="sobre" 
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 60%, #0D0D0D 100%)' }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96E, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Sobre Mim</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Uma vida dedicada à <br />
            <span className="gold-text">transformação humana</span>
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Overlapping Photo Composition (No cuts, no blur) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 order-2 lg:order-1">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[3/4]">
              
              {/* Primary portrait photo - speaker-vest.jpg (high-res stage portrait) */}
              <div className="absolute top-0 left-0 w-[82%] h-[85%] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/speaker-vest.jpg"
                  alt="Sebastian Almeida palestrando no palco"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/40 to-transparent" />
              </div>

              {/* Overlapping secondary photo - Transparent cutout (about-cutout.png with white background removed) */}
              <div className="absolute bottom-0 right-0 w-[52%] aspect-square z-20 group drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]">
                <img
                  src="/images/about-cutout.png"
                  alt="Sebastian Almeida retrato de estúdio recorte"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Decorative design elements */}
              <div className="absolute -top-3 left-[5%] w-[72%] h-[80%] border border-gold/20 -z-10 rounded-sm" />
              <div className="absolute bottom-[5%] -right-3 w-[47%] h-[47%] border border-gold/15 -z-10 rounded-sm" />
            </div>
          </div>

          {/* Right Column: Bio Narrative with Small Cutout on the Right */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-6 overflow-hidden">
              
              {/* Small transparent cutout photo floating on the right side (About me cutout) */}
              <div className="w-28 h-28 md:w-36 md:h-36 float-none md:float-right mx-auto md:mx-0 md:ml-6 mb-4 md:mb-1 relative group drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
                <img
                  src="/images/about-cutout.png"
                  alt="Sebastian Almeida retrato transparente"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className="text-white/85 text-xl md:text-2xl leading-relaxed font-light">
                Sou <strong className="text-white font-semibold">Sebastian Almeida</strong>, formado em
                Administração e Comércio Exterior, com pós-graduação em Neurociência e
                especialista em Renascimento (Rebirth), Programação Neurolinguística e Psicanálise.
              </p>
              
              <p className="text-white/65 text-lg leading-relaxed">
                Atuo como mentor, escritor, treinador e palestrante internacional, com vivências
                na <span className="text-gold font-medium">Europa, América Latina e Brasil</span>.
                Através dos meus métodos e mentorias, já impactei{' '}
                <strong className="text-white">milhares de vidas</strong>, ajudando pessoas a
                reconectar com seu poder mais profundo e restaurar seu equilíbrio emocional genuíno.
              </p>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent" />

            {/* Specialty Tags */}
            <div className="flex flex-wrap gap-2">
              {['Neurociência', 'Psicanálise', 'PNL', 'Reprogramação Emocional', 'Renascimento'].map(tag => (
                <span 
                  key={tag}
                  className="text-xs border border-gold/30 text-gold/80 px-3 py-1 rounded-sm backdrop-blur-sm bg-dark-DEFAULT/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Focus points list */}
            <div className="space-y-4">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold">
                Áreas de Impacto do meu Trabalho:
              </p>
              <ul className="space-y-3">
                {impacts.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2.5" />
                    <span className="text-white/75 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Middle Section: Two Wide Event Highlights (No crop, portrait proportioned) */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Event 1: event-large.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4] group border border-white/5">
              <img
                src="/images/event-large.jpg"
                alt="Grande público no evento de Sebastian Almeida"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT via-dark-DEFAULT/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Query in Company</p>
                <p className="text-white font-serif text-xl md:text-2xl font-bold leading-tight">
                  Treinamento corporativo com público lotado
                </p>
                <p className="text-white/50 text-xs mt-2 line-clamp-2">
                  Impactando líderes e corporações por meio da neurociência aplicada à performance de alta escala.
                </p>
              </div>
            </div>

            {/* Event 2: audience-estriado.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4] group border border-white/5">
              <img
                src="/images/audience-estriado.jpg"
                alt="Sebastian no palco — Estriado: Onde o Novo Vira Automático"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT via-dark-DEFAULT/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Ao Vivo</p>
                <p className="text-white font-serif text-xl md:text-2xl font-bold leading-tight">
                  Estriado — Onde o Novo Vira Automático
                </p>
                <p className="text-white/50 text-xs mt-2 line-clamp-2">
                  O treinamento ao vivo de reprogramação cerebral que automatiza novos hábitos de sucesso emocional.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Credentials Grid (Formação & Atuação) */}
        <div className="mb-24">
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-6">
            Formação &amp; Atuação
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map(c => (
              <div 
                key={c.text}
                className="flex items-start gap-4 p-4 rounded-sm border border-white/5 transition-colors hover:border-gold/20"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <span className="text-white/70 text-sm leading-snug">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: "No Palco" Portrait Mosaic (Perfect alignment, no crop) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">No Palco</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Card 1: audience-stage.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[3/4] group border border-white/5">
              <img 
                src="/images/audience-stage.jpg" 
                alt="Plateia e Sebastian no palco" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Estriado: Onde o Novo Vira Automático
              </p>
            </div>

            {/* Card 2: stage-5etapas.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[3/4] group border border-white/5">
              <img 
                src="/images/stage-5etapas.jpg" 
                alt="As 5 etapas do Método Query" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                As 5 Etapas do Método Query
              </p>
            </div>

            {/* Card 3: brain2.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[3/4] group border border-white/5">
              <img 
                src="/images/brain2.jpg" 
                alt="Neurociência e comportamento humano" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Neurociência Prática Aplicada
              </p>
            </div>

            {/* Card 4: immersion.jpg */}
            <div className="relative overflow-hidden rounded-sm aspect-[3/4] group border border-white/5">
              <img 
                src="/images/immersion.jpg" 
                alt="Imersão emocional profunda" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Imersão Águia de Fogo
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
