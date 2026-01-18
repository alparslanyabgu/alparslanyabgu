'use client';

export function TulparLogo({ className = "w-10 h-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Kanatlı At - Tulpar Stilize Logo */}
      <defs>
        <linearGradient id="tulparGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#18B7A1" />
          <stop offset="100%" stopColor="#C7A24B" />
        </linearGradient>
      </defs>
      
      {/* Ana gövde - At */}
      <path
        d="M75 70 Q65 65 60 55 Q58 50 60 45 L65 40 Q70 35 75 38 L80 42 Q85 48 82 55 Q78 65 75 70"
        fill="url(#tulparGradient)"
      />
      
      {/* Baş */}
      <path
        d="M80 42 Q85 35 90 32 L92 34 Q88 38 85 45 Q83 47 80 42"
        fill="url(#tulparGradient)"
      />
      
      {/* Kanat - Üst */}
      <path
        d="M55 50 Q40 35 25 30 Q28 35 32 40 Q38 48 55 50"
        fill="#18B7A1"
        opacity="0.9"
      />
      
      {/* Kanat - Alt */}
      <path
        d="M52 55 Q35 45 20 42 Q25 48 30 52 Q40 58 52 55"
        fill="#18B7A1"
        opacity="0.7"
      />
      
      {/* Kanat - En Alt */}
      <path
        d="M50 60 Q32 55 18 55 Q22 60 28 62 Q38 65 50 60"
        fill="#18B7A1"
        opacity="0.5"
      />
      
      {/* Bacaklar */}
      <path
        d="M70 70 L68 82 L70 83 L73 72 M62 68 L58 80 L60 81 L64 70"
        stroke="url(#tulparGradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Kuyruk */}
      <path
        d="M75 70 Q78 75 85 78 Q80 76 76 72"
        fill="#C7A24B"
        opacity="0.8"
      />
      
      {/* Yele */}
      <path
        d="M75 38 Q72 32 68 28 Q71 30 74 35 M78 40 Q76 34 73 30 Q76 33 79 38"
        stroke="#C7A24B"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function TulparLogoFull({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TulparLogo className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold bg-clip-text text-transparent">
          TULPAR
        </span>
        <span className="text-xs text-tulpar-muted -mt-1">KURYE</span>
      </div>
    </div>
  );
}