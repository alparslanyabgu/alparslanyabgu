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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-tulpar-bg py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[34px] lg:text-[44px] font-semibold text-tulpar-text mb-4">
            İletişim
          </h1>
          <p className="text-tulpar-muted max-w-md mx-auto">
            Sorularınız mı var? Bize ulaşın, en kısa sürede yanıtlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tulpar-section flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-tulpar-primary" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1 text-sm">Adres</h3>
                    <p className="text-tulpar-muted text-sm">İstanbul, Türkiye</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tulpar-section flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-tulpar-primary" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1 text-sm">E-posta</h3>
                    <a href="mailto:info@tulparkurye.com" className="text-tulpar-primary text-sm hover:underline">
                      info@tulparkurye.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tulpar-section flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-tulpar-primary" />
                  </div>
                  <div>
                    <h3 className="text-tulpar-text font-semibold mb-1 text-sm">Çalışma Saatleri</h3>
                    <p className="text-tulpar-muted text-sm">7/24 Hizmet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-tulpar-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-tulpar-text text-lg">Bize Yazın</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-14 h-14 text-tulpar-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-tulpar-text mb-2">Mesajınız Alındı</h3>
                    <p className="text-tulpar-muted text-sm">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Ad Soyad</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white border-tulpar-border text-tulpar-text focus:ring-tulpar-primary focus:border-tulpar-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">E-posta</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white border-tulpar-border text-tulpar-text focus:ring-tulpar-primary focus:border-tulpar-primary"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Telefon</Label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white border-tulpar-border text-tulpar-text focus:ring-tulpar-primary focus:border-tulpar-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-tulpar-text text-sm">Konu</Label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-white border-tulpar-border text-tulpar-text focus:ring-tulpar-primary focus:border-tulpar-primary"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-tulpar-text text-sm">Mesajınız</Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white border-tulpar-border text-tulpar-text focus:ring-tulpar-primary focus:border-tulpar-primary min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-tulpar-primary hover:bg-tulpar-primary-hover text-white">
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