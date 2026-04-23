import MotionSection from './MotionSection';
import { services } from '../data/clinicData';

export default function Services() {
  return (
    <MotionSection id="services" className="pb-24 pt-32">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-bold tracking-[0.24em] text-gold">SPECIALIZED CARE</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            반복되는 불편함을 부위별로 정돈합니다.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink/62">
            목·어깨, 허리·골반, 무릎, 발목과 발바닥까지 블로그에서 반복적으로 다룬 주요 불편감을
            방문자가 이해하기 쉬운 관리 프로그램으로 정리했습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, tags, description }) => (
            <article
              key={title}
              className="group rounded-[1.5rem] border border-mist bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-white transition group-hover:bg-gold">
                  <Icon size={23} />
                </span>
                <div className="flex flex-wrap justify-end gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-clinic px-3 py-1 text-xs font-semibold text-ink/62">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-base leading-7 text-ink/64">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
