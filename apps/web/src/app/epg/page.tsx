import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'جدول البرامج — IRAQ TV' };

// ─── Mock EPG data (mirrors api/src/epg/epg.store) ───────────────────────────

const channels = [
  { id: 'epg-ch-1', nameAr: 'إيراق تيفي رياضة 1', number: 1, category: 'sports', color: '#C41E3A' },
  { id: 'epg-ch-2', nameAr: 'إيراق تيفي رياضة 2', number: 2, category: 'sports', color: '#E63946' },
  { id: 'epg-ch-3', nameAr: 'إيراق تيفي الأخبار', number: 3, category: 'news', color: '#3B82F6' },
  { id: 'epg-ch-4', nameAr: 'إيراق تيفي ترفيه', number: 4, category: 'entertainment', color: '#D4AF37' },
  { id: 'epg-ch-5', nameAr: 'إيراق تيفي سينما', number: 5, category: 'movies', color: '#7C3AED' },
  { id: 'epg-ch-6', nameAr: 'إيراق تيفي أطفال', number: 6, category: 'kids', color: '#22C55E' },
  { id: 'epg-ch-7', nameAr: 'إيراق تيفي وثائقية', number: 7, category: 'documentary', color: '#F59E0B' },
  { id: 'epg-ch-8', nameAr: 'إيراق تيفي ثقافة', number: 8, category: 'culture', color: '#1A7A3C' },
];

function getNow(): { h: number; m: number } {
  const d = new Date();
  return { h: d.getHours(), m: d.getMinutes() };
}

const programs: Record<string, { titleAr: string; start: string; end: string; genre: string; isLive?: boolean }[]> = {
  'epg-ch-1': [
    { titleAr: 'ملخص الرياضة الصباحية', start: '06:00', end: '07:00', genre: 'رياضة' },
    { titleAr: 'تدريبات الأكاديميات', start: '07:00', end: '09:00', genre: 'رياضة' },
    { titleAr: 'أخبار الدوريات الأوروبية', start: '09:00', end: '10:00', genre: 'رياضة' },
    { titleAr: 'كرة السلة — البطولة الوطنية', start: '16:00', end: '18:00', genre: 'رياضة' },
    { titleAr: 'دوري العراق — مباراة مباشرة', start: '20:00', end: '22:00', genre: 'رياضة', isLive: true },
    { titleAr: 'نشرة الأخبار الرياضية', start: '22:00', end: '23:00', genre: 'رياضة' },
  ],
  'epg-ch-2': [
    { titleAr: 'الغولف الدولي', start: '08:00', end: '11:00', genre: 'رياضة' },
    { titleAr: 'التنس — دورة البطولة', start: '14:00', end: '17:00', genre: 'رياضة' },
    { titleAr: 'ليلة الملاكمة', start: '21:00', end: '23:30', genre: 'رياضة', isLive: true },
  ],
  'epg-ch-3': [
    { titleAr: 'نشرة الأخبار الصباحية', start: '07:00', end: '08:00', genre: 'أخبار', isLive: true },
    { titleAr: 'حوار الصباح', start: '08:00', end: '09:00', genre: 'أخبار' },
    { titleAr: 'تقرير خاص: الاقتصاد العراقي', start: '12:00', end: '13:00', genre: 'أخبار' },
    { titleAr: 'نشرة أخبار الظهيرة', start: '13:00', end: '14:00', genre: 'أخبار' },
    { titleAr: 'نشرة الأخبار المسائية', start: '19:00', end: '20:00', genre: 'أخبار', isLive: true },
    { titleAr: 'نشرة الأخبار الرئيسية', start: '22:00', end: '23:00', genre: 'أخبار' },
  ],
  'epg-ch-4': [
    { titleAr: 'البرنامج الصباحي', start: '09:00', end: '11:00', genre: 'ترفيه', isLive: true },
    { titleAr: 'برنامج الطبخ العراقي', start: '12:00', end: '13:00', genre: 'ترفيه' },
    { titleAr: 'مسلسل عراقي — الحلقة 12', start: '21:00', end: '22:00', genre: 'دراما' },
    { titleAr: 'أمسية فنية', start: '22:00', end: '24:00', genre: 'فن' },
  ],
  'epg-ch-5': [
    { titleAr: 'فيلم الصباح', start: '09:00', end: '11:00', genre: 'أفلام' },
    { titleAr: 'فيلم بعد الظهر', start: '14:00', end: '16:00', genre: 'أفلام' },
    { titleAr: 'فيلم روائي مرخص', start: '20:00', end: '22:30', genre: 'أفلام' },
  ],
  'epg-ch-6': [
    { titleAr: 'رسوم متحركة صباحية', start: '07:00', end: '09:00', genre: 'أطفال' },
    { titleAr: 'برنامج تعليمي للأطفال', start: '09:00', end: '11:00', genre: 'أطفال' },
    { titleAr: 'مغامرات أطفال', start: '15:00', end: '17:00', genre: 'أطفال' },
    { titleAr: 'قصص ما قبل النوم', start: '20:00', end: '21:00', genre: 'أطفال' },
  ],
  'epg-ch-7': [
    { titleAr: 'وثائقي: تاريخ العراق القديم', start: '10:00', end: '12:00', genre: 'وثائقي' },
    { titleAr: 'وثائقي: الطبيعة العراقية', start: '15:00', end: '17:00', genre: 'وثائقي' },
    { titleAr: 'وثائقي: الفن العراقي المعاصر', start: '21:00', end: '23:00', genre: 'وثائقي' },
  ],
  'epg-ch-8': [
    { titleAr: 'صباح الثقافة', start: '08:00', end: '10:00', genre: 'ثقافة' },
    { titleAr: 'أدب وشعر', start: '14:00', end: '16:00', genre: 'ثقافة' },
    { titleAr: 'موسيقى عراقية أصيلة', start: '20:00', end: '22:00', genre: 'موسيقى' },
  ],
};

