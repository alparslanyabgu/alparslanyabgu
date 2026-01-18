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
  Search,
  RefreshCw,
  Eye,
  Trash2,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TulparLogo } from '@/components/TulparLogo';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchOrders();
    fetchSettings();
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

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      setSettings(data);
    } catch (err) {
      console.error('Ayarlar yüklenemedi:', err);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchOrders();
    } catch (err) {
      console.error('Durum güncellenemedi:', err);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!confirm('Bu siparişi silmek istediğinizden emin misiniz?')) return;
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

  const openWhatsApp = (order) => {
    if (!settings?.whatsappNumber) return;
    const message = `Merhaba ${order.customerName}, Tulpar Kurye siparişiniz hakkında bilgi vermek istiyoruz.`;
    window.open(`https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch = !searchTerm || 
      order.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone?.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const stats = {
    new: orders.filter(o => o.status === 'new').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
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
            <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-tulpar-section text-tulpar-primary font-medium">
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
            <h1 className="text-lg font-semibold text-tulpar-text">Siparişler</h1>
            <Button onClick={fetchOrders} variant="outline" size="sm" className="border-tulpar-border">
              <RefreshCw className="w-4 h-4 mr-2" />
              Yenile
            </Button>
          </div>
        </header>

        <main className="p-6">
          {/* Filters */}
          <Card className="bg-white border-tulpar-border mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tulpar-muted" />
                  <Input
                    placeholder="Müşteri adı veya telefon ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-tulpar-border"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-48 bg-white border-tulpar-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-tulpar-border">
                    <SelectItem value="all">Tüm Siparişler</SelectItem>
                    <SelectItem value="new">Yeni ({stats.new})</SelectItem>
                    <SelectItem value="processing">İşlemde ({stats.processing})</SelectItem>
                    <SelectItem value="completed">Tamamlandı ({stats.completed})</SelectItem>
                    <SelectItem value="cancelled">İptal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card className="bg-white border-tulpar-border">
            <CardContent className="p-0">
              {loading ? (
                <p className="text-tulpar-muted text-center py-12">Yükleniyor...</p>
              ) : filteredOrders.length === 0 ? (
                <p className="text-tulpar-muted text-center py-12">Sipariş bulunamadı</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-tulpar-section border-b border-tulpar-border">
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">Müşteri</th>
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">Bölge</th>
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">Tutar</th>
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">Durum</th>
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">Tarih</th>
                        <th className="text-left py-3 px-4 text-tulpar-muted text-sm font-medium">İşlem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-b border-tulpar-border last:border-b-0 hover:bg-tulpar-section/50">
                          <td className="py-3 px-4">
                            <p className="text-tulpar-text font-medium text-sm">{order.customerName || '-'}</p>
                            <p className="text-tulpar-muted text-xs">{order.customerPhone || '-'}</p>
                          </td>
                          <td className="py-3 px-4 text-tulpar-text text-sm">
                            {order.pickupZone} → {order.dropZone}
                          </td>
                          <td className="py-3 px-4 text-tulpar-primary font-medium text-sm">
                            {order.total?.toFixed(2)} ₺
                          </td>
                          <td className="py-3 px-4">
                            <Select value={order.status} onValueChange={(v) => updateOrderStatus(order.id, v)}>
                              <SelectTrigger className={`w-28 h-8 text-xs border-0 ${
                                order.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                                order.status === 'processing' ? 'bg-orange-100 text-orange-700' :
                                order.status === 'completed' ? 'bg-green-100 text-green-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-tulpar-border">
                                <SelectItem value="new">Yeni</SelectItem>
                                <SelectItem value="processing">İşlemde</SelectItem>
                                <SelectItem value="completed">Tamamlandı</SelectItem>
                                <SelectItem value="cancelled">İptal</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="py-3 px-4 text-tulpar-muted text-sm">
                            {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)} className="h-8 w-8 p-0">
                                <Eye className="w-4 h-4 text-tulpar-muted" />
                              </Button>
                              {settings?.whatsappNumber && (
                                <Button variant="ghost" size="sm" onClick={() => openWhatsApp(order)} className="h-8 w-8 p-0">
                                  <MessageCircle className="w-4 h-4 text-green-600" />
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" onClick={() => deleteOrder(order.id)} className="h-8 w-8 p-0">
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                            </div>
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

      {/* Order Detail Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="bg-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-tulpar-text">Sipariş Detayı</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-tulpar-muted text-sm">Müşteri</p>
                  <p className="text-tulpar-text font-medium">{selectedOrder.customerName}</p>
                </div>
                <div>
                  <p className="text-tulpar-muted text-sm">Telefon</p>
                  <p className="text-tulpar-text font-medium">{selectedOrder.customerPhone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-tulpar-muted text-sm">Alım Bölgesi</p>
                  <p className="text-tulpar-text font-medium">Bölge {selectedOrder.pickupZone}</p>
                </div>
                <div>
                  <p className="text-tulpar-muted text-sm">Teslim Bölgesi</p>
                  <p className="text-tulpar-text font-medium">Bölge {selectedOrder.dropZone}</p>
                </div>
              </div>
              {selectedOrder.pickupAddress && (
                <div>
                  <p className="text-tulpar-muted text-sm">Alım Adresi</p>
                  <p className="text-tulpar-text">{selectedOrder.pickupAddress}</p>
                </div>
              )}
              {selectedOrder.dropAddress && (
                <div>
                  <p className="text-tulpar-muted text-sm">Teslim Adresi</p>
                  <p className="text-tulpar-text">{selectedOrder.dropAddress}</p>
                </div>
              )}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-tulpar-muted text-sm">Ağırlık</p>
                  <p className="text-tulpar-text">{selectedOrder.weight} kg</p>
                </div>
                <div>
                  <p className="text-tulpar-muted text-sm">Hacim</p>
                  <p className="text-tulpar-text">{selectedOrder.volume} dm³</p>
                </div>
                <div>
                  <p className="text-tulpar-muted text-sm">Bekleme</p>
                  <p className="text-tulpar-text">{selectedOrder.waitMinutes} dk</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-tulpar-muted text-sm">Tarife</p>
                  <p className="text-tulpar-text">{selectedOrder.tariff === 'pesin_kdv_dahil' ? 'Peşin (KDV Dahil)' : 'Abone (KDV Hariç)'}</p>
                </div>
                <div>
                  <p className="text-tulpar-muted text-sm">Zaman</p>
                  <p className="text-tulpar-text">{selectedOrder.timeSlot === 'daytime' ? 'Gündüz' : selectedOrder.timeSlot === 'evening' ? 'Akşam' : 'Gece'}</p>
                </div>
              </div>
              {selectedOrder.isCarCourier && (
                <div className="text-orange-600 text-sm">🚗 Araç kurye hizmeti</div>
              )}
              {selectedOrder.notes && (
                <div>
                  <p className="text-tulpar-muted text-sm">Not</p>
                  <p className="text-tulpar-text">{selectedOrder.notes}</p>
                </div>
              )}
              <div className="pt-4 border-t border-tulpar-border">
                <div className="flex justify-between items-center">
                  <span className="text-tulpar-text font-medium">Toplam Tutar</span>
                  <span className="text-2xl font-bold text-tulpar-primary">{selectedOrder.total?.toFixed(2)} ₺</span>
                </div>
              </div>
              <div className="text-tulpar-muted text-xs">
                Oluşturulma: {new Date(selectedOrder.createdAt).toLocaleString('tr-TR')}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
