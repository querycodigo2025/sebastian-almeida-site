import { useLanguage } from '../i18n'

export default function About() {
  const { t } = useLanguage()

  const credentials = [
    { icon: '🎓', text: t('cred.1') },
    { icon: '🧠', text: t('cred.2') },
    { icon: '🌀', text: t('cred.3') },
    { icon: '🌍', text: t('cred.4') },
    { icon: '✍️', text: t('cred.5') },
    { icon: '🎤', text: t('cred.6') },
  ]

  const impacts = [
    t('about.help1'),
    t('about.help2'),
    t('about.help3'),
    t('about.help4'),
  ]

  const tags = [
    t('about.tag.neuro'),
    t('about.tag.psy'),
    t('about.tag.pnl'),
    t('about.tag.reprog'),
    t('about.tag.rebirth')
  ]

  return (
    <section 
      id="sobre" 
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 60%, #0D0D0D 100%)' }}
    >

      {/* ── 1. BANNER DO TOPO (Pádua Style: Foto about.jpg em moldura redonda rounded-2xl) ── */}
      <div 
        className="relative overflow-hidden w-full flex items-center" 
        style={{ 
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1D063A 55%, #0D0D0D 100%)',
          height: '60vh', 
          minHeight: '450px', 
          maxHeight: '650px',
          borderBottom: '1px solid rgba(201, 169, 110, 0.15)'
        }}
      >
        {/* Subtle decorative glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/90 to-transparent z-10" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A96E, transparent)' }} />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center z-20">
          <div className="grid md:grid-cols-12 gap-6 items-center w-full h-full">
            
            {/* Left side: Heading */}
            <div className="md:col-span-7 space-y-6 pt-10 md:pt-0">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{t('about.tag')}</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('about.title')} <br />
                <span className="gold-text">{t('about.titleGold')}</span>
              </h2>

              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                  <span key={tag}
                    className="text-[10px] md:text-xs border border-gold/30 text-gold/80 px-3 py-1 rounded-sm backdrop-blur-sm bg-dark-DEFAULT/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side: The Correct Photo (sebastian-padua.jpg - 100% sharp and not cut off, rounded-2xl like Pádua) */}
            <div className="md:col-span-5 h-full flex items-center justify-center md:justify-end relative py-6">
              <div className="relative h-[85%] aspect-square rounded-2xl overflow-hidden border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-20">
                <img
                  src="/images/sebastian-padua.jpg"
                  alt="Sebastian Almeida retrato de estúdio"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative frames */}
              <div className="absolute top-[10%] right-[3%] w-[68%] h-[80%] border border-gold/15 -z-10 rounded-2xl hidden md:block" />
            </div>

          </div>
        </div>
      </div>

      {/* ── 2. BIOGRAFIA & FOTO PEQUENA DO LADO DIREITO (Sem manchas pretas, cores sólidas reais) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Biography Narrative text wrapper */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Small portrait speaking photo floating on the right side of the biography (Same high-quality photo from the Pádua site, 100% solid, no stains) */}
            <div className="w-32 h-44 md:w-40 md:h-56 float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 md:mb-2 relative group overflow-hidden rounded-2xl border border-gold/30 shadow-[0_15px_30px_rgba(0,0,0,0.75)] z-20">
              <img
                src="/images/sebastian-padua.jpg"
                alt="Sebastian Almeida palestrando"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <p className="text-white/85 text-xl md:text-2xl leading-relaxed font-light">
              {t('about.bio1')}
            </p>
            
            <p className="text-white/65 text-lg leading-relaxed">
              {t('about.bio2')}
            </p>

            <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent pt-2" />

            <div className="space-y-4 pt-4">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold">
                {t('about.help')}
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

          {/* Side stats card to balance the grid layout */}
          <div className="lg:col-span-4 p-6 rounded-2xl border border-white/5 bg-[#141414]/60 space-y-6 lg:mt-2">
            <h3 className="font-serif text-xl font-bold text-white border-b border-white/5 pb-3">{t('about.highlights')}</h3>
            <div className="space-y-4">
              {[
                { title: t('about.hl.query'), value: t('about.hl.query.val') },
                { title: t('about.hl.books'), value: t('about.hl.books.val') },
                { title: t('about.hl.presence'), value: t('about.hl.presence.val') }
              ].map(stat => (
                <div key={stat.title}>
                  <p className="text-white/40 text-xs uppercase tracking-wider">{stat.title}</p>
                  <p className="text-gold font-serif text-lg font-bold mt-0.5">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── 3. DUAS FOTOS DESTAQUE (Pádua Style: rounded-2xl e shadow profundo) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* event-large — público lotado em proporção retrato perfeita */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] group border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.55)]">
            <img
              src="/images/event-large.jpg"
              alt="Grande público no evento de Sebastian Almeida"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/95 via-dark-DEFAULT/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">{t('about.events.tag')}</p>
              <p className="text-white font-serif text-xl md:text-2xl font-bold leading-tight">
                {t('about.events.title')}
              </p>
            </div>
          </div>

          {/* audience-estriado — palco + plateia em proporção retrato perfeita */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] group border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.55)]">
            <img
              src="/images/audience-estriado.jpg"
              alt="Sebastian no palco — Estriado: Onde o Novo Vira Automático"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/95 via-dark-DEFAULT/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">{t('about.live.tag')}</p>
              <p className="text-white font-serif text-xl md:text-2xl font-bold leading-tight">
                {t('about.live.title')}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── 4. FORMAÇÃO & ATUAÇÃO ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-6">
          {t('about.tag')} &amp; {t('nav.programs')}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map(c => (
            <div 
              key={c.text}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/5 transition-colors hover:border-gold/20"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="text-xl flex-shrink-0">{c.icon}</span>
              <span className="text-white/70 text-sm leading-snug">{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. NO PALCO (Grade Retrato Perfeita e Alinhada com rounded-2xl e shadow profundo) ── */}
      <div className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{t('about.stage')}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card 1: audience-stage.jpg */}
          <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 text-center shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img 
                src="/images/audience-stage.jpg" 
                alt="Plateia e Sebastian no palco" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-4 bg-[#141414]/30 border-t border-white/5 text-center">
              <p className="font-serif text-base md:text-lg text-white">{t('about.stage1.title')}</p>
              <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-gold">{t('about.stage1.sub')}</p>
            </div>
          </div>

          {/* Card 2: stage-5etapas.jpg */}
          <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 text-center shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img 
                src="/images/stage-5etapas.jpg" 
                alt="As 5 etapas do Método Query" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-4 bg-[#141414]/30 border-t border-white/5 text-center">
              <p className="font-serif text-base md:text-lg text-white">{t('about.stage2.title')}</p>
              <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-gold">{t('about.stage2.sub')}</p>
            </div>
          </div>

          {/* Card 3: brain2.jpg */}
          <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 text-center shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img 
                src="/images/brain2.jpg" 
                alt="Neurociência e comportamento humano" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-4 bg-[#141414]/30 border-t border-white/5 text-center">
              <p className="font-serif text-base md:text-lg text-white">{t('about.stage3.title')}</p>
              <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-gold">{t('about.stage3.sub')}</p>
            </div>
          </div>

          {/* Card 4: immersion.jpg */}
          <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 text-center shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img 
                src="/images/immersion.jpg" 
                alt="Imersão emocional profunda" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ objectPosition: 'center 20%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-4 bg-[#141414]/30 border-t border-white/5 text-center">
              <p className="font-serif text-base md:text-lg text-white">{t('about.stage4.title')}</p>
              <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-gold">{t('about.stage4.sub')}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
