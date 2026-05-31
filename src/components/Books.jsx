import { useLanguage } from '../i18n'

export default function Books() {
  const { t } = useLanguage()

  const books = [
    {
      title: t('books.b1.title'),
      cover: '/images/book-cicatrizacao.jpg',
      description: t('books.b1.desc'),
      themes: [t('books.b1.theme1'), t('books.b1.theme2'), t('books.b1.theme3')],
      highlight: t('books.highlight.bestseller'),
    },
    {
      title: t('books.b2.title'),
      cover: '/images/book-golpista.jpg',
      description: t('books.b2.desc'),
      themes: [t('books.b2.theme1'), t('books.b2.theme2'), t('books.b2.theme3')],
      highlight: t('books.highlight.bestseller'),
    },
    {
      title: t('books.b3.title'),
      cover: null,
      description: t('books.b3.desc'),
      themes: [t('books.b3.theme1'), t('books.b3.theme2'), t('books.b3.theme3')],
      highlight: t('books.highlight.new'),
    },
  ]

  return (
    <section id="livros" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a0020 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{t('nav.books')}</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t('books.title')}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            {t('books.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book) => (
            <article
              key={book.title}
              className="card-dark rounded-sm overflow-hidden transition-all duration-400 group"
            >
              {/* Book cover */}
              <div className="relative h-72 overflow-hidden bg-dark-3">
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={`Livro ${book.title} — Sebastian Almeida`}
                    className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1A0040, #2D0060)' }}>
                    <span className="text-6xl mb-4">📖</span>
                    <p className="text-gold font-serif text-xl font-bold text-center px-4">
                      {book.title}
                    </p>
                  </div>
                )}
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gold text-dark-DEFAULT text-xs font-bold uppercase tracking-widest px-3 py-1">
                  {book.highlight}
                </div>
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(20,20,20,0.95), transparent)' }} />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white">{book.title}</h3>
                <p className="text-sm font-semibold text-gold/70 uppercase tracking-wider">
                  Sebastian Almeida
                </p>
                <p className="text-white/65 leading-relaxed text-sm">{book.description}</p>

                {/* Themes */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {book.themes.map((t) => (
                    <span
                      key={t}
                      className="text-xs border border-gold/20 text-gold/70 rounded-sm px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Banner Autor & Palestrante */}
        <div className="mt-16 relative rounded-sm overflow-hidden" style={{ height: '420px' }}>
          <img
            src="/images/audience-stage.jpg"
            alt="Sebastian Almeida no palco"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 18%' }}
          />
          {/* Overlay escuro que integra com o tema */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.75) 100%)' }} />
          {/* Conteúdo centralizado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="h-px w-16 mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              {t('books.banner.tag')}
            </p>
            <p className="font-serif text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
              {t('books.banner.title')}
            </p>
            <p className="text-white/60 max-w-md text-base">
              {t('books.banner.desc')}
            </p>
            <div className="h-px w-16 mt-6"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
