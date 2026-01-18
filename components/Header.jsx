'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calculator } from 'lucide-react';
import { TulparLogoFull } from './TulparLogo';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Bölgeler', href: '/bolgeler' },
  { name: 'Abonelik', href: '/abonelik' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-tulpar-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <TulparLogoFull />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === item.href 
                    ? 'text-tulpar-primary' 
                    : 'text-tulpar-text hover:text-tulpar-primary'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-tulpar-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/ucret-hesapla">
              <Button className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white font-medium">
                <Calculator className="w-4 h-4 mr-2" />
                Ücret Hesapla
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-tulpar-text hover:text-tulpar-primary"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-tulpar-border">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'text-tulpar-primary bg-tulpar-section' 
                      : 'text-tulpar-text hover:bg-tulpar-section'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/ucret-hesapla" onClick={() => setIsOpen(false)} className="mt-2">
                <Button className="w-full bg-tulpar-primary hover:bg-tulpar-primary-hover text-white font-medium">
                  <Calculator className="w-4 h-4 mr-2" />
                  Ücret Hesapla
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}