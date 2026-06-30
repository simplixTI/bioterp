'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const ok = typeof window !== 'undefined' && sessionStorage.getItem('bioterp_age_ok');
    if (!ok) setOpen(true);
  }, []);

  if (!open) return null;

  const verify = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);
    if (!d || !m || !y || y < 1900 || y > new Date().getFullYear()) {
      setError('Please enter a valid date of birth.');
      return;
    }
    const dob = new Date(y, m - 1, d);
    const ageYears = (Date.now() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
    if (ageYears < 21) {
      setError('You must be 21 or older to enter this site.');
      return;
    }
    sessionStorage.setItem('bioterp_age_ok', '1');
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-leaf-950/70 px-5 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl bg-cream-50 p-8 shadow-card sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-leaf-700 text-cream-50">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h2 className="text-center font-display text-2xl text-leaf-900 sm:text-3xl">
          Age Verification
        </h2>
        <p className="mt-2 text-center text-sm text-leaf-900/70">
          You must be 21 years or older to enter this site.
        </p>

        <form onSubmit={verify} className="mt-7 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-leaf-700/80">
                Month
              </span>
              <input
                inputMode="numeric"
                maxLength={2}
                value={month}
                onChange={(e) => setMonth(e.target.value.replace(/\D/g, ''))}
                placeholder="MM"
                className="w-full rounded-xl border border-leaf-700/20 bg-white px-3 py-3 text-center text-base font-semibold focus:border-leaf-700 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-leaf-700/80">
                Day
              </span>
              <input
                inputMode="numeric"
                maxLength={2}
                value={day}
                onChange={(e) => setDay(e.target.value.replace(/\D/g, ''))}
                placeholder="DD"
                className="w-full rounded-xl border border-leaf-700/20 bg-white px-3 py-3 text-center text-base font-semibold focus:border-leaf-700 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-leaf-700/80">
                Year
              </span>
              <input
                inputMode="numeric"
                maxLength={4}
                value={year}
                onChange={(e) => setYear(e.target.value.replace(/\D/g, ''))}
                placeholder="YYYY"
                className="w-full rounded-xl border border-leaf-700/20 bg-white px-3 py-3 text-center text-base font-semibold focus:border-leaf-700 focus:outline-none"
              />
            </label>
          </div>

          {error && (
            <p className="text-center text-sm font-medium text-red-600">{error}</p>
          )}

          <button type="submit" className="btn-primary w-full">
            Yes, I am 21+
          </button>
          <p className="text-center text-xs text-leaf-900/60">
            By entering this site you certify the information you have submitted is accurate.
          </p>
        </form>
      </div>
    </div>
  );
}
