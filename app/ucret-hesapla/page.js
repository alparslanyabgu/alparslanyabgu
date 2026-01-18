'use client';

import { useState, useEffect } from 'react';
import { Calculator, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { calculatePrice, generateWhatsAppMessage, getZones } from '@/lib/pricing';

export default function UcretHesaplaPage() {
  const zones = getZones();
  
  // Form State
  const [pickupZone, setPickupZone] = useState('1');
  const [dropZone, setDropZone] = useState('2');
  const [tariff, setTariff] = useState('pesin_kdv_dahil');
  const [weight, setWeight] = useState('1');
  const [volume, setVolume] = useState('1');
  const [waitMinutes, setWaitMinutes] = useState('0');
  const [timeSlot, setTimeSlot] = useState('daytime');
  const [isCarCourier, setIsCarCourier] = useState(false);
  
  // Result State
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Calculate on form change
  useEffect(() => {
    try {
      const calculation = calculatePrice({
        pickupZone: parseInt(pickupZone),
        dropZone: parseInt(dropZone),
        tariff,
        weight: parseFloat(weight) || 0,
        volume: parseFloat(volume) || 0,
        waitMinutes: parseInt(waitMinutes) || 0,
        timeSlot,
        isCarCourier
      });
      setResult(calculation);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  }, [pickupZone, dropZone, tariff, weight, volume, waitMinutes, timeSlot, isCarCourier]);

  // WhatsApp message
  const whatsappMessage = result ? generateWhatsAppMessage({
    pickupZone,
    dropZone,
    tariff,
    weight: parseFloat(weight) || 0,
    volume: parseFloat(volume) || 0,
    waitMinutes: parseInt(waitMinutes) || 0,
    timeSlot,
    isCarCourier,
    total: result.total
  }) : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tulpar-turquoise to-tulpar-gold mb-4">
            <Calculator className="w-8 h-8 text-tulpar-night" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-tulpar-text mb-3">
            Ücret Hesapla
          </h1>
          <p className="text-tulpar-muted text-lg max-w-xl mx-auto">
            Alım ve teslim bölgelerini seçin, anında şeffaf fiyat öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="bg-tulpar-surface border-tulpar-turquoise/20">
            <CardHeader>
              <CardTitle className="text-tulpar-text">Teslimat Bilgileri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Bölgeler */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-tulpar-text">Alım Bölgesi</Label>
                  <Select value={pickupZone} onValueChange={setPickupZone}>
                    <SelectTrigger className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-tulpar-surface border-tulpar-turquoise/30">
                      {zones.map(zone => (
                        <SelectItem key={zone} value={zone.toString()} className="text-tulpar-text hover:bg-tulpar-turquoise/20">
                          Bölge {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-tulpar-text">Teslim Bölgesi</Label>
                  <Select value={dropZone} onValueChange={setDropZone}>
                    <SelectTrigger className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-tulpar-surface border-tulpar-turquoise/30">
                      {zones.map(zone => (
                        <SelectItem key={zone} value={zone.toString()} className="text-tulpar-text hover:bg-tulpar-turquoise/20">
                          Bölge {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tarife */}
              <div className="space-y-3">
                <Label className="text-tulpar-text">Tarife</Label>
                <RadioGroup value={tariff} onValueChange={setTariff} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 bg-tulpar-night p-4 rounded-lg border border-tulpar-turquoise/20 cursor-pointer hover:border-tulpar-turquoise/50 transition-colors">
                    <RadioGroupItem value="pesin_kdv_dahil" id="pesin" className="border-tulpar-turquoise text-tulpar-turquoise" />
                    <Label htmlFor="pesin" className="text-tulpar-text cursor-pointer">
                      Peşin <span className="text-tulpar-muted text-xs">(KDV Dahil)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-tulpar-night p-4 rounded-lg border border-tulpar-turquoise/20 cursor-pointer hover:border-tulpar-turquoise/50 transition-colors">
                    <RadioGroupItem value="abone_kdv_haric" id="abone" className="border-tulpar-turquoise text-tulpar-turquoise" />
                    <Label htmlFor="abone" className="text-tulpar-text cursor-pointer">
                      Abone <span className="text-tulpar-muted text-xs">(KDV Hariç)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Ağırlık ve Hacim */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-tulpar-text">Ağırlık (kg)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-tulpar-text">Hacim (dm³)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                  />
                </div>
              </div>

              {/* Bekleme */}
              <div className="space-y-2">
                <Label className="text-tulpar-text">Bekleme Süresi (dakika)</Label>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={waitMinutes}
                  onChange={(e) => setWaitMinutes(e.target.value)}
                  className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                />
                <p className="text-xs text-tulpar-muted">İlk 5 dakika ücretsiz</p>
              </div>

              {/* Zaman Dilimi */}
              <div className="space-y-3">
                <Label className="text-tulpar-text">Zaman Dilimi</Label>
                <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="space-y-2">
                  <div className="flex items-center space-x-3 bg-tulpar-night p-3 rounded-lg border border-tulpar-turquoise/20">
                    <RadioGroupItem value="daytime" id="daytime" className="border-tulpar-turquoise text-tulpar-turquoise" />
                    <Label htmlFor="daytime" className="text-tulpar-text cursor-pointer flex-1">
                      Gündüz <span className="text-tulpar-muted text-sm">(Normal)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-tulpar-night p-3 rounded-lg border border-tulpar-turquoise/20">
                    <RadioGroupItem value="evening" id="evening" className="border-tulpar-turquoise text-tulpar-turquoise" />
                    <Label htmlFor="evening" className="text-tulpar-text cursor-pointer flex-1">
                      Akşam <span className="text-tulpar-muted text-sm">(18:00-21:00) - 2x</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-tulpar-night p-3 rounded-lg border border-tulpar-turquoise/20">
                    <RadioGroupItem value="night" id="night" className="border-tulpar-turquoise text-tulpar-turquoise" />
                    <Label htmlFor="night" className="text-tulpar-text cursor-pointer flex-1">
                      Gece <span className="text-tulpar-muted text-sm">(21:00-24:00) - 3x</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Araç Kurye */}
              <div className="flex items-center justify-between bg-tulpar-night p-4 rounded-lg border border-tulpar-turquoise/20">
                <div>
                  <Label className="text-tulpar-text">Araç Kurye</Label>
                  <p className="text-xs text-tulpar-muted">Büyük paketler için (6x çarpan)</p>
                </div>
                <Switch
                  checked={isCarCourier}
                  onCheckedChange={setIsCarCourier}
                  className="data-[state=checked]:bg-tulpar-turquoise"
                />
              </div>
            </CardContent>
          </Card>

          {/* Result */}
          <div className="space-y-6">
            {error ? (
              <Card className="bg-red-500/10 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className="text-red-400">{error}</p>
                </CardContent>
              </Card>
            ) : result && (
              <>
                {/* Total Card */}
                <Card className="bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 border-tulpar-turquoise/30">
                  <CardContent className="p-8 text-center">
                    <p className="text-tulpar-muted mb-2">Toplam Tutar</p>
                    <p className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold bg-clip-text text-transparent">
                      {result.total.toFixed(2)} ₺
                    </p>
                    <p className="text-tulpar-muted text-sm mt-2">
                      {result.breakdown.kdvIncluded ? 'KDV Dahil' : 'KDV Hariç'}
                    </p>
                  </CardContent>
                </Card>

                {/* Breakdown */}
                <Card className="bg-tulpar-surface border-tulpar-turquoise/20">
                  <CardHeader>
                    <CardTitle className="text-tulpar-text text-lg">Fiyat Detayı</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Base */}
                    <div className="flex justify-between items-center py-2 border-b border-tulpar-turquoise/10">
                      <span className="text-tulpar-muted">Taban Ücret</span>
                      <span className="text-tulpar-text font-medium">{result.breakdown.base.toFixed(2)} ₺</span>
                    </div>

                    {/* Extra Weight/Volume */}
                    {result.breakdown.extraWeightVolume.total > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-tulpar-turquoise/10">
                        <span className="text-tulpar-muted">
                          Ekstra Kg/Dm³ ({result.breakdown.extraWeightVolume.units} x {result.breakdown.extraWeightVolume.unitPrice.toFixed(2)} ₺)
                        </span>
                        <span className="text-tulpar-text font-medium">{result.breakdown.extraWeightVolume.total.toFixed(2)} ₺</span>
                      </div>
                    )}

                    {/* Wait */}
                    {result.breakdown.wait.total > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-tulpar-turquoise/10">
                        <span className="text-tulpar-muted">
                          Bekleme ({result.breakdown.wait.extraMinutes} dk x {result.breakdown.wait.minutePrice.toFixed(2)} ₺)
                        </span>
                        <span className="text-tulpar-text font-medium">{result.breakdown.wait.total.toFixed(2)} ₺</span>
                      </div>
                    )}

                    {/* Subtotal */}
                    <div className="flex justify-between items-center py-2 border-b border-tulpar-turquoise/10">
                      <span className="text-tulpar-muted">Ara Toplam</span>
                      <span className="text-tulpar-text font-medium">{result.breakdown.subtotal.toFixed(2)} ₺</span>
                    </div>

                    {/* Multipliers */}
                    {(result.breakdown.timeMultiplier.value > 1 || result.breakdown.carMultiplier.isActive) && (
                      <div className="space-y-2 py-2 border-b border-tulpar-turquoise/10">
                        {result.breakdown.timeMultiplier.value > 1 && (
                          <div className="flex justify-between items-center">
                            <span className="text-tulpar-gold">
                              {result.breakdown.timeMultiplier.label} Çarpanı
                            </span>
                            <span className="text-tulpar-gold font-medium">x{result.breakdown.timeMultiplier.value}</span>
                          </div>
                        )}
                        {result.breakdown.carMultiplier.isActive && (
                          <div className="flex justify-between items-center">
                            <span className="text-tulpar-gold">Araç Kurye Çarpanı</span>
                            <span className="text-tulpar-gold font-medium">x{result.breakdown.carMultiplier.value}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Final Total */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-tulpar-text font-semibold">Toplam</span>
                      <span className="text-2xl font-bold text-tulpar-turquoise">{result.total.toFixed(2)} ₺</span>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <WhatsAppButton message={whatsappMessage} className="w-full py-6 text-lg">
                  Bu Fiyatla Sipariş Ver
                </WhatsAppButton>

                {/* Info */}
                <div className="flex items-start gap-3 p-4 bg-tulpar-night/50 rounded-lg border border-tulpar-turquoise/10">
                  <Info className="w-5 h-5 text-tulpar-turquoise mt-0.5" />
                  <p className="text-tulpar-muted text-sm">
                    Fiyatlar tahminidir. Kesin fiyat, sipariş detaylarına göre belirlenir. 
                    Taban ücrete 1 kg veya 1 dm³'e kadar dahildir.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}