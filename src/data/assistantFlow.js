export const urgentKeywords = [
  '마비',
  '호흡곤란',
  '가슴통증',
  '흉통',
  '실신',
  '감각이상',
  '교통사고',
  '골절',
  '극심한',
  '응급',
];

export const assistantSteps = [
  {
    id: 'visitType',
    eyebrow: '방문 유형',
    question: '처음 방문하시는지 확인할게요.',
    options: ['초진', '재진'],
  },
  {
    id: 'purpose',
    eyebrow: '방문 목적',
    question: '오늘 가장 필요한 안내는 무엇인가요?',
    options: ['진료 예약', '통증/불편 상담', '자세·체형 점검', '운동 전후 관리'],
  },
  {
    id: 'area',
    eyebrow: '불편 부위',
    question: '주로 신경 쓰이는 부위를 선택해 주세요.',
    options: ['목·어깨', '허리·골반', '무릎', '발목·발바닥', '전신 컨디션'],
  },
  {
    id: 'time',
    eyebrow: '희망 시간',
    question: '방문하기 편한 시간대를 알려주세요.',
    options: ['오전', '오후', '저녁', '가장 빠른 일정'],
  },
  {
    id: 'action',
    eyebrow: '접수 방식',
    question: '마지막으로 이어갈 방법을 선택해 주세요.',
    options: ['예약 페이지로 이동', '상담 신청 남기기', '전화 문의 안내'],
  },
];
