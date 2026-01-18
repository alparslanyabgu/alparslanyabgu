'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calculator, Phone, ChevronDown } from 'lucide-react';
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tulpar-night/95 backdrop-blur-md border-b border-tulpar-turquoise/10">
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
                className="text-tulpar-text hover:text-tulpar-turquoise transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/ucret-hesapla">
              <Button className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-semibold hover:opacity-90">
                <Calculator className="w-4 h-4 mr-2" />
                Ücret Hesapla
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-tulpar-text hover:text-tulpar-turquoise"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-tulpar-turquoise/10">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-tulpar-text hover:text-tulpar-turquoise transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/ucret-hesapla" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-semibold">
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