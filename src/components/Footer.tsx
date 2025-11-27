import { Instagram, Facebook, MessageCircle } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">
             الكوشه ELKOSHA 
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
          {/* <div className="text-center md:text-left">
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
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div> */}
          {/* Social Media */}
<div className="text-center md:text-left">
  <h4 className="text-lg font-semibold mb-4 font-heading">تابعونا</h4>
  <div className="flex justify-center md:justify-start gap-4">
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
    <a
      href="https://wa.me/+201145307550"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
    >
      <MessageCircle size={20} />
    </a>
    <a
      href="https://www.tiktok.com/@elkosha05?_r=1&_d=eidcfabli6133i&sec_uid=MS4wLjABAAAAMd6F75KIa6oOqzlxT5i4X6ZUQSARNolq8CfVcufAhjQKZo1kYk4fhVEFdWW0xpcZ&share_author_id=7511738943411618817&sharer_language=ar&source=h5_m&u_code=ekhhjefbk5j916&timestamp=1764182416&user_id=7511738943411618817&sec_user_id=MS4wLjABAAAAMd6F75KIa6oOqzlxT5i4X6ZUQSARNolq8CfVcufAhjQKZo1kYk4fhVEFdWW0xpcZ&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7568447782223398657&share_link_id=2a0d1ca1-640f-400b-8419-b149e5190ecf&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
    >
      <TikTokIcon size={20} />
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2024 ELKOSHA  الكوشه  . جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
