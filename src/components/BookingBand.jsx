import { CalendarCheck, MessageCircle, PhoneCall } from 'lucide-react';
import { clinic } from '../data/clinicData';

export default function BookingBand() {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="section-shell flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-gold">RESERVATION</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">방문 전 60초 접수로 상담 방향을 먼저 정리하세요.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#ai-desk" className="focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-navy">
            <MessageCircle size={18} />
            AI 빠른 접수
          </a>
          <a href="#contact" className="focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white">
            <CalendarCheck size={18} />
            예약 안내
          </a>
          <a href={`tel:${clinic.phone}`} className="focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white">
            <PhoneCall size={18} />
            전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}
