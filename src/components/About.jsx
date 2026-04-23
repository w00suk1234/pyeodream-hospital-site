import { ArrowUpRight } from 'lucide-react';
import { brandPoints, process } from '../data/clinicData';
import MotionSection from './MotionSection';

export default function About({ onNavigate }) {
  return (
    <MotionSection id="about" className="bg-porcelain pb-24 pt-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold tracking-[0.24em] text-gold">BRAND PHILOSOPHY</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            불편한 부위보다
            <span className="block">움직임의 이유를 먼저 봅니다.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/62">
            펴드림의 핵심은 과장된 치료 약속이 아니라 현재 상태를 먼저 확인하는 태도입니다.
            자세, 보행, 관절 가동범위, 일상 움직임을 함께 보고 무리하지 않는 범위에서 관리 방향을 정합니다.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/62">
            블로그에서 반복되는 “평가 → 맞춤 → 변화 확인”의 흐름을 홈페이지 구조에도 반영했습니다.
            처음 방문하는 분도 자신의 상태와 다음 행동을 빠르게 이해할 수 있게 설계했습니다.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('ai')}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-mist bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-gold"
          >
            내 상태 빠르게 분류하기
            <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="grid gap-5">
          {brandPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.5rem] border border-mist bg-white p-6 shadow-soft">
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clinic text-gold">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-ink/64">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell mt-20 rounded-[1.75rem] bg-navy p-6 text-white md:p-8">
        <div className="grid gap-4 md:grid-cols-4">
          {process.map(([step, title, text]) => (
            <div key={step} className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-bold text-gold">{step}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
