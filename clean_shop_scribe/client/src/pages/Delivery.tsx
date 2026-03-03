import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Truck, Package, MapPin, Clock, CreditCard, RefreshCw, Send, CheckCircle } from "lucide-react";

export default function Delivery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/30 py-24 md:py-32 mt-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              Доставка и возврат
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Стремлюсь сделать процесс покупки и доставки максимально удобным для вас
            </motion.p>
          </div>
        </section>

        {/* Delivery Options */}
        <section id="delivery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Варианты доставки</h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Voronezh */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-secondary/30 p-8 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Воронеж</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Самовывоз — бесплатно</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Яндекс Доставка (оплачивается вами)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Russia */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-secondary/30 p-8 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">По России</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Доставка СДЭК с трек-номером</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Отслеживание через приложение или сайт СДЭК</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info Cards */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg text-center shadow-sm"
              >
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Сроки доставки</h3>
                <p className="text-3xl font-bold text-primary mb-2">3-7 дней</p>
                <p className="text-sm text-muted-foreground">Для удалённых регионов сроки могут немного увеличиться</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-lg text-center shadow-sm"
              >
                <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Стоимость</h3>
                <p className="text-3xl font-bold text-primary mb-2">300-1000 ₽</p>
                <p className="text-sm text-muted-foreground">Рассчитывается индивидуально в зависимости от региона</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-primary text-primary-foreground p-8 rounded-lg text-center shadow-lg"
              >
                <Package className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Бесплатно</h3>
                <p className="text-3xl font-bold mb-2">от 15 000 ₽</p>
                <p className="text-sm text-primary-foreground/80">При заказе от 15 000 ₽ доставка абсолютно бесплатная!</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Order Assembly */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/30 p-10 rounded-lg"
              >
                <Package className="w-14 h-14 text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl font-bold mb-4">Сборка вашего заказа</h2>
                <p className="text-4xl font-bold text-primary mb-4">2-4 рабочих дня</p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Важно!</span> Отсчёт начинается со дня, следующего за днём оформления заказа.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Returns */}
        <section id="returns" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Обмен и возврат</h2>
                <p className="text-muted-foreground">Работаю в вашу пользу</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <RefreshCw className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3">Условия возврата</h3>
                    <p className="text-muted-foreground mb-4">
                      Браки случаются редко (1 из 500 товаров). Возможные дефекты:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Неисправный замок или молния
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Повреждения при транспортировке
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Несоответствие описанию
                      </li>
                    </ul>
                    <p className="text-foreground font-medium mt-6">
                      В таких случаях — обмен или возврат без вопросов.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Остались вопросы по доставке?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Если возникнут вопросы — не стесняйтесь обращаться! Всегда рада помочь.
              </p>
              <a 
                href="https://t.me/kkivbag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg"
                data-testid="button-telegram-delivery"
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
