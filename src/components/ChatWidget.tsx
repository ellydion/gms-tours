'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import { WHATSAPP_URL } from '@/lib/contacts';

type ChatMsg = { role: 'user' | 'assistant'; content: string };

export function ChatWidget() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: 'assistant',
      content: isEn
        ? 'Hi! I am the GMS assistant. Ask about tours, visas, transfers or events.'
        : 'Здравствуйте! Я ассистент GMS. Спросите про туры, визы, трансферы или мероприятия.',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const next = [...messages, { role: 'user' as const, content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: 'assistant',
            content: isEn
              ? 'Error. Please write on WhatsApp.'
              : 'Ошибка ответа. Напишите в WhatsApp: +996 774 880 888',
          },
        ]);
      } else {
        setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: isEn ? 'Network error.' : 'Ошибка сети. Попробуйте ещё раз.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-[#B45309] hover:bg-[#92400E] text-white shadow-lg flex items-center justify-center transition"
        aria-label="Chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-[70] w-[min(100vw-2rem,380px)] h-[min(70vh,520px)] bg-white border border-[#E7E5E4] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-[#1C1917] text-white flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">GMS AI</div>
              <div className="text-xs text-white/60">
                {isEn ? 'Tours & visas assistant' : 'Туры и визы'}
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 bg-[#FAF7F2]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] text-sm leading-relaxed px-3 py-2 rounded-2xl ${
                  m.role === 'user'
                    ? 'ml-auto bg-[#B45309] text-white rounded-br-md'
                    : 'mr-auto bg-white border border-[#E7E5E4] text-[#1C1917] rounded-bl-md'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-white border border-[#E7E5E4] rounded-2xl px-3 py-2 text-sm text-[#78716C] flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                …
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            className="p-3 border-t border-[#E7E5E4] bg-white flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              className="flex-1 rounded-xl border border-[#E7E5E4] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30"
              placeholder={isEn ? 'Your question…' : 'Ваш вопрос…'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-11 h-11 rounded-xl bg-[#B45309] text-white flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}