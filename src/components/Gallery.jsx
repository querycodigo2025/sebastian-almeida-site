import { useState, useEffect } from 'react'

const galleryItems = [
  {
    src: '/images/event-large.jpg',
    alt: 'Grande evento corporativo com público lotado',
    title: 'Query in Company',
    subtitle: 'Neurociência Corporativa',
    description: 'Transformação de culturas organizacionais e liderança executiva.'
  },
  {
    src: '/images/audience-stage.jpg',
    alt: 'Sebastian Almeida no palco diante de grande plateia',
    title: 'Estriado ao Vivo',
    subtitle: 'Palco de Alto Impacto',
    description: '"Estriado: Onde o Novo Vira Automático" - Reprogramação comportamental.'
  },
  {
    src: '/images/brain2.jpg',
    alt: 'Sebastian Almeida explicando neurociência prática',
    title: 'Neurociência Prática',
    subtitle: 'Mapeamento Cerebral',
    description: 'Desvendando onde mora cada emoção humana na tomada de decisão.'
  },
  {
    src: '/images/workshop-audience.jpg',
    alt: 'Plateia do workshop atenta à palestra',
    title: 'Workshop Reconexão',
    subtitle: 'Inteligência Emocional',
    description: 'Vivências práticas voltadas para a cura e liberação de travas emocionais.'
  },
  {
    src: '/images/immersion.jpg',
    alt: 'Participantes em vivência profunda nos tapetes roxos',
    title: 'Águia de Fogo',
    subtitle: 'Imersão de Renascimento',
    description: 'Processo profundo de renascimento e superação de feridas emocionais antigas.'
  },
  {
    src: '/images/audience-estriado.jpg',
    alt: 'Público no treinamento Estriado acompanhando os slides',
    title: 'Treinamento Estriado',
    subtitle: 'Treinamento de Impacto',
    description: 'Onde centenas de pessoas aprendem a ressignificar hábitos e crenças.'
  },
  {
    src: '/images/stage-5etapas.jpg',
    alt: 'Sebastian no palco explicando as 5 etapas da cura',
    title: 'As 5 Etapas',
    subtitle: 'Palco & Didática',
    description: 'As cinco etapas fundamentais do Método Query para a cura emocional.'
  },
  {
    src: '/images/stage-blue.jpg',
    alt: 'Sebastian no palco sob iluminação azul cênica',
    title: 'Palco Internacional',
    subtitle: 'Presença e Liderança',
    description: 'Mentorando e discursando para milhares de mentes ávidas por mudança.'
  },
  {
    src: '/images/stage-book.jpg',
    alt: 'Sebastian Almeida com seu livro no palco',
    title: 'Lançamento de Livros',
    subtitle: 'Escritor & Mentor',
    description: 'Apresentação pública de obras literárias voltadas para a cicatrização emocional.'
  },
  {
    src: '/images/workshop-group.jpg',
    alt: 'Foto de grupo com participantes da mentoria',
    title: 'Mentoria em Grupo',
    subtitle: 'Cicatrização Emocional',
    description: 'Alunos reunidos celebrando o encerramento do ciclo de mentoria profunda.'
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
      <div className="absolute inset-0 pointer-events-none bg-[#0D0D0D]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold font-sans">Presença</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Experiências que <span className="gold-text">Transformam</span>
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto text-base md:text-lg">
            Treinamentos, workshops e imersões presenciais que já reuniram milhares de pessoas em busca de cura emocional genuína e autoliderança.
          </p>
        </div>

        {/* Premium Portrait Grid: Responsive aspect ratio cards showing 100% of images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.src + index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-sm aspect-[3/4] group cursor-pointer border border-white/5 shadow-lg transition-all duration-500 hover:border-gold/30"
            >
              {/* Image with zoom on hover */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
                loading="lazy"
              />

              {/* Sophisticated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/95 via-dark-DEFAULT/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end">
                <p className="text-gold text-[9px] uppercase tracking-widest font-semibold mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-base font-bold text-white mb-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-[10px] line-clamp-2 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>

              {/* Hover indicator icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
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
            <p className="text-gold text-xs uppercase tracking-widest font-semibold">
              {galleryItems[activeIdx].subtitle} · <span className="text-white/40">{activeIdx + 1} de {galleryItems.length}</span>
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold leading-tight">
              {galleryItems[activeIdx].title}
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {galleryItems[activeIdx].description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
