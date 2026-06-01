import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  // دالة إرسال حدث التحويل مباشرة لجوجل أدز في الخلفية دون تعطيل المستخدم
  const handleConversion = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18189189684/aRB1CObjt7YcELSEpOFD'
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="glass-card overflow-hidden relative p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            محتاج <span className="gold-text">فني مفاتيح</span> دلوقتي؟
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            نصل إليك في أي مكان بالكويت خلال دقائق. خدمة 24 ساعة، أسعار مناسبة، وضمان على الخدمة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* 🎯 زر الاتصال - يرسل التتبع فوراً ويطلب الرقم مباشرة */}
            <a 
              href="tel:66610023" 
              className="btn-gold"
              onClick={handleConversion}
            >
              <Phone className="h-5 w-5" />
              اتصل: 66610023
            </a>

            {/* 🎯 زر الواتساب - يرسل التتبع ويفتح في صفحة جديدة بسلاسة */}
            <a
              href="https://wa.me/96566610023?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D8%B1%D9%83%D9%86%20%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%81%D9%86%D9%8A%20%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105"
              onClick={handleConversion}
            >
              <MessageCircle className="h-5 w-5" />
              واتساب الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
