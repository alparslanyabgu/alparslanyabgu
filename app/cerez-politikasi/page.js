'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Çerez Politikası',
  description: 'Tulpar Kurye çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgi.',
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold mb-6">
              <Cookie className="w-8 h-8 text-tulpar-night" />
            </div>
            <h1 className="text-4xl font-bold text-tulpar-text mb-4">
              Çerez Politikası
            </h1>
            <p className="text-tulpar-muted">
              Son güncelleme: Haziran 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-tulpar-surface rounded-xl p-8 border border-tulpar-turquoise/10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Çerez Nedir?</h2>
              <p className="text-tulpar-muted">
                Çerezler, web sitelerinin tarayıcınıza gönderdiği küçük metin dosyalarıdır. 
                Bu dosyalar, site tercihlerinizi hatırlamak ve kullanıcı deneyimini iyileştirmek için kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Kullandığımız Çerez Türleri</h2>
              
              <div className="space-y-4">
                <div className="bg-tulpar-night p-4 rounded-lg">
                  <h3 className="text-tulpar-turquoise font-medium mb-2">Zorunlu Çerezler</h3>
                  <p className="text-tulpar-muted text-sm">
                    Web sitesinin çalışması için gerekli temel çerezler. Devre dışı bırakılamazlar.
                  </p>
                </div>
                
                <div className="bg-tulpar-night p-4 rounded-lg">
                  <h3 className="text-tulpar-turquoise font-medium mb-2">Performans Çerezleri</h3>
                  <p className="text-tulpar-muted text-sm">
                    Web sitesinin nasıl kullanıldığını anlamamza yardımcı olur. Anonim veriler toplar.
                  </p>
                </div>
                
                <div className="bg-tulpar-night p-4 rounded-lg">
                  <h3 className="text-tulpar-turquoise font-medium mb-2">İşlevsellik Çerezleri</h3>
                  <p className="text-tulpar-muted text-sm">
                    Dil tercihi gibi seçimlerinizi hatırlamak için kullanılır.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Çerezleri Yönetme</h2>
              <p className="text-tulpar-muted">
                Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. 
                Ancak bazı çerezleri devre dışı bırakmak, web sitesinin düzgün çalışmasını engelleyebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-tulpar-text mb-4">Daha Fazla Bilgi</h2>
              <p className="text-tulpar-muted">
                Çerez politikamız hakkında sorularınız için info@tulparkurye.com adresine ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// Çerez Banner Komponenti (Layout'ta kullanılabilir)
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-tulpar-surface border-t border-tulpar-turquoise/20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-tulpar-muted text-sm">
          Bu web sitesi deneyiminizi iyileştirmek için çerezler kullanır. 
          <Link href="/cerez-politikasi" className="text-tulpar-turquoise hover:underline ml-1">
            Daha fazla bilgi
          </Link>
        </p>
        <div className="flex gap-3">
          <Button
            onClick={acceptCookies}
            className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night"
          >
            Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
}