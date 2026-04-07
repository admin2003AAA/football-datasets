const months = ['يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const revenue = [15200, 17800, 21000, 19500, 24100, 28400];
const maxRevenue = Math.max(...revenue);

export function RevenueChart() {
  return (
    <div className="glass-card p-6" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-white">اتجاه الإيرادات</h2>
          <p className="text-xs text-neutral-500">Revenue Trend</p>
        </div>
        <span className="text-xs text-neutral-500">آخر 6 أشهر</span>
      </div>
      <div className="flex items-end gap-3 h-36">
        {revenue.map((val, i) => (
          <div key={months[i]} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-xs text-neutral-500">${(val / 1000).toFixed(0)}k</span>
            <div
              className="w-full bg-gradient-to-t from-brand-red to-brand-gold rounded-t opacity-80 transition-all hover:opacity-100"
              style={{ height: `${(val / maxRevenue) * 100}%` }}
            />
            <span className="text-[10px] text-neutral-600">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
