import { kv } from '@vercel/kv';

export async function GET() {
  const data = await kv.get('orders') || [];
  return Response.json(data);
}

export async function POST(request) {
  const order = await request.json();
  const data = await kv.get('orders') || [];
  
  const newOrder = {
    id: data.length + 1,
    items: order.map(({ name, quantity }) => ({
      "name": name,
      "quantity": quantity
    }))
  };
  
  data.push(newOrder);
  await kv.set('orders', data);
  
  return new Response(JSON.stringify(newOrder), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}