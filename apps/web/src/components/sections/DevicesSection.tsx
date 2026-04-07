import Link from 'next/link';

const devices = [
  { icon: '🖥️', nameAr: 'متصفح الويب', nameEn: 'Web Browser' },
  { icon: '📱', nameAr: 'الموبايل', nameEn: 'Mobile' },
  { icon: '📺', nameAr: 'التلفاز الذكي', nameEn: 'Smart TV' },
  { icon: '🔥', nameAr: 'Fire Stick', nameEn: 'Fire Stick' },
  { icon: '🍎', nameAr: 'Apple TV', nameEn: 'Apple TV' },
  { icon: '🎮', nameAr: 'ألعاب الفيديو', nameEn: 'Console' },
];

export function DevicesSection() {
  return (
    <section className="py-20">
      <div className="container-ns">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Iraqi flag strip */}
          <div className="absolute bottom-0 left-0 right-0 brand-line" />

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-wide">متوافق مع جميع الأجهزة</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            محتواك على أي جهاز
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            IRAQ TV تعمل بسلاسة على جميع شاشاتك في أي مكان.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {devices.map((d) => (
              <div key={d.nameAr} className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 bg-neutral-800 hover:bg-brand-red/10 rounded-xl flex items-center justify-center text-2xl transition-colors">
                  {d.icon}
                </div>
                <span className="text-xs text-neutral-400">{d.nameAr}</span>
              </div>
            ))}
          </div>
          <Link href="/devices" className="text-sm text-brand-red hover:text-brand-gold transition-colors">
            عرض جميع الأجهزة المتوافقة ←
          </Link>
        </div>
      </div>
    </section>
  );
}
