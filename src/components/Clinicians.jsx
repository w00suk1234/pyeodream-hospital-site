import { clinicians } from '../data/clinicData';
import MotionSection from './MotionSection';

export default function Clinicians() {
  return (
    <MotionSection id="doctors" className="bg-porcelain py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.24em] text-gold">CARE TEAM</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink md:text-5xl">첫 방문부터 관리 방향까지 차분하게 안내합니다.</h2>
          <p className="mt-6 text-base leading-8 text-ink/65">
            실제 의료진·전문가 약력은 추후 데이터 파일만 교체하면 됩니다. 1차 버전에서는 과한 더미 이력 대신
            역할 중심으로 정돈했습니다.
          </p>
        </div>

        <div className="grid gap-5">
          {clinicians.map((person) => (
            <article key={person.name} className="rounded-[1.75rem] border border-mist bg-white p-7 shadow-soft">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="h-28 w-28 shrink-0 rounded-3xl bg-[linear-gradient(135deg,#18324f,#6d8580)]" />
                <div>
                  <p className="text-sm font-semibold text-gold">{person.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{person.name}</h3>
                  <p className="mt-4 leading-7 text-ink/64">{person.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
