import {
  Activity,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Footprints,
  HeartPulse,
  MapPin,
  Move3D,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from 'lucide-react';

export const clinic = {
  name: '펴드림 패시브 스트레칭 센터',
  shortName: '펴드림',
  tagline: '정확히 보고, 무리 없이 풀고, 변화를 확인합니다.',
  phone: '032-000-0000',
  address: '인천 송도 해돋이로 인근 세종프라자 2층',
  hours: [
    ['평일', '10:00 - 21:00'],
    ['토요일', '10:00 - 17:00'],
    ['점심시간', '예약 상황에 따라 개별 안내'],
  ],
};

export const navItems = [
  ['소개', '#about'],
  ['특화관리', '#services'],
  ['진료안내', '#doctors'],
  ['AI 접수', '#ai-desk'],
  ['오시는 길', '#contact'],
];

export const brandPoints = [
  {
    icon: Move3D,
    title: '움직임 평가 기반',
    description: '불편한 부위만 보지 않고 자세, 보행, 관절 가동범위, 일상 움직임을 함께 확인합니다.',
  },
  {
    icon: UserRoundCheck,
    title: '1:1 맞춤 패시브 케어',
    description: '현재 몸 상태와 목표에 맞춰 무리하지 않는 범위의 스트레칭과 재활운동을 설계합니다.',
  },
  {
    icon: CheckCircle2,
    title: '변화 확인 루틴',
    description: '관리 전후의 움직임 변화를 확인해 막연한 느낌이 아닌 납득 가능한 회복 경험을 만듭니다.',
  },
];

export const services = [
  {
    icon: HeartPulse,
    title: '목·어깨 컨디셔닝',
    tags: ['거북목', '어깨 가동범위', '회전근개 불편'],
    description: '장시간 앉은 자세, 팔을 들 때의 제한, 목과 어깨로 이어지는 뻐근함을 움직임 관점에서 정돈합니다.',
  },
  {
    icon: Activity,
    title: '허리·골반 밸런스',
    tags: ['요통관리', '골반 불균형', '자세교정'],
    description: '한쪽으로 기울어지는 느낌, 오래 앉을 때의 불편함, 골반과 허리의 연결 움직임을 섬세하게 확인합니다.',
  },
  {
    icon: Footprints,
    title: '무릎·발목·발 아치',
    tags: ['평발', '족저근막염', '발목 불안정'],
    description: '발의 피로, 계단에서의 불안정, 무릎 안쪽 부담처럼 보행과 하체 정렬에서 반복되는 신호를 다룹니다.',
  },
  {
    icon: Sparkles,
    title: '운동 전후 바디 컨디셔닝',
    tags: ['프리미엄 스트레칭', '근막이완', '회복 루틴'],
    description: '운동 수행 전 몸을 준비하고, 운동 후 긴장과 피로를 부드럽게 낮추는 관리 루틴을 제공합니다.',
  },
];

export const process = [
  ['01', '상태 확인', '불편감, 생활 패턴, 움직임 제한을 간결하게 체크합니다.'],
  ['02', '움직임 평가', '자세와 관절 가동성, 보행의 흐름을 눈으로 확인합니다.'],
  ['03', '맞춤 관리', '패시브 스트레칭과 재활운동을 몸 상태에 맞게 조합합니다.'],
  ['04', '변화 확인', '관리 후 달라진 움직임과 다음 관리 방향을 안내합니다.'],
];

export const clinicians = [
  {
    name: '대표 케어 디렉터',
    role: '패시브 스트레칭 · 재활운동 설계',
    description: '자세와 움직임을 기준으로 1:1 관리 방향을 제안합니다. 실제 이력은 추후 관리자 데이터로 교체 가능합니다.',
  },
  {
    name: '컨디셔닝 매니저',
    role: '방문 전 상담 · 일정 조율',
    description: '초진 목적과 불편 부위를 정리해 첫 방문이 복잡하지 않도록 안내합니다.',
  },
];

export const contactCards = [
  {
    icon: Phone,
    title: '전화 상담',
    text: clinic.phone,
  },
  {
    icon: CalendarCheck,
    title: '예약 우선 운영',
    text: '초진은 상태 확인 시간이 포함됩니다.',
  },
  {
    icon: Clock3,
    title: '운영 시간',
    text: '평일 야간 예약 가능',
  },
  {
    icon: MapPin,
    title: '주차 안내',
    text: '건물 내 주차 가능',
  },
];

export const assurance = [
  {
    icon: ShieldCheck,
    title: '진단을 단정하지 않습니다',
    description: '불편감은 의료진 판단이 필요한 영역과 운동 관리 영역을 구분해 안내합니다.',
  },
  {
    icon: Stethoscope,
    title: '의심 증상은 진료 권고',
    description: '응급 또는 진료가 필요한 신호는 예약보다 의료기관 상담을 우선 안내합니다.',
  },
];
