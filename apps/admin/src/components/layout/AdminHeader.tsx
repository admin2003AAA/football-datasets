export function AdminHeader() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm flex-shrink-0" dir="rtl">
      <div className="flex items-center gap-3">
        {/* Mobile: show logo */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-brand-red to-brand-gold rounded-lg flex items-center justify-center text-white font-black text-xs shadow-glow">
            IQ
          </div>
          <span className="font-black text-white text-sm">IRAQ TV Admin</span>
        </div>
        {/* Desktop: breadcrumb placeholder */}
        <div className="hidden lg:flex items-center gap-2 text-sm">
          <span className="text-neutral-400">IRAQ TV</span>
          <span className="text-neutral-600">/</span>
          <span className="text-white font-medium">لوحة التحكم</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Live indicator */}
        <div className="hidden sm:flex items-center gap-1.5 bg-green-900/30 border border-green-700/30 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          API متصل
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-red rounded-full" />
        </button>

        {/* View site */}
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-neutral-800 px-3 py-1.5 rounded-lg transition-colors"
        >
          عرض الموقع
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </header>
  );
}
