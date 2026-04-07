import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'My Account' };

export default function ProfilePage() {
  // In production: fetch user data server-side with session/auth
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Standard',
    planExpiry: '2025-06-01',
    devices: ['MacBook Pro', 'iPhone 15', 'Samsung TV'],
    watchHistory: [
      { id: 'ch-001', title: 'Nova Sports 1', time: '2h 15m', date: '2024-12-10' },
      { id: 'cnt-001', title: 'Champions League Highlights', time: '45m', date: '2024-12-09' },
      { id: 'ch-003', title: 'Nova Cinema', time: '1h 30m', date: '2024-12-08' },
    ],
  };

  return (
    <div className="container-ns py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-violet rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
              {mockUser.name.charAt(0)}
            </div>
            <h2 className="font-bold text-white text-lg">{mockUser.name}</h2>
            <p className="text-neutral-400 text-sm">{mockUser.email}</p>
            <div className="mt-3">
              <span className="bg-brand-blue/20 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                {mockUser.plan} Plan
              </span>
            </div>
            <p className="text-neutral-500 text-xs mt-2">Renews {mockUser.planExpiry}</p>
            <div className="mt-4 space-y-2">
              <Link
                href="/pricing"
                className="block w-full text-center bg-gradient-to-r from-brand-blue to-brand-violet text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Upgrade Plan
              </Link>
              <button className="block w-full text-center bg-neutral-800 text-neutral-300 text-sm py-2 rounded-lg hover:bg-neutral-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Devices */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Registered Devices</h3>
            <div className="space-y-2">
              {mockUser.devices.map((device) => (
                <div key={device} className="flex items-center justify-between py-2 border-b border-neutral-800 last:border-0">
                  <span className="text-sm text-neutral-300">{device}</span>
                  <button className="text-xs text-red-400 hover:text-red-300">Remove</button>
                </div>
              ))}
            </div>
          </div>

          {/* Watch history */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Recent Watch History</h3>
            <div className="space-y-3">
              {mockUser.watchHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-200">{item.title}</p>
                    <p className="text-xs text-neutral-500">{item.date} · {item.time}</p>
                  </div>
                  <button className="text-xs text-brand-blue hover:underline">Resume</button>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Billing & Subscription</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-400">Current plan</span>
                <span className="text-white font-medium">{mockUser.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Next billing date</span>
                <span className="text-white font-medium">{mockUser.planExpiry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Payment method</span>
                <span className="text-white font-medium">•••• •••• •••• 4242</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg hover:bg-neutral-700 transition-colors">
                Update payment
              </button>
              <button className="text-xs bg-red-900/30 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-900/50 transition-colors">
                Cancel subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
