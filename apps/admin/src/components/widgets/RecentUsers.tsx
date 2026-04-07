const users = [
  { name: 'Priya Patel', email: 'priya@example.com', plan: 'Premium', avatar: 'P', joined: '2 hours ago' },
  { name: 'Marcus Johnson', email: 'marcus@example.com', plan: 'Standard', avatar: 'M', joined: '5 hours ago' },
  { name: 'Yuki Tanaka', email: 'yuki@example.com', plan: 'Basic', avatar: 'Y', joined: '1 day ago' },
  { name: 'Fatima Al-Rashid', email: 'fatima@example.com', plan: 'Standard', avatar: 'F', joined: '2 days ago' },
];

const planColors: Record<string, string> = {
  Premium: 'bg-yellow-900/50 text-yellow-400',
  Standard: 'bg-violet-900/50 text-violet-300',
  Basic: 'bg-blue-900/50 text-blue-300',
};

export function RecentUsers() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-white">Recent Signups</h2>
        <a href="/dashboard/users" className="text-xs text-brand-blue hover:underline">View all →</a>
      </div>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.email} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-neutral-500 truncate">{user.email}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:block ${planColors[user.plan] ?? 'bg-neutral-700 text-neutral-300'}`}>
                {user.plan}
              </span>
              <span className="text-xs text-neutral-600">{user.joined}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
