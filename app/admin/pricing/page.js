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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TulparLogo } from '@/components/TulparLogo';

export default function AdminPricingPage() {
  const router = useRouter();
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pesin');
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setPricing(data);
    } catch (err) {
      console.error('Fiyatlar yüklenemedi:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMatrixChange = (tariffKey, fromZone, toZone, value) => {
    setPricing(prev => ({
      ...prev,
      tariffs: {
        ...prev.tariffs,
        [tariffKey]: {
          ...prev.tariffs[tariffKey],
          base_matrix: {
            ...prev.tariffs[tariffKey].base_matrix,
            [fromZone]: {
              ...prev.tariffs[tariffKey].base_matrix[fromZone],
              [toZone]: parseFloat(value) || 0
            }
          }
        }
      }
    }));
  };

  const handleSettingChange = (tariffKey, field, value) => {
    setPricing(prev => ({
      ...prev,
      tariffs: {
        ...prev.tariffs,
        [tariffKey]: {
          ...prev.tariffs[tariffKey],
          [field]: parseFloat(value) || 0
        }
      }
    }));
  };

  const savePricing = async () => {
    setSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await fetch('/api/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pricing)
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Fiyatlar başarıyla kaydedildi!' });
      } else {
        setMessage({ type: 'error', text: 'Kaydetme hatası oluştu.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Bir hata oluştu.' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

  const zones = [1, 2, 3, 4, 5, 6, 7, 8];
  const tariffKey = activeTab === 'pesin' ? 'pesin_kdv_dahil' : 'abone_kdv_haric';
  const currentTariff = pricing?.tariffs?.[tariffKey];

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

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="lg:ml-64">
        <header className="sticky top-0 z-30 bg-white border-b border-tulpar-border px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-tulpar-muted hover:text-tulpar-text">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-tulpar-text">Fiyatlandırma</h1>
            <Button onClick={savePricing} disabled={saving} className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Kaydediliyor...' : 'Kaydet'}
            </Button>
          </div>
        </header>

        <main className="p-6">
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}

          {loading ? (
            <p className="text-tulpar-muted text-center py-12">Yükleniyor...</p>
          ) : pricing && (
            <>
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('pesin')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'pesin' ? 'bg-tulpar-primary text-white' : 'bg-white text-tulpar-muted border border-tulpar-border hover:bg-tulpar-section'
                  }`}
                >
                  Peşin (KDV Dahil)
                </button>
                <button
                  onClick={() => setActiveTab('abone')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'abone' ? 'bg-tulpar-primary text-white' : 'bg-white text-tulpar-muted border border-tulpar-border hover:bg-tulpar-section'
                  }`}
                >
                  Abone (KDV Hariç)
                </button>
              </div>

              {/* Settings */}
              <Card className="bg-white border-tulpar-border mb-6">
                <CardHeader>
                  <CardTitle className="text-tulpar-text text-base">Çarpanlar ve Ek Ücretler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <Label className="text-tulpar-muted text-xs">Ek Kg/Dm³ Ücreti</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={currentTariff?.extra_per_kg_or_dm3 || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'extra_per_kg_or_dm3', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div>
                      <Label className="text-tulpar-muted text-xs">Bekleme (₺/dk)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={currentTariff?.wait_per_minute || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'wait_per_minute', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div>
                      <Label className="text-tulpar-muted text-xs">Akşam Çarpanı</Label>
                      <Input
                        type="number"
                        step="0.5"
                        value={currentTariff?.evening_multiplier || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'evening_multiplier', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div>
                      <Label className="text-tulpar-muted text-xs">Gece Çarpanı</Label>
                      <Input
                        type="number"
                        step="0.5"
                        value={currentTariff?.night_multiplier || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'night_multiplier', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div>
                      <Label className="text-tulpar-muted text-xs">Araç Kurye Çarpanı</Label>
                      <Input
                        type="number"
                        step="1"
                        value={currentTariff?.car_multiplier || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'car_multiplier', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div>
                      <Label className="text-tulpar-muted text-xs">Ücretsiz Bekleme (dk)</Label>
                      <Input
                        type="number"
                        step="1"
                        value={currentTariff?.wait_free_minutes || 0}
                        onChange={(e) => handleSettingChange(tariffKey, 'wait_free_minutes', e.target.value)}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Matrix */}
              <Card className="bg-white border-tulpar-border">
                <CardHeader>
                  <CardTitle className="text-tulpar-text text-base">Bölge Fiyat Matrisi (Taban Ücret)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="p-2 bg-tulpar-section text-tulpar-muted font-medium">Alım / Teslim</th>
                          {zones.map(z => (
                            <th key={z} className="p-2 bg-tulpar-section text-tulpar-muted font-medium text-center">B{z}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {zones.map(fromZone => (
                          <tr key={fromZone}>
                            <td className="p-2 bg-tulpar-section text-tulpar-muted font-medium">Bölge {fromZone}</td>
                            {zones.map(toZone => (
                              <td key={toZone} className="p-1">
                                <Input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={currentTariff?.base_matrix?.[fromZone]?.[toZone] || 0}
                                  onChange={(e) => handleMatrixChange(tariffKey, fromZone, toZone, e.target.value)}
                                  className="w-16 text-center bg-white border-tulpar-border text-sm p-1 h-8"
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
            </>
          )}
        </main>
      </div>
    </div>
  );
}
