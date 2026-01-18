'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  DollarSign, 
  Settings, 
  LogOut,
  Menu,
  Save,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TulparLogo } from '@/components/TulparLogo';

export default function AdminPricingPage() {
  const router = useRouter();
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pesin_kdv_dahil');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setPricing(data);
    } catch (err) {
      console.error('Fiyat verisi yüklenemedi:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMatrixChange = (tariff, from, to, value) => {
    setPricing(prev => ({
      ...prev,
      tariffs: {
        ...prev.tariffs,
        [tariff]: {
          ...prev.tariffs[tariff],
          base_matrix: {
            ...prev.tariffs[tariff].base_matrix,
            [from]: {
              ...prev.tariffs[tariff].base_matrix[from],
              [to]: parseFloat(value) || 0
            }
          }
        }
      }
    }));
  };

  const handleSettingChange = (tariff, key, value) => {
    setPricing(prev => ({
      ...prev,
      tariffs: {
        ...prev.tariffs,
        [tariff]: {
          ...prev.tariffs[tariff],
          [key]: parseFloat(value) || 0
        }
      }
    }));
  };

  const savePricing = async () => {
    setSaving(true);
    try {
      await fetch('/api/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pricing)
      });
      alert('Fiyatlar başarıyla güncellendi!');
    } catch (err) {
      console.error('Kayıt hatası:', err);
      alert('Kaydetme sırasında bir hata oluştu.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

  const zones = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-tulpar-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-tulpar-border">
            <div className="flex items-center gap-2">
              <TulparLogo className="w-8 h-8" />
              <div>
                <span className="font-semibold text-tulpar-text">TULPAR</span>
                <span className="text-xs text-tulpar-muted block -mt-1">Admin Panel</span>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Siparişler
            </Link>
            <Link href="/admin/pricing" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-tulpar-section text-tulpar-primary font-medium">
              <DollarSign className="w-5 h-5" />
              Fiyatlandırma
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <Settings className="w-5 h-5" />
              Ayarlar
            </Link>
          </nav>
          <div className="p-4 border-t border-tulpar-border">
            <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-red-500 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="lg:ml-64">
        <header className="sticky top-0 z-30 bg-white border-b border-tulpar-border px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-tulpar-muted hover:text-tulpar-text">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-tulpar-text">Fiyatlandırma</h1>
            <div className="flex items-center gap-2">
              <Button onClick={fetchPricing} variant="outline" size="sm" className="border-tulpar-border">
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button onClick={savePricing} disabled={saving} size="sm" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Kaydediliyor...' : 'Kaydet'}
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {loading ? (
            <p className="text-tulpar-muted text-center py-12">Yükleniyor...</p>
          ) : !pricing ? (
            <p className="text-red-500 text-center py-12">Fiyat verisi yüklenemedi</p>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-white border border-tulpar-border mb-6">
                <TabsTrigger value="pesin_kdv_dahil" className="data-[state=active]:bg-tulpar-primary data-[state=active]:text-white">
                  Peşin (KDV Dahil)
                </TabsTrigger>
                <TabsTrigger value="abone_kdv_haric" className="data-[state=active]:bg-tulpar-primary data-[state=active]:text-white">
                  Abone (KDV Hariç)
                </TabsTrigger>
              </TabsList>

              {['pesin_kdv_dahil', 'abone_kdv_haric'].map(tariff => (
                <TabsContent key={tariff} value={tariff} className="space-y-6">
                  {/* Price Matrix */}
                  <Card className="bg-white border-tulpar-border">
                    <CardHeader>
                      <CardTitle className="text-tulpar-text">Fiyat Matrisi (TL)</CardTitle>
                      <CardDescription>Satır: Alım Bölgesi, Sütun: Teslim Bölgesi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr>
                              <th className="p-2 text-tulpar-muted font-medium">Bölge</th>
                              {zones.map(z => (
                                <th key={z} className="p-2 text-tulpar-muted font-medium text-center">B{z}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {zones.map(from => (
                              <tr key={from}>
                                <td className="p-2 text-tulpar-text font-medium">B{from}</td>
                                {zones.map(to => (
                                  <td key={to} className="p-1">
                                    <Input
                                      type="number"
                                      min="0"
                                      step="0.5"
                                      value={pricing.tariffs[tariff].base_matrix[from.toString()][to.toString()]}
                                      onChange={(e) => handleMatrixChange(tariff, from.toString(), to.toString(), e.target.value)}
                                      className="w-16 h-8 text-center text-sm bg-white border-tulpar-border"
                                    />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Other Settings */}
                  <Card className="bg-white border-tulpar-border">
                    <CardHeader>
                      <CardTitle className="text-tulpar-text">Diğer Ayarlar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Ücretsiz Bekleme (dk)</Label>
                          <Input
                            type="number"
                            min="0"
                            value={pricing.tariffs[tariff].wait_free_minutes}
                            onChange={(e) => handleSettingChange(tariff, 'wait_free_minutes', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Bekleme Ücreti (TL/dk)</Label>
                          <Input
                            type="number"
                            min="0"
                            step="0.1"
                            value={pricing.tariffs[tariff].wait_per_minute}
                            onChange={(e) => handleSettingChange(tariff, 'wait_per_minute', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Dahil kg/dm³</Label>
                          <Input
                            type="number"
                            min="0"
                            value={pricing.tariffs[tariff].base_includes_kg_or_dm3}
                            onChange={(e) => handleSettingChange(tariff, 'base_includes_kg_or_dm3', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Ekstra kg/dm³ Ücreti (TL)</Label>
                          <Input
                            type="number"
                            min="0"
                            step="0.1"
                            value={pricing.tariffs[tariff].extra_per_kg_or_dm3}
                            onChange={(e) => handleSettingChange(tariff, 'extra_per_kg_or_dm3', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Akşam Çarpanı (18:00-21:00)</Label>
                          <Input
                            type="number"
                            min="1"
                            step="0.1"
                            value={pricing.tariffs[tariff].evening_multiplier}
                            onChange={(e) => handleSettingChange(tariff, 'evening_multiplier', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Gece Çarpanı (21:00-24:00)</Label>
                          <Input
                            type="number"
                            min="1"
                            step="0.1"
                            value={pricing.tariffs[tariff].night_multiplier}
                            onChange={(e) => handleSettingChange(tariff, 'night_multiplier', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-tulpar-text">Araç Kurye Çarpanı</Label>
                          <Input
                            type="number"
                            min="1"
                            step="0.1"
                            value={pricing.tariffs[tariff].car_multiplier}
                            onChange={(e) => handleSettingChange(tariff, 'car_multiplier', e.target.value)}
                            className="bg-white border-tulpar-border"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </main>
      </div>
    </div>
  );
}
