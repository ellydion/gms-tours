'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inbox, CalendarDays, LayoutDashboard, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/admin', label: 'Заявки', icon: Inbox },
  { href: '/admin/calendar', label: 'Календарь', icon: CalendarDays },
  { href: '/admin/dashboard', label: 'Дашборд', icon: LayoutDashboard },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname.startsWith('/admin/login');

  if (isLogin) {
    return <div className="min-h-screen bg-[#F5F2EB]">{children}</div>;
  }

  return (
    <div className="min-h-screen flex bg-[#F5F2EB]">
      <aside className="w-56 shrink-0 border-r border-[#E7E5E4] bg-white hidden md:flex flex-col">
        <div className="px-5 py-5 border-b border-[#E7E5E4]">
          <div className="font-bold text-lg tracking-tight">GMS Admin</div>
          <div className="text-xs text-[#78716C]">Фаза 1+</div>
        </div>
        <nav className="p-3 flex flex-col gap-1 flex-1">
          {NAV.map((item) => {
            const active =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition',
                  active
                    ? 'bg-[#1C1917] text-white'
                    : 'text-[#57534E] hover:bg-[#FAF7F2]'
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-[#E7E5E4]">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm text-[#78716C] hover:text-[#B45309]"
          >
            <ExternalLink className="w-4 h-4" />
            Сайт
          </a>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="md:hidden flex gap-1 overflow-x-auto border-b border-[#E7E5E4] bg-white px-3 py-2">
          {NAV.map((item) => {
            const active =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'shrink-0 px-3 py-2 rounded-lg text-sm font-medium',
                  active ? 'bg-[#1C1917] text-white' : 'text-[#57534E]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">{children}</main>
      </div>
    </div>
  );
}