import { MessageSquareText, X } from 'lucide-react';
import { useState } from 'react';
import AIReservationAssistant from './AIReservationAssistant';

export default function FloatingDesk() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[min(calc(100vw-40px),430px)]">
          <AIReservationAssistant compact />
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring ml-auto flex h-14 items-center gap-3 rounded-full bg-navy px-5 font-semibold text-white shadow-clinic transition hover:bg-ink"
      >
        {open ? <X size={20} /> : <MessageSquareText size={20} />}
        {open ? '닫기' : 'AI 빠른 접수'}
      </button>
    </div>
  );
}
