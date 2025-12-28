import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Kasparro
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/platform" className="text-sm font-medium hover:text-primary transition-colors">
            Platform
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Button asChild>
            <Link href="/app/dashboard">Dashboard</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

