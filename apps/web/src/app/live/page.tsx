import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Live Channels' };

const liveChannels = [
  { id: 'ch-001', name: 'Nova Sports 1', category: 'Sports', viewers: 14500, status: 'LIVE' },
  { id: 'ch-002', name: 'Nova Sports 2', category: 'Sports', viewers: 8200, status: 'LIVE' },
  { id: 'ch-003', name: 'Nova Cinema', category: 'Entertainment', viewers: 6100, status: 'LIVE' },
  { id: 'ch-004', name: 'Nova News', category: 'News', viewers: 3200, status: 'LIVE' },
  { id: 'ch-006', name: 'Nova Kids', category: 'Kids', viewers: 4800, status: 'LIVE' },
  { id: 'ch-005', name: 'Nova Docs', category: 'Documentary', viewers: 0, status: 'SOON' },
];

export default function LivePage() {
  return (
    <div className="container-ns py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <h1 className="text-3xl font-bold text-white">Live Now</h1>
        </div>
        <p className="text-neutral-400">Watch licensed live channels in real time.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveChannels.map((ch) => (
          <div
            key={ch.id}
            className="glass-card overflow-hidden group cursor-pointer transition-all hover:border-brand-blue/50 hover:shadow-card-hover"
          >
            {/* Thumbnail placeholder */}
            <div className="relative aspect-video bg-neutral-800 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center text-2xl font-bold text-neutral-400">
                {ch.name.charAt(0)}
              </div>
              <div className="absolute top-3 left-3">
                {ch.status === 'LIVE' ? (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                  </span>
                ) : (
                  <span className="bg-neutral-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    SOON
                  </span>
                )}
              </div>
              {ch.viewers > 0 && (
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                  {ch.viewers.toLocaleString()} watching
                </div>
              )}
            </div>
            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-white group-hover:text-brand-blue transition-colors">
                {ch.name}
              </h3>
              <p className="text-sm text-neutral-400 mt-0.5">{ch.category}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        All channels are licensed. Streams require an active subscription.
      </p>
    </div>
  );
}
