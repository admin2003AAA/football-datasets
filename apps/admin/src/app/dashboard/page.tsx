import type { Metadata } from 'next';
import { StatsRow } from '@/components/widgets/StatsRow';
import { RecentUsers } from '@/components/widgets/RecentUsers';
import { TopChannels } from '@/components/widgets/TopChannels';
import { RevenueChart } from '@/components/widgets/RevenueChart';

export const metadata: Metadata = { title: 'Dashboard' };

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-neutral-400 text-sm mt-1">
          Platform overview — {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
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
    </div>
  );
}
