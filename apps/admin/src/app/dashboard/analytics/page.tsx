import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Analytics' };

const topContent = [
  { rank: 1, title: 'Nova Sports 1', views: '14,500', watchTime: '1,250 hrs', trend: '+12%' },
  { rank: 2, title: 'Champions League Highlights', views: '120,000', watchTime: '80,000 hrs', trend: '+34%' },
  { rank: 3, title: 'Nova Sports 2', views: '8,200', watchTime: '710 hrs', trend: '+8%' },
  { rank: 4, title: 'Nova Cinema', views: '6,100', watchTime: '540 hrs', trend: '+5%' },
  { rank: 5, title: 'Nova Kids', views: '4,800', watchTime: '384 hrs', trend: '+18%' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-neutral-400 text-sm mt-1">Platform performance overview and reports.</p>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Streams', value: '284,300', change: '+23%' },
          { label: 'Avg Watch Time', value: '87 min', change: '+5%' },
          { label: 'Peak Concurrent', value: '4,200', change: '+17%' },
          { label: 'Satisfaction', value: '4.7 / 5', change: '+0.2' },
        ].map((kpi) => (
          <div key={kpi.label} className="glass-card p-5">
            <p className="text-neutral-400 text-xs mb-1">{kpi.label}</p>
            <p className="text-2xl font-bold text-white">{kpi.value}</p>
            <p className="text-xs text-green-400 mt-1">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Viewer trend (placeholder chart) */}
      <div className="glass-card p-6">
        <h2 className="font-semibold text-white mb-4">Daily Viewers — Last 7 Days</h2>
        <div className="flex items-end gap-2 h-32">
          {[6200, 7100, 6800, 8400, 9200, 7600, 10100].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-gradient-to-t from-brand-blue to-brand-violet rounded-t-sm opacity-80"
                style={{ height: `${(val / 12000) * 100}%` }}
              />
              <span className="text-xs text-neutral-600">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top content */}
      <div className="glass-card p-6">
        <h2 className="font-semibold text-white mb-4">Top Content</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-left pb-2 text-neutral-400 font-medium">#</th>
              <th className="text-left pb-2 text-neutral-400 font-medium">Title</th>
              <th className="text-right pb-2 text-neutral-400 font-medium hidden sm:table-cell">Views</th>
              <th className="text-right pb-2 text-neutral-400 font-medium hidden md:table-cell">Watch Time</th>
              <th className="text-right pb-2 text-neutral-400 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {topContent.map((item) => (
              <tr key={item.rank} className="border-b border-neutral-800/50 last:border-0">
                <td className="py-2.5 text-neutral-500">{item.rank}</td>
                <td className="py-2.5 font-medium text-white">{item.title}</td>
                <td className="py-2.5 text-neutral-400 text-right hidden sm:table-cell">{item.views}</td>
                <td className="py-2.5 text-neutral-400 text-right hidden md:table-cell">{item.watchTime}</td>
                <td className="py-2.5 text-green-400 text-right text-xs font-semibold">{item.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
