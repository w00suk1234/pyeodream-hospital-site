import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { clinic, navItems } from '../data/clinicData';

const keyByHref = {
  '#about': 'about',
  '#services': 'services',
  '#doctors': 'doctors',
  '#ai-desk': 'ai',
  '#contact': 'contact',
};

export default function Header({ activeView, onNavigate }) {
  const [open, setOpen] = useState(false);

  const goTo = (view) => {
    onNavigate(view);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-mist/70 bg-porcelain/92 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <button type="button" onClick={() => goTo('home')} className="group flex items-center gap-3 text-left">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-sm font-semibold text-white shadow-soft">
            펴
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-sage">PYEODREAM</span>
            <span className="block text-base font-bold text-ink">{clinic.shortName}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map(([label, href]) => {
            const view = keyByHref[href];
            const active = activeView === view;

            return (
              <button
                key={href}
                type="button"
                onClick={() => goTo(view)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? 'text-navy' : 'text-ink/62 hover:text-navy'
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-4 -bottom-2 h-0.5 rounded-full bg-gold transition ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinic.phone}`}
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-mist bg-white px-5 text-sm font-semibold text-navy transition hover:border-gold"
          >
            <Phone size={17} />
            전화 문의
          </a>
          <button
            type="button"
            onClick={() => goTo('ai')}
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink"
          >
            <CalendarCheck size={17} />
            AI 빠른 접수
          </button>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-mist bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="메뉴 열기"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mist bg-porcelain lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map(([label, href]) => {
              const view = keyByHref[href];
              const active = activeView === view;

              return (
                <button
                  key={href}
                  type="button"
                  className={`rounded-xl px-3 py-3 text-left text-sm font-semibold ${
                    active ? 'bg-clinic text-navy' : 'text-ink/70'
                  }`}
                  onClick={() => goTo(view)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
