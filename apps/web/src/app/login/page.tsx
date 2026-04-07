import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Sign In' };

export default function LoginPage() {
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
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-neutral-400 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="glass-card p-8">
          <form className="space-y-4">
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm text-neutral-300" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs text-brand-blue hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity mt-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-400">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-brand-blue hover:underline font-medium">
              Create account
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-600 mt-4">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
