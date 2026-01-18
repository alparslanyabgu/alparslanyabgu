'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Bike, 
  Car, 
  Zap, 
  FileText, 
  Package,
  ArrowRight,
  Clock,
  Shield,
  MapPin,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TulparLogo } from '@/components/TulparLogo';
import { WhatsAppButton } from '@/components/WhatsAppButton';

// Hizmet Kartları
const services = [
  {
    icon: Bike,
    title: 'Moto Kurye',
    description: 'Trafikte hızlı teslimat. İstanbul içi aynı gün.',
    color: 'from-tulpar-turquoise to-teal-600'
  },
  {
    icon: Car,
    title: 'Araç Kurye',
    description: 'Büyük paketler için araçlı teslimat hizmeti.',
    color: 'from-tulpar-gold to-amber-600'
  },
  {
    icon: Zap,
    title: 'Acil / Express',
    description: 'Dakikalar içinde alım, en hızlı teslimat.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: FileText,
    title: 'Evrak Taşıma',
    description: 'Güvenli ve gizli evrak teslimatı.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Package,
    title: 'E-ticaret Teslimat',
    description: 'Online satışlarınız için entegre teslimat.',
    color: 'from-rose-500 to-pink-600'
  }
];

// Nasıl Çalışır Adımları
const steps = [
  {
    number: '01',
    title: 'Fiyat Hesapla',
    description: 'Alım ve teslim bölgelerini seçin, anında fiyat öğrenin.'
  },
  {
    number: '02',
    title: 'Sipariş Ver',
    description: 'WhatsApp veya telefon ile sipariş oluşturun.'
  },
  {
    number: '03',
    title: 'Teslimat',
    description: 'Kuryemiz paketinizi alır ve teslim eder.'
  }
];

// Neden Tulpar
const benefits = [
  {
    icon: Clock,
    title: 'Hızlı Teslimat',
    description: 'Tulpar gibi hızlı. İstanbul içi aynı gün teslimat garantisi.'
  },
  {
    icon: Shield,
    title: 'Şeffaf Fiyat',
    description: 'Gizli ücret yok. Hesapladığınız fiyat, ödediğiniz fiyat.'
  },
  {
    icon: MapPin,
    title: 'İstanbul Uzmanlığı',
    description: 'Her bölgeyi biliriz. 8 bölge, tek fiyat sistemi.'
  }
];

// SSS
const faqs = [
  {
    question: 'Minimum paket ağırlığı nedir?',
    answer: 'Taban ücrete 1 kg veya 1 dm³ dahildir. Üzeri için ek ücret uygulanır.'
  },
  {
    question: 'Gece teslimatı yapıyor musunuz?',
    answer: 'Evet, 7/24 hizmet veriyoruz. Akşam ve gece tarifelerimiz mevcuttur.'
  },
  {
    question: 'Kurumsal abonelik avantajı nedir?',
    answer: 'KDV hariç özel fiyatlar ve öncelikli hizmet avantajı sunuyoruz.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-tulpar-night via-tulpar-surface to-tulpar-night">
        {/* Background Pattern */}
        <div className="absolute inset-0 tulpar-pattern opacity-30" />
        
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-tulpar-turquoise/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tulpar-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tulpar Icon */}
            <div className="flex justify-center mb-8">
              <div className="animate-float">
                <TulparLogo className="w-24 h-24 lg:w-32 lg:h-32" />
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-tulpar-text mb-6 leading-tight">
              İstanbul'da Hızlı Kurye
              <span className="block bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold bg-clip-text text-transparent">
                Tulpar Gibi Hızlı.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-tulpar-muted mb-10 max-w-2xl mx-auto">
              Şeffaf fiyat, zamanında teslimat. <br className="hidden sm:block" />
              İstanbul'un her köşesine güvenle ulaştırırız.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ucret-hesapla">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-bold text-lg px-8 py-6 hover:opacity-90 transition-opacity">
                  <Calculator className="w-5 h-5 mr-2" />
                  Ücret Hesapla
                </Button>
              </Link>
              <WhatsAppButton className="w-full sm:w-auto text-lg px-8 py-6">
                WhatsApp'tan Yaz
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-tulpar-night">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-tulpar-muted text-lg max-w-2xl mx-auto">
              Her türlü kurye ihtiyacınız için profesyonel çözümler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-tulpar-surface border-tulpar-turquoise/10 hover:border-tulpar-turquoise/30 transition-all group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-tulpar-text font-semibold mb-2">{service.title}</h3>
                  <p className="text-tulpar-muted text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/hizmetler">
              <Button variant="outline" className="border-tulpar-turquoise/50 text-tulpar-turquoise hover:bg-tulpar-turquoise/10">
                Tüm Hizmetler
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-tulpar-night to-tulpar-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-tulpar-muted text-lg">
              3 kolay adımda kurye hizmeti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold/50" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-tulpar-surface border-2 border-tulpar-turquoise/30 flex items-center justify-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-tulpar-text mb-2">{step.title}</h3>
                  <p className="text-tulpar-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tulpar */}
      <section className="py-20 bg-tulpar-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-4">
              Neden Tulpar?
            </h2>
            <p className="text-tulpar-muted text-lg">
              Farkımızı keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-tulpar-night/50 border border-tulpar-turquoise/10 hover:border-tulpar-turquoise/30 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-tulpar-turquoise" />
                </div>
                <h3 className="text-xl font-semibold text-tulpar-text mb-3">{benefit.title}</h3>
                <p className="text-tulpar-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-tulpar-night">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-4">
                Sıkça Sorulan Sorular
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-tulpar-surface border border-tulpar-turquoise/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-tulpar-text">{faq.question}</span>
                    <ChevronRight className={`w-5 h-5 text-tulpar-turquoise transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-tulpar-muted">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tulpar-turquoise/20 to-tulpar-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-4">
            Hemen Başlayın
          </h2>
          <p className="text-tulpar-muted text-lg mb-8 max-w-xl mx-auto">
            Kurye ihtiyacınız mı var? Hemen fiyat hesaplayın ve siparişinizi verin.
          </p>
          <Link href="/ucret-hesapla">
            <Button size="lg" className="bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-bold text-lg px-10 py-6">
              <Calculator className="w-5 h-5 mr-2" />
              Ücret Hesapla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}