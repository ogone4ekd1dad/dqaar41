import { Link, useLocation } from "wouter";
import { SiTelegram, SiInstagram, SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/лого-краснРесурс-2_1766793768066.png";

export function Footer() {
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string, hash?: string) => {
    setLocation(path);
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <img 
                src={logoImage} 
                alt="KKIV" 
                className="h-16 w-auto object-contain cursor-pointer"
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Оригинальные сумки и аксессуары от мировых брендов. 
              Акцент твоего образа.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              г. Воронеж • EST. 2025
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop?category=Сумки" className="hover:text-primary transition-colors">Сумки</Link></li>
              <li><Link href="/shop?category=Кошельки" className="hover:text-primary transition-colors">Кошельки</Link></li>
              <li><Link href="/shop?category=Ремни" className="hover:text-primary transition-colors">Ремни</Link></li>
              <li><Link href="/shop?category=Часы и браслеты" className="hover:text-primary transition-colors">Часы и браслеты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation("/about")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  О нас
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/delivery", "delivery")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Доставка
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/delivery", "returns")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Возврат
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Связаться со мной</h4>
            <div className="flex items-center gap-3 mb-4">
              <a 
                href="https://t.me/dubovikyana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-[#24A1DE] hover:bg-[#208bbf] text-white rounded-full transition-all"
                data-testid="button-telegram-footer"
                title="Telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/kkivbag?igsh=dWsyNTl5Z2o0cnVm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-80 text-white rounded-full transition-all"
                data-testid="button-instagram-footer"
                title="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/89009251300" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-full transition-all"
                data-testid="button-whatsapp-footer"
                title="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Отвечаю быстро!
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} KKIV. Все права защищены.</p>
          <p className="text-center">
            Guess • Coach • Calvin Klein • Versace • Karl Lagerfeld • Michael Kors • Armani • Love Moschino
          </p>
        </div>
      </div>
    </footer>
  );
}
