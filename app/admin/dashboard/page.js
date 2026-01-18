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
  X,
  Package,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TulparLogo } from '@/components/TulparLogo';

export default function AdminDashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Siparişler yüklenemedi:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

  const stats = {
    total: orders.length,
    new: orders.filter(o => o.status === 'new').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="min-h-screen bg-tulpar-bg">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-tulpar-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-tulpar-border">
            <div className="flex items-center gap-2">
              <TulparLogo className="w-8 h-8" />
              <div>
                <span className="font-semibold text-tulpar-text">TULPAR</span>
                <span className="text-xs text-tulpar-muted block -mt-1">Admin Panel</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 space-y-1">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-tulpar-section text-tulpar-primary font-medium">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Siparişler
              {stats.new > 0 && (
                <span className="ml-auto bg-tulpar-primary text-white text-xs px-2 py-0.5 rounded-full">{stats.new}</span>
              )}
            </Link>
            <Link href="/admin/pricing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <DollarSign className="w-5 h-5" />
              Fiyatlandırma
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-tulpar-muted hover:bg-tulpar-section hover:text-tulpar-text transition-colors">
              <Settings className="w-5 h-5" />
              Ayarlar
            </Link>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-tulpar-border">
            <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-red-500 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-tulpar-border px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-tulpar-muted hover:text-tulpar-text">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-tulpar-text">Dashboard</h1>
            <Link href="/" className="text-sm text-tulpar-primary hover:underline">Siteyi Gör →</Link>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white border-tulpar-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-tulpar-muted text-sm">Toplam Sipariş</p>
                    <p className="text-2xl font-semibold text-tulpar-text">{stats.total}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-tulpar-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-tulpar-muted text-sm">Yeni</p>
                    <p className="text-2xl font-semibold text-tulpar-text">{stats.new}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-tulpar-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-tulpar-muted text-sm">İşlemde</p>
                    <p className="text-2xl font-semibold text-tulpar-text">{stats.processing}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-tulpar-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-tulpar-muted text-sm">Tamamlandı</p>
                    <p className="text-2xl font-semibold text-tulpar-text">{stats.completed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card className="bg-white border-tulpar-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-tulpar-text">Son Siparişler</CardTitle>
              <Link href="/admin/orders">
                <Button variant="outline" size="sm" className="border-tulpar-border text-tulpar-text">
                  Tümünü Gör
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-tulpar-muted text-center py-8">Yükleniyor...</p>
              ) : recentOrders.length === 0 ? (
                <p className="text-tulpar-muted text-center py-8">Henüz sipariş yok</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-tulpar-border">
                        <th className="text-left py-3 px-2 text-tulpar-muted text-sm font-medium">Müşteri</th>
                        <th className="text-left py-3 px-2 text-tulpar-muted text-sm font-medium">Bölge</th>
                        <th className="text-left py-3 px-2 text-tulpar-muted text-sm font-medium">Tutar</th>
                        <th className="text-left py-3 px-2 text-tulpar-muted text-sm font-medium">Durum</th>
                        <th className="text-left py-3 px-2 text-tulpar-muted text-sm font-medium">Tarih</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-tulpar-border last:border-b-0">
                          <td className="py-3 px-2">
                            <p className="text-tulpar-text font-medium text-sm">{order.customerName || '-'}</p>
                            <p className="text-tulpar-muted text-xs">{order.customerPhone || '-'}</p>
                          </td>
                          <td className="py-3 px-2 text-tulpar-text text-sm">
                            {order.pickupZone} → {order.dropZone}
                          </td>
                          <td className="py-3 px-2 text-tulpar-primary font-medium text-sm">
                            {order.total?.toFixed(2)} ₺
                          </td>
                          <td className="py-3 px-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              order.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                              order.status === 'processing' ? 'bg-orange-100 text-orange-700' :
                              order.status === 'completed' ? 'bg-green-100 text-green-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {order.status === 'new' ? 'Yeni' :
                               order.status === 'processing' ? 'İşlemde' :
                               order.status === 'completed' ? 'Tamamlandı' : 'İptal'}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-tulpar-muted text-sm">
                            {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
