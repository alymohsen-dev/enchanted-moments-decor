import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Camera } from "lucide-react";
import heroImage from "@/assets/hero-decoration.jpg";
import backdropImage from "@/assets/gallery-backdrop.jpg";
import tableImage from "@/assets/gallery-table.jpg";
import lightingImage from "@/assets/gallery-lighting.jpg";

const Home = () => {
  const galleryImages = [
    { src: backdropImage, alt: "خلفيات فخمة" },
    { src: tableImage, alt: "تنسيق طاولات" },
    { src: lightingImage, alt: "إضاءة رومانسية" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in text-gradient-gold drop-shadow-lg">
            ديكورات خطوبة تُكمّل الحكاية
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 max-w-3xl mx-auto text-foreground animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            نحوّل لحظاتك الخاصة إلى ذكريات لا تُنسى بلمسة من الفن والإبداع
          </p>
          <Button
            asChild
            size="lg"
            className="animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] bg-gradient-to-r from-primary to-yellow-500 hover:opacity-90 text-lg px-8 py-6"
          >
            <Link to="/contact">احجز موعدك الآن</Link>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 text-center shadow-elegant border-primary/20 bg-card/50 backdrop-blur-sm">
            <Heart className="w-16 h-16 mx-auto mb-6 text-accent animate-scale-in" />
            <div className="space-y-4 font-body text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="animate-fade-in">
                في كل لحظة خاصة… لازم يكون في لمسة جمال تستحق الذكرى.
              </p>
              <p className="animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                نحوّل يوم خطوبتك للوحة فنية كاملة التفاصيل…
              </p>
              <p className="animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                اختاري من بين أجمل الديكورات، الخلفيات، الورود، والإضاءات…
              </p>
              <p className="font-semibold text-primary text-2xl animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                ودعينا نصنع ليلة ما تتكررش.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient-gold">
              من أعمالنا
            </h2>
            <p className="text-xl font-body text-muted-foreground">
              لمحة من ديكوراتنا المميزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white font-body text-lg font-semibold">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/gallery">
                <Sparkles className="ml-2 w-5 h-5" />
                شاهد المزيد
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            جاهزة تبدأي؟
          </h2>
          <p className="text-xl font-body mb-8 text-muted-foreground max-w-2xl mx-auto">
            تواصلي معنا الآن واحجزي موعدك لنبدأ التخطيط لحفل خطوبة أحلامك
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-yellow-500 hover:opacity-90 text-lg px-8 py-6">
            <Link to="/contact">تواصلي معنا</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
