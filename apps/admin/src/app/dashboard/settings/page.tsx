import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Settings' };

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-neutral-400 text-sm mt-1">Configure platform-wide settings.</p>
      </div>

      {/* General */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-white">General</h2>
        {[
          { label: 'Site Name', value: 'NovaStream', type: 'text' },
          { label: 'Site URL', value: 'https://novastream.tv', type: 'url' },
          { label: 'Support Email', value: 'support@novastream.tv', type: 'email' },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-sm text-neutral-300 mb-1.5">{field.label}</label>
            <input
              type={field.type}
              defaultValue={field.value}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
        ))}
      </div>

      {/* Feature flags */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-white">Feature Flags</h2>
        {[
          { label: 'Allow New Registrations', checked: true },
          { label: 'Maintenance Mode', checked: false },
          { label: 'Show Pricing Page', checked: true },
          { label: 'Enable Trial Signups', checked: true },
        ].map((flag) => (
          <div key={flag.label} className="flex items-center justify-between">
            <span className="text-sm text-neutral-300">{flag.label}</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                flag.checked ? 'bg-brand-blue' : 'bg-neutral-700'
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
        <h2 className="font-semibold text-white">Streaming</h2>
        <div>
          <label className="block text-sm text-neutral-300 mb-1.5">Max Concurrent Streams (Premium)</label>
          <input
            type="number"
            defaultValue={4}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-1.5">Default Video Quality</label>
          <select className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-blue">
            <option>Auto</option>
            <option>1080p</option>
            <option>720p</option>
            <option>480p</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
          Save Changes
        </button>
        <button className="bg-neutral-800 text-neutral-300 font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-neutral-700 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
}
