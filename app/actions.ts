// app/actions.ts
'use server';

export async function sendToBitrix(formData: FormData) {
  const webhook = process.env.BITRIX_WEBHOOK_URL;
  if (!webhook) throw new Error('BITRIX_WEBHOOK_URL не найден в настройках Vercel');

  const name = (formData.get('name') as string || '').trim();
  const phone = (formData.get('phone') as string || '').trim();
  const tour = formData.get('tour') as string;
  const date = formData.get('date') as string;
  const message = (formData.get('message') as string || '').trim();

  const title = `Заявка: ${tour} — ${date} (${name})`;

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        TITLE: title,
        NAME: name,
        PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
        COMMENTS: `Тур: ${tour}\nДата: ${date}\nКлиент: ${name}\nТелефон: ${phone}\nСообщение: ${message || '—'}`,
        SOURCE_ID: 'WEB',
        STAGE_ID: 'NEW'
      }
    })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Bitrix24 ошибка: ${errorText}`);
  }
  return true;
}