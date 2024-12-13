import { kv } from '@vercel/kv';

export async function GET() {
  const data = await kv.get('reservations') || [];
  return Response.json(data);
}

export async function POST(request) {
  const reservation = await request.json();
  const data = await kv.get('reservations') || [];
  
  const newReservation = {
    id: data.length + 1,
    name: reservation.name,
    email: reservation.email,
    guests: reservation.guests,
    slot: reservation.dateSelectedTimes,
  };
  
  data.push(newReservation);
  await kv.set('reservations', data);
  
  return new Response(JSON.stringify({
    message: "Reservation complete",
    details: newReservation
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}