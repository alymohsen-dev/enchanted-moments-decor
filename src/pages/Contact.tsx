import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Instagram, Facebook, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast.error("الرجاء إدخال الاسم ورقم الهاتف");
      return;
    }

    // Create WhatsApp message
    const message = `مرحباً، أنا ${formData.name}%0aرقم الهاتف: ${formData.phone}%0aتاريخ الحفل: ${formData.date || "لم يحدد"}%0aالرسالة: ${formData.message || "لا توجد"}`;
    const whatsappUrl = `https://wa.me/+201145307550?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("سيتم توجيهك إلى واتساب");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-gold">
            تواصلي معنا
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في التخطيط لحفل أحلامك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 shadow-elegant">
              <h2 className="text-3xl font-heading font-bold mb-6">
                طرق التواصل
              </h2>

              <div className="space-y-6">
                <a
                  href="https://wa.me/+201145307550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">واتساب</div>
                    <div className="font-body text-muted-foreground">
                      +201145307550
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+201145307550"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">هاتف</div>
                    <div className="font-body text-muted-foreground">
                      +201145307550
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-lg bg-muted">
                  <h3 className="font-heading font-bold text-lg mb-4">
                    تابعونا على
                  </h3>
                  <div className="flex gap-4">
                    <a
      href="https://www.instagram.com/elkosha_weding_plner?utm_source=qr&igsh=MWhrYmFuNWNueDBuaQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
    >
      <Instagram size={20} />
    </a>
    <a
      href="https://www.facebook.com/share/1EqQtkvTxs/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
    >
      <Facebook size={20} />
    </a>
                  </div>
                </div>
              </div>
            </Card>
{/* 
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-heading font-bold mb-4">
                ساعات العمل
              </h3>
              <div className="space-y-2 font-body">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span className="text-muted-foreground">9 صباحاً - 8 مساءً</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="text-muted-foreground">مغلق</span>
                </div>
              </div>
            </Card> */}
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant animate-fade-in [animation-delay:200ms]">
            <h2 className="text-3xl font-heading font-bold mb-6">
              أرسلي رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-body">
                  الاسم *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="أدخلي اسمك"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-body">
                  رقم الهاتف *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="05xxxxxxxx"
                />
              </div>

              <div>
                <Label htmlFor="date" className="font-body">
                  تاريخ الحفل
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-body">
                  رسالتك
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 min-h-32"
                  placeholder="أخبرينا عن تفاصيل حفلك وما تحتاجينه"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:opacity-90 text-lg py-6"
              >
                <Send className="ml-2" size={20} />
                إرسال 
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
