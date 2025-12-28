'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/app/dashboard', label: 'Dashboard' },
    { href: '/app/audit', label: 'Audit' },
    { href: '/app/architecture', label: 'Architecture' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/app/dashboard" className="text-2xl font-bold">
            Kasparro
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Public Site
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

