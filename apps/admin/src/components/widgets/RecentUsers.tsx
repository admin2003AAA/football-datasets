const users = [
  { nameAr: 'فاطمة الراشد', email: 'fatima@example.com', plan: 'المميزة', planColor: 'bg-yellow-900/50 text-yellow-400', avatar: 'ف', joinedAr: 'منذ ساعتين' },
  { nameAr: 'علي حسن', email: 'ali@example.com', plan: 'العائلية', planColor: 'bg-brand-red/10 text-brand-red', avatar: 'ع', joinedAr: 'منذ 5 ساعات' },
  { nameAr: 'عمر البغدادي', email: 'omar@example.com', plan: 'الأساسية', planColor: 'bg-blue-900/50 text-blue-300', avatar: 'م', joinedAr: 'منذ يوم' },
  { nameAr: 'سارة المحمد', email: 'sarah@example.com', plan: 'المميزة', planColor: 'bg-yellow-900/50 text-yellow-400', avatar: 'س', joinedAr: 'منذ يومين' },
];

export function RecentUsers() {
  return (
    <div className="glass-card p-6" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-white">آخر المسجّلين</h2>
          <p className="text-xs text-neutral-500">Recent Signups</p>
        </div>
        <a href="/dashboard/users" className="text-xs text-brand-red hover:underline">عرض الكل →</a>
      </div>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.email} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-brand-gold rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.nameAr}</p>
              <p className="text-xs text-neutral-500 truncate">{user.email}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:block ${user.planColor}`}>
                {user.plan}
              </span>
              <span className="text-xs text-neutral-600">{user.joinedAr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
