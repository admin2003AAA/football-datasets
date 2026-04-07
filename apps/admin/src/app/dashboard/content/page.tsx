import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Content Management' };

const content = [
  { id: 'ch-001', title: 'Nova Sports 1', type: 'Live Channel', status: 'live', viewers: 14500 },
  { id: 'ch-002', title: 'Nova Sports 2', type: 'Live Channel', status: 'live', viewers: 8200 },
  { id: 'ch-003', title: 'Nova Cinema', type: 'Live Channel', status: 'live', viewers: 6100 },
  { id: 'cnt-001', title: 'Champions League Highlights', type: 'VOD', status: 'published', viewers: 120000 },
  { id: 'cnt-002', title: 'The Grand Race', type: 'Documentary', status: 'published', viewers: 45000 },
  { id: 'ch-005', title: 'Nova Docs', type: 'Live Channel', status: 'offline', viewers: 0 },
];

const statusColors: Record<string, string> = {
  live: 'bg-red-900/50 text-red-400',
  published: 'bg-green-900/50 text-green-400',
  offline: 'bg-neutral-700 text-neutral-400',
  draft: 'bg-yellow-900/50 text-yellow-400',
};

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Content</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage licensed channels and VOD catalog.</p>
        </div>
        <button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
          + Add Content
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-left px-4 py-3 text-neutral-400 font-medium">Title</th>
              <th className="text-left px-4 py-3 text-neutral-400 font-medium hidden md:table-cell">Type</th>
              <th className="text-left px-4 py-3 text-neutral-400 font-medium">Status</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium hidden sm:table-cell">Views</th>
              <th className="text-right px-4 py-3 text-neutral-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, i) => (
              <tr key={item.id} className={`border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors ${i === content.length - 1 ? 'border-0' : ''}`}>
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-xs text-neutral-500">{item.id}</p>
                </td>
                <td className="px-4 py-3 text-neutral-400 hidden md:table-cell">{item.type}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-400 text-right hidden sm:table-cell">
                  {item.viewers.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-brand-blue hover:underline mr-3">Edit</button>
                  <button className="text-xs text-red-400 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
