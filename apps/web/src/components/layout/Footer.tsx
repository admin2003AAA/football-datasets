import Link from 'next/link';
import { NAV_LINKS, APP_NAME } from '@novastream/config';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="container-ns py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-lg flex items-center justify-center text-white font-black text-sm">
                N
              </div>
              <span className="font-black text-white tracking-tight">{APP_NAME}</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Premium legal live streaming. Licensed content only.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">Platform</h4>
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
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">Legal</h4>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Content Licensing'].map((item) => (
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
            <h4 className="text-sm font-semibold text-neutral-300 mb-3">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Blog', 'Careers', 'Press'].map((item) => (
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
            © {new Date().getFullYear()} NovaStream. All rights reserved. All content is licensed.
          </p>
          <div className="flex items-center gap-4">
            {['Twitter', 'Instagram', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
