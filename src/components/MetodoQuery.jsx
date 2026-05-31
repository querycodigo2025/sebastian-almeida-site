const steps = [
  {
    letter: 'I',
    word: 'Identificação',
    description: 'Mapeamento preciso de traumas, crenças limitantes e padrões que aprisionam o potencial.',
  },
  {
    letter: 'D',
    word: 'Desconstrução',
    description: 'Desmontagem dos padrões negativos enraizados no sistema emocional e neurológico.',
  },
  {
    letter: 'E',
    word: 'Elaboração e Expansão',
    description: 'Construção ativa do novo eu — ressignificando experiências e ampliando a consciência.',
  },
  {
    letter: 'R',
    word: 'Reprogramação',
    description: 'Reconfiguração neuronal profunda, criando novos caminhos cerebrais e comportamentais.',
  },
  {
    letter: 'E',
    word: 'Estabilização Emocional',
    description: 'Consolidação das transformações para que os resultados sejam duradouros e sustentáveis.',
  },
]

export default function MetodoQuery() {
  return (
    <section id="metodo-query" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark purple bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #0f0020 40%, #1A0040 70%, #0D0D0D 100%)' }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Explanation */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Metodologia Exclusiva</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                O <span className="gold-text">Método Query</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Uma metodologia científica e emocional criada após anos de pesquisa
                sobre o funcionamento do <strong className="text-gold">núcleo accumbens</strong> —
                o centro cerebral responsável por decisões e emoções.
              </p>
              <p className="text-white/70 leading-relaxed">
                Através de 5 etapas estruturadas (IDERE), o método atua na raiz das
                limitações emocionais, produzindo transformações reais, mensuráveis e duradouras.
              </p>
            </div>

            {/* 2-Column Grid of Premium Structured Cards to prevent facial distortion */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: brain.jpg */}
              <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30">
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src="/images/brain.jpg"
                    alt="Sebastian explicando o funcionamento do cérebro"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-3 bg-[#141414]/30 border-t border-white/5 text-center">
                  <p className="font-serif text-sm md:text-base text-white font-medium">Base Científica</p>
                  <p className="mt-1 text-[8px] md:text-[9px] font-semibold uppercase tracking-wider text-gold">Accumbens · Amígdala · Córtex</p>
                </div>
              </div>

              {/* Card 2: stage-5etapas.jpg */}
              <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141414]/50 shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/30">
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src="/images/stage-5etapas.jpg"
                    alt="Sebastian apresentando as 5 etapas do Método Query"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-3 bg-[#141414]/30 border-t border-white/5 text-center">
                  <p className="font-serif text-sm md:text-base text-white font-medium">As 5 Etapas</p>
                  <p className="mt-1 text-[8px] md:text-[9px] font-semibold uppercase tracking-wider text-gold">Da Cura Emocional</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: IDERE steps */}
          <div className="space-y-4">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-8">
              As 5 Etapas — IDERE
            </p>
            {steps.map((step, i) => (
              <div
                key={step.letter + i}
                className="flex gap-5 p-5 rounded-sm border transition-all duration-300 group"
                style={{
                  background: 'rgba(123, 47, 190, 0.06)',
                  borderColor: 'rgba(201, 169, 110, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.4)'
                  e.currentTarget.style.background = 'rgba(123, 47, 190, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.15)'
                  e.currentTarget.style.background = 'rgba(123, 47, 190, 0.06)'
                }}
              >
                {/* Letter */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center font-serif text-2xl font-bold"
                    style={{ background: 'rgba(201, 169, 110, 0.12)', color: '#C9A96E', border: '1px solid rgba(201, 169, 110, 0.3)' }}
                  >
                    {step.letter}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{step.word}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}

            {/* Método Protagonista callout */}
            <div className="mt-6 p-5 rounded-sm border border-purple/30"
              style={{ background: 'rgba(123, 47, 190, 0.10)' }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">👑</span>
                <h3 className="font-serif text-xl font-bold text-white">Método Protagonista</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Programa avançado de liderança e reconexão com a essência — para quem
                deseja assumir o protagonismo pleno da própria vida e legado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
