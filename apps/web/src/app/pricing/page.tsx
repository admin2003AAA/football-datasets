import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'الأسعار — IRAQ TV' };

const plans = [
  {
    id: 'free',
    nameAr: 'مجاناً',
    nameEn: 'Free',
    price: 0,
    priceIqd: 0,
    periodAr: 'شهر',
    description: 'ابدأ بوصول محدود.',
    features: ['2 قناة', 'جودة SD', 'جهاز واحد', 'بدون إعلانات (محدود)'],
    notIncluded: ['جودة HD', 'بدون إعلانات', 'تحميل للمشاهدة دون إنترنت'],
    ctaAr: 'ابدأ الآن',
    href: '/register',
    popular: false,
    accent: false,
  },
  {
    id: 'basic',
    nameAr: 'الأساسية',
    nameEn: 'Basic',
    price: 9.99,
    priceIqd: 13000,
    periodAr: 'شهر',
    description: 'مثالية للأفراد.',
    features: ['50 قناة', 'جودة HD', 'جهازان', 'بدون إعلانات'],
    notIncluded: ['جودة 4K', 'تحميل للمشاهدة دون إنترنت'],
    ctaAr: 'ابدأ التجربة المجانية',
    href: '/register?plan=basic',
    popular: false,
    accent: false,
  },
  {
    id: 'standard',
    nameAr: 'العائلية',
    nameEn: 'Standard',
    price: 19.99,
    priceIqd: 26000,
    periodAr: 'شهر',
    description: 'رائعة للعائلات.',
    features: ['150 قناة', 'جودة Full HD', '4 أجهزة', 'بدون إعلانات', 'مكتبة VOD كاملة'],
    notIncluded: ['جودة 4K'],
    ctaAr: 'ابدأ التجربة المجانية',
    href: '/register?plan=standard',
    popular: true,
    accent: true,
  },
  {
    id: 'premium',
    nameAr: 'المميزة',
    nameEn: 'Premium',
    price: 34.99,
    priceIqd: 46000,
    periodAr: 'شهر',
    description: 'تجربة البث الكاملة.',
    features: ['جميع القنوات', 'جودة 4K Ultra HD', 'أجهزة غير محدودة', 'بدون إعلانات', 'مكتبة VOD كاملة', 'تحميل للمشاهدة دون إنترنت'],
    notIncluded: [],
    ctaAr: 'اشترك في المميزة',
    href: '/register?plan=premium',
    popular: false,
    accent: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container-ns py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-neutral-800/80 border border-neutral-700 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm text-brand-gold font-medium">IRAQ TV</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          أسعار{' '}
          <span className="gradient-text">بسيطة وشفافة</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          اختر الباقة التي تناسب أسلوب حياتك. يمكنك الإلغاء في أي وقت.
        </p>
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative glass-card p-6 flex flex-col transition-all ${
              plan.accent
                ? 'border-brand-red shadow-glow'
                : 'hover:border-neutral-600'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-red to-brand-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                  الأكثر شعبية
                </span>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">{plan.nameAr}</h3>
              <p className="text-xs text-neutral-500 mt-0.5">{plan.nameEn}</p>
              <p className="text-sm text-neutral-400 mt-1">{plan.description}</p>
            </div>

            {/* Price in USD */}
            <div className="mb-1">
              <span className="text-3xl font-bold text-white">
                {plan.price === 0 ? 'مجاناً' : `$${plan.price}`}
              </span>
              {plan.price > 0 && <span className="text-neutral-400 text-sm"> /{plan.periodAr}</span>}
            </div>

            {/* Price in IQD */}
            {plan.priceIqd > 0 && (
              <div className="mb-4">
                <span className="text-sm text-brand-gold font-semibold">
                  {plan.priceIqd.toLocaleString('ar-IQ')} د.ع.
                </span>
                <span className="text-neutral-500 text-xs"> /{plan.periodAr}</span>
              </div>
            )}

            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                  <span className="text-green-400 flex-shrink-0">✓</span> {f}
                </li>
              ))}
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-600 line-through">
                  <span className="flex-shrink-0">✗</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`block text-center py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${
                plan.accent
                  ? 'bg-gradient-to-r from-brand-red to-brand-gold text-white hover:opacity-90 shadow-glow'
                  : 'bg-neutral-700 text-white hover:bg-neutral-600'
              }`}
            >
              {plan.ctaAr}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-neutral-500 text-sm mt-8">
        جميع الباقات تشمل تجربة مجانية 14 يوماً. لا حاجة لبطاقة ائتمان.
      </p>

      {/* Feature comparison note */}
      <div className="mt-12 glass-card p-6 text-center">
        <h2 className="text-lg font-semibold text-white mb-2">هل أنت مؤسسة أو شريك تجاري؟</h2>
        <p className="text-neutral-400 text-sm mb-4">
          نقدم باقات مؤسسية خاصة للفنادق، المطاعم، والشركات.
        </p>
        <a
          href="/support"
          className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldLight text-sm font-semibold transition-colors"
        >
          تواصل مع فريق المبيعات
          <svg className="w-4 h-4 icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
