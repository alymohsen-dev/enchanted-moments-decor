import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "شغف بالتفاصيل",
      description: "نؤمن بأن كل تفصيلة صغيرة تصنع الفرق في خلق تجربة لا تُنسى",
    },
    {
      icon: Sparkles,
      title: "إبداع وابتكار",
      description: "نقدم تصاميم مبتكرة وعصرية تواكب أحدث صيحات الديكور",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "نستخدم أفضل المواد والخامات لضمان نتيجة فاخرة وراقية",
    },
    {
      icon: Users,
      title: "خدمة متميزة",
      description: "فريقنا المحترف يرافقك في كل خطوة لضمان تحقيق رؤيتك",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient-gold">
            من نحن
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            قصة شغف بالجمال وسعي لصناعة ذكريات تدوم
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in">
            <div className="space-y-6 font-body text-lg leading-relaxed">
              <p>
                نحن فريق متخصص في تصميم وتنفيذ ديكورات الخطوبة والمناسبات الخاصة،
                مدفوعين بشغف حقيقي لتحويل اللحظات العادية إلى ذكريات استثنائية.
              </p>
              <p>
                بدأت رحلتنا من حب عميق للفن والجمال، ورغبة في أن تكون كل مناسبة
                فريدة من نوعها تعكس شخصية أصحابها وتحكي قصتهم بطريقة مميزة.
              </p>
              <p>
                نؤمن بأن كل تفصيلة صغيرة لها أهميتها، من اختيار الألوان وتنسيق
                الورود، إلى الإضاءة وترتيب المساحات. نعمل بحب واهتمام لنصنع لك
                يوماً يستحق أن يُروى ويُتذكر.
              </p>
              <p className="text-primary font-semibold text-xl">
                مهمتنا هي تحويل رؤيتك إلى واقع يفوق توقعاتك، وصناعة ذكريات تبقى
                في القلب إلى الأبد.
              </p>
            </div>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-gradient-gold animate-fade-in">
            قيمنا ومبادئنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-in">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "حفل ناجح" },
                { number: "100%", label: "رضا العملاء" },
                { number: "5+", label: "سنوات خبرة" },
                { number: "50+", label: "ثيم مختلف" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-body text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-heading font-bold mb-4">
            هل أنتِ مستعدة؟
          </h3>
          <p className="text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            دعينا نكون جزءاً من قصتك ونصنع معاً ذكريات تستحق أن تُروى
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            تواصلي معنا الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
