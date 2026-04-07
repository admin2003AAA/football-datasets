import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'الأدوار والصلاحيات — IRAQ TV Admin' };

const roles = [
  {
    id: 'super_admin',
    nameAr: 'المدير العام',
    nameEn: 'Super Admin',
    description: 'وصول كامل لجميع ميزات وإعدادات المنصة.',
    color: '#C41E3A',
    usersCount: 1,
    permissions: ['users:read', 'users:write', 'users:delete', 'content:read', 'content:write', 'content:delete', 'subscriptions:read', 'subscriptions:write', 'epg:read', 'epg:write', 'analytics:read', 'settings:read', 'settings:write', 'roles:read', 'roles:write'],
  },
  {
    id: 'admin',
    nameAr: 'مدير',
    nameEn: 'Admin',
    description: 'إدارة المنصة مع صلاحيات محدودة للإجراءات المدمرة.',
    color: '#E63946',
    usersCount: 2,
    permissions: ['users:read', 'users:write', 'content:read', 'content:write', 'content:delete', 'subscriptions:read', 'subscriptions:write', 'epg:read', 'epg:write', 'analytics:read', 'settings:read', 'roles:read'],
  },
  {
    id: 'editor',
    nameAr: 'محرر',
    nameEn: 'Editor',
    description: 'إنشاء وتحرير المحتوى وجداول البرامج.',
    color: '#D4AF37',
    usersCount: 3,
    permissions: ['content:read', 'content:write', 'epg:read', 'epg:write'],
  },
  {
    id: 'support',
    nameAr: 'دعم فني',
    nameEn: 'Support',
    description: 'عرض المستخدمين والاشتراكات لتقديم الدعم.',
    color: '#3B82F6',
    usersCount: 4,
    permissions: ['users:read', 'subscriptions:read'],
  },
  {
    id: 'analyst',
    nameAr: 'محلل',
    nameEn: 'Analyst',
    description: 'وصول للقراءة فقط للتحليلات والتقارير.',
    color: '#22C55E',
    usersCount: 2,
    permissions: ['analytics:read', 'subscriptions:read', 'content:read'],
  },
  {
    id: 'moderator',
    nameAr: 'مشرف',
    nameEn: 'Moderator',
    description: 'الإشراف على المحتوى وبلاغات المستخدمين.',
    color: '#F59E0B',
    usersCount: 2,
    permissions: ['users:read', 'content:read', 'content:write'],
  },
  {
    id: 'subscriber',
    nameAr: 'مشترك',
    nameEn: 'Subscriber',
    description: 'مشترك عادي بصلاحيات البث القياسية.',
    color: '#9A9AB8',
    usersCount: 3820,
    permissions: ['content:read'],
  },
];

const allPermissions = [
  { key: 'users:read', labelAr: 'عرض المستخدمين', category: 'المستخدمون' },
  { key: 'users:write', labelAr: 'تعديل المستخدمين', category: 'المستخدمون' },
  { key: 'users:delete', labelAr: 'حذف المستخدمين', category: 'المستخدمون' },
  { key: 'content:read', labelAr: 'عرض المحتوى', category: 'المحتوى' },
  { key: 'content:write', labelAr: 'تعديل المحتوى', category: 'المحتوى' },
  { key: 'content:delete', labelAr: 'حذف المحتوى', category: 'المحتوى' },
  { key: 'subscriptions:read', labelAr: 'عرض الاشتراكات', category: 'الاشتراكات' },
  { key: 'subscriptions:write', labelAr: 'تعديل الاشتراكات', category: 'الاشتراكات' },
  { key: 'epg:read', labelAr: 'عرض جدول البرامج', category: 'جدول البرامج' },
  { key: 'epg:write', labelAr: 'تعديل جدول البرامج', category: 'جدول البرامج' },
  { key: 'analytics:read', labelAr: 'عرض التحليلات', category: 'التحليلات' },
  { key: 'settings:read', labelAr: 'عرض الإعدادات', category: 'الإعدادات' },
  { key: 'settings:write', labelAr: 'تعديل الإعدادات', category: 'الإعدادات' },
  { key: 'roles:read', labelAr: 'عرض الأدوار', category: 'الأدوار' },
  { key: 'roles:write', labelAr: 'تعديل الأدوار', category: 'الأدوار' },
];

