import type { Metadata } from 'next';
import { StatsRow } from '@/components/widgets/StatsRow';
import { RecentUsers } from '@/components/widgets/RecentUsers';
import { TopChannels } from '@/components/widgets/TopChannels';
import { RevenueChart } from '@/components/widgets/RevenueChart';

export const metadata: Metadata = { title: 'لوحة التحكم — IRAQ TV Admin' };

export default function DashboardPage() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Page header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">لوحة التحكم</h1>
          <p className="text-neutral-400 text-sm mt-1">
            نظرة عامة على منصة IRAQ TV —{' '}
            {new Date().toLocaleDateString('ar-IQ', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            المنصة تعمل بكفاءة
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsRow />

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart />
        <TopChannels />
      </div>

      {/* Recent users */}
      <RecentUsers />

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'إضافة قناة', href: '/dashboard/content', icon: '📺', color: 'from-brand-red to-brand-red' },
          { label: 'جدول برامج', href: '/dashboard/epg', icon: '📅', color: 'from-brand-gold to-brand-goldLight' },
          { label: 'إدارة المستخدمين', href: '/dashboard/users', icon: '👥', color: 'from-brand-green to-green-400' },
          { label: 'تقارير الأداء', href: '/dashboard/analytics', icon: '📊', color: 'from-blue-600 to-blue-400' },
        ].map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="glass-card p-4 flex flex-col items-center gap-2 text-center hover:border-neutral-600 transition-all group"
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">
              {action.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
