import { AlertTriangle, ArrowLeft, Bot, CalendarCheck, Check, PhoneCall, RotateCcw, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { assistantSteps, urgentKeywords } from '../data/assistantFlow';
import { clinic } from '../data/clinicData';
import { submitReservationLead } from '../services/reservationApi';
import MotionSection from './MotionSection';

const initialState = {
  visitType: '',
  purpose: '',
  area: '',
  time: '',
  action: '',
  note: '',
};

export default function AIReservationAssistant({ compact = false, onNavigate }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  const step = assistantSteps[stepIndex];
  const isComplete = stepIndex >= assistantSteps.length;
  const urgentDetected = useMemo(() => {
    const source = Object.values(answers).join(' ');
    return urgentKeywords.some((keyword) => source.includes(keyword));
  }, [answers]);

  const selectOption = async (value) => {
    const nextAnswers = { ...answers, [step.id]: value };
    setAnswers(nextAnswers);

    if (step.id === 'action') {
      setStatus('submitting');
      try {
        const response = await submitReservationLead({
          ...nextAnswers,
          source: 'ai-front-desk',
          createdAt: new Date().toISOString(),
        });
        setResult(response);
        setStepIndex(assistantSteps.length);
        setStatus('done');
      } catch (error) {
        setResult({ ok: false, message: error.message });
        setStepIndex(assistantSteps.length);
        setStatus('error');
      }
      return;
    }

    setStepIndex((index) => index + 1);
  };

  const reset = () => {
    setAnswers(initialState);
    setStepIndex(0);
    setStatus('idle');
    setResult(null);
  };

  const goContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  const panel = (
    <div className="glass-panel overflow-hidden rounded-[1.75rem]">
      <div className="border-b border-mist bg-[linear-gradient(135deg,#122033,#18324f)] p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-gold">AI FRONT DESK</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">AI 빠른 접수 데스크</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
              진단이 아닌 예약 전 안내입니다. 방문 목적을 정리해 상담, 예약, 전화 문의로 바로 연결합니다.
            </p>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold">
            <Bot size={25} />
          </span>
        </div>
      </div>

      {urgentDetected && (
        <div className="m-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 shrink-0" size={18} />
            <p>
              마비, 호흡곤란, 흉통, 실신, 골절 의심처럼 응급 신호가 있다면 예약보다 119 또는 가까운 응급의료기관 상담을 우선해 주세요.
            </p>
          </div>
        </div>
      )}

      <div className="p-5 md:p-6">
        <div className="mb-6 flex items-center gap-2">
          {assistantSteps.map((item, index) => (
            <span
              key={item.id}
              className={`h-1.5 flex-1 rounded-full ${
                index <= Math.min(stepIndex, assistantSteps.length - 1) ? 'bg-gold' : 'bg-mist'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-[1.35rem] border border-mist bg-white p-5 shadow-soft">
                <p className="text-sm font-bold tracking-[0.18em] text-gold">{step.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-ink md:text-2xl">{step.question}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/54">
                  선택지만 눌러도 접수가 진행됩니다. 필요한 경우 한 줄 메모만 남겨주세요.
                </p>
              </div>

              {step.id === 'area' && (
                <textarea
                  value={answers.note}
                  onChange={(event) => setAnswers((value) => ({ ...value, note: event.target.value }))}
                  placeholder="예: 아침 첫발이 아파요, 팔이 잘 안 올라가요"
                  className="focus-ring mt-5 min-h-24 w-full resize-none rounded-2xl border border-mist bg-white px-4 py-3 text-sm leading-6 text-ink shadow-soft placeholder:text-ink/35"
                />
              )}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {step.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectOption(option)}
                    className="focus-ring flex min-h-14 items-center justify-between rounded-2xl border border-mist bg-white px-5 py-4 text-left font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:bg-clinic"
                  >
                    {option}
                    <Check size={18} className="text-gold" />
                  </button>
                ))}
              </div>

              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-ink/58 transition hover:text-navy"
                >
                  <ArrowLeft size={16} />
                  이전
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
            >
              <p className="text-sm font-bold tracking-[0.18em] text-gold">접수 요약</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">방문 목적이 정리되었습니다.</h3>
              <div className="mt-6 grid gap-3 rounded-[1.35rem] border border-mist bg-white p-5 shadow-soft">
                {Object.entries({
                  방문: answers.visitType,
                  목적: answers.purpose,
                  부위: answers.area,
                  시간: answers.time,
                  연결: answers.action,
                }).map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 text-sm">
                    <span className="font-semibold text-ink/48">{label}</span>
                    <span className="text-right font-semibold text-ink">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={goContact}
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 font-semibold text-white shadow-soft"
                >
                  <CalendarCheck size={18} />
                  예약 안내 보기
                </button>
                <a
                  href={`tel:${clinic.phone}`}
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-mist bg-white px-6 font-semibold text-navy"
                >
                  <PhoneCall size={18} />
                  전화 문의
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-mist bg-white px-6 font-semibold text-ink/64"
                >
                  <RotateCcw size={18} />
                  다시 접수
                </button>
              </div>

              <p className="mt-5 text-sm leading-6 text-ink/52">
                {status === 'done' && result?.mode === 'mock'
                  ? `테스트용 접수번호 ${result.leadId}가 생성되었습니다. 아직 DB에는 저장되지 않습니다.`
                  : '실제 API 연결 시 이 요약 정보가 FastAPI 예약 엔드포인트로 전송됩니다.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {status === 'submitting' && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-clinic px-4 py-2 text-sm font-semibold text-navy">
            <Send size={16} />
            접수 정보를 정리하는 중입니다
          </div>
        )}
      </div>
    </div>
  );

  if (compact) {
    return panel;
  }

  return (
    <MotionSection id="ai-desk" className="pb-24 pt-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-sm font-bold tracking-[0.24em] text-gold">AI RESERVATION</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
            예약에 필요한 것만 빠르게 확인합니다.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/62">
            초진/재진, 방문 목적, 불편 부위, 희망 시간대를 짧게 분류합니다.
            질병을 단정하지 않고 필요한 경우 전화 문의 또는 의료기관 상담을 우선 안내합니다.
          </p>
        </div>
        {panel}
      </div>
    </MotionSection>
  );
}
