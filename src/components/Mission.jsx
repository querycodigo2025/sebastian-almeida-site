export default function Mission() {
  return (
    <section id="missao" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #141414 100%)' }} />

      {/* Full bleed image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/full-body.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-10"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.97) 40%, rgba(13,13,13,0.85))' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Missão</span>
            <div className="h-px w-12 bg-gold" />
          </div>

          {/* Big quote */}
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl text-gold/15 select-none leading-none">"</span>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight relative z-10">
              Minha missão é guiar pessoas ao{' '}
              <span className="gold-text">reencontro com sua essência</span>{' '}
              — libertando-as de dores silenciosas e ajudando-as a reconectar seu{' '}
              <span className="italic text-white/90">poder mais profundo.</span>
            </blockquote>
          </div>

          <p className="text-gold font-semibold text-lg tracking-wide">— Sebastian Almeida</p>

          {/* Three pillars */}
          <div className="section-divider my-10" />

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: '🧬',
                title: 'Neurociência',
                text: 'Base científica que explica e transforma padrões cerebrais limitantes.',
              },
              {
                icon: '🌀',
                title: 'Espiritualidade',
                text: 'Reconexão com a essência e o propósito de vida mais profundo.',
              },
              {
                icon: '🔁',
                title: 'Reprogramação',
                text: 'Técnicas comprovadas que criam mudanças reais e duradouras.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="space-y-3">
                <div className="text-3xl">{pillar.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gold">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
