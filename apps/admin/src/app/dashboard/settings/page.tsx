import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'الإعدادات — IRAQ TV Admin' };

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl" dir="rtl">
      <div>
        <h1 className="text-2xl font-bold text-white">الإعدادات</h1>
        <p className="text-neutral-400 text-sm mt-1">ضبط إعدادات منصة IRAQ TV.</p>
      </div>

      {/* General */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-white">إعدادات عامة</h2>
        {[
          { label: 'اسم المنصة', labelEn: 'Site Name', value: 'IRAQ TV', type: 'text' },
          { label: 'اسم المنصة (عربي)', labelEn: 'Site Name (Arabic)', value: 'إيراق تيفي', type: 'text' },
          { label: 'رابط المنصة', labelEn: 'Site URL', value: 'https://iraqtv.iq', type: 'url' },
          { label: 'البريد الإلكتروني للدعم', labelEn: 'Support Email', value: 'support@iraqtv.iq', type: 'email' },
          { label: 'اللغة الافتراضية', labelEn: 'Default Language', value: 'ar', type: 'text' },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-sm text-neutral-300 mb-0.5">{field.label}</label>
            <span className="text-xs text-neutral-600 block mb-1.5">{field.labelEn}</span>
            <input
              type={field.type}
              defaultValue={field.value}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
            />
          </div>
        ))}
      </div>

      {/* Feature flags */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-white">ميزات المنصة</h2>
        {[
          { labelAr: 'السماح بالتسجيل الجديد', labelEn: 'Allow New Registrations', checked: true },
          { labelAr: 'وضع الصيانة', labelEn: 'Maintenance Mode', checked: false },
          { labelAr: 'عرض صفحة الأسعار', labelEn: 'Show Pricing Page', checked: true },
          { labelAr: 'تفعيل الاشتراكات التجريبية', labelEn: 'Enable Trial Signups', checked: true },
          { labelAr: 'تفعيل EPG', labelEn: 'Enable EPG', checked: true },
        ].map((flag) => (
          <div key={flag.labelAr} className="flex items-center justify-between">
            <div>
              <span className="text-sm text-neutral-300 block">{flag.labelAr}</span>
              <span className="text-xs text-neutral-600">{flag.labelEn}</span>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                flag.checked ? 'bg-brand-red' : 'bg-neutral-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  flag.checked ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Stream config */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-white">إعدادات البث</h2>
        <div>
          <label className="block text-sm text-neutral-300 mb-0.5">أقصى تدفقات متزامنة (المميزة)</label>
          <span className="text-xs text-neutral-600 block mb-1.5">Max Concurrent Streams (Premium)</span>
          <input
            type="number"
            defaultValue={4}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-0.5">جودة الفيديو الافتراضية</label>
          <span className="text-xs text-neutral-600 block mb-1.5">Default Video Quality</span>
          <select className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red">
            <option>تلقائي (Auto)</option>
            <option>1080p</option>
            <option>720p</option>
            <option>480p</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-gradient-to-r from-brand-red to-brand-gold text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
          حفظ التغييرات
        </button>
        <button className="bg-neutral-800 text-neutral-300 font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-neutral-700 transition-colors">
          إعادة تعيين
        </button>
      </div>
    </div>
  );
}
