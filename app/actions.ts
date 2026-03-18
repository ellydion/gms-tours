// app/actions.ts
'use server';

export async function sendToBitrix(formData: FormData) {
  const webhook = process.env.BITRIX_WEBHOOK_URL;
  if (!webhook) throw new Error('BITRIX_WEBHOOK_URL не найден в .env.local');

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        TITLE: `Заявка: ${formData.get('tour')} — ${formData.get('date')}`,
        NAME: formData.get('name'),
        PHONE: [{ VALUE: formData.get('phone'), VALUE_TYPE: 'WORK' }],
        COMMENTS: `Тур: ${formData.get('tour')}\nДата: ${formData.get('date')}\nСообщение: ${formData.get('message') || '—'}`,
        SOURCE_ID: 'WEB',
        STAGE_ID: 'NEW'
      }
    })
  });

  if (!res.ok) throw new Error('Ошибка Bitrix24');
  return true;
}