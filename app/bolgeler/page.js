import { MapPin, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Bölgeler',
  description: 'Tulpar Kurye İstanbul bölge sistemi. 8 bölge ile şeffaf fiyatlandırma. Hangi ilçe hangi bölgede öğrenin.',
};

const zones = [
  {
    id: 1,
    name: 'Bölge 1',
    districts: ['Fatih', 'Beyoğlu', 'Şişli (merkez)', 'Beşiktaş'],
    description: 'İstanbul\'un kalbi. Tarihi yarımada ve merkezi iş bölgeleri.'
  },
  {
    id: 2,
    name: 'Bölge 2',
    districts: ['Kadıköy', 'Üsküdar', 'Ataşehir'],
    description: 'Anadolu yakası merkez. Yoğun iş ve ticaret bölgesi.'
  },
  {
    id: 3,
    name: 'Bölge 3',
    districts: ['Bakırköy', 'Bahçelievler', 'Bağcılar', 'Güngören'],
    description: 'Batı yakası merkez. Sanayi ve ticaret bölgeleri.'
  },
  {
    id: 4,
    name: 'Bölge 4',
    districts: ['Maltepe', 'Kartal', 'Pendik'],
    description: 'Anadolu yakası güney. Gelişen iş merkezleri.'
  },
  {
    id: 5,
    name: 'Bölge 5',
    districts: ['Sarıyer', 'Beykoz', 'Çekmeköy'],
    description: 'Kuzey bölgeler. Boğaz ve orman bölgeleri.'
  },
  {
    id: 6,
    name: 'Bölge 6',
    districts: ['Zeytinburnu', 'Eyüpsultan', 'Gaziosmanpaşa', 'Kağıthane'],
    description: 'Merkez-kuzey bölgeler. Karma yerleşim alanları.'
  },
  {
    id: 7,
    name: 'Bölge 7',
    districts: ['Esenyurt', 'Beylikdüzü', 'Avcılar', 'Küçükçekmece'],
    description: 'Batı İstanbul. Yoğun nüfuslu yerleşim bölgeleri.'
  },
  {
    id: 8,
    name: 'Bölge 8',
    districts: ['Tuzla', 'Sultanbeyli', 'Sancaktepe', 'Arnavutköy', 'Silivri'],
    description: 'Uç bölgeler. Sanayi ve organize bölgeler.'
  }
];

export default function BolgelerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold mb-6">
            <MapPin className="w-8 h-8 text-tulpar-night" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-tulpar-text mb-6">
            İstanbul Bölge Sistemi
          </h1>
          <p className="text-xl text-tulpar-muted max-w-2xl mx-auto">
            8 bölge ile şeffaf fiyatlandırma. Alım ve teslim bölgelerine göre fiyat hesaplanır.
          </p>
        </div>
      </section>

      {/* Zone Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone) => (
              <Card key={zone.id} className="bg-tulpar-surface border-tulpar-turquoise/10 hover:border-tulpar-turquoise/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold flex items-center justify-center">
                      <span className="text-tulpar-night font-bold">{zone.id}</span>
                    </div>
                    <CardTitle className="text-tulpar-text">{zone.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-tulpar-muted text-sm mb-4">{zone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {zone.districts.map((district, i) => (
                      <span key={i} className="text-xs bg-tulpar-night px-2 py-1 rounded text-tulpar-text">
                        {district}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-tulpar-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-tulpar-night rounded-xl border border-tulpar-turquoise/20">
              <Info className="w-6 h-6 text-tulpar-turquoise flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-tulpar-text mb-2">Fiyatlandırma Nasıl Çalışır?</h3>
                <ul className="space-y-2 text-tulpar-muted">
                  <li>• Alım bölgesi ve teslim bölgesi seçilir.</li>
                  <li>• Bölgeler arası mesafeye göre taban fiyat belirlenir.</li>
                  <li>• Aynı bölge içi teslimatlar en uygun fiyattadır.</li>
                  <li>• Ek ağırlık, bekleme ve zaman dilimine göre ücret hesaplanır.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-tulpar-text mb-4">
            Teslimat Ücretinizi Öğrenin
          </h2>
          <p className="text-tulpar-muted mb-8">
            Bölgenizi seçin ve anında fiyat hesaplayın.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-bold">
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}