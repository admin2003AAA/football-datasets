const stats = [
  { labelAr: 'إجمالي المستخدمين', labelEn: 'Total Users', value: '7,845', change: 31, icon: '👥' },
  { labelAr: 'المشتركون النشطون', labelEn: 'Active Subscribers', value: '3,820', change: 18, icon: '✅' },
  { labelAr: 'الإيرادات الشهرية', labelEn: 'Monthly Revenue', value: '$75,815', change: 15, icon: '💰' },
  { labelAr: 'المشاهدون المباشرون', labelEn: 'Live Viewers', value: '10,200', change: 23, icon: '📺' },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4" dir="rtl">
      {stats.map((stat) => (
        <div key={stat.labelAr} className="glass-card p-5 hover:border-neutral-600 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-neutral-400">{stat.labelAr}</p>
              <p className="text-xs text-neutral-600">{stat.labelEn}</p>
            </div>
            <span className="text-xl">{stat.icon}</span>
          </div>
          <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-xs text-green-400">▲ {stat.change}% هذا الشهر</p>
        </div>
      ))}
    </div>
  );
}
