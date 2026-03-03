import { Link, useLocation } from "wouter";
import { Menu, X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/лого-краснРесурс-2_1766793768066.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/shop", label: "Каталог" },
    { href: "/about", label: "О нас" },
    { href: "/delivery", label: "Доставка" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md ${
          isScrolled || isMobileMenuOpen
            ? "shadow-sm py-4"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <img 
                src={logoImage} 
                alt="KKIV" 
                className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className={`text-sm font-medium hover:text-primary/70 transition-colors cursor-pointer ${
                    location === link.href ? "text-primary border-b border-primary" : "text-primary/80"
                  }`}>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://t.me/kkivbag"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                data-testid="button-telegram-nav"
              >
                <Send className="w-4 h-4 mr-2" />
                Мой канал!
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-50 p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className="text-2xl font-display font-medium text-foreground py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-8">
                <a
                  href="https://t.me/kkivbag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-lg font-medium rounded-full w-full justify-center"
                  data-testid="button-telegram-mobile"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Мой канал!
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
