import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Pricing Plans' };

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Get started with limited access.',
    features: ['2 channels', 'SD quality', '1 device', 'No ads (limited)'],
    notIncluded: ['HD quality', 'Ad-free', 'Offline download'],
    cta: 'Get Started',
    href: '/register',
    popular: false,
    accent: false,
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    period: 'month',
    description: 'Perfect for individuals.',
    features: ['50 channels', 'HD quality', '2 devices', 'Ad-free'],
    notIncluded: ['4K quality', 'Offline download'],
    cta: 'Start Free Trial',
    href: '/register?plan=basic',
    popular: false,
    accent: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 19.99,
    period: 'month',
    description: 'Great for families.',
    features: ['150 channels', 'Full HD quality', '4 devices', 'Ad-free', 'Full VOD library'],
    notIncluded: ['4K quality'],
    cta: 'Start Free Trial',
    href: '/register?plan=standard',
    popular: true,
    accent: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 34.99,
    period: 'month',
    description: 'The ultimate streaming experience.',
    features: ['All channels', '4K Ultra HD', 'Unlimited devices', 'Ad-free', 'Full VOD library', 'Offline download'],
    notIncluded: [],
    cta: 'Go Premium',
    href: '/register?plan=premium',
    popular: false,
    accent: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container-ns py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Simple,{' '}
          <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
            Transparent
          </span>{' '}
          Pricing
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Choose the plan that fits your lifestyle. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative glass-card p-6 flex flex-col transition-all ${
              plan.accent
                ? 'border-brand-blue shadow-glow'
                : 'hover:border-neutral-600'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-blue to-brand-violet text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-sm text-neutral-400 mt-1">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
              </span>
              {plan.price > 0 && <span className="text-neutral-400 text-sm"> /{plan.period}</span>}
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                  <span className="text-green-400">✓</span> {f}
                </li>
              ))}
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-600 line-through">
                  <span>✗</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`block text-center py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${
                plan.accent
                  ? 'bg-gradient-to-r from-brand-blue to-brand-violet text-white hover:opacity-90 shadow-glow'
                  : 'bg-neutral-700 text-white hover:bg-neutral-600'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-neutral-500 text-sm mt-8">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
}
