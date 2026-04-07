import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Supported Devices' };

const devices = [
  { icon: '🖥️', name: 'Web Browser', desc: 'Chrome, Firefox, Safari, Edge', note: 'No download required' },
  { icon: '📱', name: 'Mobile', desc: 'iOS & Android', note: 'App Store / Google Play' },
  { icon: '📺', name: 'Smart TV', desc: 'Samsung, LG, Sony', note: 'Pre-installed app' },
  { icon: '🎮', name: 'Game Console', desc: 'PlayStation, Xbox', note: 'Download from store' },
  { icon: '🔥', name: 'Fire Stick', desc: 'Amazon Fire TV & Stick', note: 'Fire TV app' },
  { icon: '🍎', name: 'Apple TV', desc: 'tvOS 14+', note: 'App Store' },
  { icon: '💻', name: 'Laptop / Desktop', desc: 'Windows & macOS', note: 'Browser or desktop app' },
  { icon: '📡', name: 'Chromecast', desc: 'Cast from any device', note: 'Via browser' },
];

export default function DevicesPage() {
  return (
    <div className="container-ns py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Watch on{' '}
          <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
            Any Device
          </span>
        </h1>
        <p className="text-neutral-400 text-lg">
          NovaStream is available on all your screens — wherever you are.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {devices.map((d) => (
          <div key={d.name} className="glass-card p-6 text-center hover:border-brand-blue/50 transition-all">
            <div className="text-5xl mb-4">{d.icon}</div>
            <h3 className="font-semibold text-white mb-1">{d.name}</h3>
            <p className="text-sm text-neutral-400 mb-2">{d.desc}</p>
            <span className="text-xs bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
              {d.note}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-card p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Stream on up to 10 devices</h2>
        <p className="text-neutral-400 text-sm max-w-lg mx-auto">
          Premium plan subscribers can stream simultaneously on up to 4 screens,
          and have access to offline downloads on mobile devices.
        </p>
      </div>
    </div>
  );
}
