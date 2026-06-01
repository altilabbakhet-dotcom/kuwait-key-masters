import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Key, Phone } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/cars", label: "السيارات" },
  { to: "/areas", label: "مناطق التغطية" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "اتصل بنا" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // دالة إرسال حدث التحويل مباشرة لجوجل أدز في الخلفية دون تعطيل المستخدم
  const handleConversion = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18189189684/aRB1CObjt7YcELSEpOFD'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow">
            <Key className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-extrabold gold-text">شركة الركن الدولي</span>
            <span className="text-[10px] md:text-xs text-muted-foreground">لكهرباء السيارات</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* 🎯 زر الاتصال في الهيدر يرسل التتبع فوراً ويفتح الاتصال دون أي تأخير */}
        <a 
          href="tel:66610023" 
          className="hidden md:inline-flex btn-gold !px-4 !py-2 text-sm"
          onClick={handleConversion}
        >
          <Phone className="h-4 w-4" />
          66610023
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="القائمة">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col p-4 gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-bold ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-secondary/50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
