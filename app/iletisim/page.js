'use client';

import { useState } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi simülasyonu
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tulpar-night to-tulpar-surface py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-tulpar-text mb-4">
            İletişim
          </h1>
          <p className="text-xl text-tulpar-muted max-w-2xl mx-auto">
            Sorularınız mı var? Bize ulaşın, en kısa sürede yanıtlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-tulpar-surface border-tulpar-turquoise/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-tulpar-turquoise" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1">Adres</h3>
                    <p className="text-tulpar-muted text-sm">İstanbul, Türkiye</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-tulpar-surface border-tulpar-turquoise/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-tulpar-turquoise" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1">E-posta</h3>
                    <a href="mailto:info@tulparkurye.com" className="text-tulpar-turquoise text-sm hover:underline">
                      info@tulparkurye.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-tulpar-surface border-tulpar-turquoise/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tulpar-turquoise/20 to-tulpar-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-tulpar-turquoise" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-tulpar-muted text-sm">7/24 Hizmet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-tulpar-surface border-tulpar-turquoise/10">
              <CardHeader>
                <CardTitle className="text-tulpar-text">Bize Yazın</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-tulpar-turquoise mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-tulpar-text mb-2">Mesajınız Alındı!</h3>
                    <p className="text-tulpar-muted">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text">Ad Soyad</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text">E-posta</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text">Telefon</Label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text">Konu</Label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text">Mesajınız</Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-tulpar-night border-tulpar-turquoise/30 text-tulpar-text min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-tulpar-turquoise to-tulpar-gold text-tulpar-night font-semibold">
                      <Send className="w-4 h-4 mr-2" />
                      Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}