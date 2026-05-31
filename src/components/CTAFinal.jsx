const WHATSAPP_NUMBER = '5511999290121'
const WHATSAPP_MSG = encodeURIComponent('Olá Sebastian! Quero iniciar minha jornada de transformação emocional. Pode me contar mais sobre seus programas?')

export default function CTAFinal() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0f0020 0%, #1A0040 40%, #0f0020 100%)' }} />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96E, transparent)' }} />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Próximo Passo</span>
          <div className="h-px w-12 bg-gold" />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sua transformação começa
            <br />
            com uma <span className="gold-shimmer">única decisão</span>
          </h2>

          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Você já carregou esse peso por tempo suficiente. Existe um caminho de volta
            à sua essência — e Sebastian Almeida está pronto para guiar essa jornada.
          </p>

          <p className="text-white/50 text-base">
            Mentorias · Treinamentos · Imersões · Formações · Palestras
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 w-full sm:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar Minha Transformação
          </a>
          <a href="#programas" className="btn-outline text-base w-full sm:w-auto">
            Ver Todos os Programas
          </a>
        </div>

        {/* Trust signal */}
        <p className="text-white/30 text-sm">
          Atendimento via WhatsApp · Resposta em até 24h · Sem compromisso inicial
        </p>
      </div>
    </section>
  )
}
