'use client';

import { useState, useEffect } from 'react';
import { Calculator, Info, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { calculatePrice, generateWhatsAppMessage } from '@/lib/pricing-utils';

export default function UcretHesaplaPage() {
  const zones = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Pricing data from API
  const [pricingData, setPricingData] = useState(null);
  const [settings, setSettings] = useState(null);
  
  // Form State
  const [pickupZone, setPickupZone] = useState('1');
  const [dropZone, setDropZone] = useState('2');
  const [tariff, setTariff] = useState('pesin_kdv_dahil');
  const [weight, setWeight] = useState('1');
  const [volume, setVolume] = useState('1');
  const [waitMinutes, setWaitMinutes] = useState('0');
  const [timeSlot, setTimeSlot] = useState('daytime');
  const [isCarCourier, setIsCarCourier] = useState(false);
  
  // Customer Info
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [notes, setNotes] = useState('');
  
  // UI State
  const [result, setResult] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Fetch pricing and settings
  useEffect(() => {
    fetchPricing();
    fetchSettings();
  }, []);

  const fetchPricing = async () => {
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setPricingData(data);
    } catch (err) {
      console.error('Fiyat verisi alınamadı:', err);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      setSettings(data);
    } catch (err) {
      console.error('Ayarlar alınamadı:', err);
    }
  };

  // Calculate on form change
  useEffect(() => {
    if (!pricingData) return;
    
    try {
      const calculation = calculatePrice({
        pickupZone: parseInt(pickupZone),
        dropZone: parseInt(dropZone),
        tariff,
        weight: parseFloat(weight) || 0,
        volume: parseFloat(volume) || 0,
        waitMinutes: parseInt(waitMinutes) || 0,
        timeSlot,
        isCarCourier,
        pricingData
      });
      setResult(calculation);
    } catch (err) {
      console.error('Hesaplama hatası:', err);
      setResult(null);
    }
  }, [pickupZone, dropZone, tariff, weight, volume, waitMinutes, timeSlot, isCarCourier, pricingData]);

  const handleSubmitOrder = async () => {
    if (!customerName || !customerPhone) {
      alert('Lütfen ad ve telefon bilgilerinizi girin.');
      return;
    }

    setSubmitting(true);
    
    try {
      // Save order to database
      const orderData = {
        customerName,
        customerPhone,
        pickupZone: parseInt(pickupZone),
        dropZone: parseInt(dropZone),
        pickupAddress,
        dropAddress,
        tariff,
        weight: parseFloat(weight) || 0,
        volume: parseFloat(volume) || 0,
        waitMinutes: parseInt(waitMinutes) || 0,
        timeSlot,
        isCarCourier,
        total: result?.total || 0,
        breakdown: result?.breakdown || {},
        notes
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (res.ok) {
        setOrderSuccess(true);
        
        // Generate WhatsApp message
        const whatsappMessage = generateWhatsAppMessage({
          pickupZone,
          dropZone,
          tariff,
          weight: parseFloat(weight) || 0,
          volume: parseFloat(volume) || 0,
          waitMinutes: parseInt(waitMinutes) || 0,
          timeSlot,
          isCarCourier,
          total: result?.total || 0,
          customerName,
          customerPhone,
          pickupAddress,
          dropAddress,
          notes
        });

        // Redirect to WhatsApp if number exists
        if (settings?.whatsappNumber) {
          setTimeout(() => {
            window.open(`https://wa.me/${settings.whatsappNumber}?text=${whatsappMessage}`, '_blank');
          }, 1500);
        }
      }
    } catch (err) {
      console.error('Sipariş gönderilemedi:', err);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowOrderForm(false);
    setOrderSuccess(false);
    setCustomerName('');
    setCustomerPhone('');
    setPickupAddress('');
    setDropAddress('');
    setNotes('');
  };

  const hasWhatsApp = settings?.whatsappNumber && settings.whatsappNumber.trim() !== '';

  return (
    <div className="min-h-screen bg-tulpar-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tulpar-primary mb-4">
            <Calculator className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-3">
            Ücret Hesapla
          </h1>
          <p className="text-tulpar-muted max-w-md mx-auto">
            Alım ve teslim bölgelerini seçin, anında şeffaf fiyat öğrenin.
          </p>
        </div>

        {orderSuccess ? (
          <div className="max-w-md mx-auto">
            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-tulpar-text mb-2">Siparişiniz Alındı!</h2>
                <p className="text-tulpar-muted mb-6">
                  {hasWhatsApp 
                    ? 'WhatsApp üzerinden sipariş detaylarınızı paylaşabilirsiniz.'
                    : 'En kısa sürede sizinle iletişime geçeceğiz.'}
                </p>
                {hasWhatsApp && (
                  <Button
                    onClick={() => {
                      const msg = generateWhatsAppMessage({
                        pickupZone, dropZone, tariff,
                        weight: parseFloat(weight) || 0,
                        volume: parseFloat(volume) || 0,
                        waitMinutes: parseInt(waitMinutes) || 0,
                        timeSlot, isCarCourier,
                        total: result?.total || 0,
                        customerName, customerPhone,
                        pickupAddress, dropAddress, notes
                      });
                      window.open(`https://wa.me/${settings.whatsappNumber}?text=${msg}`, '_blank');
                    }}
                    className="w-full bg-tulpar-primary hover:bg-tulpar-primary-hover text-white mb-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp'tan Devam Et
                  </Button>
                )}
                <Button variant="outline" onClick={resetForm} className="w-full border-tulpar-border">
                  Yeni Hesaplama Yap
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-tulpar-text text-lg">
                  {showOrderForm ? 'Sipariş Bilgileri' : 'Teslimat Bilgileri'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!showOrderForm ? (
                  <>
                    {/* Bölgeler */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Alım Bölgesi</Label>
                        <Select value={pickupZone} onValueChange={setPickupZone}>
                          <SelectTrigger className="bg-white border-tulpar-border text-tulpar-text">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-tulpar-border">
                            {zones.map(zone => (
                              <SelectItem key={zone} value={zone.toString()} className="text-tulpar-text">
                                Bölge {zone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Teslim Bölgesi</Label>
                        <Select value={dropZone} onValueChange={setDropZone}>
                          <SelectTrigger className="bg-white border-tulpar-border text-tulpar-text">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-tulpar-border">
                            {zones.map(zone => (
                              <SelectItem key={zone} value={zone.toString()} className="text-tulpar-text">
                                Bölge {zone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Tarife */}
                    <div className="space-y-3">
                      <Label className="text-tulpar-text text-sm">Tarife</Label>
                      <RadioGroup value={tariff} onValueChange={setTariff} className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 bg-tulpar-section p-4 rounded-lg border border-tulpar-border cursor-pointer hover:border-tulpar-primary transition-colors">
                          <RadioGroupItem value="pesin_kdv_dahil" id="pesin" className="border-tulpar-border text-tulpar-primary" />
                          <Label htmlFor="pesin" className="text-tulpar-text cursor-pointer text-sm">
                            Peşin <span className="text-tulpar-muted text-xs">(KDV Dahil)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-tulpar-section p-4 rounded-lg border border-tulpar-border cursor-pointer hover:border-tulpar-primary transition-colors">
                          <RadioGroupItem value="abone_kdv_haric" id="abone" className="border-tulpar-border text-tulpar-primary" />
                          <Label htmlFor="abone" className="text-tulpar-text cursor-pointer text-sm">
                            Abone <span className="text-tulpar-muted text-xs">(KDV Hariç)</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Ağırlık ve Hacim */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Ağırlık (kg)</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.1"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="bg-white border-tulpar-border text-tulpar-text"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Hacim (dm³)</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.1"
                          value={volume}
                          onChange={(e) => setVolume(e.target.value)}
                          className="bg-white border-tulpar-border text-tulpar-text"
                        />
                      </div>
                    </div>

                    {/* Bekleme */}
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Bekleme Süresi (dakika)</Label>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        value={waitMinutes}
                        onChange={(e) => setWaitMinutes(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                      />
                      <p className="text-xs text-tulpar-muted">İlk 5 dakika ücretsiz</p>
                    </div>

                    {/* Zaman Dilimi */}
                    <div className="space-y-3">
                      <Label className="text-tulpar-text text-sm">Zaman Dilimi</Label>
                      <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="space-y-2">
                        <div className="flex items-center space-x-3 bg-tulpar-section p-3 rounded-lg border border-tulpar-border">
                          <RadioGroupItem value="daytime" id="daytime" className="border-tulpar-border text-tulpar-primary" />
                          <Label htmlFor="daytime" className="text-tulpar-text cursor-pointer flex-1 text-sm">
                            Gündüz <span className="text-tulpar-muted">(Normal)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-tulpar-section p-3 rounded-lg border border-tulpar-border">
                          <RadioGroupItem value="evening" id="evening" className="border-tulpar-border text-tulpar-primary" />
                          <Label htmlFor="evening" className="text-tulpar-text cursor-pointer flex-1 text-sm">
                            Akşam <span className="text-tulpar-muted">(18:00-21:00) — 2x</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-tulpar-section p-3 rounded-lg border border-tulpar-border">
                          <RadioGroupItem value="night" id="night" className="border-tulpar-border text-tulpar-primary" />
                          <Label htmlFor="night" className="text-tulpar-text cursor-pointer flex-1 text-sm">
                            Gece <span className="text-tulpar-muted">(21:00-24:00) — 3x</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Araç Kurye */}
                    <div className="flex items-center justify-between bg-tulpar-section p-4 rounded-lg border border-tulpar-border">
                      <div>
                        <Label className="text-tulpar-text text-sm">Araç Kurye</Label>
                        <p className="text-xs text-tulpar-muted">Büyük paketler için (6x çarpan)</p>
                      </div>
                      <Switch
                        checked={isCarCourier}
                        onCheckedChange={setIsCarCourier}
                        className="data-[state=checked]:bg-tulpar-primary"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Customer Info Form */}
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Ad Soyad *</Label>
                      <Input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                        placeholder="Adınız Soyadınız"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Telefon *</Label>
                      <Input
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                        placeholder="05xx xxx xx xx"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Alım Adresi</Label>
                      <Textarea
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                        placeholder="Paket alınacak adres"
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Teslim Adresi</Label>
                      <Textarea
                        value={dropAddress}
                        onChange={(e) => setDropAddress(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                        placeholder="Paket teslim edilecek adres"
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Not (Opsiyonel)</Label>
                      <Textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="bg-white border-tulpar-border text-tulpar-text"
                        placeholder="Ek bilgiler..."
                        rows={2}
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowOrderForm(false)}
                        className="flex-1 border-tulpar-border"
                      >
                        Geri
                      </Button>
                      <Button
                        onClick={handleSubmitOrder}
                        disabled={submitting || !customerName || !customerPhone}
                        className="flex-1 bg-tulpar-primary hover:bg-tulpar-primary-hover text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {submitting ? 'Gönderiliyor...' : 'Sipariş Ver'}
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Result */}
            <div className="space-y-6">
              {result && (
                <>
                  {/* Total Card */}
                  <Card className="bg-white border-tulpar-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-tulpar-muted text-sm font-normal">Hesap Özeti</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl lg:text-5xl font-semibold text-tulpar-primary mb-1">
                        {result.total.toFixed(2)} ₺
                      </p>
                      <p className="text-tulpar-muted text-sm">
                        {result.breakdown.kdvIncluded ? 'KDV Dahil' : 'KDV Hariç'}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Breakdown */}
                  <Card className="bg-white border-tulpar-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-tulpar-text text-base">Fiyat Detayı</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-tulpar-border">
                        <span className="text-tulpar-muted text-sm">Taban ücret</span>
                        <span className="text-tulpar-text font-medium">{result.breakdown.base.toFixed(2)} ₺</span>
                      </div>

                      {result.breakdown.extraWeightVolume.total > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-tulpar-border">
                          <span className="text-tulpar-muted text-sm">
                            Ek kg/dm³ ({result.breakdown.extraWeightVolume.units} × {result.breakdown.extraWeightVolume.unitPrice.toFixed(2)} ₺)
                          </span>
                          <span className="text-tulpar-text font-medium">{result.breakdown.extraWeightVolume.total.toFixed(2)} ₺</span>
                        </div>
                      )}

                      {result.breakdown.wait.total > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-tulpar-border">
                          <span className="text-tulpar-muted text-sm">
                            Bekleme ({result.breakdown.wait.extraMinutes} dk × {result.breakdown.wait.minutePrice.toFixed(2)} ₺)
                          </span>
                          <span className="text-tulpar-text font-medium">{result.breakdown.wait.total.toFixed(2)} ₺</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center py-2 border-b border-tulpar-border">
                        <span className="text-tulpar-muted text-sm">Ara toplam</span>
                        <span className="text-tulpar-text font-medium">{result.breakdown.subtotal.toFixed(2)} ₺</span>
                      </div>

                      {(result.breakdown.timeMultiplier.value > 1 || result.breakdown.carMultiplier.isActive) && (
                        <div className="py-2 border-b border-tulpar-border space-y-2">
                          {result.breakdown.timeMultiplier.value > 1 && (
                            <div className="flex justify-between items-center">
                              <span className="text-tulpar-muted text-sm">
                                {result.breakdown.timeMultiplier.label} çarpanı
                              </span>
                              <span className="text-tulpar-accent font-medium">×{result.breakdown.timeMultiplier.value}</span>
                            </div>
                          )}
                          {result.breakdown.carMultiplier.isActive && (
                            <div className="flex justify-between items-center">
                              <span className="text-tulpar-muted text-sm">Araç kurye çarpanı</span>
                              <span className="text-tulpar-accent font-medium">×{result.breakdown.carMultiplier.value}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-tulpar-text font-semibold">Toplam</span>
                        <span className="text-2xl font-semibold text-tulpar-primary">{result.total.toFixed(2)} ₺</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Order CTA */}
                  {!showOrderForm && (
                    <Button
                      onClick={() => setShowOrderForm(true)}
                      className="w-full py-6 text-base bg-tulpar-primary hover:bg-tulpar-primary-hover text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Bu Fiyatla Sipariş Ver
                    </Button>
                  )}

                  {/* Info */}
                  <div className="flex items-start gap-3 p-4 bg-tulpar-section rounded-lg border border-tulpar-border">
                    <Info className="w-5 h-5 text-tulpar-primary mt-0.5 flex-shrink-0" />
                    <p className="text-tulpar-muted text-sm">
                      Fiyatlar tahminidir. Kesin fiyat, sipariş detaylarına göre belirlenir. 
                      Taban ücrete 1 kg veya 1 dm³'e kadar dahildir.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
