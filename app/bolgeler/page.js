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
    districts: 'Fatih, Beyoğlu, Şişli (merkez), Beşiktaş',
    description: 'İstanbul\'un kalbi. Tarihi yarımada ve merkezi iş bölgeleri.'
  },
  {
    id: 2,
    name: 'Bölge 2',
    districts: 'Kadıköy, Üsküdar, Ataşehir',
    description: 'Anadolu yakası merkez. Yoğun iş ve ticaret bölgesi.'
  },
  {
    id: 3,
    name: 'Bölge 3',
    districts: 'Bakırköy, Bahçelievler, Bağcılar, Güngören',
    description: 'Batı yakası merkez. Sanayi ve ticaret bölgeleri.'
  },
  {
    id: 4,
    name: 'Bölge 4',
    districts: 'Maltepe, Kartal, Pendik',
    description: 'Anadolu yakası güney. Gelişen iş merkezleri.'
  },
  {
    id: 5,
    name: 'Bölge 5',
    districts: 'Sarıyer, Beykoz, Çekmeköy',
    description: 'Kuzey bölgeler. Boğaz ve orman bölgeleri.'
  },
  {
    id: 6,
    name: 'Bölge 6',
    districts: 'Zeytinburnu, Eyüpsultan, Gaziosmanpaşa, Kağıthane',
    description: 'Merkez-kuzey bölgeler. Karma yerleşim alanları.'
  },
  {
    id: 7,
    name: 'Bölge 7',
    districts: 'Esenyurt, Beylikdüzü, Avcılar, Küçükçekmece',
    description: 'Batı İstanbul. Yoğun nüfuslu yerleşim bölgeleri.'
  },
  {
    id: 8,
    name: 'Bölge 8',
    districts: 'Tuzla, Sultanbeyli, Sancaktepe, Arnavutköy, Silivri',
    description: 'Uç bölgeler. Sanayi ve organize bölgeler.'
  }
];

export default function BolgelerPage() {
  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-6">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-4">
            İstanbul Bölge Sistemi
          </h1>
          <p className="text-tulpar-muted max-w-xl mx-auto">
            8 bölge ile şeffaf fiyatlandırma. Alım ve teslim bölgelerine göre fiyat hesaplanır.
          </p>
        </div>
      </section>

      {/* Zone Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {zones.map((zone) => (
              <Card key={zone.id} className="bg-white border-tulpar-border shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-tulpar-primary flex items-center justify-center">
                      <span className="text-white font-semibold">{zone.id}</span>
                    </div>
                    <CardTitle className="text-tulpar-text text-lg">{zone.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-tulpar-muted text-sm mb-3">{zone.description}</p>
                  <p className="text-tulpar-text text-sm">
                    <span className="font-medium">İlçeler:</span> {zone.districts}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-tulpar-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-tulpar-border">
              <Info className="w-6 h-6 text-tulpar-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-tulpar-text mb-2">Fiyatlandırma Nasıl Çalışır?</h3>
                <ul className="space-y-1 text-tulpar-muted text-sm">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-tulpar-text mb-4">
            Teslimat Ücretinizi Öğrenin
          </h2>
          <p className="text-tulpar-muted mb-8">
            Bölgenizi seçin ve anında fiyat hesaplayın.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}