const WHATSAPP_NUMBER = '5511999290121'
const WHATSAPP_MSG = encodeURIComponent('Olá Sebastian! Gostaria de saber mais sobre suas mentorias e treinamentos.')

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0040 50%, #0D0D0D 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96E, transparent)' }} />

      {/* Gold horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-white">Sebastian</span>
                <br />
                <span className="gold-shimmer">Almeida</span>
              </h1>
              {/* Subtítulo abaixo do nome */}
              <p className="text-gold text-base font-semibold uppercase tracking-[0.25em] mb-6">
                Escritor · Consultor · Mentor
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
                Referência em treinamentos de alto impacto que unem neurociência,
                espiritualidade, psicanálise, PNL e reprogramação emocional.
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: 'Milhares', label: 'de Vidas Impactadas' },
                { value: '3', label: 'Livros Publicados' },
                { value: 'Internacional', label: 'Europa · América Latina · Brasil' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-gold">{s.value}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com Sebastian
              </a>
              <a href="#metodo-query" className="btn-outline text-base">
                Conhecer o Método Query
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px] lg:w-[440px] lg:h-[560px]">
              {/* Gold border frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold/30 rounded-sm" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-gold/15 rounded-sm" />
              <img
                src="/images/hero.jpg"
                alt="Sebastian Almeida — Neurocientista e Mentor"
                className="relative z-10 w-full h-full object-cover rounded-sm"
                style={{ objectPosition: 'center top' }}
              />
              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-20 rounded-b-sm"
                style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.6), transparent)' }} />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 z-30 bg-dark-DEFAULT/90 backdrop-blur-sm border border-gold/30 rounded-sm px-4 py-3">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold">Criador do</p>
                <p className="text-white font-serif text-lg font-bold">Método Query</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Cientista Emocional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <a href="#sobre" className="flex flex-col items-center gap-2 text-white/30 hover:text-gold/60 transition-colors">
            <span className="text-xs uppercase tracking-widest">Role para baixo</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  )
}
