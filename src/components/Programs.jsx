const programCategories = [
  {
    icon: '🔥',
    title: 'Treinamentos de Alto Impacto',
    description:
      'Experiências imersivas com técnicas exclusivas que desbloqueiam travas emocionais profundas em poucas horas.',
    items: [
      'Método MMV – Minha Melhor Versão',
      'Águia de Fogo',
      'Método Query',
      'Query Plus',
      'Protagonista – Liderança e Reconexão com sua Essência',
    ],
    accent: '#C9A96E',
  },
  {
    icon: '🎤',
    title: 'Workshops e Palestras',
    description:
      'Presenciais e online, com foco em liderança emocional, neurociência prática e técnicas de reprogramação interna.',
    items: [
      'Workshop Reconexão Emocional',
      'Reconexão 360 / Reconexão Plus',
      'Workshop Despertando Minha Mulher Versão',
    ],
    accent: '#7B2FBE',
  },
  {
    icon: '🧠',
    title: 'Mentorias em Grupo',
    description:
      'Programas com início, meio e fim — baseados em neurociência, psicologia comportamental e inteligência emocional.',
    items: [
      'Mentoria Cicatrização Emocional',
      'Mentoria Master Key 360',
    ],
    accent: '#C9A96E',
  },
  {
    icon: '💎',
    title: 'Imersões Emocionais Exclusivas',
    description:
      'Vivências guiadas com processos profundos de renascimento emocional, cura da criança interior e reprogramação cerebral.',
    items: [
      'Método Query – Nível High-Tech',
      'Método Query Plus',
      'Método Query Business',
      'Imersão Águia de Fogo',
    ],
    accent: '#7B2FBE',
  },
  {
    icon: '💼',
    title: 'Query in Company — Corporativo',
    description:
      'Soluções completas para empresas e líderes que desejam alta performance com equilíbrio emocional.',
    items: [
      'Treinamentos de liderança com neurociência',
      'Palestras sobre alta performance emocional',
      'Workshops vivenciais para equipes',
      'Diagnóstico emocional empresarial',
      'Consultorias estratégicas de cultura',
      'Formações corporativas Método Query',
    ],
    accent: '#C9A96E',
    wide: true,
  },
  {
    icon: '📖',
    title: 'Formações e Cursos',
    description:
      'Capacitações para terapeutas, mentores, treinadores, líderes e profissionais da saúde mental e emocional.',
    items: [
      'Formação em Oratória e Palco',
      'Formação Practitioner em PNL',
      'Formação em Vendas com Neurociência',
      'Formação Método Query',
      'Formação TAI – Treinador de Alto Impacto',
      'Método Protagonista',
    ],
    accent: '#7B2FBE',
    wide: true,
  },
]

export default function Programs() {
  return (
    <section id="programas" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-dark-2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Programas</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Transformações que <span className="gold-text">Mudam Realidades</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Uma ecossistema completo de desenvolvimento humano — do autoconhecimento ao
            alto desempenho corporativo.
          </p>
        </div>

        {/* In Company feature photo */}
        <div className="mb-12 relative rounded-sm overflow-hidden h-56 md:h-72">
          <img
            src="/images/workshop-audience.jpg"
            alt="Treinamento corporativo Query in Company"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.9), rgba(13,13,13,0.5), rgba(13,13,13,0.3))' }} />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">Impacto Real</p>
              <p className="font-serif text-3xl md:text-4xl text-white font-bold max-w-lg leading-tight">
                Neurociência aplicada à <span className="gold-text">transformação</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programCategories.map((cat) => (
            <div
              key={cat.title}
              className={`card-dark rounded-sm p-7 transition-all duration-300 flex flex-col gap-5 ${
                cat.wide ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}30` }}
                >
                  {cat.icon}
                </div>
                <h3
                  className="font-serif text-xl font-bold leading-tight"
                  style={{ color: cat.accent }}
                >
                  {cat.title}
                </h3>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">{cat.description}</p>

              <ul className="space-y-2 mt-auto">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                      style={{ background: cat.accent }}
                    />
                    <span className="text-white/75 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
