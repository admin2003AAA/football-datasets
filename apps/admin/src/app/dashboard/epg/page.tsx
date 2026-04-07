import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'جدول البرامج — IRAQ TV Admin' };

const channels = [
  { id: 'epg-ch-1', nameAr: 'إيراق تيفي رياضة 1', category: 'sports', programs: 6, status: 'active' },
  { id: 'epg-ch-2', nameAr: 'إيراق تيفي رياضة 2', category: 'sports', programs: 3, status: 'active' },
  { id: 'epg-ch-3', nameAr: 'إيراق تيفي الأخبار', category: 'news', programs: 6, status: 'active' },
  { id: 'epg-ch-4', nameAr: 'إيراق تيفي ترفيه', category: 'entertainment', programs: 4, status: 'active' },
  { id: 'epg-ch-5', nameAr: 'إيراق تيفي سينما', category: 'movies', programs: 3, status: 'active' },
  { id: 'epg-ch-6', nameAr: 'إيراق تيفي أطفال', category: 'kids', programs: 4, status: 'active' },
  { id: 'epg-ch-7', nameAr: 'إيراق تيفي وثائقية', category: 'documentary', programs: 3, status: 'active' },
  { id: 'epg-ch-8', nameAr: 'إيراق تيفي ثقافة', category: 'culture', programs: 3, status: 'active' },
];

const upcomingPrograms = [
  { channel: 'إيراق تيفي رياضة 1', titleAr: 'دوري العراق — مباراة مباشرة', start: '20:00', end: '22:00', isLive: true, genre: 'رياضة' },
  { channel: 'إيراق تيفي الأخبار', titleAr: 'نشرة الأخبار المسائية', start: '19:00', end: '20:00', isLive: true, genre: 'أخبار' },
  { channel: 'إيراق تيفي رياضة 2', titleAr: 'ليلة الملاكمة', start: '21:00', end: '23:30', isLive: false, genre: 'رياضة' },
  { channel: 'إيراق تيفي ترفيه', titleAr: 'مسلسل عراقي — الحلقة 12', start: '21:00', end: '22:00', isLive: false, genre: 'دراما' },
  { channel: 'إيراق تيفي سينما', titleAr: 'فيلم روائي مرخص', start: '20:00', end: '22:30', isLive: false, genre: 'أفلام' },
];

const categoryLabels: Record<string, string> = {
  sports: 'رياضة',
  news: 'أخبار',
  entertainment: 'ترفيه',
  movies: 'أفلام',
  kids: 'أطفال',
  documentary: 'وثائقية',
  culture: 'ثقافة',
};

const categoryColors: Record<string, string> = {
  sports: 'bg-red-900/50 text-red-300',
  news: 'bg-blue-900/50 text-blue-300',
  entertainment: 'bg-yellow-900/50 text-yellow-300',
  movies: 'bg-violet-900/50 text-violet-300',
  kids: 'bg-green-900/50 text-green-300',
  documentary: 'bg-orange-900/50 text-orange-300',
  culture: 'bg-teal-900/50 text-teal-300',
};

export default function EpgAdminPage() {
  const today = new Date().toLocaleDateString('ar-IQ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">جدول البرامج (EPG)</h1>
          <p className="text-neutral-400 text-sm mt-1">إدارة جداول القنوات والبرامج · {today}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 px-4 py-2 rounded-lg text-sm transition-colors">
            استيراد جدول
          </button>
          <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
            + إضافة برنامج
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي القنوات', value: '8', icon: '📺' },
          { label: 'برامج اليوم', value: '32', icon: '📅' },
          { label: 'بث مباشر الآن', value: '3', icon: '🔴' },
          { label: 'برامج قادمة', value: '12', icon: '⏰' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{stat.icon}</span>
              <p className="text-neutral-400 text-xs">{stat.label}</p>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Channels table */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <h2 className="font-semibold text-white">قنوات البرامج</h2>
          <span className="text-xs text-neutral-500">{channels.length} قناة</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">القناة</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden sm:table-cell">التصنيف</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden md:table-cell">عدد البرامج</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">الحالة</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((ch, i) => (
              <tr key={ch.id} className={`border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors ${i === channels.length - 1 ? 'border-0' : ''}`}>
                <td className="px-5 py-3">
                  <p className="font-medium text-white">{ch.nameAr}</p>
                  <p className="text-xs text-neutral-500">{ch.id}</p>
                </td>
                <td className="px-5 py-3 hidden sm:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[ch.category] ?? 'bg-neutral-700 text-neutral-300'}`}>
                    {categoryLabels[ch.category] ?? ch.category}
                  </span>
                </td>
                <td className="px-5 py-3 text-neutral-400 hidden md:table-cell">{ch.programs}</td>
                <td className="px-5 py-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-900/50 text-green-400">
                    نشط
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="text-xs text-brand-gold hover:underline ml-3">تعديل</button>
                  <button className="text-xs text-neutral-500 hover:text-white hover:underline">عرض</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming programs */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-white">البرامج القادمة اليوم</h2>
          <button className="text-xs text-brand-red hover:underline">عرض الكل</button>
        </div>
        <div className="space-y-3">
          {upcomingPrograms.map((prog, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors">
              <div className="flex items-center gap-3">
                {prog.isLive && (
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm font-medium text-white">{prog.titleAr}</p>
                  <p className="text-xs text-neutral-500">{prog.channel}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-neutral-300">{prog.start} — {prog.end}</p>
                <span className="text-[10px] text-neutral-500">{prog.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
