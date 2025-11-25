import { Card } from "@/components/ui/card";
import backdropImage from "@/assets/gallery-backdrop.jpg";
import tableImage from "@/assets/gallery-table.jpg";
import lightingImage from "@/assets/gallery-lighting.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      src: backdropImage,
      title: "خلفيات فخمة",
      description: "تصاميم خلفيات مميزة بألوان رومانسية وأقمشة فاخرة",
    },
    {
      src: tableImage,
      title: "تنسيق الطاولات",
      description: "تنسيقات طاولات أنيقة مع الورود والإضاءة",
    },
    {
      src: lightingImage,
      title: "إضاءة رومانسية",
      description: "إضاءة احترافية تخلق أجواء ساحرة",
    },
    {
      src: backdropImage,
      title: "ورود طبيعية",
      description: "باقات وتنسيقات ورد طبيعي فاخر",
    },
    {
      src: tableImage,
      title: "تصاميم كاملة",
      description: "ثيمات متكاملة للحفل بالكامل",
    },
    {
      src: lightingImage,
      title: "ديكورات المسرح",
      description: "تصاميم مسرح مميزة للعروسين",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-gold">
            معرض الأعمال
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            استعرضي مجموعة من أعمالنا المميزة في ديكورات الخطوبة والمناسبات
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-elegant hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-3xl font-heading font-bold mb-4">
              عجبتك أعمالنا؟
            </h3>
            <p className="text-lg font-body text-muted-foreground mb-6">
              تواصلي معنا لنبدأ تصميم ديكور خطوبتك المميز
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              تواصلي معنا
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
