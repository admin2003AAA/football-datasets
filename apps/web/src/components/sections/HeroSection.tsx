import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient — IRAQ TV brand */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-gold/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-green/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-ns relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-800/80 border border-neutral-700 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-sm text-neutral-300 font-medium">+10,000 مشاهد مباشر الآن</span>
          </div>

          {/* Headline — Arabic */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
            شاهد ما يهمك
          </h1>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">
              بشكل قانوني
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-8 leading-relaxed">
            IRAQ TV يقدم البث المباشر المرخص للرياضة والأفلام والأخبار والترفيه على جميع أجهزتك بجودة 4K مذهلة.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-gold text-white font-bold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity shadow-glow"
            >
              ابدأ التجربة المجانية
              <svg className="w-4 h-4 icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/live"
              className="inline-flex items-center justify-center gap-2 bg-neutral-800 border border-neutral-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-neutral-700 transition-colors"
            >
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              شاهد البث المباشر
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-neutral-500">
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> تجربة مجانية 14 يوماً
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> لا حاجة لبطاقة ائتمان
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> إلغاء في أي وقت
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> محتوى مرخص 100٪
            </div>
          </div>
        </div>
      </div>

      {/* Decorative player mockup */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%]">
        <div className="relative h-full glass-card overflow-hidden border-neutral-700">
          {/* Iraqi flag colors strip at top */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <div className="flex-1 bg-brand-red" />
            <div className="flex-1 bg-white/20" />
            <div className="flex-1 bg-brand-green" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80 flex items-center justify-center">
            <div className="text-center">
              {/* IRAQ TV Logo placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-lg">IQ</span>
              </div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/20 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold">IRAQ TV Sport 1</p>
              <p className="text-neutral-400 text-xs mt-0.5">إيراق تيفي رياضة 1</p>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                <span className="text-brand-red text-xs font-semibold">LIVE · مباشر</span>
                <span className="text-neutral-400 text-xs">· 14,500 مشاهد</span>
              </div>
            </div>
          </div>
          {/* Control bar mockup */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3">
            <div className="h-1 bg-neutral-700 rounded-full mb-3">
              <div className="h-full w-1/3 bg-gradient-to-r from-brand-red to-brand-gold rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-neutral-600 rounded" />
                <div className="w-6 h-6 bg-neutral-600 rounded" />
              </div>
              <span className="text-xs text-neutral-400">HD · مباشر</span>
              <div className="w-6 h-6 bg-neutral-600 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
