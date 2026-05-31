const books = [
  {
    title: 'Cicatrização Emocional',
    cover: '/images/book-cicatrizacao.jpg',
    description:
      'Uma jornada de cura profunda que guia o leitor pelo processo de restauração emocional, ajudando a superar dores do passado e reconectar-se com a própria essência.',
    themes: ['Cura Emocional', 'Autoconhecimento', 'Resiliência'],
    highlight: 'Bestseller',
  },
  {
    title: 'Golpista Emocional',
    cover: '/images/book-golpista.jpg',
    description:
      'Revela os padrões ocultos de manipulação emocional e ensina como identificar, se proteger e se libertar de relacionamentos tóxicos que drenam energia e autoestima.',
    themes: ['Relacionamentos', 'Autoprotação', 'Libertação'],
    highlight: 'Bestseller',
  },
  {
    title: 'Depressão Espiritual',
    cover: null,
    description:
      'Uma abordagem pioneira que une neurociência e espiritualidade para compreender e superar o vazio existencial, reconectando o ser humano ao seu propósito mais profundo.',
    themes: ['Espiritualidade', 'Propósito', 'Neurociência'],
    highlight: 'Lançamento',
  },
]

export default function Books() {
  return (
    <section id="livros" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a0020 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Obras</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Livros que <span className="gold-text">Transformam Vidas</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Obras que já mudaram a perspectiva de milhares de leitores pelo Brasil e pelo mundo.
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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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

        {/* Stage book photo */}
        <div className="mt-16 relative rounded-sm overflow-hidden" style={{ height: '400px' }}>
          <img
            src="/images/stage-book.jpg"
            alt="Sebastian apresentando no palco"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 10%' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.8) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.8) 100%)' }} />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">Autor & Palestrante</p>
              <p className="font-serif text-3xl md:text-4xl text-white font-bold">
                Conhecimento que liberta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
