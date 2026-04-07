import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Channel Catalog' };

const categories = ['All', 'Sports', 'Entertainment', 'News', 'Movies', 'Documentary', 'Kids', 'Music'];

const channels = [
  { id: 'ch-001', name: 'Nova Sports 1', category: 'Sports', logo: '⚽', live: true },
  { id: 'ch-002', name: 'Nova Sports 2', category: 'Sports', logo: '🏀', live: true },
  { id: 'ch-003', name: 'Nova Cinema', category: 'Entertainment', logo: '🎬', live: true },
  { id: 'ch-004', name: 'Nova News', category: 'News', logo: '📰', live: true },
  { id: 'ch-005', name: 'Nova Docs', category: 'Documentary', logo: '🎞️', live: false },
  { id: 'ch-006', name: 'Nova Kids', category: 'Kids', logo: '🧸', live: true },
  { id: 'ch-007', name: 'Nova Music', category: 'Music', logo: '🎵', live: false },
  { id: 'ch-008', name: 'Nova Movies HD', category: 'Movies', logo: '🎥', live: true },
  { id: 'ch-009', name: 'Nova Sports Extra', category: 'Sports', logo: '🏆', live: false },
  { id: 'ch-010', name: 'Nova Comedy', category: 'Entertainment', logo: '😄', live: true },
  { id: 'ch-011', name: 'Nova Tech', category: 'Entertainment', logo: '💻', live: false },
  { id: 'ch-012', name: 'Nova World News', category: 'News', logo: '🌍', live: true },
];

export default function ChannelsPage() {
  return (
    <div className="container-ns py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Channel Catalog</h1>
      <p className="text-neutral-400 mb-8">Browse our full lineup of licensed channels.</p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
              ${cat === 'All'
                ? 'bg-brand-blue text-white'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white border border-neutral-700'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Channels grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {channels.map((ch) => (
          <div
            key={ch.id}
            className="glass-card p-4 flex flex-col items-center gap-2 hover:border-brand-blue/50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-2xl">
              {ch.logo}
            </div>
            <p className="text-sm font-medium text-neutral-200 text-center group-hover:text-brand-blue transition-colors">
              {ch.name}
            </p>
            <p className="text-xs text-neutral-500">{ch.category}</p>
            {ch.live && (
              <span className="text-xs bg-red-600/20 text-red-400 px-2 py-0.5 rounded-full font-semibold">
                LIVE
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
