export async function submitReservationLead(payload) {
  const endpoint = import.meta.env.VITE_RESERVATION_API_URL;

  if (!endpoint) {
    return {
      ok: true,
      mode: 'mock',
      leadId: `PD-${Date.now().toString().slice(-6)}`,
      payload,
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('예약 접수 요청에 실패했습니다.');
  }

  return response.json();
}
