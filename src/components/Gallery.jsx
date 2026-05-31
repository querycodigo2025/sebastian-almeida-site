import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null)
  const { t } = useLanguage()

  const galleryItems = [
    {
      src: '/images/stage-lovish.jpg',
      alt: t('gal.stage1.title'),
      title: t('gal.stage1.title'),
      subtitle: t('gal.stage1.sub')
    },
    {
      src: '/images/stage-blue-premium.jpg',
      alt: t('gal.stage2.title'),
      title: t('gal.stage2.title'),
      subtitle: t('gal.stage2.sub')
    }
  ]

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
    <section id="galeria" className="bg-[#0D0D0D] py-24 md:py-32 relative border-t border-white/5">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header (Pádua Style: Clean & Centralized) */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            {t('gal.tag')}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {t('gal.title')} <span className="gold-text">{t('gal.titleGold')}</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-5 opacity-70" />
        </div>

        {/* Premium Pádua Grid: 2 columns on desktop, rounded-2xl cards, custom shadow, object-cover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src + index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.55)] cursor-pointer border border-white/5 transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 bg-[#141414]"
            >
              {/* Image with smooth Pádua Zoom transition */}
              <img
                src={item.src}
                alt={item.alt}
                className="h-[480px] md:h-[540px] w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
                loading="lazy"
              />

              {/* Heavy elegant dark gradient overlay exactly like Pádua */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/95 via-dark-DEFAULT/40 to-transparent transition-opacity duration-300" />

              {/* Figcaption with Playfair title and tracking Gold subtitle */}
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end">
                <p className="font-serif text-xl font-bold mb-1 leading-tight group-hover:text-gold transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-gold/80 font-semibold uppercase tracking-wider">
                  {item.subtitle}
                </p>
              </figcaption>

              {/* Floating zoom indicator on hover */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-DEFAULT/70 border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                🔎
              </div>
            </figure>
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
