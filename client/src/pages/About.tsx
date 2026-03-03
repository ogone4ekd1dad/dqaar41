import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { motion } from "framer-motion";
import { Send, ShieldCheck, Heart, Tag, MessageCircle, Star } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { Review } from "@shared/schema";
import yanaPhoto from "@assets/photo_2025-08-11_21-39-14_1766792397067.jpg";

export default function About() {
  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-24 md:py-32 pt-28">
          <div className="container mx-auto px-4 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4"
            >
              Акцент твоего образа
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              Знакомство с KKIVBAG
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Привет! Меня зовут Яна. Помогу выбрать именно ТУ сумку, которая будет акцентом твоего образа.
            </motion.p>
          </div>
        </section>

        {/* About Yana Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-secondary">
                    <img 
                      src={yanaPhoto} 
                      alt="Яна - основатель KKIVBAG" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                    <span className="font-display text-3xl font-bold">EST. 2025</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-display text-3xl md:text-4xl font-bold">Обо мне</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Работаю с брендами: <span className="font-semibold text-foreground">Guess, Coach, CK, Versace, Karl Lagerfeld, Michael Kors, Armani, Love Moschino</span> — всё оригинал!
                    </p>
                    <p>
                      Снимаю и показываю всё на себе. Помогаю выбрать, не молчу после «оплаты».
                    </p>
                    <p>
                      Здесь ты не «подписчица», ты как подружка, которой я скидываю «смотри, нашла».
                    </p>
                    <p className="text-primary font-medium italic">
                      Если ты за стиль, а не за пафос — ты дома.
                    </p>
                  </div>
                  <a 
                    href="https://t.me/dubovikyana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                    data-testid="button-telegram-about"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Связаться со мной
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Trust Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Подлинность и цена</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Всё просто: я не продаю подделки. Каждая сумка — оригинал.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Оригинал",
                  description: "Это можно подтвердить как внешне, так и по источникам закупки."
                },
                {
                  icon: Tag,
                  title: "Честные цены",
                  description: "Нет аренды, витрин, персонала. Поэтому цены заметно ниже, чем в магазинах."
                },
                {
                  icon: Heart,
                  title: "Проверенные поставщики",
                  description: "Работаю только с проверенными поставщиками, часть моделей напрямую от производителей."
                },
                {
                  icon: MessageCircle,
                  title: "Всегда на связи",
                  description: "Могу показать дополнительные фото, бирки, упаковку. Всегда за прозрачность."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-sm text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tags Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/30 p-8 md:p-12 rounded-lg"
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
                  Почему бирки могут отличаться — и это нормально
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    У брендовых сумок бирки бывают разными — и это не повод для волнений. 
                    Всё зависит от страны производства и региона, для которого товар выпускается.
                  </p>
                  <p>
                    Цвет, длина, шрифт, форма — всё это может меняться. Например, для российского рынка 
                    часто используют более длинные бирки, часто с нанесённым штрихкодом. В других странах 
                    оформление может быть совсем иным — и это абсолютно нормально для оригинальной продукции.
                  </p>
                  <p>
                    Если вы бывали за границей и заходили в брендовые магазины, наверняка замечали: 
                    бирки у одной и той же марки могут сильно отличаться от страны к стране.
                  </p>
                  <p className="font-medium text-foreground">
                    Это не недостаток — это особенности логистики и упаковки.
                  </p>
                  <p className="text-primary font-medium text-center pt-4">
                    Если хочется убедиться в деталях — всегда могу прислать фото конкретной бирки или упаковки.
                    <br />Всегда открыта к диалогу!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Наши бренды</h2>
              <p className="text-muted-foreground">Только оригинальные сумки и аксессуары</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
              {["Guess", "Coach", "Calvin Klein", "Versace", "Karl Lagerfeld", "Michael Kors", "Armani", "Love Moschino"].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-white rounded-full shadow-sm text-foreground font-medium border border-border hover:border-primary hover:shadow-md transition-all"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Отзывы покупателей</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Реальные фотографии и честные мнения наших довольных покупательниц
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="https://t.me/kkivbag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#24A1DE] hover:bg-[#208bbf] text-white rounded-full font-bold text-lg transition-all shadow-lg"
                data-testid="button-telegram-reviews"
              >
                <SiTelegram className="w-6 h-6" />
                Ещё больше отзывов в Телеграме
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Готовы найти свою идеальную сумку?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Напишите мне в Телеграм — вместе подберём аксессуар, который станет акцентом вашего образа.
              </p>
              <a 
                href="https://t.me/dubovikyana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
                data-testid="button-telegram-cta"
              >
                <Send className="w-5 h-5 mr-3" />
                Написать в Телеграм
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