function isCurrentlyLive(start: string, end: string): boolean {
  const { h, m } = getNow();
  const now = h * 60 + m;
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const startMin = sh * 60 + (sm ?? 0);
  const endMin = eh * 60 + (em ?? 0);
  return now >= startMin && now < endMin;
}

function isUpcoming(start: string): boolean {
  const { h, m } = getNow();
  const now = h * 60 + m;
  const [sh, sm] = start.split(':').map(Number);
  const startMin = sh * 60 + (sm ?? 0);
  return startMin > now;
}

const categoryLabels: Record<string, string> = {
  sports: 'رياضة',
  news: 'أخبار',
  entertainment: 'ترفيه',
  movies: 'أفلام',
  kids: 'أطفال',
  documentary: 'وثائقية',
  culture: 'ثقافة',
};

export default function EpgPage() {
  const today = new Date().toLocaleDateString('ar-IQ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container-ns py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">جدول البرامج</h1>
            <p className="text-neutral-400 text-sm mt-1">
              تصفح جداول قنواتنا المباشرة · {today}
            </p>
          </div>
          {/* Day selector */}
          <div className="flex items-center gap-2">
            {['أمس', 'اليوم', 'الغد'].map((day, i) => (
              <button
                key={day}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  i === 1
                    ? 'bg-gradient-to-r from-brand-red to-brand-gold text-white shadow-glow'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* EPG Grid */}
      <div className="space-y-4">
        {channels.map((channel) => {
          const channelPrograms = programs[channel.id] ?? [];
          return (
            <div key={channel.id} className="glass-card overflow-hidden">
              {/* Channel header */}
              <div
                className="flex items-center gap-3 px-5 py-3 border-b border-neutral-800"
                style={{ borderRightColor: channel.color, borderRightWidth: '3px' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ backgroundColor: channel.color }}
                >
                  {channel.number}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{channel.nameAr}</p>
                  <p className="text-xs text-neutral-500">{categoryLabels[channel.category] ?? channel.category}</p>
                </div>
                <span className="mr-auto text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-full">
                  {channelPrograms.length} برامج
                </span>
              </div>

              {/* Programs row */}
              <div className="flex gap-2 p-4 overflow-x-auto scrollbar-thin">
                {channelPrograms.map((prog, pi) => {
                  const live = prog.isLive || isCurrentlyLive(prog.start, prog.end);
                  const upcoming = !live && isUpcoming(prog.start);
                  return (
                    <div
                      key={pi}
                      className={`flex-shrink-0 min-w-[160px] max-w-[200px] rounded-lg p-3 border transition-all cursor-pointer hover:scale-105 ${
                        live
                          ? 'border-brand-red/50 bg-brand-red/10'
                          : upcoming
                          ? 'border-neutral-700 bg-neutral-800/50'
                          : 'border-neutral-800 bg-neutral-850/60 opacity-60'
                      }`}
                    >
                      {live && (
                        <div className="flex items-center gap-1 mb-1.5">
                          <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                          <span className="text-brand-red text-[10px] font-bold uppercase">مباشر</span>
                        </div>
                      )}
                      <p className="text-xs font-semibold text-white leading-snug mb-1 line-clamp-2">
                        {prog.titleAr}
                      </p>
                      <p className="text-[10px] text-neutral-500">
                        {prog.start} — {prog.end}
                      </p>
                      <p className="text-[10px] text-neutral-600 mt-0.5">{prog.genre}</p>
                    </div>
                  );
                })}
                {channelPrograms.length === 0 && (
                  <p className="text-neutral-600 text-sm py-2">لا توجد برامج مجدولة</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-brand-red/20 border border-brand-red/50 inline-block" />
          مباشر الآن
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-neutral-800 border border-neutral-700 inline-block" />
          قادم
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-neutral-850 border border-neutral-800 opacity-60 inline-block" />
          انتهى
        </div>
      </div>
    </div>
  );
}
