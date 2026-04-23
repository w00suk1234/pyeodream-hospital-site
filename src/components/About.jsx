import { ArrowUpRight } from 'lucide-react';
import { brandPoints, process } from '../data/clinicData';
import MotionSection from './MotionSection';

export default function About() {
  return (
    <MotionSection id="about" className="bg-porcelain py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold tracking-[0.24em] text-gold">BRAND PHILOSOPHY</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink md:text-5xl">
            불편한 부위보다
            <span className="block">움직임의 이유를 먼저 봅니다.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/65">
            블로그 전반에서 반복되는 펴드림의 말투는 차분합니다. 과장보다 “현재 상태를 먼저 확인”하고,
            “무리하지 않는 범위”에서 접근하며, “변화를 확인”하는 흐름을 강조합니다. 홈페이지도 이 철학을
            중심에 두고 예약까지 자연스럽게 이어지도록 설계했습니다.
          </p>
          <a
            href="#ai-desk"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-mist bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-gold"
          >
            내 상태 빠르게 분류하기
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5">
          {brandPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-mist bg-white p-7 shadow-soft">
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clinic text-gold">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 leading-7 text-ink/64">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell mt-16 rounded-[2rem] bg-navy p-6 text-white md:p-10">
        <div className="grid gap-4 md:grid-cols-4">
          {process.map(([step, title, text]) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <p className="text-sm font-bold text-gold">{step}</p>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
