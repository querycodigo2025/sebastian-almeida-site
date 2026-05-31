const galleryItems = [
  {
    src: '/images/audience-stage.jpg',
    alt: 'Público acompanhando o treinamento — Sebastian no palco',
    caption: 'Treinamento — "Estriado: Onde o Novo Vira Automático"',
    // Landscape 9:16 rotated — tall
    style: { objectPosition: 'center 25%' },
    tall: false,
  },
  {
    src: '/images/event-large.jpg',
    alt: 'Grande evento com público lotado',
    caption: 'Query in Company — Evento Corporativo',
    style: { objectPosition: 'center 35%' },
    tall: false,
    wide: true,
  },
  {
    src: '/images/immersion.jpg',
    alt: 'Imersão emocional com participantes nos tapetes roxos',
    caption: 'Imersão Águia de Fogo',
    style: { objectPosition: 'center 30%' },
    tall: false,
    wide: true,
  },
  {
    src: '/images/audience-estriado.jpg',
    alt: 'Público no treinamento Estriado',
    caption: 'Workshop — Neurociência Aplicada',
    style: { objectPosition: 'center 20%' },
    tall: false,
  },
  {
    src: '/images/workshop-group.jpg',
    alt: 'Foto em grupo — participantes do workshop',
    caption: 'Mentoria em Grupo — Cicatrização Emocional',
    style: { objectPosition: 'center 30%' },
    tall: false,
  },
  {
    src: '/images/brain2.jpg',
    alt: 'Sebastian explicando neurociência para o público',
    caption: '"Onde Mora Cada Emoção?" — Neurociência Prática',
    style: { objectPosition: 'center 20%' },
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-dark-2" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Presença</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Experiências que <span className="gold-text">Transformam</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            Treinamentos, workshops e imersões que já reuniram milhares de pessoas em
            busca de transformação emocional genuína.
          </p>
        </div>

        {/* Hero event image — full width, tall */}
        <div className="relative overflow-hidden rounded-sm mb-4" style={{ height: '420px' }}>
          <img
            src="/images/event-large.jpg"
            alt="Grande evento corporativo com público lotado"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)' }} />
          <div className="absolute bottom-6 left-8 right-8">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Query in Company</p>
            <p className="font-serif text-2xl md:text-3xl text-white font-bold">
              Neurociência que transforma culturas e líderes
            </p>
          </div>
        </div>

        {/* Grid 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {/* Audience stage — tall */}
          <div className="relative overflow-hidden rounded-sm row-span-2" style={{ height: '480px' }}>
            <img
              src="/images/audience-stage.jpg"
              alt="Plateia acompanhando Sebastian no palco"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)' }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Ao vivo</p>
              <p className="text-white text-sm font-medium leading-snug">
                "Estriado: Onde o Novo Vira Automático"
              </p>
            </div>
          </div>

          {/* Brain2 */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '230px' }}>
            <img
              src="/images/brain2.jpg"
              alt="Sebastian apresentando neurociência"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Onde Mora Cada Emoção?
            </p>
          </div>

          {/* Workshop audience */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '230px' }}>
            <img
              src="/images/workshop-audience.jpg"
              alt="Plateia no workshop"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Workshop Reconexão Emocional
            </p>
          </div>

          {/* Immersion purple mats */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '230px' }}>
            <img
              src="/images/immersion.jpg"
              alt="Imersão emocional — participantes nos tapetes roxos"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Imersão Águia de Fogo
            </p>
          </div>

          {/* Workshop group */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '230px' }}>
            <img
              src="/images/workshop-group.jpg"
              alt="Foto em grupo após workshop"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Mentoria Cicatrização Emocional
            </p>
          </div>
        </div>

        {/* Bottom strip: 3 portrait cells — full figure visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Landscape event — wide crop works fine */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '320px' }}>
            <img
              src="/images/audience-estriado.jpg"
              alt="Plateia no treinamento — Sebastian no palco"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Treinamento de Alto Impacto
            </p>
          </div>
          {/* Stage 5 etapas — full person visible at 320px */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '320px' }}>
            <img
              src="/images/stage-5etapas.jpg"
              alt="Sebastian no palco — As 5 Etapas da Cura Emocional"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              As 5 Etapas da Cura Emocional
            </p>
          </div>
          {/* Stage blue — portrait, mostrar corpo inteiro */}
          <div className="relative overflow-hidden rounded-sm" style={{ height: '320px' }}>
            <img
              src="/images/stage-blue.jpg"
              alt="Sebastian palestrando no palco com iluminação azul"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)' }} />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Palco Internacional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
