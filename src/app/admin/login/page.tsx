'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Ошибка входа');
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Сеть недоступна');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        method="post"
        action="#"
        className="w-full max-w-sm bg-white border border-[#E7E5E4] rounded-2xl p-8 shadow-sm"
      >
        <div className="text-2xl font-bold mb-1">GMS Admin</div>
        <p className="text-sm text-[#78716C] mb-6">Вход для менеджеров</p>
        <label className="block text-sm font-medium mb-1.5">Пароль</label>
        <input
          type="password"
          name="password"
          className="w-full rounded-xl border border-[#E7E5E4] px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#B45309]/30"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
        />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#B45309] hover:bg-[#92400E] text-white font-medium py-3 rounded-xl disabled:opacity-60"
        >
          {loading ? '…' : 'Войти'}
        </button>
      </form>
    </div>
  );
}