'use client';

export function TulparLogo({ className = "w-8 h-8" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sade Kanatlı At - Tulpar Minimal Logo */}
      <path
        d="M75 70 Q65 65 60 55 Q58 50 60 45 L65 40 Q70 35 75 38 L80 42 Q85 48 82 55 Q78 65 75 70"
        fill="#18B7A1"
      />
      <path
        d="M80 42 Q85 35 90 32 L92 34 Q88 38 85 45 Q83 47 80 42"
        fill="#18B7A1"
      />
      {/* Kanat - Sade */}
      <path
        d="M55 50 Q40 35 25 30 Q28 35 32 40 Q38 48 55 50"
        fill="#18B7A1"
        opacity="0.8"
      />
      <path
        d="M52 55 Q35 45 20 42 Q25 48 30 52 Q40 58 52 55"
        fill="#18B7A1"
        opacity="0.6"
      />
      {/* Bacaklar */}
      <path
        d="M70 70 L68 82 L70 83 L73 72 M62 68 L58 80 L60 81 L64 70"
        stroke="#18B7A1"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function TulparLogoFull({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TulparLogo className="w-9 h-9" />
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-tulpar-text tracking-tight">
          TULPAR
        </span>
        <span className="text-xs text-tulpar-muted -mt-0.5">KURYE</span>
      </div>
    </div>
  );
}