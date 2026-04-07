import Link from 'next/link';

const channels = [
  { nameAr: 'إيراق تيفي رياضة 1', nameEn: 'IRAQ TV Sport 1', categoryAr: 'رياضة', emoji: '⚽', viewers: 14500, live: true },
  { nameAr: 'إيراق تيفي رياضة 2', nameEn: 'IRAQ TV Sport 2', categoryAr: 'رياضة', emoji: '🏀', viewers: 8200, live: true },
  { nameAr: 'إيراق تيفي سينما', nameEn: 'IRAQ TV Cinema', categoryAr: 'أفلام', emoji: '🎬', viewers: 6100, live: true },
  { nameAr: 'إيراق تيفي الأخبار', nameEn: 'IRAQ TV News', categoryAr: 'أخبار', emoji: '📰', viewers: 3200, live: true },
  { nameAr: 'إيراق تيفي أطفال', nameEn: 'IRAQ TV Kids', categoryAr: 'أطفال', emoji: '🧸', viewers: 4800, live: true },
  { nameAr: 'إيراق تيفي وثائقية', nameEn: 'IRAQ TV Docs', categoryAr: 'وثائقي', emoji: '🎞️', viewers: 0, live: false },
];

export function FeaturedChannels() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="brand-line w-8" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-wide">بث مباشر</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">قنوات IRAQ TV المميزة</h2>
            <p className="text-neutral-400">قنوات مرخصة تبث مباشرة الآن على إيراق تيفي.</p>
          </div>
          <Link href="/channels" className="text-sm text-brand-red hover:text-brand-gold transition-colors hidden sm:flex items-center gap-1">
            عرض جميع القنوات
            <svg className="w-4 h-4 icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((ch) => (
            <Link href="/live" key={ch.nameAr}>
              <div className="glass-card p-4 flex items-center gap-4 hover:border-brand-red/40 transition-all group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                  {ch.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white truncate group-hover:text-brand-gold transition-colors text-sm">
                      {ch.nameAr}
                    </p>
                    {ch.live && (
                      <span className="flex-shrink-0 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 live-badge">
                        <span className="w-1 h-1 bg-white rounded-full" /> مباشر
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500">{ch.nameEn}</p>
                  <p className="text-sm text-neutral-400">{ch.categoryAr}</p>
                  {ch.viewers > 0 && (
                    <p className="text-xs text-neutral-500 mt-0.5">{ch.viewers.toLocaleString('ar-IQ')} مشاهد</p>
                  )}
                </div>
                <svg className="w-4 h-4 text-neutral-600 group-hover:text-brand-red transition-colors flex-shrink-0 icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
