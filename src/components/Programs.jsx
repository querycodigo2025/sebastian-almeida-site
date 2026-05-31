import { useLanguage } from '../i18n'

export default function Programs() {
  const { t } = useLanguage()

  const programCategories = [
    {
      icon: '🔥',
      title: t('prog.cat1'),
      description: t('prog.desc1'),
      items: t('prog.items1').split('|').map(s => s.trim()),
      accent: '#C9A96E',
    },
    {
      icon: '🎤',
      title: t('prog.cat2'),
      description: t('prog.desc2'),
      items: t('prog.items2').split('|').map(s => s.trim()),
      accent: '#7B2FBE',
    },
    {
      icon: '🧠',
      title: t('prog.cat3'),
      description: t('prog.desc3'),
      items: t('prog.items3').split('|').map(s => s.trim()),
      accent: '#C9A96E',
    },
    {
      icon: '💎',
      title: t('prog.cat4'),
      description: t('prog.desc4'),
      items: t('prog.items4').split('|').map(s => s.trim()),
      accent: '#7B2FBE',
    },
    {
      icon: '💼',
      title: t('prog.cat5'),
      description: t('prog.desc5'),
      items: t('prog.items5').split('|').map(s => s.trim()),
      accent: '#C9A96E',
      wide: true,
    },
    {
      icon: '📖',
      title: t('prog.cat6'),
      description: t('prog.desc6'),
      items: t('prog.items6').split('|').map(s => s.trim()),
      accent: '#7B2FBE',
      wide: true,
    },
  ]

  return (
    <section id="programas" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-dark-2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{t('prog.tag')}</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t('prog.title')} <span className="gold-text">{t('prog.titleGold')}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t('prog.subtitle')}
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
              <p className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">{t('prog.banner.tag')}</p>
              <p className="font-serif text-3xl md:text-4xl text-white font-bold max-w-lg leading-tight">
                {t('prog.banner.title')} <span className="gold-text">{t('prog.banner.titleGold')}</span>
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
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
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
