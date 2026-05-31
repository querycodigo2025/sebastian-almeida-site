import { useState, useEffect } from 'react'

const galleryItems = [
  {
    src: '/images/event-large.jpg',
    alt: 'Grande evento corporativo com público lotado',
    title: 'Query in Company',
    subtitle: 'Neurociência que transforma culturas e líderes'
  },
  {
    src: '/images/audience-stage.jpg',
    alt: 'Plateia acompanhando Sebastian no palco',
    title: 'Estriado ao Vivo',
    subtitle: '"Estriado: Onde o Novo Vira Automático"'
  },
  {
    src: '/images/brain2.jpg',
    alt: 'Sebastian explicando neurociência para o público',
    title: 'Onde Mora Cada Emoção?',
    subtitle: 'Neurociência Prática'
  },
  {
    src: '/images/workshop-audience.jpg',
    alt: 'Plateia no workshop',
    title: 'Workshop Reconexão',
    subtitle: 'Workshop Reconexão Emocional'
  },
  {
    src: '/images/immersion.jpg',
    alt: 'Imersão emocional — participantes nos tapetes roxos',
    title: 'Águia de Fogo',
    subtitle: 'Imersão Águia de Fogo'
  },
  {
    src: '/images/workshop-group.jpg',
    alt: 'Foto em grupo após workshop',
    title: 'Mentoria em Grupo',
    subtitle: 'Mentoria Cicatrização Emocional'
  },
  {
    src: '/images/audience-estriado.jpg',
    alt: 'Plateia no treinamento — Sebastian no palco',
    title: 'Treinamento de Alto Impacto',
    subtitle: 'Estriado ao Vivo'
  },
  {
    src: '/images/stage-5etapas.jpg',
    alt: 'Sebastian no palco — As 5 Etapas da Cura Emocional',
    title: 'As 5 Etapas da Cura Emocional',
    subtitle: 'Método Query'
  },
  {
    src: '/images/stage-blue.jpg',
    alt: 'Sebastian palestrando no palco com iluminação azul',
    title: 'Palco Internacional',
    subtitle: 'Liderança e Presença'
  }
]

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIdx === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIdx(null)
      if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
      }
      if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  const openLightbox = (index) => {
    setActiveIdx(index)
    document.body.style.overflow = 'hidden' // Block page scroll
  }

  const closeLightbox = () => {
    setActiveIdx(null)
    document.body.style.overflow = 'auto' // Restore scroll
  }

  const nextSlide = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

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

        {/* 1. Hero event image — full width, tall (Preserving original layout exactly) */}
        <div 
          onClick={() => openLightbox(0)}
          className="relative overflow-hidden rounded-sm mb-4 cursor-pointer group shadow-xl border border-white/5 transition-all duration-300 hover:border-gold/20" 
          style={{ height: '420px' }}
        >
          <img
            src="/images/event-large.jpg"
            alt="Grande evento corporativo com público lotado"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/90 via-dark-DEFAULT/20 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Query in Company</p>
            <p className="font-serif text-2xl md:text-3xl text-white font-bold group-hover:text-gold transition-colors">
              Neurociência que transforma culturas e líderes
            </p>
          </div>
          
          {/* Hover magnifier icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🔎
          </div>
        </div>

        {/* 2. Grid 3 columns (Preserving original asymmetrical layout exactly) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          
          {/* Audience stage — tall (2 rows span) */}
          <div 
            onClick={() => openLightbox(1)}
            className="relative overflow-hidden rounded-sm row-span-2 cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '480px' }}
          >
            <img
              src="/images/audience-stage.jpg"
              alt="Plateia acompanhando Sebastian no palco"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/90 via-dark-DEFAULT/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">Ao vivo</p>
              <p className="text-white text-sm font-medium leading-snug group-hover:text-gold transition-colors">
                "Estriado: Onde o Novo Vira Automático"
              </p>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>

          {/* Brain2 */}
          <div 
            onClick={() => openLightbox(2)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '230px' }}
          >
            <img
              src="/images/brain2.jpg"
              alt="Sebastian apresentando neurociência"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Onde Mora Cada Emoção?
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>

          {/* Workshop audience */}
          <div 
            onClick={() => openLightbox(3)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '230px' }}
          >
            <img
              src="/images/workshop-audience.jpg"
              alt="Plateia no workshop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Workshop Reconexão Emocional
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>

          {/* Immersion purple mats */}
          <div 
            onClick={() => openLightbox(4)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '230px' }}
          >
            <img
              src="/images/immersion.jpg"
              alt="Imersão emocional — participantes nos tapetes roxos"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Imersão Águia de Fogo
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>

          {/* Workshop group */}
          <div 
            onClick={() => openLightbox(5)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '230px' }}
          >
            <img
              src="/images/workshop-group.jpg"
              alt="Foto em grupo após workshop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Mentoria Cicatrização Emocional
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>
        </div>

        {/* 3. Bottom strip: 3 portrait cells (Preserving original layout exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Audience Estriado */}
          <div 
            onClick={() => openLightbox(6)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '320px' }}
          >
            <img
              src="/images/audience-estriado.jpg"
              alt="Plateia no treinamento — Sebastian no palco"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Treinamento de Alto Impacto
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>
          
          {/* Stage 5 etapas */}
          <div 
            onClick={() => openLightbox(7)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '320px' }}
          >
            <img
              src="/images/stage-5etapas.jpg"
              alt="Sebastian no palco — As 5 Etapas da Cura Emocional"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              As 5 Etapas da Cura Emocional
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>
          
          {/* Stage blue */}
          <div 
            onClick={() => openLightbox(8)}
            className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg border border-white/5 transition-all duration-300 hover:border-gold/20" 
            style={{ height: '320px' }}
          >
            <img
              src="/images/stage-blue.jpg"
              alt="Sebastian palestrando no palco com iluminação azul"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium group-hover:text-gold transition-colors">
              Palco Internacional
            </p>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
              🔎
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (z-50) */}
      {activeIdx !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-6 transition-opacity duration-300 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/15 text-white/70 hover:text-white hover:bg-white/15 transition-all flex items-center justify-center text-2xl font-light"
            aria-label="Fechar visualizador"
          >
            ✕
          </button>

          {/* Navigation Controls: Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all flex items-center justify-center text-xl"
            aria-label="Foto anterior"
          >
            ←
          </button>

          {/* Image Container: Strictly object-contain, no cropping, showing 100% of the image */}
          <div className="relative max-w-full max-h-[80vh] md:max-h-[82vh] aspect-[3/4] flex items-center justify-center">
            <img
              src={galleryItems[activeIdx].src}
              alt={galleryItems[activeIdx].alt}
              className="max-w-[95vw] max-h-[76vh] md:max-h-[80vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/5 animate-scale-up"
              onClick={(e) => e.stopPropagation()} // Avoid close on click image
            />
          </div>

          {/* Navigation Controls: Next */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all flex items-center justify-center text-xl"
            aria-label="Próxima foto"
          >
            →
          </button>

          {/* Captions and Indexes at bottom */}
          <div 
            className="mt-6 text-center space-y-2 max-w-2xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gold text-xs uppercase tracking-widest font-semibold font-sans">
              {galleryItems[activeIdx].title} · <span className="text-white/40">{activeIdx + 1} de {galleryItems.length}</span>
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-white font-bold leading-tight">
              {galleryItems[activeIdx].subtitle}
            </h3>
          </div>
        </div>
      )}
    </section>
  )
}
