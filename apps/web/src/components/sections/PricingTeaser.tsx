import Link from 'next/link';

export function PricingTeaser() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Start streaming today</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          Plans starting from free. No credit card required for trial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {[
            { name: 'Free', price: '$0', cta: 'Get started', href: '/register', accent: false },
            { name: 'Standard', price: '$19.99/mo', cta: 'Most popular', href: '/register?plan=standard', accent: true },
            { name: 'Premium', price: '$34.99/mo', cta: 'Go premium', href: '/register?plan=premium', accent: false },
          ].map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`glass-card px-8 py-5 flex flex-col items-center gap-1 hover:border-brand-blue/50 transition-all ${
                p.accent ? 'border-brand-blue shadow-glow' : ''
              }`}
            >
              <span className="text-sm text-neutral-400">{p.name}</span>
              <span className="text-xl font-bold text-white">{p.price}</span>
              <span className={`text-xs font-semibold mt-1 ${p.accent ? 'text-brand-blue' : 'text-neutral-500'}`}>
                {p.cta}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/pricing" className="text-sm text-brand-blue hover:underline">
          Compare all plans →
        </Link>
      </div>
    </section>
  );
}
