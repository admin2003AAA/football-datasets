import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'المستخدمون — IRAQ TV Admin' };

const users = [
  { id: 'u1', name: 'علي حسن', nameEn: 'Ali Hassan', email: 'ali@example.com', plan: 'العائلية', planEn: 'Standard', role: 'subscriber', roleAr: 'مشترك', status: 'active', joined: '2024-06-01' },
  { id: 'u2', name: 'فاطمة الراشد', nameEn: 'Fatima Al-Rashid', email: 'fatima@example.com', plan: 'المميزة', planEn: 'Premium', role: 'subscriber', roleAr: 'مشترك', status: 'active', joined: '2024-05-15' },
  { id: 'u3', name: 'عمر البغدادي', nameEn: 'Omar Al-Baghdadi', email: 'omar@example.com', plan: 'الأساسية', planEn: 'Basic', role: 'subscriber', roleAr: 'مشترك', status: 'trial', joined: '2024-12-01' },
  { id: 'u4', name: 'محرر المحتوى', nameEn: 'Content Editor', email: 'editor@iraqtv.iq', plan: '—', planEn: '—', role: 'editor', roleAr: 'محرر', status: 'active', joined: '2024-03-01' },
  { id: 'u5', name: 'موظف الدعم', nameEn: 'Support Agent', email: 'support@iraqtv.iq', plan: '—', planEn: '—', role: 'support', roleAr: 'دعم فني', status: 'active', joined: '2024-03-15' },
  { id: 'u6', name: 'سارة المحمد', nameEn: 'Sarah Al-Mohammed', email: 'sarah@example.com', plan: 'المميزة', planEn: 'Premium', role: 'subscriber', roleAr: 'مشترك', status: 'active', joined: '2024-08-20' },
];

const planColors: Record<string, string> = {
  'مجاناً': 'bg-neutral-700 text-neutral-300',
  'الأساسية': 'bg-blue-900/50 text-blue-300',
  'العائلية': 'bg-brand-red/10 text-brand-red',
  'المميزة': 'bg-yellow-900/50 text-yellow-300',
  '—': 'bg-neutral-800 text-neutral-500',
};

const statusColors: Record<string, string> = {
  active: 'bg-green-900/50 text-green-400',
  inactive: 'bg-neutral-700 text-neutral-400',
  trial: 'bg-orange-900/50 text-orange-400',
};

const statusLabels: Record<string, string> = {
  active: 'نشط',
  inactive: 'غير نشط',
  trial: 'تجريبي',
};

export default function UsersPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">المستخدمون</h1>
          <p className="text-neutral-400 text-sm mt-1">إدارة مشتركي وحسابات منصة IRAQ TV.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
          + إضافة مستخدم
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي المستخدمين', value: '7,845', change: '+31%' },
          { label: 'نشط هذا الشهر', value: '4,200', change: '+9%' },
          { label: 'مشتركون مدفوعون', value: '3,820', change: '+18%' },
          { label: 'جدد اليوم', value: '42', change: '+5' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4">
            <p className="text-neutral-400 text-xs mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-green-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="البحث عن مستخدم..."
          className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-red"
        />
        <select className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-brand-red">
          <option value="">جميع الباقات</option>
          <option>مجاناً</option>
          <option>الأساسية</option>
          <option>العائلية</option>
          <option>المميزة</option>
        </select>
        <select className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-brand-red">
          <option value="">جميع الأدوار</option>
          <option>مشترك</option>
          <option>محرر</option>
          <option>دعم فني</option>
          <option>مدير</option>
        </select>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">المستخدم</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden md:table-cell">الباقة</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden sm:table-cell">الدور</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden sm:table-cell">الحالة</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden lg:table-cell">تاريخ الانضمام</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id} className={`border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors ${i === users.length - 1 ? 'border-0' : ''}`}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-brand-gold rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-neutral-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${planColors[user.plan] ?? 'bg-neutral-700 text-neutral-300'}`}>
                    {user.plan}
                  </span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className="text-xs font-medium text-neutral-300">{user.roleAr}</span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColors[user.status] ?? ''}`}>
                    {statusLabels[user.status] ?? user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-500 text-xs hidden lg:table-cell">{user.joined}</td>
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
