const features = [
  {
    icon: '🔒',
    titleAr: 'محتوى مرخص 100%',
    titleEn: '100% Licensed Content',
    descAr: 'كل قناة ومحتوى مرخص بالكامل. استمتع بالبث بثقة تامة.',
  },
  {
    icon: '⚡',
    titleAr: 'زمن وصول فائق السرعة',
    titleEn: 'Ultra-Low Latency',
    descAr: 'توصيل HLS محسّن لتقليل التقطع وأوقات تشغيل فائقة.',
  },
  {
    icon: '📺',
    titleAr: 'جودة 4K Ultra HD',
    titleEn: '4K Ultra HD',
    descAr: 'جودة 4K مذهلة في الباقة المميزة على جميع الأجهزة المتوافقة.',
  },
  {
    icon: '📱',
    titleAr: 'جميع الأجهزة',
    titleEn: 'All Devices',
    descAr: 'ويب، موبايل، تلفاز ذكي، Fire Stick، Apple TV والمزيد.',
  },
  {
    icon: '📅',
    titleAr: 'جدول البرامج (EPG)',
    titleEn: 'Program Guide (EPG)',
    descAr: 'تصفح جداول قنواتنا ولا تفوّت مباراة أو عرضاً.',
  },
  {
    icon: '🛡️',
    titleAr: 'أمان وخصوصية',
    titleEn: 'Security & Privacy',
    descAr: 'حماية متقدمة للجلسات ومصادقة JWT مع صلاحيات RBAC.',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container-ns">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="brand-line w-8" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-wide">IRAQ TV</span>
            <div className="brand-line w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            مبني للمشاهد{' '}
            <span className="gradient-text">العصري</span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            تقنية متطورة مع محتوى مميز — أفضل تجربة بث قانونية في المنطقة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.titleAr} className="glass-card p-6 hover:border-brand-red/30 transition-all group">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-brand-gold transition-colors">{f.titleAr}</h3>
              <p className="text-xs text-neutral-500 mb-2">{f.titleEn}</p>
              <p className="text-sm text-neutral-400 leading-relaxed">{f.descAr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
