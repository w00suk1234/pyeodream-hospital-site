import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { clinic, navItems } from '../data/clinicData';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/70 bg-porcelain/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-sm font-semibold text-white shadow-soft">
            펴
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-sage">PYEODREAM</span>
            <span className="block text-base font-bold text-ink">{clinic.shortName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-ink/68 transition hover:text-navy">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinic.phone}`}
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-mist bg-white px-5 text-sm font-semibold text-navy transition hover:border-gold"
          >
            <Phone size={17} />
            전화 문의
          </a>
          <a
            href="#ai-desk"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink"
          >
            <CalendarCheck size={17} />
            AI 빠른 접수
          </a>
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
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
