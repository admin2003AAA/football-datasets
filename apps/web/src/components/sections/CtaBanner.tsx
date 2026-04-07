import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container-ns">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 border border-brand-blue/20 p-10 md:p-16 text-center">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-violet/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to stream?
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-md mx-auto">
              Join thousands of viewers. 14-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-violet text-white font-bold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
