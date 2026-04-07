const channels = [
  { name: 'Nova Sports 1', viewers: 14500, emoji: '⚽', live: true },
  { name: 'Champions League', viewers: 120000, emoji: '🏆', live: false },
  { name: 'Nova Sports 2', viewers: 8200, emoji: '🏀', live: true },
  { name: 'Nova Cinema', viewers: 6100, emoji: '🎬', live: true },
  { name: 'Nova Kids', viewers: 4800, emoji: '🧸', live: true },
];

export function TopChannels() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-white">Top Channels</h2>
        <span className="text-xs text-neutral-500">Live data</span>
      </div>
      <div className="space-y-3">
        {channels.map((ch, i) => (
          <div key={ch.name} className="flex items-center gap-3">
            <span className="text-neutral-600 text-sm w-4">{i + 1}</span>
            <span className="text-lg">{ch.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{ch.name}</p>
              <p className="text-xs text-neutral-500">{ch.viewers.toLocaleString()} viewers</p>
            </div>
            {ch.live && (
              <span className="text-xs bg-red-600/20 text-red-400 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">
                LIVE
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
