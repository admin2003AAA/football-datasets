import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'المحتوى — IRAQ TV Admin' };

const content = [
  { id: 'ch-001', titleAr: 'إيراق تيفي رياضة 1', titleEn: 'IRAQ TV Sport 1', typeAr: 'قناة مباشرة', type: 'Live Channel', status: 'live', viewers: 14500 },
  { id: 'ch-002', titleAr: 'إيراق تيفي رياضة 2', titleEn: 'IRAQ TV Sport 2', typeAr: 'قناة مباشرة', type: 'Live Channel', status: 'live', viewers: 8200 },
  { id: 'ch-003', titleAr: 'إيراق تيفي سينما', titleEn: 'IRAQ TV Cinema', typeAr: 'قناة مباشرة', type: 'Live Channel', status: 'live', viewers: 6100 },
  { id: 'cnt-001', titleAr: 'ملخصات دوري أبطال أوروبا', titleEn: 'Champions League Highlights', typeAr: 'فيديو حسب الطلب', type: 'VOD', status: 'published', viewers: 120000 },
  { id: 'cnt-002', titleAr: 'السباق الكبير', titleEn: 'The Grand Race', typeAr: 'وثائقي', type: 'Documentary', status: 'published', viewers: 45000 },
  { id: 'ch-005', titleAr: 'إيراق تيفي وثائقية', titleEn: 'IRAQ TV Docs', typeAr: 'قناة مباشرة', type: 'Live Channel', status: 'offline', viewers: 0 },
];

const statusColors: Record<string, string> = {
  live: 'bg-brand-red/20 text-brand-red',
  published: 'bg-green-900/50 text-green-400',
  offline: 'bg-neutral-700 text-neutral-400',
  draft: 'bg-yellow-900/50 text-yellow-400',
};

const statusLabels: Record<string, string> = {
  live: 'مباشر',
  published: 'منشور',
  offline: 'غير متاح',
  draft: 'مسودة',
};

export default function ContentPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">إدارة المحتوى</h1>
          <p className="text-neutral-400 text-sm mt-1">إدارة القنوات المرخصة وكتالوج الفيديو.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
          + إضافة محتوى
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">المحتوى</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden md:table-cell">النوع</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">الحالة</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden sm:table-cell">المشاهدات</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={item.id} className={`border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors ${i === content.length - 1 ? 'border-0' : ''}`}>
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{item.titleAr}</p>
                  <p className="text-xs text-neutral-500">{item.titleEn} · {item.id}</p>
                </td>
                <td className="px-4 py-3 text-neutral-400 hidden md:table-cell">{item.typeAr}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>
                    {statusLabels[item.status] ?? item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-400 text-right hidden sm:table-cell">
                  {item.viewers.toLocaleString('ar-IQ')}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-brand-gold hover:underline ml-3">تعديل</button>
                  <button className="text-xs text-red-400 hover:underline">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
