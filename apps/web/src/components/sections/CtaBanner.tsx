import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red/15 to-brand-gold/10 border border-brand-red/20 p-10 md:p-16 text-center">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          {/* Iraqi flag color strip */}
          <div className="absolute top-0 left-0 right-0 brand-line" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-brand-gold text-xs font-semibold">IRAQ TV</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-md mx-auto">
              انضم لآلاف المشاهدين على إيراق تيفي. تجربة مجانية 14 يوماً، لا حاجة لبطاقة ائتمان.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-gold text-white font-bold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                ابدأ التجربة المجانية
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                عرض الباقات
              </Link>
            </div>
            <p className="text-neutral-500 text-xs mt-4">محتوى مرخص · بث قانوني · جودة 4K</p>
          </div>
        </div>
      </div>
    </section>
  );
}
