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
  Eye,
  Trash2,
  Filter,
  RefreshCw,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TulparLogo } from '@/components/TulparLogo';

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
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

  const updateStatus = async (orderId, status) => {
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchOrders();
    } catch (err) {
      console.error('Durum güncellenemedi:', err);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!confirm('Bu siparişi silmek istediğinize emin misiniz?')) return;
    try {
      await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
      fetchOrders();
      setSelectedOrder(null);
    } catch (err) {
      console.error('Sipariş silinemedi:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.status === filter);
  const stats = { new: orders.filter(o => o.status === 'new').length };

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
            <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-tulpar-section text-tulpar-primary font-medium">
              <ShoppingCart className="w-5 h-5" />
              Siparişler
              {stats.new > 0 && <span className="ml-auto bg-tulpar-primary text-white text-xs px-2 py-0.5 rounded-full">{stats.new}</span>}
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
            <h1 className="text-lg font-semibold text-tulpar-text">Siparişler</h1>
            <Button onClick={fetchOrders} variant="outline" size="sm" className="border-tulpar-border">
              <RefreshCw className="w-4 h-4 mr-2" />
              Yenile
            </Button>
          </div>
        </header>

        <main className="p-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40 bg-white border-tulpar-border">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-tulpar-border">
                <SelectItem value="all">Tümü ({orders.length})</SelectItem>
                <SelectItem value="new">Yeni ({orders.filter(o => o.status === 'new').length})</SelectItem>
                <SelectItem value="processing">İşlemde ({orders.filter(o => o.status === 'processing').length})</SelectItem>
                <SelectItem value="completed">Tamamlandı ({orders.filter(o => o.status === 'completed').length})</SelectItem>
                <SelectItem value="cancelled">İptal ({orders.filter(o => o.status === 'cancelled').length})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Orders List */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-tulpar-border">
                <CardContent className="p-0">
                  {loading ? (
                    <p className="text-tulpar-muted text-center py-12">Yükleniyor...</p>
                  ) : filteredOrders.length === 0 ? (
                    <p className="text-tulpar-muted text-center py-12">Sipariş bulunamadı</p>
                  ) : (
                    <div className="divide-y divide-tulpar-border">
                      {filteredOrders.map((order) => (
                        <div 
                          key={order.id} 
                          onClick={() => setSelectedOrder(order)}
                          className={`p-4 cursor-pointer hover:bg-tulpar-section transition-colors ${selectedOrder?.id === order.id ? 'bg-tulpar-section' : ''}`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-tulpar-text">{order.customerName || 'Misafir'}</p>
                              <p className="text-sm text-tulpar-muted">{order.customerPhone || '-'}</p>
                            </div>
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
                          </div>
                          <div className="mt-2 flex items-center gap-4 text-sm">
                            <span className="text-tulpar-muted">Bölge: {order.pickupZone} → {order.dropZone}</span>
                            <span className="text-tulpar-primary font-medium">{order.total?.toFixed(2)} ₺</span>
                          </div>
                          <p className="text-xs text-tulpar-muted mt-1">
                            {new Date(order.createdAt).toLocaleString('tr-TR')}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Detail */}
            <div>
              {selectedOrder ? (
                <Card className="bg-white border-tulpar-border sticky top-20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-tulpar-text text-base">Sipariş Detayı</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs text-tulpar-muted">Müşteri</p>
                      <p className="text-tulpar-text font-medium">{selectedOrder.customerName || '-'}</p>
                      <p className="text-tulpar-muted text-sm">{selectedOrder.customerPhone || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-tulpar-muted">Alım Adresi</p>
                      <p className="text-tulpar-text text-sm">{selectedOrder.pickupAddress || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-tulpar-muted">Teslim Adresi</p>
                      <p className="text-tulpar-text text-sm">{selectedOrder.dropAddress || '-'}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-tulpar-muted">Bölge</p>
                        <p className="text-tulpar-text text-sm">{selectedOrder.pickupZone} → {selectedOrder.dropZone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-tulpar-muted">Tutar</p>
                        <p className="text-tulpar-primary font-semibold">{selectedOrder.total?.toFixed(2)} ₺</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-tulpar-muted">Not</p>
                      <p className="text-tulpar-text text-sm">{selectedOrder.notes || '-'}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-tulpar-border space-y-2">
                      <p className="text-xs text-tulpar-muted">Durumu Güncelle</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" variant="outline" onClick={() => updateStatus(selectedOrder.id, 'new')} className="text-xs">
                          Yeni
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => updateStatus(selectedOrder.id, 'processing')} className="text-xs">
                          İşlemde
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => updateStatus(selectedOrder.id, 'completed')} className="text-xs bg-green-50 text-green-700 border-green-200">
                          Tamamlandı
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => updateStatus(selectedOrder.id, 'cancelled')} className="text-xs bg-red-50 text-red-700 border-red-200">
                          İptal
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => deleteOrder(selectedOrder.id)} className="flex-1 text-red-500 border-red-200 hover:bg-red-50">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Sil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white border-tulpar-border">
                  <CardContent className="p-8 text-center">
                    <Eye className="w-12 h-12 text-tulpar-muted mx-auto mb-3" />
                    <p className="text-tulpar-muted">Detay görmek için bir sipariş seçin</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
