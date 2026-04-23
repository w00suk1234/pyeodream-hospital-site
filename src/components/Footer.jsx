import { clinic } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-gold">PYEODREAM</p>
          <h2 className="mt-3 text-2xl font-semibold">{clinic.name}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/58">
            본 페이지는 프론트엔드 1차 버전이며, 실제 의료기관 정보·약력·연락처는 운영 전 확인 후 교체해야 합니다.
          </p>
        </div>
        <p className="text-sm text-white/48">© 2026 Pyeodream Passive Stretching Center.</p>
      </div>
    </footer>
  );
}
