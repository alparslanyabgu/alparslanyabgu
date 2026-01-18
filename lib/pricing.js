// Tulpar Kurye Fiyatlandırma Hesaplama Modülü
import pricingData from '@/data/pricing.json';

export function calculatePrice({
  pickupZone,
  dropZone,
  tariff, // 'pesin_kdv_dahil' | 'abone_kdv_haric'
  weight, // kg (decimal)
  volume, // dm3 (decimal)
  waitMinutes,
  timeSlot, // 'daytime' | 'evening' | 'night'
  isCarCourier
}) {
  const tariffData = pricingData.tariffs[tariff];
  
  if (!tariffData) {
    throw new Error('Geçersiz tarife');
  }

  // 1. Taban ücret (matristen)
  const basePrice = tariffData.base_matrix[pickupZone.toString()][dropZone.toString()];

  // 2. Ekstra ağırlık/hacim ücreti
  // chargeable_units = max(0, ceil(max(kg, dm3) - 1))
  const maxWeightVolume = Math.max(weight, volume);
  const chargeableUnits = Math.max(0, Math.ceil(maxWeightVolume - tariffData.base_includes_kg_or_dm3));
  const extraWeightCost = chargeableUnits * tariffData.extra_per_kg_or_dm3;

  // 3. Bekleme ücreti
  // extra_wait_minutes = max(0, wait_minutes - 5)
  const extraWaitMinutes = Math.max(0, waitMinutes - tariffData.wait_free_minutes);
  const waitCost = extraWaitMinutes * tariffData.wait_per_minute;

  // 4. Zaman çarpanı
  let timeMultiplier = 1;
  let timeLabel = 'Gündüz';
  if (timeSlot === 'evening') {
    timeMultiplier = tariffData.evening_multiplier;
    timeLabel = 'Akşam (18:00-21:00)';
  } else if (timeSlot === 'night') {
    timeMultiplier = tariffData.night_multiplier;
    timeLabel = 'Gece (21:00-24:00)';
  }

  // 5. Araç kurye çarpanı
  const carMultiplier = isCarCourier ? tariffData.car_multiplier : 1;

  // 6. Toplam hesaplama
  const subtotal = basePrice + extraWeightCost + waitCost;
  const total = subtotal * timeMultiplier * carMultiplier;

  // Breakdown detayları
  return {
    breakdown: {
      base: basePrice,
      extraWeightVolume: {
        units: chargeableUnits,
        unitPrice: tariffData.extra_per_kg_or_dm3,
        total: extraWeightCost
      },
      wait: {
        freeMinutes: tariffData.wait_free_minutes,
        extraMinutes: extraWaitMinutes,
        minutePrice: tariffData.wait_per_minute,
        total: waitCost
      },
      timeMultiplier: {
        label: timeLabel,
        value: timeMultiplier
      },
      carMultiplier: {
        isActive: isCarCourier,
        value: carMultiplier
      },
      subtotal,
      kdvIncluded: tariffData.kdv_included
    },
    total: Math.round(total * 100) / 100
  };
}

// WhatsApp mesajı oluştur
export function generateWhatsAppMessage({
  pickupZone,
  dropZone,
  tariff,
  weight,
  volume,
  waitMinutes,
  timeSlot,
  isCarCourier,
  total
}) {
  const tariffLabel = tariff === 'pesin_kdv_dahil' ? 'Peşin (KDV Dahil)' : 'Abone (KDV Hariç)';
  const timeLabels = {
    daytime: 'Gündüz',
    evening: 'Akşam (18:00-21:00)',
    night: 'Gece (21:00-24:00)'
  };

  const message = `Merhaba, İstanbul içi kurye talebim var.

Alım Bölgesi: ${pickupZone}
Teslim Bölgesi: ${dropZone}
Tarife: ${tariffLabel}
Kg: ${weight}
Dm³: ${volume}
Bekleme: ${waitMinutes} dk
Zaman: ${timeLabels[timeSlot]}
Araç kurye: ${isCarCourier ? 'Evet' : 'Hayır'}
Hesaplanan Tutar: ${total.toFixed(2)} TL

Adres ve detayları paylaşıyorum: …`;

  return encodeURIComponent(message);
}

export function getZones() {
  return pricingData.zones;
}

export { pricingData };