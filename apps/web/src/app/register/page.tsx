import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Create Account' };

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-violet rounded-xl flex items-center justify-center text-white font-black text-lg">
              N
            </div>
            <span className="text-xl font-black text-white tracking-tight">NovaStream</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="text-neutral-400 text-sm mt-1">Start your 14-day free trial — no card required</p>
        </div>

        {/* Card */}
        <div className="glass-card p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-300 mb-1.5" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1.5" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1.5" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Min. 8 characters"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
            <div className="flex items-start gap-2 pt-1">
              <input type="checkbox" id="terms" className="mt-0.5 accent-brand-blue" required />
              <label htmlFor="terms" className="text-xs text-neutral-400">
                I agree to the{' '}
                <a href="#" className="text-brand-blue hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-brand-blue hover:underline">Privacy Policy</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity mt-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-400">
            Already have an account?{' '}
            <Link href="/login" className="text-brand-blue hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
