import { Link } from "wouter";
import { useProducts, useCategories } from "@/hooks/use-shop-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Send, ShieldCheck, Truck, Heart, Package } from "lucide-react";
import { motion } from "framer-motion";
import { SiTelegram } from "react-icons/si";

export default function Home() {
  const { data: featuredProducts, isLoading: isLoadingFeatured } = useProducts(undefined, true);
  const { data: categories } = useCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,69,69,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,69,69,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-primary">Воронеж • EST. 2025</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.05]"
          >
            Акцент <br />
            <span className="italic font-normal text-primary">твоего образа</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Оригинальные сумки и аксессуары от мировых брендов: 
            Guess, Coach, Versace, Karl Lagerfeld, Michael Kors и других.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/shop">
              <div className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all cursor-pointer shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1">
                Смотреть каталог
              </div>
            </Link>
            <a 
              href="https://t.me/dubovikyana" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#24A1DE] hover:bg-[#208bbf] text-white rounded-full font-medium transition-all flex items-center cursor-pointer shadow-lg"
            >
              <SiTelegram className="w-5 h-5 mr-2" />
              Связаться со мной
            </a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Бесплатная доставка от 15 000 ₽
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display font-semibold text-xl mb-2">100% Оригинал</h3>
              <p className="text-sm text-muted-foreground">Только подлинные сумки от проверенных поставщиков</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <Heart className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display font-semibold text-xl mb-2">Личный подход</h3>
              <p className="text-sm text-muted-foreground">Помогу подобрать сумку под ваш стиль и образ</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <Truck className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display font-semibold text-xl mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">СДЭК по всей России, 3-7 дней с трек-номером</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <Package className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display font-semibold text-xl mb-2">Честные цены</h3>
              <p className="text-sm text-muted-foreground">Без накруток за аренду и витрины — выгоднее магазинов</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">В тренде сейчас</h2>
              <p className="text-muted-foreground">Самые желанные сумки этого сезона.</p>
            </div>
            <Link href="/shop">
              <div className="hidden md:flex items-center text-sm font-medium hover:text-primary/70 transition-colors cursor-pointer group">
                Смотреть всё <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {isLoadingFeatured ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-secondary aspect-[3/4] rounded-lg mb-4"></div>
                  <div className="h-6 bg-secondary w-2/3 mb-2 rounded"></div>
                  <div className="h-4 bg-secondary w-1/4 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/shop">
              <div className="inline-flex items-center text-sm font-medium border-b border-primary pb-1">
                Смотреть все товары <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Выбрать по категориям</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories?.map((category) => (
              <Link key={category.id} href={`/shop?category=${category.name}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative h-96 group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                >
                  <img 
                    src={category.imageUrl || "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"} 
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-display text-3xl text-white font-bold tracking-wide">{category.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
            
            {!categories?.length && (
              <>
                {/* Fallback Static Categories if DB empty */}
                {[
                  { name: "Crossbody", img: "https://images.unsplash.com/photo-1581605405669-fdaf81168893?q=80&w=3264&auto=format&fit=crop" },
                  { name: "Totes", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=3335&auto=format&fit=crop" },
                  { name: "Shoulder Bags", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=3387&auto=format&fit=crop" }
                ].map((cat, idx) => (
                  <Link key={idx} href={`/shop?category=${cat.name}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="relative h-96 group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                    >
                      {/* Unsplash image for category */}
                      <img 
                        src={cat.img} 
                        alt={cat.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-display text-3xl text-white font-bold tracking-wide">{cat.name}</h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
