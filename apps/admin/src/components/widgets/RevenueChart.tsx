const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const revenue = [15200, 17800, 21000, 19500, 24100, 28400];
const maxRevenue = Math.max(...revenue);

export function RevenueChart() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-white">Revenue Trend</h2>
        <span className="text-xs text-neutral-500">Last 6 months</span>
      </div>
      <div className="flex items-end gap-3 h-36">
        {revenue.map((val, i) => (
          <div key={months[i]} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-xs text-neutral-500">${(val / 1000).toFixed(0)}k</span>
            <div
              className="w-full bg-gradient-to-t from-brand-blue to-brand-violet rounded-t opacity-80 transition-all hover:opacity-100"
              style={{ height: `${(val / maxRevenue) * 100}%` }}
            />
            <span className="text-xs text-neutral-600">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
