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
  Lock,
  Phone,
  Mail,
  MapPin,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TulparLogo } from '@/components/TulparLogo';

export default function AdminSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      setSettings(data);
    } catch (err) {
      console.error('Ayarlar yüklenemedi:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      alert('Ayarlar başarıyla güncellendi!');
    } catch (err) {
      console.error('Kayıt hatası:', err);
      alert('Kaydetme sırasında bir hata oluştu.');
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword !== confirmPassword) {
      setPasswordError('Yeni şifreler eşleşmiyor');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Şifre en az 6 karakter olmalı');
      return;
    }

    setChangingPassword(true);
    try {
      const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: adminUser.username,
          currentPassword,
          newPassword
        })
      });

      const data = await res.json();
      
      if (!res.ok) {
        setPasswordError(data.error || 'Şifre değiştirilemedi');
      } else {
        setPasswordSuccess('Şifre başarıyla değiştirildi!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
      setPasswordError('Bir hata oluştu');
    } finally {
      setChangingPassword(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

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
            <Link href="/admin/pricing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <DollarSign className="w-5 h-5" />
              Fiyatlandırma
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-tulpar-section text-tulpar-primary font-medium">
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
            <h1 className="text-lg font-semibold text-tulpar-text">Ayarlar</h1>
            <Button onClick={saveSettings} disabled={saving} size="sm" className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Kaydediliyor...' : 'Kaydet'}
            </Button>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {loading ? (
            <p className="text-tulpar-muted text-center py-12">Yükleniyor...</p>
          ) : !settings ? (
            <p className="text-red-500 text-center py-12">Ayarlar yüklenemedi</p>
          ) : (
            <>
              {/* General Settings */}
              <Card className="bg-white border-tulpar-border">
                <CardHeader>
                  <CardTitle className="text-tulpar-text flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Genel Ayarlar
                  </CardTitle>
                  <CardDescription>İşletme bilgilerinizi düzenleyin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-tulpar-text">Şirket Adı</Label>
                      <Input
                        value={settings.companyName || ''}
                        onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        WhatsApp Numarası
                      </Label>
                      <Input
                        value={settings.whatsappNumber || ''}
                        onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                        placeholder="905xxxxxxxxx"
                        className="bg-white border-tulpar-border"
                      />
                      <p className="text-xs text-tulpar-muted">Ülke kodu ile birlikte (90 ile başlayın)</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-tulpar-text flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        E-posta
                      </Label>
                      <Input
                        type="email"
                        value={settings.email || ''}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Adres
                      </Label>
                      <Input
                        value={settings.address || ''}
                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                        className="bg-white border-tulpar-border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Password Change */}
              <Card className="bg-white border-tulpar-border">
                <CardHeader>
                  <CardTitle className="text-tulpar-text flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Şifre Değiştir
                  </CardTitle>
                  <CardDescription>Admin şifrenizi güncelleyin</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                    {passwordError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {passwordError}
                      </div>
                    )}
                    {passwordSuccess && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                        {passwordSuccess}
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label className="text-tulpar-text">Mevcut Şifre</Label>
                      <Input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="bg-white border-tulpar-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text">Yeni Şifre</Label>
                      <Input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-white border-tulpar-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text">Yeni Şifre (Tekrar)</Label>
                      <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-white border-tulpar-border"
                        required
                      />
                    </div>
                    <Button type="submit" disabled={changingPassword} className="bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
                      {changingPassword ? 'Değiştiriliyor...' : 'Şifreyi Değiştir'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
