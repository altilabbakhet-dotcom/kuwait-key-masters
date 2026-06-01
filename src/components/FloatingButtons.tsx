import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  // دالة مساعدة لإرسال حدث التحويل لجوجل مباشرة في الخلفية دون تعطيل المستخدم
  const handleConversion = () => {
    // التأكد من أن مكتبة gtag محملة في المتصفح
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18189189684/aRB1CObjt7YcELSEpOFD'
      });
    }
  };

  return (
    <>
      {/* WhatsApp - left */}
      <a
        href="https://wa.me/96566610023?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D8%B1%D9%83%D9%86%20%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%81%D9%86%D9%8A%20%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        onClick={handleConversion} // يرسل التتبع فوراً ويفتح الواتساب في تبويب جديد طبيعي جداً
        className="float-btn left-6 bg-[hsl(var(--whatsapp))] animate-pulse-ring"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>

      {/* Call - right */}
      <a
        href="tel:66610023"
        aria-label="اتصال"
        onClick={handleConversion} // يرسل التتبع فوراً ويفتح طلب الاتصال على تليفون العميل
        className="float-btn right-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
