import { Card } from "@/components/ui/card";
import { Frame, Flower2, UtensilsCrossed, Lightbulb, Palette, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Frame,
      title: "خلفيات الخطوبة",
      description: "تصاميم خلفيات فخمة ومميزة بأقمشة فاخرة وألوان رومانسية تناسب ذوقك وثيم حفلك",
      features: [
        "خلفيات مخصصة حسب الثيم",
        "أقمشة فاخرة وديكورات ثلاثية الأبعاد",
        "إضاءة مدمجة للخلفية",
        "تصاميم عصرية وكلاسيكية",
      ],
    },
    {
      icon: Flower2,
      title: "تنسيق الورود",
      description: "باقات ورد طبيعية فاخرة وتنسيقات زهور مميزة تضفي أجواء رومانسية ساحرة",
      features: [
        "ورود طبيعية فاخرة",
        "تنسيقات حسب الطلب",
        "جدران ورد كاملة",
        "باقات العروس والوصيفات",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "تنسيق الطاولات",
      description: "تصاميم طاولات أنيقة مع أدق التفاصيل من أدوات المائدة والورود والشموع",
      features: [
        "مفارش وأقمشة فاخرة",
        "تنسيقات مركزية مميزة",
        "شموع وإضاءة رومانسية",
        "أطقم أواني راقية",
      ],
    },
    {
      icon: Lightbulb,
      title: "الإضاءة الاحترافية",
      description: "أنظمة إضاءة احترافية تخلق أجواء سحرية ورومانسية تليق بحفل أحلامك",
      features: [
        "إضاءة محيطية ملونة",
        "أضواء ليد حديثة",
        "شموع وفوانيس رومانسية",
        "برمجة الإضاءة حسب الموسيقى",
      ],
    },
    {
      icon: Palette,
      title: "تصميم الثيم الكامل",
      description: "نصمم لك ثيم متكامل للحفل بجميع تفاصيله من الألوان والديكورات والأجواء",
      features: [
        "تنسيق الألوان والثيمات",
        "تصميم هوية الحفل",
        "ديكورات مدخل وممرات",
        "لوحات الترحيب",
      ],
    },
    {
      icon: Sparkles,
      title: "ديكور المسرح",
      description: "تصاميم مسرح مميزة للعروسين مع خلفيات فخمة وإضاءة احترافية",
      features: [
        "كراسي فاخرة للعروسين",
        "خلفية مسرح مميزة",
        "إضاءة مركزة",
        "تنسيقات جانبية",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-gold">
            خدماتنا
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            نقدم لك مجموعة متكاملة من خدمات ديكورات الخطوبة والمناسبات بأعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-elegant transition-all duration-500 border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="font-body text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-gradient-gold">
            كيف نعمل؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "التواصل والاستشارة",
                desc: "نستمع لأفكارك وتطلعاتك",
              },
              {
                step: "2",
                title: "التخطيط والتصميم",
                desc: "نضع خطة مفصلة ونصمم الثيم",
              },
              {
                step: "3",
                title: "التنفيذ والتنسيق",
                desc: "نبدأ بتجهيز كل التفاصيل",
              },
              {
                step: "4",
                title: "يوم الحفل المميز",
                desc: "نضمن تنفيذ كل شيء بإتقان",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-to-br from-card to-muted border-primary/20"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <h3 className="text-4xl font-heading font-bold mb-4">
              جاهزة لبدء التخطيط؟
            </h3>
            <p className="text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              تواصلي معنا الآن ودعينا نحول حلمك إلى واقع
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              احجزي استشارة مجانية
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
