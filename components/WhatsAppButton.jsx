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
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-tulpar-primary hover:bg-tulpar-primary-hover rounded-full shadow-lg transition-all duration-150">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white border border-tulpar-border rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
          <span className="text-sm text-tulpar-text">
            {hasNumber ? "WhatsApp'tan Yaz" : 'WhatsApp hattımız yakında aktif'}
          </span>
        </div>
      </div>
      
      {!hasNumber && (
        <span className="absolute -top-1 -left-1 bg-tulpar-accent text-white text-xs px-2 py-0.5 rounded-full font-medium">
          Yakında
        </span>
      )}
    </button>
  );
}

export function WhatsAppButton({ message, className = '', children, disabled }) {
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

  if (!hasNumber) {
    return (
      <Button
        disabled
        className={`bg-gray-200 text-gray-500 cursor-not-allowed ${className}`}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        WhatsApp hattımız yakında aktif
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-tulpar-primary hover:bg-tulpar-primary-hover text-white ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children || "WhatsApp'tan Yaz"}
    </Button>
  );
}