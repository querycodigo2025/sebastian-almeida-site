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
          src="/images/about.jpg"
          alt="Sebastian Almeida"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 12%' }}
        />
        {/* Gradientes cinematográficos */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.0) 30%, rgba(13,13,13,0.75) 80%, rgba(13,13,13,1) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.5) 0%, transparent 50%)' }} />

        {/* Label no topo */}
        <div className="absolute top-10 left-8 md:left-16 flex items-center gap-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Sobre Mim</span>
        </div>

        {/* Nome + título no rodapé da foto */}
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

      {/* ── 2. TEXTO SOBRE MIM ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Esquerda: bio */}
          <div className="lg:col-span-3 space-y-7">
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

            {/* Linha divisória dourada */}
            <div className="h-px w-24"
              style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />

            {/* O que faço */}
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

          {/* Direita: credenciais */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-6">
              Formação & Atuação
            </p>
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
      </div>

      {/* ── 3. FOTOS NA PALESTRA ─────────────────────────── */}
      <div className="pb-24 md:pb-32">
        {/* Label */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">No Palco</span>
          </div>
        </div>

        {/* Grid assimétrico premium */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 grid-rows-2 gap-3"
          style={{ height: '520px' }}>

          {/* Foto grande esquerda — audience-stage (vertical, público + palco) */}
          <div className="col-span-5 row-span-2 relative overflow-hidden rounded-sm">
            <img
              src="/images/audience-stage.jpg"
              alt="Sebastian no palco com grande público"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)' }} />
            <div className="absolute bottom-5 left-5">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold">Ao Vivo</p>
              <p className="text-white font-serif text-base font-bold">Estriado — Onde o Novo Vira Automático</p>
            </div>
          </div>

          {/* Topo direita — stage-5etapas */}
          <div className="col-span-4 row-span-1 relative overflow-hidden rounded-sm">
            <img
              src="/images/stage-5etapas.jpg"
              alt="Sebastian apresentando as 5 etapas"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-4 text-white text-xs font-medium">As 5 Etapas do Método Query</p>
          </div>

          {/* Topo direita 2 — brain2 */}
          <div className="col-span-3 row-span-1 relative overflow-hidden rounded-sm">
            <img
              src="/images/brain2.jpg"
              alt="Neurociência — onde mora cada emoção"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-4 text-white text-xs font-medium">Neurociência Prática</p>
          </div>

          {/* Baixo direita — audience-estriado */}
          <div className="col-span-4 row-span-1 relative overflow-hidden rounded-sm">
            <img
              src="/images/audience-estriado.jpg"
              alt="Plateia no treinamento"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-4 text-white text-xs font-medium">Treinamento de Alto Impacto</p>
          </div>

          {/* Baixo direita 2 — workshop-group */}
          <div className="col-span-3 row-span-1 relative overflow-hidden rounded-sm">
            <img
              src="/images/workshop-group.jpg"
              alt="Grupo após workshop"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-4 text-white text-xs font-medium">Workshop em Grupo</p>
          </div>
        </div>
      </div>

    </section>
  )
}
