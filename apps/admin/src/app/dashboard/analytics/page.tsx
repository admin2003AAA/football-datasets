import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'التحليلات — IRAQ TV Admin' };

const kpiData = [
  { label: 'إجمالي البث', labelEn: 'Total Streams', value: '284,300', change: '+23%', positive: true },
  { label: 'متوسط وقت المشاهدة', labelEn: 'Avg Watch Time', value: '87 دقيقة', change: '+5%', positive: true },
  { label: 'أعلى تزامن مباشر', labelEn: 'Peak Concurrent', value: '4,200', change: '+17%', positive: true },
  { label: 'رضا المستخدمين', labelEn: 'Satisfaction', value: '4.7 / 5', change: '+0.2', positive: true },
  { label: 'المستخدمون الجدد', labelEn: 'New Users', value: '1,245', change: '+31%', positive: true },
  { label: 'معدل الإلغاء', labelEn: 'Churn Rate', value: '2.1%', change: '-0.4%', positive: true },
  { label: 'إجمالي الإيرادات', labelEn: 'Total Revenue', value: '$48,200', change: '+18%', positive: true },
  { label: 'الاشتراكات النشطة', labelEn: 'Active Subs', value: '3,820', change: '+9%', positive: true },
];

const topContent = [
  { rank: 1, titleAr: 'إيراق تيفي رياضة 1', titleEn: 'IRAQ TV Sport 1', views: '14,500', watchTime: '1,250 ساعة', trend: '+12%' },
  { rank: 2, titleAr: 'مباريات دوري العراق', titleEn: 'Iraqi League Matches', views: '120,000', watchTime: '80,000 ساعة', trend: '+34%' },
  { rank: 3, titleAr: 'إيراق تيفي رياضة 2', titleEn: 'IRAQ TV Sport 2', views: '8,200', watchTime: '710 ساعة', trend: '+8%' },
  { rank: 4, titleAr: 'إيراق تيفي سينما', titleEn: 'IRAQ TV Cinema', views: '6,100', watchTime: '540 ساعة', trend: '+5%' },
  { rank: 5, titleAr: 'إيراق تيفي أطفال', titleEn: 'IRAQ TV Kids', views: '4,800', watchTime: '384 ساعة', trend: '+18%' },
];

const subscriptionDistribution = [
  { plan: 'Premium', planAr: 'المميزة', count: 890, revenue: 31165, percentage: 23 },
  { plan: 'Standard', planAr: 'العائلية', count: 1540, revenue: 30818, percentage: 40 },
  { plan: 'Basic', planAr: 'الأساسية', count: 1390, revenue: 13889, percentage: 36 },
  { plan: 'Free', planAr: 'مجاناً', count: 4200, revenue: 0, percentage: 0 },
];

const recentActivity = [
  { type: 'sub', msgAr: 'اشترك مستخدم جديد في باقة المميزة', time: 'منذ 2 دقيقة', icon: '💎' },
  { type: 'live', msgAr: 'بدأ بث مباشر على قناة IRAQ TV Sport 1', time: 'منذ 5 دقائق', icon: '📡' },
  { type: 'user', msgAr: 'تسجيل 12 مستخدم جديد اليوم', time: 'منذ 10 دقائق', icon: '👤' },
  { type: 'cancel', msgAr: 'إلغاء اشتراك مستخدم واحد', time: 'منذ 15 دقيقة', icon: '⚠️' },
  { type: 'sub', msgAr: 'تجديد تلقائي لـ 18 اشتراك', time: 'منذ 30 دقيقة', icon: '🔄' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">التحليلات والتقارير</h1>
          <p className="text-neutral-400 text-sm mt-1">نظرة عامة على أداء منصة IRAQ TV.</p>
        </div>
        <div className="flex items-center gap-2">
          {['اليوم', 'هذا الأسبوع', 'هذا الشهر', '3 أشهر'].map((period, i) => (
            <button
              key={period}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                i === 2
                  ? 'bg-brand-red text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <div key={kpi.label} className="glass-card p-5">
            <p className="text-neutral-400 text-xs mb-1">{kpi.label}</p>
            <p className="text-xs text-neutral-600 mb-2">{kpi.labelEn}</p>
            <p className="text-2xl font-bold text-white">{kpi.value}</p>
            <p className={`text-xs mt-1 font-semibold ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>
              {kpi.change}
            </p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Viewer trend chart */}
        <div className="glass-card p-6">
          <h2 className="font-semibold text-white mb-1">المشاهدون اليوميون — آخر 7 أيام</h2>
          <p className="text-xs text-neutral-500 mb-4">Daily Viewers — Last 7 Days</p>
          <div className="flex items-end gap-2 h-32">
            {[6200, 7100, 6800, 8400, 9200, 7600, 10100].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-neutral-500">{(val / 1000).toFixed(1)}k</span>
                <div
                  className="w-full bg-gradient-to-t from-brand-red to-brand-gold rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${(val / 12000) * 100}%` }}
                />
                <span className="text-xs text-neutral-600">
                  {['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription distribution */}
        <div className="glass-card p-6">
          <h2 className="font-semibold text-white mb-1">توزيع الاشتراكات</h2>
          <p className="text-xs text-neutral-500 mb-4">Subscription Distribution</p>
          <div className="space-y-3">
            {subscriptionDistribution.map((item) => (
              <div key={item.plan}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{item.planAr}</span>
                    <span className="text-xs text-neutral-500">{item.plan}</span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    {item.count.toLocaleString()} مشترك
                    {item.revenue > 0 && <span className="text-brand-gold mr-2"> · ${item.revenue.toLocaleString()}</span>}
                  </span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-gold"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top content & recent activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top content table */}
        <div className="xl:col-span-2 glass-card p-6">
          <h2 className="font-semibold text-white mb-1">أفضل المحتوى</h2>
          <p className="text-xs text-neutral-500 mb-4">Top Content by Views</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-right pb-2 text-neutral-400 font-medium">#</th>
                <th className="text-right pb-2 text-neutral-400 font-medium">المحتوى</th>
                <th className="text-right pb-2 text-neutral-400 font-medium hidden sm:table-cell">المشاهدات</th>
                <th className="text-right pb-2 text-neutral-400 font-medium hidden md:table-cell">وقت المشاهدة</th>
                <th className="text-right pb-2 text-neutral-400 font-medium">التغيير</th>
              </tr>
            </thead>
            <tbody>
              {topContent.map((item) => (
                <tr key={item.rank} className="border-b border-neutral-800/50 last:border-0">
                  <td className="py-2.5 text-neutral-500">{item.rank}</td>
                  <td className="py-2.5">
                    <p className="font-medium text-white">{item.titleAr}</p>
                    <p className="text-xs text-neutral-500">{item.titleEn}</p>
                  </td>
                  <td className="py-2.5 text-neutral-400 text-right hidden sm:table-cell">{item.views}</td>
                  <td className="py-2.5 text-neutral-400 text-right hidden md:table-cell">{item.watchTime}</td>
                  <td className="py-2.5 text-green-400 text-right text-xs font-semibold">{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent activity */}
        <div className="glass-card p-6">
          <h2 className="font-semibold text-white mb-1">النشاط الأخير</h2>
          <p className="text-xs text-neutral-500 mb-4">Recent Activity</p>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{activity.icon}</span>
                <div>
                  <p className="text-xs text-neutral-300">{activity.msgAr}</p>
                  <p className="text-[10px] text-neutral-600 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
