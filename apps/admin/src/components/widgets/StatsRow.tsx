const stats = [
  { label: 'Total Users', value: '12,480', change: 12, icon: '👥' },
  { label: 'Active Subscribers', value: '8,920', change: 8, icon: '✅' },
  { label: 'Monthly Revenue', value: '$178,400', change: 15, icon: '💰' },
  { label: 'Live Viewers', value: '10,200', change: 23, icon: '📺' },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card p-5">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-neutral-400">{stat.label}</p>
            <span className="text-xl">{stat.icon}</span>
          </div>
          <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-xs text-green-400">▲ {stat.change}% this month</p>
        </div>
      ))}
    </div>
  );
}
