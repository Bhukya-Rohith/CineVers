import { motion, useCycle } from 'framer-motion';
import { useState } from 'react';

const toggleVariants = {
  on: { x: 24 },
  off: { x: 0 },
};

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <motion.div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8 shadow-glow">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Settings</p>
          <h1 className="text-3xl font-semibold text-white">Customize your CineVerse experience.</h1>
          <p className="mt-3 text-white/70">Adjust interface settings, notification preferences, and privacy controls in one polished place.</p>
        </div>
        <div className="mt-8 space-y-5">
          {[
            { label: 'Dark mode', description: 'Maintain cinematic lighting throughout the platform.', value: darkMode, onClick: () => setDarkMode((value) => !value) },
            { label: 'Notifications', description: 'Get alerts for seat releases, premieres, and loyalty offers.', value: notifications, onClick: () => setNotifications((value) => !value) },
            { label: 'Privacy mode', description: 'Hide seen titles and booking history when sharing screens.', value: privacy, onClick: () => setPrivacy((value) => !value) },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#090909]/80 p-5">
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-white/70">{item.description}</p>
              </div>
              <button
                type="button"
                aria-label={item.label}
                onClick={item.onClick}
                className="relative inline-flex h-10 w-20 items-center rounded-full bg-white/10 p-1"
              >
                <motion.span
                  animate={item.value ? 'on' : 'off'}
                  variants={toggleVariants}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f84464]"
                />
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-[2rem] border border-white/10 bg-[#090909]/80 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f84464]">Privacy</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
            <p className="font-semibold text-white">Profile visibility</p>
            <p className="mt-3 text-sm text-white/70">Control who sees your ticket activity and favorite titles.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
            <p className="font-semibold text-white">Data sharing</p>
            <p className="mt-3 text-sm text-white/70">Your CineVerse preferences are kept private unless you opt in for offers.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
