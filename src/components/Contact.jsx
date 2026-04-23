import { Clock3, MapPin, Navigation, PhoneCall } from 'lucide-react';
import { assurance, clinic, contactCards } from '../data/clinicData';
import MotionSection from './MotionSection';

export default function Contact() {
  return (
    <MotionSection id="contact" className="bg-porcelain pb-24 pt-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-gold">CONTACT</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
              방문 전, 동선과 시간을 먼저 정리해 드립니다.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/62">
              초진은 상태 확인과 움직임 평가 시간이 포함될 수 있습니다.
              정확한 시간은 접수 후 상담을 통해 안내됩니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.35rem] border border-mist bg-white p-5 shadow-soft">
                  <Icon className="text-gold" size={23} />
                  <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-mist bg-white p-5 shadow-clinic">
            <div className="grid min-h-[300px] place-items-center rounded-[1.35rem] bg-[linear-gradient(135deg,#e8eeec,#f7f4ee)] text-center">
              <div className="px-8">
                <MapPin className="mx-auto text-navy" size={36} />
                <h3 className="mt-5 text-2xl font-semibold text-ink">지도 영역</h3>
                <p className="mt-3 text-sm leading-6 text-ink/58">
                  네이버 지도 또는 카카오맵 스크립트 연결 위치입니다.
                  <br />
                  {clinic.address}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.35rem] bg-clinic p-5">
                <Clock3 className="text-gold" size={22} />
                <h4 className="mt-4 font-semibold text-ink">진료/운영 시간</h4>
                <div className="mt-3 space-y-2 text-sm text-ink/64">
                  {clinic.hours.map(([label, time]) => (
                    <div key={label} className="flex justify-between gap-3">
                      <span>{label}</span>
                      <span className="font-semibold text-ink">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.35rem] bg-navy p-5 text-white">
                <PhoneCall className="text-gold" size={22} />
                <h4 className="mt-4 font-semibold">상담 전화</h4>
                <p className="mt-3 text-2xl font-semibold">{clinic.phone}</p>
                <a
                  href={`tel:${clinic.phone}`}
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy"
                >
                  바로 전화하기
                  <Navigation size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {assurance.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.35rem] border border-mist bg-white p-6">
              <Icon className="text-gold" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/62">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
