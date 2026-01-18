'use client';

import Link from 'next/link';
import { TulparLogoFull } from './TulparLogo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-tulpar-surface border-t border-tulpar-turquoise/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Hakkında */}
          <div>
            <TulparLogoFull className="mb-4" />
            <p className="text-tulpar-muted text-sm leading-relaxed">
              İstanbul'un en hızlı ve güvenilir kurye hizmeti. 
              Tulpar gibi hızlı, şeffaf fiyatlarla.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-tulpar-text font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/ucret-hesapla" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Ücret Hesapla
                </Link>
              </li>
              <li>
                <Link href="/bolgeler" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Bölgeler
                </Link>
              </li>
              <li>
                <Link href="/abonelik" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Kurumsal Abonelik
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-tulpar-text font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-tulpar-turquoise mt-0.5" />
                <span className="text-tulpar-muted">İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-tulpar-turquoise" />
                <span className="text-tulpar-muted">7/24 Hizmet</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-tulpar-turquoise" />
                <a href="mailto:info@tulparkurye.com" className="text-tulpar-muted hover:text-tulpar-turquoise transition-colors">
                  info@tulparkurye.com
                </a>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="text-tulpar-text font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kvkk" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  KVKK Aydınlatma
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-tulpar-muted hover:text-tulpar-turquoise text-sm transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="mt-12 pt-8 border-t border-tulpar-turquoise/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-tulpar-muted text-sm">
              © {new Date().getFullYear()} Tulpar Kurye. Tüm hakları saklıdır.
            </p>
            <p className="text-tulpar-muted text-xs">
              İstanbul'un Mitolojik Hızı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}