import Link from 'next/link';

export function PricingTeaser() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="brand-line w-8" />
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-wide">الأسعار</span>
          <div className="brand-line w-8" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">ابدأ البث اليوم</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          باقات تبدأ من المجاني. لا حاجة لبطاقة ائتمان للتجربة.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {[
            { nameAr: 'مجاناً', nameEn: 'Free', price: '$0', priceIqd: '0', ctaAr: 'ابدأ الآن', href: '/register', accent: false },
            { nameAr: 'العائلية', nameEn: 'Standard', price: '$19.99', priceIqd: '26,000', ctaAr: 'الأكثر شعبية', href: '/register?plan=standard', accent: true },
            { nameAr: 'المميزة', nameEn: 'Premium', price: '$34.99', priceIqd: '46,000', ctaAr: 'اشترك المميزة', href: '/register?plan=premium', accent: false },
          ].map((p) => (
            <Link
              key={p.nameAr}
              href={p.href}
              className={`glass-card px-8 py-5 flex flex-col items-center gap-1 hover:border-brand-red/40 transition-all ${
                p.accent ? 'border-brand-red shadow-glow' : ''
              }`}
            >
              <span className="text-sm text-neutral-400">{p.nameAr}</span>
              <span className="text-xs text-neutral-600 mb-1">{p.nameEn}</span>
              <span className="text-xl font-bold text-white">{p.price}<span className="text-neutral-500 text-sm">/شهر</span></span>
              {p.priceIqd !== '0' && (
                <span className="text-xs text-brand-gold">{p.priceIqd} د.ع.</span>
              )}
              <span className={`text-xs font-semibold mt-1 ${p.accent ? 'text-brand-gold' : 'text-neutral-500'}`}>
                {p.ctaAr}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/pricing" className="text-sm text-brand-red hover:text-brand-gold transition-colors">
          مقارنة جميع الباقات ←
        </Link>
      </div>
    </section>
  );
}
