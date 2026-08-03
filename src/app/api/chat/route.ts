import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SYSTEM = `Ты AI-ассистент сайта gms.tours (GMS — Global Migration Solutions, Бишкек, Кыргызстан).
Помогаешь с турами по Кыргызстану, визами (ориентир ДКС КР: TS, MT, B, S, RL), трансферами, мероприятиями.
Цены «от»: однодневные туры ~3050–4550 сом, Сон-Куль 2 дня от 12500, Иссык-Куль 2–3 дня от 14500–21500, юг (Арсланбоб, Сары-Челек) от 13500–24500.
Контакты: +996 774 880 888, +996 557 001 501, WhatsApp, Telegram @gmsa1_bot.
Более 4000 виз, 15+ мероприятий высшего уровня.
Стиль: дружелюбно, коротко, по делу, на языке пользователя (русский или english).
Не выдумывай точные сроки виз — уточняет менеджер. Предлагай оставить заявку на сайте или написать в WhatsApp.`;

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

export async function POST(req: NextRequest) {
  try {
    const key = process.env.XAI_API_KEY;
    if (!key) {
      return NextResponse.json({ error: 'XAI_API_KEY not configured' }, { status: 500 });
    }

    const body = await req.json();
    const messages = (body.messages || []) as Msg[];
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'messages required' }, { status: 400 });
    }

    const trimmed = messages.slice(-12).map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 4000),
    }));

    const res = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: process.env.XAI_MODEL || 'grok-3-latest',
        temperature: 0.6,
        messages: [{ role: 'system', content: SYSTEM }, ...trimmed],
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('[chat]', res.status, data);
      return NextResponse.json(
        { error: data.error?.message || data.error || 'AI error' },
        { status: 502 }
      );
    }

    const reply =
      data.choices?.[0]?.message?.content ||
      'Сейчас не могу ответить. Напишите в WhatsApp: +996 774 880 888';

    return NextResponse.json({ reply });
  } catch (e) {
    console.error('[chat]', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}