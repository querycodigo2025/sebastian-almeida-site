const WHATSAPP_NUMBER = '5511999290121'

const programs = [
  {
    title: 'Master Key 360',
    icon: '🔑',
    desc: 'Mentoria completa de alta performance emocional e clareza de vida.',
    msg: 'Olá Sebastian! Tenho interesse na Mentoria Master Key 360.',
  },
  {
    title: 'Mentoria Cicatrização Emocional',
    icon: '💛',
    desc: 'Processo guiado de cura profunda e restauração emocional.',
    msg: 'Olá Sebastian! Quero saber mais sobre a Mentoria Cicatrização Emocional.',
  },
  {
    title: 'Desbloqueio Emocional Personalizado',
    icon: '⚡',
    desc: 'Sessão individual focada em remover bloqueios específicos.',
    msg: 'Olá Sebastian! Gostaria de uma sessão de Desbloqueio Emocional Personalizado.',
  },
  {
    title: 'Método Query',
    icon: '🧬',
    desc: 'Metodologia científica com 5 etapas de transformação profunda.',
    msg: 'Olá Sebastian! Quero participar do Método Query.',
  },
  {
    title: 'Workshop Reconexão Emocional',
    icon: '🌱',
    desc: 'Workshop prático de neurociência e inteligência emocional.',
    msg: 'Olá Sebastian! Tenho interesse no Workshop Reconexão Emocional.',
  },
  {
    title: 'Reconexão 360 – Workshop Avançado',
    icon: '🔄',
    desc: 'Experiência avançada de reconexão total com o seu ser.',
    msg: 'Olá Sebastian! Quero saber sobre o Workshop Reconexão 360.',
  },
  {
    title: 'Treinamentos de Alto Impacto',
    icon: '🔥',
    desc: 'Imersões que transformam de forma rápida e profunda.',
    msg: 'Olá Sebastian! Gostaria de informações sobre os Treinamentos de Alto Impacto.',
  },
  {
    title: 'Formações Profissionais',
    icon: '🎓',
    desc: 'Formação em PNL, Oratória, Método Query e muito mais.',
    msg: 'Olá Sebastian! Tenho interesse nas Formações Profissionais.',
  },
  {
    title: 'Método Protagonista',
    icon: '👑',
    desc: 'Liderança e reconexão com seu propósito e legado.',
    msg: 'Olá Sebastian! Quero saber mais sobre o Método Protagonista.',
  },
]

export default function QuickAccess() {
  return (
    <section id="acesso-rapido" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #0a0020 50%, #0D0D0D 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Acesso Rápido</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Sua <span className="gold-text">Transformação</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Clique no programa desejado para iniciar sua jornada diretamente via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog) => {
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prog.msg)}`
            return (
              <a
                key={prog.title}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark rounded-sm p-6 flex flex-col gap-4 group transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(201, 169, 110, 0.10)', border: '1px solid rgba(201, 169, 110, 0.25)' }}>
                    {prog.icon}
                  </div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors leading-tight">
                    {prog.title}
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{prog.desc}</p>
                <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mt-auto">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
