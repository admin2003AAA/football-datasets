import Link from 'next/link';

const channels = [
  { name: 'Nova Sports 1', category: 'Sports', emoji: '⚽', viewers: 14500, live: true },
  { name: 'Nova Sports 2', category: 'Sports', emoji: '🏀', viewers: 8200, live: true },
  { name: 'Nova Cinema', category: 'Entertainment', emoji: '🎬', viewers: 6100, live: true },
  { name: 'Nova News', category: 'News', emoji: '📰', viewers: 3200, live: true },
  { name: 'Nova Kids', category: 'Kids', emoji: '🧸', viewers: 4800, live: true },
  { name: 'Nova Docs', category: 'Documentary', emoji: '🎞️', viewers: 0, live: false },
];

export function FeaturedChannels() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Channels</h2>
            <p className="text-neutral-400">Licensed live channels streaming right now.</p>
          </div>
          <Link href="/channels" className="text-sm text-brand-blue hover:underline hidden sm:block">
            View all channels →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((ch) => (
            <Link href="/live" key={ch.name}>
              <div className="glass-card p-4 flex items-center gap-4 hover:border-brand-blue/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center text-3xl flex-shrink-0">
                  {ch.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white truncate group-hover:text-brand-blue transition-colors">
                      {ch.name}
                    </p>
                    {ch.live && (
                      <span className="flex-shrink-0 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1 h-1 bg-white rounded-full animate-pulse" /> LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400">{ch.category}</p>
                  {ch.viewers > 0 && (
                    <p className="text-xs text-neutral-500 mt-0.5">{ch.viewers.toLocaleString()} watching</p>
                  )}
                </div>
                <svg className="w-4 h-4 text-neutral-600 group-hover:text-brand-blue transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
