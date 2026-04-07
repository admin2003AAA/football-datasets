const features = [
  {
    icon: '🔒',
    title: '100% Licensed Content',
    desc: 'Every channel and title is fully licensed. Stream with confidence.',
  },
  {
    icon: '⚡',
    title: 'Ultra-Low Latency',
    desc: 'HLS delivery optimized for minimal buffering and blazing-fast start times.',
  },
  {
    icon: '📺',
    title: '4K Ultra HD',
    desc: 'Crisp 4K quality on Premium plan — on every compatible device.',
  },
  {
    icon: '📱',
    title: 'All Devices',
    desc: 'Web, mobile, Smart TV, Fire Stick, Apple TV, and more.',
  },
  {
    icon: '🔔',
    title: 'Event Reminders',
    desc: 'Never miss a match or premiere — set reminders for scheduled streams.',
  },
  {
    icon: '🌍',
    title: 'Global Coverage',
    desc: 'Access content from anywhere with our geo-distributed CDN infrastructure.',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container-ns">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Built for the{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              modern viewer
            </span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Premium technology meets premium content — for the best legal streaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-6 hover:border-brand-blue/40 transition-all">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
