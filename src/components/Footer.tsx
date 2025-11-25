import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">
              ديكورات خطوبة
            </h3>
            <p className="text-muted-foreground font-body">
              نحوّل لحظاتك الخاصة إلى ذكريات لا تُنسى
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 font-heading">روابط سريعة</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  المعرض
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 font-heading">تابعونا</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2024 ديكورات خطوبة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
