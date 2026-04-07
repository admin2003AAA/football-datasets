import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Subscriptions' };

const plans = [
  { id: 'free', name: 'Free', price: '$0', subscribers: 1240, revenue: '$0', growth: 12 },
  { id: 'basic', name: 'Basic', price: '$9.99/mo', subscribers: 2480, revenue: '$24,775', growth: 8 },
  { id: 'standard', name: 'Standard', price: '$19.99/mo', subscribers: 3860, revenue: '$77,161', growth: 15 },
  { id: 'premium', name: 'Premium', price: '$34.99/mo', subscribers: 2340, revenue: '$81,877', growth: 22 },
];

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Subscriptions</h1>
        <p className="text-neutral-400 text-sm mt-1">Manage plans and subscriber metrics.</p>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="glass-card p-5 hover:border-brand-blue/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white">{plan.name}</h3>
              <span className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded-full font-medium">
                {plan.price}
              </span>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{plan.subscribers.toLocaleString()}</p>
            <p className="text-xs text-neutral-500 mb-3">active subscribers</p>
            <p className="text-sm font-semibold text-neutral-200">{plan.revenue}</p>
            <p className="text-xs text-neutral-500">monthly revenue</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
              <span>▲</span> {plan.growth}% this month
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="glass-card p-6">
        <h2 className="font-semibold text-white mb-4">Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-neutral-400 text-sm">Total Subscribers</p>
            <p className="text-2xl font-bold text-white mt-1">9,920</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">Monthly Revenue</p>
            <p className="text-2xl font-bold text-white mt-1">$183,813</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">Churn Rate</p>
            <p className="text-2xl font-bold text-white mt-1">2.1%</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">Avg. Plan Value</p>
            <p className="text-2xl font-bold text-white mt-1">$18.53</p>
          </div>
        </div>
      </div>
    </div>
  );
}
