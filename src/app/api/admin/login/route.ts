import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, createAdminSessionToken } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json({ error: 'ADMIN_PASSWORD not configured' }, { status: 500 });
  }
  if (password !== expected) {
    return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 });
  }
  const token = createAdminSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}