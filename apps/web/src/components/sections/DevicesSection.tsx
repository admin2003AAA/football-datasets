import Link from 'next/link';

const devices = [
  { icon: '🖥️', name: 'Web Browser' },
  { icon: '📱', name: 'Mobile' },
  { icon: '📺', name: 'Smart TV' },
  { icon: '🔥', name: 'Fire Stick' },
  { icon: '🍎', name: 'Apple TV' },
  { icon: '🎮', name: 'Console' },
];

export function DevicesSection() {
  return (
    <section className="py-20">
      <div className="container-ns">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Your content, your device
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            NovaStream works seamlessly across all your screens.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {devices.map((d) => (
              <div key={d.name} className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center text-2xl">
                  {d.icon}
                </div>
                <span className="text-xs text-neutral-400">{d.name}</span>
              </div>
            ))}
          </div>
          <Link href="/devices" className="text-sm text-brand-blue hover:underline">
            See all compatible devices →
          </Link>
        </div>
      </div>
    </section>
  );
}
