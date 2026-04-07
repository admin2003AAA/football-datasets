const channels = [
  { nameAr: 'إيراق تيفي رياضة 1', nameEn: 'IRAQ TV Sport 1', viewers: 14500, emoji: '⚽', live: true },
  { nameAr: 'دوري العراق — مباشر', nameEn: 'Iraqi League Live', viewers: 120000, emoji: '🏆', live: true },
  { nameAr: 'إيراق تيفي رياضة 2', nameEn: 'IRAQ TV Sport 2', viewers: 8200, emoji: '🏀', live: true },
  { nameAr: 'إيراق تيفي سينما', nameEn: 'IRAQ TV Cinema', viewers: 6100, emoji: '🎬', live: false },
  { nameAr: 'إيراق تيفي أطفال', nameEn: 'IRAQ TV Kids', viewers: 4800, emoji: '🧸', live: true },
];

export function TopChannels() {
  return (
    <div className="glass-card p-6" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-white">أعلى القنوات مشاهدةً</h2>
          <p className="text-xs text-neutral-500">Top Channels</p>
        </div>
        <span className="text-xs text-neutral-500">بيانات مباشرة</span>
      </div>
      <div className="space-y-3">
        {channels.map((ch, i) => (
          <div key={ch.nameAr} className="flex items-center gap-3">
            <span className="text-neutral-600 text-sm w-4">{i + 1}</span>
            <span className="text-lg">{ch.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{ch.nameAr}</p>
              <p className="text-xs text-neutral-500">{ch.viewers.toLocaleString('ar-IQ')} مشاهد</p>
            </div>
            {ch.live && (
              <span className="text-xs bg-brand-red/20 text-brand-red px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 live-badge">
                مباشر
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
