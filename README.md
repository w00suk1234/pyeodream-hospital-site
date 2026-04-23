# 펴드림 프리미엄 병원형 홈페이지

React + Vite + Tailwind CSS + framer-motion 기반의 프론트엔드 1차 버전입니다.

## 실행 방법

```bash
npm install
npm run dev
```

빌드 확인:

```bash
npm run build
```

## 구조

```text
src/
  components/
    AIReservationAssistant.jsx
    FloatingDesk.jsx
    Header.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Clinicians.jsx
    BookingBand.jsx
    Contact.jsx
    Footer.jsx
  data/
    assistantFlow.js
    clinicData.js
  services/
    reservationApi.js
```

## FastAPI 연동 포인트

`src/services/reservationApi.js`는 `VITE_RESERVATION_API_URL` 환경변수가 있으면 해당 엔드포인트로 접수 데이터를 POST합니다.

예상 payload:

```json
{
  "visitType": "초진",
  "purpose": "진료 예약",
  "area": "목·어깨",
  "time": "오후",
  "action": "상담 신청 남기기",
  "note": "팔이 잘 안 올라가요",
  "source": "ai-front-desk",
  "createdAt": "2026-04-23T00:00:00.000Z"
}
```

환경변수 예시:

```bash
VITE_RESERVATION_API_URL=http://localhost:8000/api/reservation-leads
```

## 블로그 기반 브랜딩 반영

- 브랜드명: 펴드림 패시브 스트레칭 센터
- 핵심 흐름: 평가 → 맞춤 → 변화 확인
- 주요 분야: 목·어깨, 허리·골반, 무릎, 발목·발바닥, 평발, 족저근막염, 거북목, 오십견, 회전근개, 자세교정, 재활운동
- 톤: 과장보다 현재 상태 확인, 무리하지 않는 접근, 1:1 맞춤 관리, 움직임 변화 확인
- AI 도우미: 진단이 아닌 접수/예약 안내로 설계
