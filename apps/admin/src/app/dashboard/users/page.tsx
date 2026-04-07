import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Users' };

const users = [
  { id: 'u1', name: 'John Doe', email: 'john@example.com', plan: 'Standard', status: 'active', joined: '2024-06-01' },
  { id: 'u2', name: 'Sarah Miller', email: 'sarah@example.com', plan: 'Premium', status: 'active', joined: '2024-05-15' },
  { id: 'u3', name: 'Alex Wang', email: 'alex@example.com', plan: 'Basic', status: 'active', joined: '2024-08-20' },
  { id: 'u4', name: 'Emma Brown', email: 'emma@example.com', plan: 'Free', status: 'inactive', joined: '2024-09-01' },
  { id: 'u5', name: 'Carlos Rivera', email: 'carlos@example.com', plan: 'Standard', status: 'active', joined: '2024-10-05' },
  { id: 'u6', name: 'Priya Patel', email: 'priya@example.com', plan: 'Premium', status: 'trial', joined: '2024-12-01' },
];

const planColors: Record<string, string> = {
  Free: 'bg-neutral-700 text-neutral-300',
  Basic: 'bg-blue-900/50 text-blue-300',
  Standard: 'bg-violet-900/50 text-violet-300',
  Premium: 'bg-yellow-900/50 text-yellow-300',
};

const statusColors: Record<string, string> = {
  active: 'bg-green-900/50 text-green-400',
  inactive: 'bg-neutral-700 text-neutral-400',
  trial: 'bg-orange-900/50 text-orange-400',
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage platform subscribers and accounts.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
          + Add User
        </button>
      </div>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search users..."
          className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue"
        />
        <select className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-brand-blue">
          <option value="">All Plans</option>
          <option>Free</option>
          <option>Basic</option>
          <option>Standard</option>
          <option>Premium</option>
        </select>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-left px-4 py-3 text-neutral-400 font-medium">User</th>
              <th className="text-left px-4 py-3 text-neutral-400 font-medium hidden md:table-cell">Plan</th>
              <th className="text-left px-4 py-3 text-neutral-400 font-medium hidden sm:table-cell">Status</th>
              <th className="text-left px-4 py-3 text-neutral-400 font-medium hidden lg:table-cell">Joined</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id} className={`border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors ${i === users.length - 1 ? 'border-0' : ''}`}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-neutral-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${planColors[user.plan]}`}>
                    {user.plan}
                  </span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${statusColors[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-500 text-xs hidden lg:table-cell">{user.joined}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-brand-blue hover:underline mr-3">Edit</button>
                  <button className="text-xs text-red-400 hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
