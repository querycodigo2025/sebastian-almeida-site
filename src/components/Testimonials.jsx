import { useState, useRef } from 'react'
import { useLanguage } from '../i18n'

const WHATSAPP_NUMBER = '5511999290121'

function VideoCard({ video, isActive, onActivate, labelSingle, labelWatch }) {
  const videoRef = useRef(null)

  const handlePlay = () => {
    onActivate(video.id)
    setTimeout(() => videoRef.current?.play(), 50)
  }

  const handlePause = () => {
    onActivate(null)
  }

  return (
    <div className={`rounded-sm overflow-hidden border transition-all duration-300 ${
      isActive ? 'border-gold/60 shadow-[0_0_40px_rgba(201,169,110,0.2)]' : 'border-white/10'
    }`}
      style={{ background: 'linear-gradient(135deg, #1C1C1C, #141414)' }}>
      {/* Video player */}
      <div className="relative" style={{ aspectRatio: '9/16', maxHeight: '480px' }}>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
          className="w-full h-full object-cover"
          style={{ background: '#0D0D0D' }}
        />
        {/* Play overlay when not active */}
        {!isActive && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
            style={{ background: 'rgba(13,13,13,0.35)' }}
            aria-label={`${labelWatch}: ${video.title}`}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: 'rgba(201, 169, 110, 0.95)' }}>
              <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Card info */}
      <div className="p-4 space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
          <p className="text-gold text-xs uppercase tracking-widest font-semibold">{labelSingle}</p>
        </div>
        <p className="font-serif text-base font-bold text-white">{video.title}</p>
        <p className="text-white/50 text-sm">{video.desc}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null)
  const { t } = useLanguage()

  const videos = [
    {
      id: 1,
      src: '/videos/depoimento1.mp4',
      title: t('test.t1.title'),
      desc: t('test.t1.desc'),
      poster: '/images/workshop-group.jpg',
    },
    {
      id: 2,
      src: '/videos/depoimento2.mp4',
      title: t('test.t2.title'),
      desc: t('test.t2.desc'),
      poster: '/images/immersion.jpg',
    },
    {
      id: 3,
      src: '/videos/depoimento3.mp4',
      title: t('test.t3.title'),
      desc: t('test.t3.desc'),
      poster: '/images/audience-stage.jpg',
    },
    {
      id: 4,
      src: '/videos/depoimento4.mp4',
      title: t('test.t4.title'),
      desc: t('test.t4.desc'),
      poster: '/images/event-large.jpg',
    },
  ]

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('test.cta.msg'))}`

  return (
    <section id="depoimentos" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a0020 50%, #0D0D0D 100%)' }} />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{t('test.tag')}</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t('test.title')}
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-lg">
            {t('test.desc')}
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isActive={activeVideo === video.id}
              onActivate={setActiveVideo}
              labelSingle={t('test.single')}
              labelWatch={t('test.watch')}
            />
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-14 text-center space-y-5">
          <p className="font-serif text-2xl md:text-3xl text-white font-bold">
            {t('test.cta.title')}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('test.cta.btn')}
          </a>
        </div>
      </div>
    </section>
  )
}