const seedUsers = [
  { name: 'المدير العام', nameEn: 'Super Admin', email: 'superadmin@iraqtv.iq', role: 'super_admin', roleAr: 'المدير العام', status: 'active' },
  { name: 'مدير النظام', nameEn: 'Admin User', email: 'admin@iraqtv.iq', role: 'admin', roleAr: 'مدير', status: 'active' },
  { name: 'محرر المحتوى', nameEn: 'Content Editor', email: 'editor@iraqtv.iq', role: 'editor', roleAr: 'محرر', status: 'active' },
  { name: 'موظف الدعم', nameEn: 'Support Agent', email: 'support@iraqtv.iq', role: 'support', roleAr: 'دعم فني', status: 'active' },
  { name: 'محلل البيانات', nameEn: 'Data Analyst', email: 'analyst@iraqtv.iq', role: 'analyst', roleAr: 'محلل', status: 'active' },
];

export default function RolesPage() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">الأدوار والصلاحيات</h1>
          <p className="text-neutral-400 text-sm mt-1">إدارة أدوار المستخدمين وصلاحياتهم على المنصة.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
          + إضافة دور
        </button>
      </div>

      {/* Roles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {roles.map((role) => (
          <div key={role.id} className="glass-card p-5 hover:border-neutral-600 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: role.color }}
                />
                <div>
                  <p className="font-bold text-white text-sm">{role.nameAr}</p>
                  <p className="text-xs text-neutral-500">{role.nameEn}</p>
                </div>
              </div>
              <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-full">
                {role.usersCount.toLocaleString('ar-IQ')} مستخدم
              </span>
            </div>

            <p className="text-xs text-neutral-400 mb-3">{role.description}</p>

            {/* Permissions summary */}
            <div className="flex flex-wrap gap-1">
              {role.permissions.slice(0, 4).map((perm) => (
                <span key={perm} className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
                  {perm}
                </span>
              ))}
              {role.permissions.length > 4 && (
                <span className="text-[10px] bg-neutral-700 text-neutral-300 px-1.5 py-0.5 rounded">
                  +{role.permissions.length - 4} أخرى
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-800">
              <button className="text-xs text-brand-gold hover:underline">تعديل الصلاحيات</button>
              <button className="text-xs text-neutral-500 hover:text-white hover:underline mr-auto">عرض المستخدمين</button>
            </div>
          </div>
        ))}
      </div>

      {/* Permissions matrix */}
      <div className="glass-card overflow-hidden">
        <div className="px-5 py-4 border-b border-neutral-800">
          <h2 className="font-semibold text-white">مصفوفة الصلاحيات</h2>
          <p className="text-xs text-neutral-500 mt-1">نظرة شاملة على توزيع الصلاحيات بين الأدوار</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-right px-4 py-3 text-neutral-400 font-medium min-w-[160px]">الصلاحية</th>
                {roles.slice(0, 6).map((role) => (
                  <th key={role.id} className="text-center px-3 py-3 text-neutral-400 font-medium min-w-[80px]">
                    <div
                      className="w-2 h-2 rounded-full mx-auto mb-1"
                      style={{ backgroundColor: role.color }}
                    />
                    {role.nameAr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allPermissions.map((perm, pi) => (
                <tr key={perm.key} className={`border-b border-neutral-800/50 ${pi % 2 === 0 ? '' : 'bg-neutral-800/20'}`}>
                  <td className="px-4 py-2 text-neutral-300">
                    <span className="text-neutral-500 ml-1">[{perm.category}]</span>
                    {perm.labelAr}
                  </td>
                  {roles.slice(0, 6).map((role) => (
                    <td key={role.id} className="px-3 py-2 text-center">
                      {role.permissions.includes(perm.key) ? (
                        <span className="text-green-400 text-base">✓</span>
                      ) : (
                        <span className="text-neutral-700">–</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Seed users */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <div>
            <h2 className="font-semibold text-white">مستخدمو النظام الأساسيون</h2>
            <p className="text-xs text-neutral-500 mt-1">بيانات تجريبية — يجب تغيير كلمات المرور في الإنتاج</p>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">المستخدم</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden sm:table-cell">الدور</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium hidden md:table-cell">الحالة</th>
              <th className="text-right px-5 py-3 text-neutral-400 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {seedUsers.map((user, i) => (
              <tr key={i} className={`border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors`}>
                <td className="px-5 py-3">
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
                <td className="px-5 py-3 hidden sm:table-cell">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                    {user.roleAr}
                  </span>
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-900/50 text-green-400">
                    نشط
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="text-xs text-brand-gold hover:underline ml-3">تعديل</button>
                  <button className="text-xs text-neutral-500 hover:text-white hover:underline">صلاحيات</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
