import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Support' };

const faqs = [
  { q: 'How do I cancel my subscription?', a: 'You can cancel anytime from your account settings. Access continues until the end of the billing period.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, PayPal, and Apple Pay / Google Pay.' },
  { q: 'Can I watch on multiple devices simultaneously?', a: 'Yes. Basic: 1 stream, Standard: 2 streams, Premium: 4 streams at once.' },
  { q: 'Is all content licensed and legal?', a: 'Absolutely. NovaStream only streams content it has licensed rights to. All channels and VOD are fully authorized.' },
  { q: 'How do I get a refund?', a: 'Contact our support team within 7 days of a charge for review. Refunds are assessed on a case-by-case basis.' },
  { q: 'What internet speed do I need?', a: 'HD streaming: 5 Mbps. Full HD: 10 Mbps. 4K: 25 Mbps recommended.' },
];

export default function SupportPage() {
  return (
    <div className="container-ns py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
      <p className="text-neutral-400 mb-12">We&apos;re here to help. Find answers or contact our team below.</p>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="glass-card p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-neutral-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form */}
      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
        <p className="text-neutral-400 text-sm mb-6">
          Can&apos;t find your answer? Send us a message and we&apos;ll get back to you within 24 hours.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1.5">Subject</label>
            <input
              type="text"
              placeholder="Brief description of your issue"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1.5">Message</label>
            <textarea
              rows={5}
              placeholder="Describe your issue in detail..."
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
