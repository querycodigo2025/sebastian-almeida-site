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
    themes: ['Relacionamentos', 'Autoproteção', 'Libertação'],
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
    <section id="livros" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a0020 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Obras</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Livros que <span className="gold-text">Transformam Vidas</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg">
            Obras fundamentadas que guiam leitores pelo caminho da superação e do autoconhecimento profundo.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="card-dark rounded-sm overflow-hidden transition-all duration-400 group flex flex-col h-full border border-white/5 bg-[#141414]"
            >
              {/* Showroom Area: Displays cover perfectly (no cuts) with 3D Book aesthetics */}
              <div className="relative h-80 flex items-center justify-center bg-[#0d0d0d] overflow-hidden pt-6 pb-6 border-b border-white/5">
                
                {/* 3D Book Effect Container */}
                <div className="relative aspect-[3/4] h-[85%] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_25px_50px_rgba(201,169,110,0.2)] rounded-sm overflow-hidden">
                  
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={`Capa do livro ${book.title} — Sebastian Almeida`}
                      className="w-full h-full object-contain bg-[#111]"
                    />
                  ) : (
                    /* Elegant Digital Cover for "Depressão Espiritual" */
                    <div 
                      className="w-full h-full flex flex-col justify-between p-5 text-center relative border border-gold/30"
                      style={{ background: 'linear-gradient(135deg, #1A0040 0%, #0D0D0D 100%)' }}
                    >
                      <div className="absolute inset-2 border border-gold/10 pointer-events-none" />
                      
                      {/* Top Branding */}
                      <p className="text-[9px] uppercase tracking-[0.25em] text-gold/80 font-semibold mt-2">
                        Sebastian Almeida
                      </p>
                      
                      {/* Title */}
                      <div className="space-y-1 my-auto">
                        <p className="text-xl font-serif font-bold text-white leading-tight px-1">
                          Depressão
                        </p>
                        <p className="text-xl font-serif font-bold text-gold leading-tight px-1">
                          Espiritual
                        </p>
                      </div>

                      {/* Footer Badge */}
                      <div className="mb-2">
                        <div className="h-px w-8 bg-gold/40 mx-auto mb-2" />
                        <p className="text-[8px] uppercase tracking-widest text-white/40">
                          Neurociência &amp; Alma
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 3D Spine Fold Shadow (Simulates book binding crease) */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-black/45 via-black/20 to-transparent z-10" />
                  
                  {/* Subtle Spine highlight */}
                  <div className="absolute top-0 left-[2px] w-[1px] h-full bg-white/20 z-10" />

                  {/* Elegant Gloss reflection shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-4 left-4 bg-gold text-dark-DEFAULT text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
                  {book.highlight}
                </div>
              </div>

              {/* Text Description Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5 bg-[#141414]">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold/75 uppercase tracking-wider">
                    Sebastian Almeida · Autor
                  </p>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {book.description}
                  </p>
                </div>

                {/* Themes list tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {book.themes.map((theme) => (
                    <span
                      key={theme}
                      className="text-[10px] border border-gold/15 text-gold/70 rounded-sm px-2.5 py-1 bg-dark-DEFAULT/20"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Editorial Banner: Autor & Palestrante */}
        <div className="mt-20 relative rounded-sm overflow-hidden h-[380px] md:h-[420px] border border-white/5 shadow-2xl">
          <img
            src="/images/audience-stage.jpg"
            alt="Sebastian Almeida palestrando para plateia lotada"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 22%' }}
          />
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/95 via-dark-DEFAULT/80 to-dark-DEFAULT/95 md:bg-gradient-to-r md:from-dark-DEFAULT/95 md:via-dark-DEFAULT/75 md:to-transparent" />
          
          {/* Banner Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 max-w-xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs uppercase tracking-widest font-semibold">Autor &amp; Palestrante</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white font-bold leading-tight">
              Conhecimento Prático que <span className="gold-text">Liberta a Alma</span>
            </h3>
            <p className="text-white/65 text-sm md:text-base leading-relaxed">
              O conhecimento teórico só tem valor quando toca o coração e reconfigura o cérebro. Cada obra é escrita como um mapa científico e prático para a cura de dores profundas.
            </p>
            <div className="pt-2">
              <a 
                href="#cta" 
                className="text-xs uppercase tracking-[0.2em] font-semibold text-gold hover:text-white transition-colors flex items-center gap-2 group"
              >
                Gostaria de ler os livros
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
