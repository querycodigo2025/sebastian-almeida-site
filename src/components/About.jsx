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
    <section id="sobre" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 60%, #0D0D0D 100%)' }}>

      {/* ── 1. FOTO PRINCIPAL ─────────────────────────────── */}
      <div className="relative" style={{ height: '70vh', minHeight: '480px', maxHeight: '700px' }}>
        <img
          src="/images/speaker-vest.jpg"
          alt="Sebastian Almeida"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.0) 30%, rgba(13,13,13,0.75) 80%, rgba(13,13,13,1) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.5) 0%, transparent 50%)' }} />

        <div className="absolute top-10 left-8 md:left-16 flex items-center gap-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Sobre Mim</span>
        </div>

        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            Uma vida dedicada à<br />
            <span className="gold-text">transformação humana</span>
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Neurociência', 'Psicanálise', 'PNL', 'Reprogramação Emocional', 'Renascimento'].map(tag => (
              <span key={tag}
                className="text-xs border border-gold/30 text-gold/80 px-3 py-1 rounded-sm backdrop-blur-sm"
                style={{ background: 'rgba(13,13,13,0.5)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. TEXTO BIO ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
        <div className="max-w-3xl space-y-6 relative overflow-hidden">
          {/* Foto recortada pequena de Sebastian flutuando à direita do texto */}
          <div className="w-24 h-24 md:w-32 md:h-32 float-none md:float-right mx-auto md:mx-0 md:ml-6 mb-4 md:mb-1 relative group drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]">
            <img
              src="/images/about-cutout.png"
              alt="Sebastian Almeida"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
            Sou <strong className="text-white font-semibold">Sebastian Almeida</strong>, formado em
            Administração e Comércio Exterior, com pós-graduação em Neurociência e
            especialista em Renascimento (Rebirth), Programação Neurolinguística e Psicanálise.
          </p>
          <p className="text-white/65 text-lg leading-relaxed">
            Atuo como mentor, escritor, treinador e palestrante internacional, com vivências
            na <span className="text-gold">Europa, América Latina e Brasil</span>.
            Através dos meus métodos e mentorias, já impactei{' '}
            <strong className="text-white">milhares de vidas</strong>, ajudando pessoas a
            reconectar com seu poder mais profundo.
          </p>

          <div className="h-px w-24"
            style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />

          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-5">
              Ajudo pessoas a:
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

      {/* ── 3. DUAS FOTOS DESTAQUE (antes de Formação) ────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-14">
        <div className="grid md:grid-cols-2 gap-3">

          {/* event-large — público lotado */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '360px' }}>
            <img
              src="/images/event-large.jpg"
              alt="Grande público no evento de Sebastian Almeida"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 38%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 50%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Query in Company</p>
              <p className="text-white font-serif text-lg font-bold leading-snug">
                Treinamento corporativo com público lotado
              </p>
            </div>
          </div>

          {/* audience-estriado — palco + plateia */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '360px' }}>
            <img
              src="/images/audience-estriado.jpg"
              alt="Sebastian no palco — Estriado: Onde o Novo Vira Automático"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 22%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 50%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Ao Vivo</p>
              <p className="text-white font-serif text-lg font-bold leading-snug">
                Estriado — Onde o Novo Vira Automático
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── 4. FORMAÇÃO & ATUAÇÃO ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-6">
          Formação &amp; Atuação
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {credentials.map(c => (
            <div key={c.text}
              className="flex items-start gap-4 p-4 rounded-sm border border-white/5 transition-colors hover:border-gold/20"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-xl flex-shrink-0">{c.icon}</span>
              <span className="text-white/70 text-sm leading-snug">{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. NO PALCO ──────────────────────────────────── */}
      <div className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">No Palco</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-3"
          style={{ height: '400px' }}>

          {/* audience-stage — grande, 5 colunas */}
          <div className="col-span-5 relative overflow-hidden rounded-sm">
            <img
              src="/images/audience-stage.jpg"
              alt="Plateia e palco"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)' }} />
            <div className="absolute bottom-4 left-4">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold">Workshop</p>
              <p className="text-white text-sm font-medium">Público engajado</p>
            </div>
          </div>

          {/* 3 fotos 7 colunas */}
          <div className="col-span-7 grid grid-cols-2 grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/stage-5etapas.jpg" alt="As 5 etapas"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 25%' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">As 5 Etapas do Método Query</p>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/brain2.jpg" alt="Neurociência"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 15%' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">Neurociência Prática</p>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/workshop-group.jpg" alt="Grupo workshop"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 30%' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">Mentoria em Grupo</p>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/immersion.jpg" alt="Imersão"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center 30%' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">Imersão Emocional</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
