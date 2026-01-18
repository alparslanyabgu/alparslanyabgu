import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/WhatsAppButton'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://tulparkurye.com'),
  title: {
    default: 'Tulpar Kurye | İstanbul Hızlı Kurye Hizmeti',
    template: '%s | Tulpar Kurye'
  },
  description: 'İstanbul\'un en hızlı kurye hizmeti. Moto kurye, araç kurye, acil teslimat. Şeffaf fiyat, anında hesaplama. Tulpar gibi hızlı!',
  keywords: ['kurye', 'istanbul kurye', 'moto kurye', 'hızlı kurye', 'acil kurye', 'kurye hizmeti', 'evrak kurye', 'e-ticaret teslimat'],
  authors: [{ name: 'Tulpar Kurye' }],
  creator: 'Tulpar Kurye',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Tulpar Kurye',
    title: 'Tulpar Kurye | İstanbul Hızlı Kurye Hizmeti',
    description: 'İstanbul\'un en hızlı kurye hizmeti. Şeffaf fiyat, anında hesaplama.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulpar Kurye | İstanbul Hızlı Kurye',
    description: 'İstanbul\'un en hızlı kurye hizmeti.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased tulpar-pattern min-h-screen">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tulpar Kurye",
              "description": "İstanbul hızlı kurye hizmeti. Moto kurye, araç kurye, acil teslimat.",
              "url": process.env.NEXT_PUBLIC_BASE_URL,
              "areaServed": {
                "@type": "City",
                "name": "İstanbul"
              },
              "serviceType": ["Moto Kurye", "Araç Kurye", "Acil Kurye", "Evrak Kurye", "E-ticaret Teslimat"],
              "openingHours": "Mo-Su 00:00-24:00",
              "priceRange": "₺₺"
            })
          }}
        />
      </body>
    </html>
  )
}