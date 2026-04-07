import Link from 'next/link';
import { NAV_LINKS } from '@novastream/config';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      {/* Brand line */}
      <div className="brand-line" />

      <div className="container-ns py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-red to-brand-gold rounded-lg flex items-center justify-center text-white font-black shadow-glow">
                <span className="text-xs">IQ</span>
              </div>
              <div>
                <span className="font-black text-white tracking-tight block">IRAQ TV</span>
                <span className="text-[10px] text-neutral-500">قناة العراق</span>
              </div>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              بث مباشر قانوني عالي الجودة.<br />
              محتوى مرخص فقط.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {['X', 'Instagram', 'YouTube', 'TikTok'].map((social) => (
                <a key={social} href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors bg-neutral-800 hover:bg-neutral-700 px-2 py-1 rounded">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">المنصة</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">قانوني</h4>
            <ul className="space-y-2">
              {[
                'الشروط والأحكام',
                'سياسة الخصوصية',
                'سياسة الكوكيز',
                'تراخيص المحتوى',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">الشركة</h4>
            <ul className="space-y-2">
              {['من نحن', 'المدونة', 'وظائف', 'الصحافة', 'اتصل بنا'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} IRAQ TV. جميع الحقوق محفوظة. جميع المحتويات مرخصة.
          </p>
          <p className="text-xs text-neutral-600">
            بث مباشر قانوني · محتوى مرخص · جودة عالية
          </p>
        </div>
      </div>
    </footer>
  );
}
