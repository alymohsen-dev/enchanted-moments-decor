import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "+966123456789"; // غيّري الرقم هنا
  const whatsappNumber = "+966123456789"; // غيّري الرقم هنا

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full shadow-elegant bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white animate-scale-in"
      >
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle size={24} />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full shadow-elegant bg-gradient-to-br from-primary to-yellow-500 hover:opacity-90 text-primary-foreground animate-scale-in [animation-delay:100ms]"
      >
        <a
          href={`tel:${phoneNumber}`}
          aria-label="اتصل الآن"
        >
          <Phone size={24} />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
