import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, MessageSquareText, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { brandPoints, clinic } from '../data/clinicData';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-18 pt-28 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 soft-grid opacity-55" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex rounded-full border border-mist bg-white/80 px-4 py-2 text-sm font-semibold text-navy shadow-soft">
            송도 1:1 패시브 스트레칭 · 통증관리 · 자세교정
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-ink md:text-6xl lg:text-7xl">
            불편함을 참기 전에,
            <span className="block text-navy">움직임부터 정확히 봅니다.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl md:leading-9">
            펴드림은 불편한 부위만 빠르게 풀고 끝내는 곳이 아닙니다. 자세와 움직임을 먼저 확인하고,
            현재 몸에 맞는 1:1 패시브 스트레칭으로 회복의 방향을 차분하게 제안합니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#ai-desk"
              className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full bg-navy px-7 text-base font-semibold text-white shadow-clinic transition hover:bg-ink"
            >
              AI 빠른 접수 시작
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full border border-mist bg-white/80 px-7 text-base font-semibold text-navy transition hover:border-gold"
            >
              관리 프로그램 보기
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full border border-transparent px-4 text-base font-semibold text-ink/70 transition hover:text-navy"
            >
              위치·시간 안내
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            {['평가 기반', '1:1 예약제', '변화 확인'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white bg-white/70 px-4 py-3 text-sm font-semibold text-ink/68 shadow-soft">
                <CheckCircle2 size={17} className="text-gold" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="clinic-visual min-h-[520px] rounded-[2.25rem] border border-white shadow-clinic">
            <div className="absolute left-6 top-6 z-10 rounded-3xl bg-white/88 p-5 shadow-lift backdrop-blur">
              <p className="text-xs font-bold tracking-[0.18em] text-gold">TODAY CARE</p>
              <p className="mt-2 text-2xl font-semibold text-ink">상태 확인 예약</p>
              <p className="mt-1 text-sm text-ink/52">초진 상담 · 움직임 평가 포함</p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10 rounded-[1.75rem] bg-navy p-6 text-white shadow-clinic">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/60">PYEODREAM CARE FLOW</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">평가에서 변화 확인까지 정돈되는 1:1 케어</h2>
                </div>
                <ClipboardCheck className="shrink-0 text-gold" size={34} />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['상태 확인', '맞춤 관리', '변화 체크'].map((item, index) => (
                  <div key={item} className="rounded-2xl bg-white/9 p-4">
                    <span className="text-sm font-bold text-gold">0{index + 1}</span>
                    <p className="mt-2 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-6 top-36 z-10 hidden w-52 rounded-3xl border border-white/70 bg-white/82 p-5 shadow-lift backdrop-blur sm:block">
              <ShieldCheck className="text-gold" size={24} />
              <p className="mt-4 text-sm font-semibold text-ink/54">안내 원칙</p>
              <p className="mt-1 text-lg font-semibold leading-snug text-ink">진단 단정 없이 안전하게 분류</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-mist bg-white p-5 shadow-soft">
              <CalendarDays className="text-gold" size={24} />
              <p className="mt-4 text-sm font-semibold text-ink/54">초진 안내</p>
              <p className="mt-1 text-xl font-semibold text-ink">상태 확인 포함 예약제</p>
            </div>
            <div className="rounded-3xl border border-mist bg-white p-5 shadow-soft">
              <MessageSquareText className="text-gold" size={24} />
              <p className="mt-4 text-sm font-semibold text-ink/54">AI 접수 데스크</p>
              <p className="mt-1 text-xl font-semibold text-ink">60초 빠른 상담 분류</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-shell relative mt-14 grid gap-4 md:grid-cols-3">
        {brandPoints.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-[1.75rem] border border-white bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lift">
            <Icon className="text-gold" size={26} />
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/62">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
