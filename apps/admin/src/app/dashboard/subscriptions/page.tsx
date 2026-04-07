import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'الاشتراكات — IRAQ TV Admin' };

const plans = [
  { id: 'free', nameAr: 'مجاناً', nameEn: 'Free', price: '$0', priceIqd: '0', subscribers: 4200, revenue: '$0', revenueIqd: '0', growth: 12 },
  { id: 'basic', nameAr: 'الأساسية', nameEn: 'Basic', price: '$9.99/شهر', priceIqd: '13,000 د.ع./شهر', subscribers: 1390, revenue: '$13,889', revenueIqd: '18,060,000 د.ع.', growth: 8 },
  { id: 'standard', nameAr: 'العائلية', nameEn: 'Standard', price: '$19.99/شهر', priceIqd: '26,000 د.ع./شهر', subscribers: 1540, revenue: '$30,785', revenueIqd: '40,020,000 د.ع.', growth: 15 },
  { id: 'premium', nameAr: 'المميزة', nameEn: 'Premium', price: '$34.99/شهر', priceIqd: '46,000 د.ع./شهر', subscribers: 890, revenue: '$31,141', revenueIqd: '40,480,000 د.ع.', growth: 22 },
];

const recentSubs = [
  { user: 'فاطمة الراشد', email: 'fatima@example.com', plan: 'المميزة', status: 'active', date: '2024-12-05', amount: '$34.99' },
  { user: 'علي حسن', email: 'ali@example.com', plan: 'العائلية', status: 'active', date: '2024-12-04', amount: '$19.99' },
  { user: 'عمر البغدادي', email: 'omar@example.com', plan: 'الأساسية', status: 'trial', date: '2024-12-01', amount: '$0' },
  { user: 'سارة المحمد', email: 'sarah@example.com', plan: 'المميزة', status: 'active', date: '2024-11-28', amount: '$34.99' },
  { user: 'يوسف كريم', email: 'yousuf@example.com', plan: 'الأساسية', status: 'cancelled', date: '2024-11-20', amount: '$0' },
];

const statusColors: Record<string, string> = {
  active: 'bg-green-900/50 text-green-400',
  trial: 'bg-orange-900/50 text-orange-400',
  cancelled: 'bg-red-900/50 text-red-400',
};

const statusLabels: Record<string, string> = {
  active: 'نشط',
  trial: 'تجريبي',
  cancelled: 'ملغى',
};

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">الاشتراكات</h1>
          <p className="text-neutral-400 text-sm mt-1">إدارة باقات الاشتراك ومقاييس المشتركين.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
          + إضافة باقة
        </button>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="glass-card p-5 hover:border-brand-red/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-white">{plan.nameAr}</h3>
                <p className="text-xs text-neutral-500">{plan.nameEn}</p>
              </div>
              <span className="text-xs bg-brand-red/10 text-brand-red border border-brand-red/20 px-2 py-0.5 rounded-full font-medium">
                {plan.price}
              </span>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{plan.subscribers.toLocaleString('ar-IQ')}</p>
            <p className="text-xs text-neutral-500 mb-2">مشترك نشط</p>
            <p className="text-sm font-semibold text-neutral-200">{plan.revenue}</p>
            <p className="text-xs text-brand-gold">{plan.revenueIqd}</p>
            <p className="text-xs text-neutral-500 mb-2">الإيرادات الشهرية</p>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <span>▲</span> {plan.growth}% هذا الشهر
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="glass-card p-6">
        <h2 className="font-semibold text-white mb-4">ملخص الاشتراكات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-neutral-400 text-sm">إجمالي المشتركين</p>
            <p className="text-2xl font-bold text-white mt-1">3,820</p>
            <p className="text-xs text-neutral-500">مدفوع</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">الإيرادات الشهرية</p>
            <p className="text-2xl font-bold text-white mt-1">$75,815</p>
            <p className="text-xs text-brand-gold">98,560,000 د.ع.</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">معدل الإلغاء</p>
            <p className="text-2xl font-bold text-white mt-1">2.1%</p>
            <p className="text-xs text-green-400">-0.4% هذا الشهر</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">متوسط قيمة الاشتراك</p>
            <p className="text-2xl font-bold text-white mt-1">$19.84</p>
            <p className="text-xs text-neutral-500">لكل مشترك</p>
          </div>
        </div>
      </div>

      {/* Recent subscriptions */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <h2 className="font-semibold text-white">أحدث الاشتراكات</h2>
          <button className="text-xs text-brand-red hover:underline">عرض الكل</button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">المستخدم</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden sm:table-cell">الباقة</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden md:table-cell">الحالة</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden lg:table-cell">التاريخ</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">المبلغ</th>
            </tr>
          </thead>
          <tbody>
            {recentSubs.map((sub, i) => (
              <tr key={i} className={`border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors`}>
                <td className="px-5 py-3">
                  <p className="font-medium text-white">{sub.user}</p>
                  <p className="text-xs text-neutral-500">{sub.email}</p>
                </td>
                <td className="px-5 py-3 text-neutral-300 hidden sm:table-cell">{sub.plan}</td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColors[sub.status] ?? ''}`}>
                    {statusLabels[sub.status] ?? sub.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-neutral-500 text-xs hidden lg:table-cell">{sub.date}</td>
                <td className="px-5 py-3 text-neutral-200 font-semibold">{sub.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
