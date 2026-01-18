'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppFloatingButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const hasNumber = whatsappNumber && whatsappNumber.trim() !== '';

  const handleClick = () => {
    if (hasNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    } else {
      // İletişim sayfasına yönlendir
      window.location.href = '/iletisim';
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={hasNumber ? 'WhatsApp ile iletişime geç' : 'İletişim sayfasına git'}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-tulpar-turquoise rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-tulpar-night" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-tulpar-surface border border-tulpar-turquoise/30 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          <span className="text-sm text-tulpar-text">
            {hasNumber ? "WhatsApp'tan Yaz" : 'İletişime Geç'}
          </span>
        </div>
      </div>
      
      {!hasNumber && (
        <span className="absolute -top-2 -left-2 bg-tulpar-gold text-tulpar-night text-xs px-2 py-0.5 rounded-full font-medium">
          Yakında
        </span>
      )}
    </button>
  );
}

export function WhatsAppButton({ message, className = '', children }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const hasNumber = whatsappNumber && whatsappNumber.trim() !== '';

  const handleClick = () => {
    if (hasNumber) {
      const url = message 
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : `https://wa.me/${whatsappNumber}`;
      window.open(url, '_blank');
    } else {
      window.location.href = '/iletisim';
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-semibold hover:opacity-90 ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children || (hasNumber ? "WhatsApp'tan Yaz" : 'İletişime Geç')}
    </Button>
  );
}