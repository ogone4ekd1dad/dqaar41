import { db } from "./db";
import { products, categories, reviews } from "@shared/schema";
import { sql } from "drizzle-orm";

const seedCategories = [
  { name: "Сумки", slug: "bags", imageUrl: "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-42.jpg" },
  { name: "Кошельки", slug: "wallets", imageUrl: "/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-51.jpg" },
  { name: "Ремни", slug: "belts", imageUrl: "/products_new/Ремень женский Coach/photo_2025-12-23_10-54-53.jpg" },
  { name: "Подарочные пакеты", slug: "gift-bags", imageUrl: "/products_new/Подарочные пакеты/photo_2025-12-27_17-39-41.jpg" },
  { name: "Часы и браслеты", slug: "watches", imageUrl: "/products_new/Burker Watches/isabell_gold_green.jpg" },
  { name: "Guess", slug: "guess", imageUrl: "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-42.jpg" },
  { name: "Coach", slug: "coach", imageUrl: "/products_new/Coach «City»/photo_2025-12-12_16-12-47.jpg" },
  { name: "Michael Kors", slug: "michael-kors", imageUrl: "/products_new/Michael Kors «Ruthie»/photo_2025-11-24_23-35-57.jpg" },
  { name: "Calvin Klein", slug: "calvin-klein", imageUrl: "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-19.jpg" },
  { name: "Karl Lagerfeld", slug: "karl-lagerfeld", imageUrl: "/products_new/KARL LAGERFELD SIGNATURE/photo_2025-09-19_10-07-58.jpg" },
  { name: "Love Moschino", slug: "love-moschino", imageUrl: "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-39.jpg" },
  { name: "Versace", slug: "versace", imageUrl: "/products_new/Versace «Couture»/photo_2025-12-21_15-20-06.jpg" },
  { name: "Armani Exchange", slug: "armani-exchange", imageUrl: "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_11-43-51.jpg" },
];

const seedProducts = [
  // Guess
  {
    name: "Guess «Annita»",
    description: "Сумка на молнии, на коротких ручках, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади дополнительное отделение на молнии. Размер: 32×21×11 см",
    price: 8190,
    imageUrl: "/products_new/Guess Annita/photo_2026-02-05_17-44-45.jpg",
    imageUrls: ["/products_new/Guess Annita/photo_2026-02-05_17-44-45.jpg", "/products_new/Guess Annita/photo_2026-02-05_17-44-46.jpg", "/products_new/Guess Annita/photo_2026-02-05_17-44-49.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Helina Mini»",
    description: "Брендовый пыльник в комплекте. Сумка на магнитных замках, длинные плечевые ручки, единое отделение + косметичка в комплекте. Размер: 28×15×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess Helina Mini/photo_2026-02-05_17-42-53.jpg",
    imageUrls: ["/products_new/Guess Helina Mini/photo_2026-02-05_17-42-53.jpg", "/products_new/Guess Helina Mini/photo_2026-02-05_17-42-55.jpg", "/products_new/Guess Helina Mini/photo_2026-02-05_17-42-57.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess LORELEI MINI SATCHEL",
    description: "Сумка выполнена из искусственной кожи. Модель дополнена съемным плечевым ремнем на карабинах. Два отделения, закрывается на магнитную кнопку, внутри один карман на молнии, три слота для пластиковых карт, текстильная подкладка. Размер: 18×14×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-44.jpg",
    imageUrls: ["/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-44.jpg", "/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-45.jpg", "/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-46.jpg", "/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-47.jpg", "/products_new/Guess LORELEI MINI SATCHEL/photo_2026-02-05_17-43-48.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Open Road»",
    description: "Сумка на магнитных замках, на перекатном ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади — дополнительное отделение. Размер: 28×17×6 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Open Road»/photo_2025-11-24_23-29-34.jpg",
    imageUrls: ["/products_new/Guess «Open Road»/photo_2025-11-24_23-29-34.jpg", "/products_new/Guess «Open Road»/photo_2025-11-24_23-29-35.jpg", "/products_new/Guess «Open Road»/photo_2025-11-24_23-29-36 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Noelle 4 Logo»",
    description: "Сумка на молнии, на плечевом регулируемом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты. Размер: 27×16×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Noelle 4 Logo»/photo_2025-12-24_11-09-56.jpg",
    imageUrls: ["/products_new/Guess «Noelle 4 Logo»/photo_2025-12-24_11-09-56.jpg", "/products_new/Guess «Noelle 4 Logo»/photo_2025-12-24_11-09-56 (2).jpg", "/products_new/Guess «Noelle 4 Logo»/photo_2025-12-24_11-09-57 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Izzy»",
    description: "Сумка на магнитных замках, на перекатном ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади — отделение на молнии. Размер: 22×15×6 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Izzy»/photo_2025-10-20_18-45-23.jpg",
    imageUrls: ["/products_new/Guess «Izzy»/photo_2025-10-20_18-45-23.jpg", "/products_new/Guess «Izzy»/photo_2025-10-20_18-45-24.jpg", "/products_new/Guess «Izzy»/photo_2025-10-20_18-45-25.jpg", "/products_new/Guess «Izzy»/photo_2025-10-20_18-45-27.jpg", "/products_new/Guess «Izzy»/photo_2025-10-20_18-50-21.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Dream»",
    description: "Сумка на магнитных кнопках, на плечевом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, дополнительно — съёмный регулируемый ремешок. Размер: 22×14×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Dream»/photo_2025-10-24_11-00-26.jpg",
    imageUrls: ["/products_new/Guess «Dream»/photo_2025-10-24_11-00-26.jpg", "/products_new/Guess «Dream»/photo_2025-10-24_11-00-27 (2).jpg", "/products_new/Guess «Dream»/photo_2025-10-24_11-00-27 (3).jpg", "/products_new/Guess «Dream»/photo_2025-10-24_11-00-27.jpg", "/products_new/Guess «Dream»/photo_2025-10-24_11-00-28.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Daryna» collection",
    description: "Сумка на магнитном замке, на перекатном ремешке, два отделения с дополнительным кармашком на молнии и отделениями под карты, сзади — отделение на молнии. Размер: 24×16×4 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Daryna» collection/photo_2025-11-04_13-45-53.jpg",
    imageUrls: ["/products_new/Guess «Daryna» collection/photo_2025-11-04_13-45-53.jpg", "/products_new/Guess «Daryna» collection/photo_2025-11-04_13-45-53 (2).jpg", "/products_new/Guess «Daryna» collection/photo_2025-11-04_13-45-54 (2).jpg", "/products_new/Guess «Daryna» collection/photo_2025-11-06_23-31-16.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Logo City»",
    description: "Сумка на магнитных замках, на перекатном ремешке, два отделения с дополнительным кармашком на молнии и отделениями под карты. Размер: 22х15×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Logo City»/photo_2025-10-14_09-12-39.jpg",
    imageUrls: ["/products_new/Guess «Logo City»/photo_2025-10-14_09-12-39.jpg", "/products_new/Guess «Logo City»/photo_2025-10-14_09-12-40.jpg", "/products_new/Guess «Logo City»/photo_2025-10-14_09-12-42.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Alexie»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, в комплекте съемный регулируемый ремешок, сзади дополнительное отделение на молнии, в комплекте монетница. Размер: 29×18×6 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-42.jpg",
    imageUrls: ["/products_new/Guess «Alexie»/photo_2025-08-20_00-47-42.jpg", "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-45.jpg", "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-46.jpg", "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-47.jpg", "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-48 (2).jpg", "/products_new/Guess «Alexie»/photo_2025-08-20_00-47-48.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Anadela Mini»",
    description: "Сумка на молнии, короткие ручки, два отделения с дополнительным кармашком на молнии и отделениями под карты, в комплекте съемный регулируемый ремешок. Размер 21×13×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-44.jpg",
    imageUrls: ["/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-44.jpg", "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-45 (2).jpg", "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-45 (3).jpg", "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-45.jpg", "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-02-58.jpg", "/products_new/Guess «Anadela Mini»/photo_2025-09-15_17-03-10.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Berkton mini»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, в комплекте съемный регулируемый ремешок. Размер: 26×19×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Berkton mini»/photo_2025-11-24_23-33-21.jpg",
    imageUrls: ["/products_new/Guess «Berkton mini»/photo_2025-11-24_23-33-21.jpg", "/products_new/Guess «Berkton mini»/photo_2025-11-24_23-33-51.jpg", "/products_new/Guess «Berkton mini»/photo_2025-11-24_23-33-52.jpg", "/products_new/Guess «Berkton mini»/photo_2025-12-09_18-29-45.jpg", "/products_new/Guess «Berkton mini»/photo_2025-12-09_18-30-00.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Collection Cordelia»",
    description: "Сумка на магнитных замках, на плечевом регулируемом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты. Размер: 27×14×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-18.jpg",
    imageUrls: ["/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-18.jpg", "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-22.jpg", "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-22 (2).jpg", "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-23.jpg", "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-24.jpg", "/products_new/Guess «Collection Cordelia»/photo_2025-09-08_19-30-26.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess Crossbody «Emera»",
    description: "Сумка на магнитных замках, на коротком ремешке, два отделения с дополнительным кармашком на молнии и отделениями под карты, сзади присутствует дополнительный кармашек на молнии, в комплекте съемный регулируемый ремешок. Размер: 26×17×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-08.jpg",
    imageUrls: ["/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-08.jpg", "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-08 (2).jpg", "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-09.jpg", "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-10.jpg", "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-11 (2).jpg", "/products_new/Guess Crossbody «Emera»/photo_2025-12-26_15-19-11.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess Crossbody New Collection",
    description: "Сумка на магнитных замках, на ремешке перекатке, единое отделение с дополнительным кармашком на молнии и отделениями под карты. Размер: 23×16×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-54.jpg",
    imageUrls: ["/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-54.jpg", "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-54 (2).jpg", "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-55.jpg", "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-56.jpg", "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-37-57.jpg", "/products_new/Guess Crossbody New Collection/photo_2025-09-07_09-38-10.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Enisa»",
    description: "Сумочка на магнитном замке, два отделения с дополнительным кармашком на молнии и отделениями под карты, в комплекте съемный регулируемый ремешок. Размер 33×23×12 см",
    price: 9290,
    imageUrl: "/products_new/Guess «Enisa»/photo_2025-08-11_21-00-07.jpg",
    imageUrls: ["/products_new/Guess «Enisa»/photo_2025-08-11_21-00-07.jpg", "/products_new/Guess «Enisa»/photo_2025-08-11_21-00-08.jpg", "/products_new/Guess «Enisa»/photo_2025-08-11_21-00-19.jpg", "/products_new/Guess «Enisa»/photo_2025-08-12_12-33-32 (2).jpg", "/products_new/Guess «Enisa»/photo_2025-08-12_12-33-32.jpg", "/products_new/Guess «Enisa»/photo_2025-08-12_12-33-33.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Evelune»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади — отделение на молнии. Размер: 23×13×7 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Evelune»/photo_2025-07-26_22-45-42.jpg",
    imageUrls: ["/products_new/Guess «Evelune»/photo_2025-07-26_22-45-42.jpg", "/products_new/Guess «Evelune»/photo_2025-07-26_22-45-42 (2).jpg", "/products_new/Guess «Evelune»/photo_2025-07-26_22-46-51 (2).jpg", "/products_new/Guess «Evelune»/photo_2025-07-26_22-46-51.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Giully mini»",
    description: "Сумка на магнитных замках, на перекатном ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты. Размер: 20×11×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-08.jpg",
    imageUrls: ["/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-08.jpg", "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-08 (2).jpg", "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-09 (2).jpg", "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-09.jpg", "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-10 (2).jpg", "/products_new/Guess «Giully mini»/photo_2025-08-18_08-15-10.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Kasinta Hobo»",
    description: "Сумка на молнии, на цепочке, единое отделение с дополнительным кармашком на молнии и отделениями под карты. Размер: 23×18×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-16-49.jpg",
    imageUrls: ["/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-16-49.jpg", "/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-16-50.jpg", "/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-16-53.jpg", "/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-18-28.jpg", "/products_new/Guess «Kasinta Hobo»/photo_2025-08-15_10-18-36.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Levante»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади — отделение на молнии. Размер: 22x13x4 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Levante»/photo_2025-11-13_00-39-16.jpg",
    imageUrls: ["/products_new/Guess «Levante»/photo_2025-11-13_00-39-16.jpg", "/products_new/Guess «Levante»/photo_2025-11-13_00-39-16 (2).jpg", "/products_new/Guess «Levante»/photo_2025-11-13_00-39-17 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess Satchel «Iwona Logo»",
    description: "Сумка на молнии, три отделения с дополнительным кармашком на молнии и отделениями под карты, в комплекте съемный регулируемый ремешок. Размер: 28×25×10 см",
    price: 9290,
    imageUrl: "/products_new/Guess Satchel «Iwona Logo»/photo_2025-08-03_15-54-11.jpg",
    imageUrls: ["/products_new/Guess Satchel «Iwona Logo»/photo_2025-08-03_15-54-11.jpg", "/products_new/Guess Satchel «Iwona Logo»/photo_2025-08-03_15-54-16.jpg", "/products_new/Guess Satchel «Iwona Logo»/photo_2025-08-03_15-54-18.jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess Silvana Mini",
    description: "Застежка на магните, внутри текстильная подкладка с 1 карманом и 3 слотами для карт, ручка для переноски, съемный плечевой ремень. Размер: 20x17x10 см",
    price: 8190,
    imageUrl: "/products_new/Guess silvana mini/photo_2025-08-17_22-15-53.jpg",
    imageUrls: ["/products_new/Guess silvana mini/photo_2025-08-17_22-15-53.jpg", "/products_new/Guess silvana mini/photo_2025-08-17_22-15-53 (2).jpg", "/products_new/Guess silvana mini/photo_2025-08-17_22-15-54 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess «Zadie»",
    description: "Сумка на молнии, на плечевом съёмном ремешке, единое отделение с дополнительным кармашком на молнии и отделениями под карты, сзади — отделение на молнии. Размер: 20×15×5 см",
    price: 8190,
    imageUrl: "/products_new/Guess «Zadie»/photo_2025-08-23_18-04-07.jpg",
    imageUrls: ["/products_new/Guess «Zadie»/photo_2025-08-23_18-04-07.jpg", "/products_new/Guess «Zadie»/photo_2025-08-23_18-04-08.jpg", "/products_new/Guess «Zadie»/photo_2025-08-23_18-04-08 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess Zadie Mini",
    description: "Сумка на перекатном ремешке, единое отделение, два внутренних кармана, высота ручки 34 см. Размер: 24x15x5 см",
    price: 8190,
    imageUrl: "/products_new/GUESS ZADIE MINI/photo_2025-09-15_17-00-08.jpg",
    imageUrls: ["/products_new/GUESS ZADIE MINI/photo_2025-09-15_17-00-08.jpg", "/products_new/GUESS ZADIE MINI/photo_2025-09-15_17-00-08 (2).jpg", "/products_new/GUESS ZADIE MINI/photo_2025-09-15_17-00-09 (2).jpg"],
    category: "Guess", brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Coach
  {
    name: "Coach «City»",
    description: "Сумка на молнии, длинные плечевые ручки, единое отделение с дополнительными кармашками внутри. Размер: 29×25×13 см",
    price: 17000,
    imageUrl: "/products_new/Coach «City»/photo_2025-12-12_16-12-47.jpg",
    imageUrls: ["/products_new/Coach «City»/photo_2025-12-12_16-12-47.jpg", "/products_new/Coach «City»/photo_2025-12-12_16-12-47 (2).jpg", "/products_new/Coach «City»/photo_2025-12-12_16-12-48 (2).jpg", "/products_new/Coach «City»/photo_2025-12-12_16-12-48.jpg", "/products_new/Coach «City»/photo_2025-12-12_16-12-49.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Coach «Mollie»",
    description: "Брендовый пыльник в комплекте. Сумка на молнии, на ручках средней длины, три отделения, в комплекте съёмный регулируемый ремешок. Размер: 23×20х10 см",
    price: 15500,
    imageUrl: "/products_new/Coach «Mollie»/photo_2025-11-24_23-41-11.jpg",
    imageUrls: ["/products_new/Coach «Mollie»/photo_2025-11-24_23-41-11.jpg", "/products_new/Coach «Mollie»/photo_2025-11-24_23-41-11 (2).jpg", "/products_new/Coach «Mollie»/photo_2025-11-24_23-41-12 (2).jpg", "/products_new/Coach «Mollie»/photo_2025-11-24_23-41-12.jpg", "/products_new/Coach «Mollie»/photo_2025-11-24_23-41-13.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Coach «Nolita»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение. Размер: 19х11×5 см",
    price: 15000,
    imageUrl: "/products_new/Coach «Nolita»/photo_2025-12-28_17-58-38.jpg",
    imageUrls: ["/products_new/Coach «Nolita»/photo_2025-12-28_17-58-38.jpg", "/products_new/Coach «Nolita»/photo_2025-12-28_17-58-47.jpg", "/products_new/Coach «Nolita»/photo_2025-12-28_17-58-50.jpg", "/products_new/Coach «Nolita»/photo_2025-12-28_17-58-53.jpg", "/products_new/Coach «Nolita»/photo_2025-12-28_17-58-56.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Coach «Rowan Mini»",
    description: "Сумка на молнии, на коротких ручках, одно отделение с дополнительным кармашком, в комплекте съемный регулируемый ремешок. Размер: 18×14×7 см",
    price: 15000,
    imageUrl: "/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-16.jpg",
    imageUrls: ["/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-16.jpg", "/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-17.jpg", "/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-18 (2).jpg", "/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-18.jpg", "/products_new/Coach «Rowan Mini»/photo_2025-11-27_12-24-19.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Coach «Teri»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком. Размер: 24×18×5 см",
    price: 15000,
    imageUrl: "/products_new/Coach «Teri»/photo_2025-07-19_14-24-55.jpg",
    imageUrls: ["/products_new/Coach «Teri»/photo_2025-07-19_14-24-55.jpg", "/products_new/Coach «Teri»/photo_2025-07-19_14-24-56.jpg", "/products_new/Coach «Teri»/photo_2025-07-19_14-24-57 (2).jpg", "/products_new/Coach «Teri»/photo_2025-07-19_14-24-57.jpg", "/products_new/Coach «Teri»/photo_2025-07-19_14-24-58.jpg", "/products_new/Coach «Teri»/photo_2025-07-19_14-24-59.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Coach «Mollie» Шопер",
    description: "Сумка на двойных ручках, центральное отделение на молнии, боковые открытые секции, внутренний многофункциональный карман. Размер: 32×29×11 см",
    price: 17000,
    imageUrl: "/products_new/Coach Mollie/photo_2026-02-05_17-45-25.jpg",
    imageUrls: ["/products_new/Coach Mollie/photo_2026-02-05_17-45-25.jpg", "/products_new/Coach Mollie/photo_2026-02-05_17-45-26.jpg", "/products_new/Coach Mollie/photo_2026-02-05_17-45-27.jpg", "/products_new/Coach Mollie/photo_2026-02-05_17-45-28.jpg"],
    category: "Coach", brand: "Coach",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Michael Kors
  {
    name: "Michael Kors «Carmen»",
    description: "Сумка на молнии, на плечевом ремешке, единое отделение с дополнительным кармашком. Размер: 24×13×6 см",
    price: 13790,
    imageUrl: "/products_new/Michael Kors «Carmen»/photo_2025-12-27_19-23-31.jpg",
    imageUrls: ["/products_new/Michael Kors «Carmen»/photo_2025-12-27_19-23-31.jpg"],
    category: "Michael Kors", brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Michael Kors «Mirella»",
    description: "Сумка на молнии, на ручках средней длины, единое отделение с дополнительным кармашком на молнии и без, в комплекте съемный регулируемый ремешок. Размер: 24×20х9 см",
    price: 15000,
    imageUrl: "/products_new/Michael Kors «Mirella»/photo_2025-07-20_16-50-29.jpg",
    imageUrls: ["/products_new/Michael Kors «Mirella»/photo_2025-07-20_16-50-29.jpg", "/products_new/Michael Kors «Mirella»/photo_2025-07-20_16-50-30.jpg", "/products_new/Michael Kors «Mirella»/photo_2025-07-20_16-50-32.jpg"],
    category: "Michael Kors", brand: "Michael Kors",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Michael Kors «Ruthie»",
    description: "Сумка на молнии, на ручках средней длины, три отделения: одно для монет, одно для купюр, три для карт, в комплекте съемный регулируемый ремешок. Размер: 29×20×9 см",
    price: 14990,
    imageUrl: "/products_new/Michael Kors «Ruthie»/photo_2025-11-24_23-35-57.jpg",
    imageUrls: ["/products_new/Michael Kors «Ruthie»/photo_2025-11-24_23-35-57.jpg", "/products_new/Michael Kors «Ruthie»/photo_2025-11-24_23-35-58 (2).jpg", "/products_new/Michael Kors «Ruthie»/photo_2025-11-24_23-35-58 (3).jpg"],
    category: "Michael Kors", brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Michael Kors «Parker» Brown",
    description: "Сумка Michael Kors «Parker» в коричневом цвете. Брендовая упаковка в комплекте.",
    price: 14990,
    imageUrl: "/products_new/Michael Kors Parker Brown/photo_2026-02-05_17-37-16.jpg",
    imageUrls: ["/products_new/Michael Kors Parker Brown/photo_2026-02-05_17-37-16.jpg", "/products_new/Michael Kors Parker Brown/photo_2026-02-05_17-37-17.jpg", "/products_new/Michael Kors Parker Brown/photo_2026-02-05_17-37-18.jpg", "/products_new/Michael Kors Parker Brown/photo_2026-02-06_14-06-34.jpg"],
    category: "Michael Kors", brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Michael Kors «Wilma»",
    description: "Сумка на молнии, на плечевом съемном ремешке + цепочка, единое отделение с дополнительным кармашком.",
    price: 14990,
    imageUrl: "/products_new/Michael Kors Wilma/photo_2026-02-05_17-39-42.jpg",
    imageUrls: ["/products_new/Michael Kors Wilma/photo_2026-02-05_17-39-42.jpg", "/products_new/Michael Kors Wilma/photo_2026-02-05_17-39-43.jpg", "/products_new/Michael Kors Wilma/photo_2026-02-05_17-39-45.jpg"],
    category: "Michael Kors", brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Calvin Klein
  {
    name: "Calvin Klein Crossbody Black",
    description: "Сумка на магнитном замке, на перекатном ремешке, единое отделение с дополнительным кармашком. Размер: 22×16×4 см",
    price: 8990,
    imageUrl: "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-19.jpg",
    imageUrls: ["/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-19.jpg", "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-20.jpg", "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-20 (2).jpg", "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-21.jpg", "/products_new/Calvin Klein Crossbody Black/photo_2025-08-30_14-35-22.jpg"],
    category: "Calvin Klein", brand: "Calvin Klein",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Tout Calvin Klein",
    description: "Сумка на молнии, на ручках средней длины, с единым отделением, дополнительным кармашком на молнии и отделениями под карты. Размер: 31×25×5 см",
    price: 9000,
    imageUrl: "/products_new/Tout Calvin Klein/photo_2025-08-24_21-25-23.jpg",
    imageUrls: ["/products_new/Tout Calvin Klein/photo_2025-08-24_21-25-23.jpg", "/products_new/Tout Calvin Klein/photo_2025-08-24_21-25-25.jpg", "/products_new/Tout Calvin Klein/photo_2025-08-24_21-25-28.jpg"],
    category: "Calvin Klein", brand: "Calvin Klein",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Calvin Klein Crossbody",
    description: "Сумка на магнитных замках, на регулируемом ремешке, с единым отделением, дополнительным кармашком на молнии. Размер: 22×17×5 см",
    price: 8990,
    imageUrl: "/products_new/Calvin Klein Crossbody/photo_2026-02-05_17-46-37.jpg",
    imageUrls: ["/products_new/Calvin Klein Crossbody/photo_2026-02-05_17-46-37.jpg", "/products_new/Calvin Klein Crossbody/photo_2026-02-05_17-46-36.jpg"],
    category: "Calvin Klein", brand: "Calvin Klein",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Сумка Calvin Klein",
    description: "Сумка на молнии, на плечевой цепочке, с единым отделением, дополнительным кармашком на молнии и отделениями под карты, в комплекте дополнительно съемный регулируемый ремешок и монетница. Размер: 21×13×5 см",
    price: 8990,
    imageUrl: "/products_new/Calvin Klein Сумка/photo_2026-02-05_17-41-34.jpg",
    imageUrls: ["/products_new/Calvin Klein Сумка/photo_2026-02-05_17-41-34.jpg", "/products_new/Calvin Klein Сумка/photo_2026-02-05_17-41-35.jpg", "/products_new/Calvin Klein Сумка/photo_2026-02-05_17-41-37.jpg"],
    category: "Calvin Klein", brand: "Calvin Klein",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Karl Lagerfeld
  {
    name: "Karl Lagerfeld Signature",
    description: "Сумка с единым отделением, на магнитном замке, кожаная ручка с цепочкой, сзади дополнительное отделение. Размер: 19х13х8 см",
    price: 14900,
    imageUrl: "/products_new/KARL LAGERFELD SIGNATURE/photo_2025-09-19_10-07-58.jpg",
    imageUrls: ["/products_new/KARL LAGERFELD SIGNATURE/photo_2025-09-19_10-07-58.jpg", "/products_new/KARL LAGERFELD SIGNATURE/photo_2025-09-19_10-07-59.jpg", "/products_new/KARL LAGERFELD SIGNATURE/photo_2025-09-19_10-08-00.jpg"],
    category: "Karl Lagerfeld", brand: "Karl Lagerfeld",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Karl Lagerfeld",
    description: "Сумка на магнитных замках, на съёмном ремешке, единое отделение с дополнительным кармашком. Размер: 24×14×4 см",
    price: 14900,
    imageUrl: "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-24-40.jpg",
    imageUrls: ["/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-24-40.jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-24-40 (2).jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-24-41.jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-24-42.jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-29-20.jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-30-03.jpg", "/products_new/Сумка Karl Lagerfeld/photo_2025-08-27_13-30-59.jpg"],
    category: "Karl Lagerfeld", brand: "Karl Lagerfeld",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Love Moschino
  {
    name: "Crossbody Love Moschino",
    description: "Сумка на магнитных замках, на перекатном ремешке, три отделения с дополнительным кармашком под карты. Размер: 26×16×6 см",
    price: 13790,
    imageUrl: "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-39.jpg",
    imageUrls: ["/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-39.jpg", "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-39 (2).jpg", "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-40 (2).jpg", "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-40.jpg", "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-41.jpg", "/products_new/Crossbody Love Moschino/photo_2025-12-27_19-12-42.jpg"],
    category: "Love Moschino", brand: "Love Moschino",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Versace
  {
    name: "Versace «Couture»",
    description: "Сумка на поворотном замке на широкой цепочке, единое отделение с дополнительным кармашком. В комплекте — съёмная тонкая цепочка. Размер: 27×13×6 см",
    price: 13790,
    imageUrl: "/products_new/Versace «Couture»/photo_2025-12-21_15-20-06.jpg",
    imageUrls: ["/products_new/Versace «Couture»/photo_2025-12-21_15-20-06.jpg", "/products_new/Versace «Couture»/photo_2025-12-21_15-20-06 (2).jpg", "/products_new/Versace «Couture»/photo_2025-12-21_15-20-07 (2).jpg", "/products_new/Versace «Couture»/photo_2025-12-21_15-20-07.jpg", "/products_new/Versace «Couture»/photo_2025-12-21_15-20-08.jpg"],
    category: "Versace", brand: "Versace",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Versace Couture Hobo",
    description: "Сумка на молнии на плечевой цепочке, единое отделение с дополнительным кармашком на молнии и отделениями для карт, в комплекте — съёмный регулируемый ремешок и монетница. Размер: 27×17×7 см",
    price: 13790,
    imageUrl: "/products_new/Versace Couture Hobo/photo_2025-10-10_11-43-56.jpg",
    imageUrls: ["/products_new/Versace Couture Hobo/photo_2025-10-10_11-43-56.jpg", "/products_new/Versace Couture Hobo/photo_2025-10-10_11-54-07.jpg", "/products_new/Versace Couture Hobo/photo_2025-10-10_11-54-08.jpg", "/products_new/Versace Couture Hobo/photo_2025-10-10_11-54-09.jpg", "/products_new/Versace Couture Hobo/photo_2025-10-10_12-23-22.jpg"],
    category: "Versace", brand: "Versace",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Versace Couture",
    description: "Сумка на поворотном замке на перекатном ремешке, единое отделение с дополнительным кармашком на молнии, вся фурнитура представлена в золотом цвете. Размер: 20×11×6 см",
    price: 13790,
    imageUrl: "/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-14-43.jpg",
    imageUrls: ["/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-14-43.jpg", "/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-14-52.jpg", "/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-14-55.jpg", "/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-14-58.jpg", "/products_new/Сумка Versace Couture (2)/photo_2025-12-28_22-15-01.jpg"],
    category: "Versace", brand: "Versace",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Armani Exchange
  {
    name: "Crossbody Armani Exchange",
    description: "Сумка на магнитных замках на регулируемом ремешке, единое отделение с дополнительным кармашком на молнии. Размер: 20×12×6 см",
    price: 14490,
    imageUrl: "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_11-43-51.jpg",
    imageUrls: ["/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_11-43-51.jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_12-02-03.jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_12-02-03 (2).jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_12-02-04.jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_12-09-32.jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_16-20-40 (2).jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_16-20-40 (3).jpg", "/products_new/Сумка Crossbody Armani Exchange/photo_2025-10-10_16-20-40.jpg"],
    category: "Armani Exchange", brand: "Armani Exchange",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Satchel Armani Exchange",
    description: "Сумка на молнии с ручками средней длины, единое отделение с дополнительным кармашком на молнии, в комплекте — съёмный регулируемый ремешок. Размер: 23×14×7 см",
    price: 14490,
    imageUrl: "/products_new/Сумка Satchel Armani Exchange/photo_2025-08-25_12-26-20.jpg",
    imageUrls: ["/products_new/Сумка Satchel Armani Exchange/photo_2025-08-25_12-26-20.jpg", "/products_new/Сумка Satchel Armani Exchange/photo_2025-08-25_12-26-21.jpg"],
    category: "Armani Exchange", brand: "Armani Exchange",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Кошельки
  {
    name: "Кошелек Guess «Destiny» & «Laurel Logo»",
    description: "Брендовая коробка в комплекте. Кошелек на молнии, сзади дополнительное отделение, съемный короткий ремешок. Отделения: одно под монеты, три под купюры, шесть под карт. Размер: 21×10х2 см",
    price: 4090,
    imageUrl: "/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-51.jpg",
    imageUrls: ["/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-51.jpg", "/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-52.jpg", "/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-52 (2).jpg", "/products_new/Кошелек Guess «Destiny» & «Laurel Logo»/photo_2025-10-29_08-42-52 (3).jpg"],
    category: "Кошельки",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Ремни
  {
    name: "Ремень женский Coach",
    description: "Брендовая коробка в комплекте. Ремень регулируется по длине, в комплекте дырокол для кожи. Длина ремня: до 115 см. Ширина ремня: 1.8 см",
    price: 6490,
    imageUrl: "/products_new/Ремень женский Coach/photo_2025-12-23_10-54-53.jpg",
    imageUrls: ["/products_new/Ремень женский Coach/photo_2025-12-23_10-54-53.jpg", "/products_new/Ремень женский Coach/photo_2025-12-23_10-54-54.jpg", "/products_new/Ремень женский Coach/photo_2025-12-23_10-54-54 (2).jpg"],
    category: "Ремни",
    brand: "Coach",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Подарочные пакеты
  {
    name: "Подарочный пакет (маленький)",
    description: "Брендовые подарочные пакеты для упаковки.",
    price: 500,
    imageUrl: "/products_new/Подарочные пакеты/small_1.jpg",
    imageUrls: ["/products_new/Подарочные пакеты/small_1.jpg", "/products_new/Подарочные пакеты/small_2.jpg", "/products_new/Подарочные пакеты/small_3.jpg"],
    category: "Подарочные пакеты",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Подарочный пакет (большой)",
    description: "Брендовые подарочные пакеты для упаковки.",
    price: 800,
    imageUrl: "/products_new/Подарочные пакеты/big_1.jpg",
    imageUrls: ["/products_new/Подарочные пакеты/big_1.jpg", "/products_new/Подарочные пакеты/big_2.jpg", "/products_new/Подарочные пакеты/big_3.jpg", "/products_new/Подарочные пакеты/big_4.jpg"],
    category: "Подарочные пакеты",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Часы и браслеты (перемешанные)
  {
    name: "Швейцарские часы Mathey-Tissot",
    description: "Швейцарские наручные часы Mathey-Tissot. Окошко даты с увеличительным стеклом. Браслет с раскладывающейся застежкой. Циферблат украшен цирконами. Габаритные размеры D 30мм.",
    price: 19000,
    imageUrl: "/products_new/Швейцарские часы Mathey-Tissot/photo_2025-12-30_22-52-29.jpg",
    imageUrls: ["/products_new/Швейцарские часы Mathey-Tissot/photo_2025-12-30_22-52-29.jpg"],
    category: "Часы и браслеты",
    brand: "Mathey-Tissot",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess мужские золото",
    description: "Мужские часы Guess. Кварцевые часы с золотым ремешком из нержавеющей стали и тремя стрелками. Черный циферблат. Брендовая коробка с документами в комплекте.",
    price: 13000,
    imageUrl: "/products_new/watches/guess_men_1/photo_2026-02-05_18-08-57.jpg",
    imageUrls: ["/products_new/watches/guess_men_1/photo_2026-02-05_18-08-57.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Isabell Gold Green",
    description: "Изысканные женские часы из коллекции Isabell с роскошным золотым корпусом и браслетом. Утончённый зелёный циферблат придаёт особый шарм. Фирменная коробка в комплекте.",
    price: 9000,
    imageUrl: "/products_new/Burker Watches/isabell_gold_green.jpg",
    imageUrls: ["/products_new/Burker Watches/isabell_gold_green.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские серебро",
    description: "Женские часы Guess. Серебро, голубой циферблат, кварцевый механизм, стальной корпус размера 36 мм. Брендовая коробка с документами в комплекте.",
    price: 11500,
    imageUrl: "/products_new/watches/guess_women_1/photo_2026-02-05_18-09-04.jpg",
    imageUrls: ["/products_new/watches/guess_women_1/photo_2026-02-05_18-09-04.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Michael Kors женские золото",
    description: "Элегантные женские часы Michael Kors в золотом исполнении. Брендовая коробка с документами в комплекте.",
    price: 12990,
    imageUrl: "/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-11.jpg",
    imageUrls: ["/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-11.jpg", "/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-17.jpg", "/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-19.jpg"],
    category: "Часы и браслеты",
    brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Violet Bracelet",
    description: "Утончённый женский браслет с изящным дизайном и благородным золотистым сиянием. Станет идеальным дополнением к любому образу. Фирменная коробка в комплекте.",
    price: 3500,
    imageUrl: "/products_new/Burker Bracelets/violet_bracelet.jpg",
    imageUrls: ["/products_new/Burker Bracelets/violet_bracelet.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess мужские серебро",
    description: "Мужские часы Guess. Серебро. Синий циферблат. Круглый стальной корпус диаметром 38 мм. Гильошированный циферблат с метками в виде штрихов и римских цифр. Время в 24-х часовом формате, дата и день недели вынесены на отдельные циферблаты. Рифленая заводная головка. Минеральное стекло. Браслет с раскладывающейся застежкой. Брендовая коробка с документами в комплекте.",
    price: 12000,
    imageUrl: "/products_new/watches/guess_men_2/photo_2026-02-05_18-08-39.jpg",
    imageUrls: ["/products_new/watches/guess_men_2/photo_2026-02-05_18-08-39.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Isabell Gold Brown",
    description: "Элегантные женские часы с роскошным золотым исполнением и благородным коричневым циферблатом. Безупречное сочетание классики и современного стиля. Фирменная коробка в комплекте.",
    price: 9000,
    imageUrl: "/products_new/Burker Watches/isabell_gold_brown.jpg",
    imageUrls: ["/products_new/Burker Watches/isabell_gold_brown.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские золото",
    description: "Женские часы Guess. Золото, циферблат белый, кварцевый механизм, стальной корпус размера 36 мм. Минеральное стекло. Стальной браслет. Брендовая коробка с документами в комплекте.",
    price: 10500,
    imageUrl: "/products_new/watches/guess_women_2/photo_2026-02-05_18-09-19.jpg",
    imageUrls: ["/products_new/watches/guess_women_2/photo_2026-02-05_18-09-19.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Guess часы женские",
    description: "Guess часы женские серебро с золотом. Диаметр корпуса: 36мм. Общая длина изделия: 19см. Застежка ремешка: раскладывающаяся пряжка. Вокруг циферблата окантовка из фианитов, ремешок регулируется по длине. Брендовая коробка с документами в комплекте.",
    price: 9990,
    imageUrl: "/products_new/Guess часы/photo_2025-12-30_22-54-16.jpg",
    imageUrls: ["/products_new/Guess часы/photo_2025-12-30_22-54-16.jpg", "/products_new/Guess часы/photo_2025-12-30_22-54-21.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские золото-серебро",
    description: "Женские часы Guess. Золото-серебро. Круглый стальной корпус диаметром 38 мм. Гильошированный циферблат с метками в виде штрихов и римских цифр. Время в 24-х часовом формате, дата и день недели вынесены на отдельные циферблаты. Рифленая заводная головка. Минеральное стекло. Браслет с раскладывающейся застежкой. Брендовая коробка с документами в комплекте.",
    price: 12000,
    imageUrl: "/products_new/watches/guess_women_3/photo_2026-02-05_18-09-12.jpg",
    imageUrls: ["/products_new/watches/guess_women_3/photo_2026-02-05_18-09-12.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Isabell Gold",
    description: "Роскошные женские часы с золотым корпусом и браслетом — воплощение классической элегантности. Универсальный дизайн для любого образа. Фирменная коробка в комплекте.",
    price: 9000,
    imageUrl: "/products_new/Burker Watches/isabell_gold.jpg",
    imageUrls: ["/products_new/Burker Watches/isabell_gold.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские изумруд",
    description: "Женские часы Guess. Японский кварцевый механизм, стальной корпус размера 36 мм, минеральное стекло, стальной браслет, изумрудный циферблат, золото. Брендовая коробка с документами в комплекте.",
    price: 11500,
    imageUrl: "/products_new/watches/guess_women_4/photo_2026-02-05_18-08-52.jpg",
    imageUrls: ["/products_new/watches/guess_women_4/photo_2026-02-05_18-08-52.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Isabell Silver Mesh",
    description: "Утончённые женские часы с серебристым корпусом и изысканным плетёным браслетом mesh. Современная элегантность для искушённых ценительниц. Фирменная коробка в комплекте.",
    price: 9500,
    imageUrl: "/products_new/Burker Watches/isabell_silver_mesh.jpg",
    imageUrls: ["/products_new/Burker Watches/isabell_silver_mesh.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские фиолетовый",
    description: "Женские часы Guess. Японский кварцевый механизм, стальной корпус размера 36 мм, минеральное стекло, стальной браслет, фиолетовый циферблат, золото. Брендовая коробка с документами в комплекте.",
    price: 11500,
    imageUrl: "/products_new/watches/guess_women_5/photo_2026-02-05_18-08-46.jpg",
    imageUrls: ["/products_new/watches/guess_women_5/photo_2026-02-05_18-08-46.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Ava Gold Brown Bracelet",
    description: "Элегантный женский браслет из коллекции Ava с роскошными декоративными элементами. Золотистое сияние подчеркнёт вашу индивидуальность. Фирменная коробка в комплекте.",
    price: 3500,
    imageUrl: "/products_new/Burker Bracelets/ava_gold_brown.jpg",
    imageUrls: ["/products_new/Burker Bracelets/ava_gold_brown.jpg"],
    category: "Часы и браслеты",
    brand: "Burker",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Часы Guess женские белый",
    description: "Женские часы Guess. Японский кварцевый механизм, стальной корпус размера 36 мм, минеральное стекло, стальной браслет, белый циферблат, золото-серебро. Брендовая коробка с документами в комплекте.",
    price: 11500,
    imageUrl: "/products_new/watches/guess_women_6/photo_2026-02-05_18-08-29.jpg",
    imageUrls: ["/products_new/watches/guess_women_6/photo_2026-02-05_18-08-29.jpg"],
    category: "Часы и браслеты",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Burker Isabell Gold Brown Leather",
    description: "Изысканные женские часы с золотым корпусом и роскошным кожаным ремешком благородного коричневого оттенка. Сочетание элегантности и комфорта. Фирменная коробка в комплекте.",
    price: 9500,
    imageUrl: "/products_new/Burker Watches/isabell_gold_brown_leather.jpg",
    imageUrls: ["/products_new/Burker Watches/isabell_gold_brown_leather.jpg"],
    category: "Часы и браслеты", brand: "Burker",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Полное наличие - склад
  {
    name: "Полное наличие Guess",
    description: "Полный каталог Guess — свяжитесь для подбора идеальной модели",
    price: 8190,
    priceMax: 9290,
    imageUrl: "/products_new/склад/сумки Guess/photo_1_2025-12-29_04-53-42.jpg",
    imageUrls: ["/products_new/склад/сумки Guess/photo_1_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_2_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_3_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_4_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_5_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_6_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_7_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_8_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_9_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_10_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_11_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_12_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_13_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_14_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_15_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_16_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_17_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_18_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_19_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_20_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_21_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_22_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_23_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_24_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_25_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_26_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_27_2025-12-29_04-53-42.jpg", "/products_new/склад/сумки Guess/photo_28_2025-12-29_04-53-42.jpg"],
    category: "Полное наличие",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Michael Kors",
    description: "Полный каталог Michael Kors — свяжитесь для подбора идеальной модели",
    price: 13490,
    priceMax: 14990,
    imageUrl: "/products_new/склад/сумки Michael Kors/photo_2025-12-29_04-50-36.jpg",
    imageUrls: ["/products_new/склад/сумки Michael Kors/photo_2025-12-29_04-50-36.jpg", "/products_new/склад/сумки Michael Kors/photo_2025-12-29_04-50-43.jpg"],
    category: "Полное наличие",
    brand: "Michael Kors",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Karl Lagerfeld",
    description: "Полный каталог Karl Lagerfeld — свяжитесь для подбора идеальной модели",
    price: 14890,
    priceMax: 15490,
    imageUrl: "/products_new/склад/сумки Karl Lagerfeld/photo_2025-12-29_04-48-55.jpg",
    imageUrls: ["/products_new/склад/сумки Karl Lagerfeld/photo_2025-12-29_04-48-55.jpg", "/products_new/склад/сумки Karl Lagerfeld/photo_2025-12-29_04-49-03.jpg", "/products_new/склад/сумки Karl Lagerfeld/photo_2025-12-29_04-49-07.jpg"],
    category: "Полное наличие",
    brand: "Karl Lagerfeld",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Armani Exchange",
    description: "Полный каталог Armani Exchange — свяжитесь для подбора идеальной модели",
    price: 14490,
    priceMax: 15490,
    imageUrl: "/products_new/склад/сумки Armani/photo_2025-12-29_04-47-50.jpg",
    imageUrls: ["/products_new/склад/сумки Armani/photo_2025-12-29_04-47-50.jpg", "/products_new/склад/сумки Armani/photo_2025-12-29_04-47-56.jpg"],
    category: "Полное наличие",
    brand: "Armani Exchange",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Versace",
    description: "Полный каталог Versace — свяжитесь для подбора идеальной модели",
    price: 13790,
    priceMax: 14890,
    imageUrl: "/products_new/склад/сумки Versace/photo_2025-12-28_23-19-46.jpg",
    imageUrls: ["/products_new/склад/сумки Versace/photo_2025-12-28_23-19-46.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-07.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-10.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-13.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-15.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-19.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-24.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-31.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-34.jpg", "/products_new/склад/сумки Versace/photo_2025-12-29_04-52-37.jpg"],
    category: "Полное наличие",
    brand: "Versace",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Love Moschino",
    description: "Полный каталог Love Moschino — свяжитесь для подбора идеальной модели",
    price: 13790,
    priceMax: 14790,
    imageUrl: "/products_new/склад/сумки Love Moschino/photo_2025-12-29_04-51-32.jpg",
    imageUrls: ["/products_new/склад/сумки Love Moschino/photo_2025-12-29_04-51-32.jpg"],
    category: "Полное наличие",
    brand: "Love Moschino",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Полное наличие Calvin Klein",
    description: "Полный каталог Calvin Klein — свяжитесь для подбора идеальной модели",
    price: 8990,
    priceMax: 9390,
    imageUrl: "/products_new/склад/сумки Calvin Klein/photo_2025-12-29_04-50-12.jpg",
    imageUrls: ["/products_new/склад/сумки Calvin Klein/photo_2025-12-29_04-50-12.jpg"],
    category: "Полное наличие",
    brand: "Calvin Klein",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Полное наличие для кошельков
  {
    name: "Полное наличие кошельков Guess",
    description: "Кошелек Guess «Destiny» & «Laurel Logo». Брендовая коробка в комплекте. Кошелек на молнии, сзади дополнительное отделение, съемный короткий ремешок. Отделения: одно под монеты, три под купюры, шесть под карт. Размер: 21×10х2 см",
    price: 4090,
    imageUrl: "/products_new/Полное наличие кошельки Guess/IMG_0629.jpg",
    imageUrls: ["/products_new/Полное наличие кошельки Guess/IMG_0629.jpg", "/products_new/Полное наличие кошельки Guess/IMG_5568.jpg", "/products_new/Полное наличие кошельки Guess/IMG_5581.jpg", "/products_new/Полное наличие кошельки Guess/IMG_5584.jpg"],
    category: "Полное наличие",
    brand: "Кошельки",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Полное наличие для часов
  {
    name: "Полное наличие часов",
    description: "Полный каталог часов и браслетов — свяжитесь для подбора идеальной модели. Швейцарские часы Mathey-Tissot, Guess, Michael Kors, Burker и другие бренды.",
    price: 3500,
    priceMax: 19000,
    imageUrl: "/products_new/Швейцарские часы Mathey-Tissot/photo_2025-12-30_22-52-29.jpg",
    imageUrls: ["/products_new/Швейцарские часы Mathey-Tissot/photo_2025-12-30_22-52-29.jpg", "/products_new/Guess часы/photo_2025-12-30_22-54-16.jpg", "/products_new/Guess часы/photo_2025-12-30_22-54-21.jpg", "/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-11.jpg", "/products_new/Часы Michael Kors золото/photo_2025-12-30_22-55-17.jpg"],
    category: "Полное наличие",
    brand: "Часы и браслеты",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Новый товар - кошелек
  {
    name: "Кошелек Guess «Laurel»",
    description: "Кошелек-картхолдер и мини кошелек Guess «Laurel». Кошелек на заклепке. Отделения: одно под купюры, восемь под карты. Размер: 12х9х1 см / 10х9х2 см. Брендовая коробка в комплекте.",
    price: 4090,
    imageUrl: "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-39.jpg",
    imageUrls: ["/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-39.jpg", "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-44.jpg", "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-46.jpg", "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-48.jpg", "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-50.jpg", "/products_new/Кошелек Guess Laurel/photo_2025-12-30_22-55-52.jpg"],
    category: "Кошельки",
    brand: "Guess",
    isFeatured: false,
    telegramLink: "https://t.me/kkivbag"
  },
  // Новый товар - сумка
  {
    name: "Сумка-багет Calvin Klein",
    description: "Сумка-багет Calvin Klein. Сумка на молнии, на плечевом ремешке, с единым отделением, дополнительным кармашком на молнии. Размер: 25х12×5 см.",
    price: 8990,
    imageUrl: "/products_new/Сумка-багет Calvin Klein/photo_2025-12-29_12-09-29.jpg",
    imageUrls: ["/products_new/Сумка-багет Calvin Klein/photo_2025-12-29_12-09-29.jpg", "/products_new/Сумка-багет Calvin Klein/photo_2025-12-29_12-09-29 (2).jpg", "/products_new/Сумка-багет Calvin Klein/photo_2025-12-29_12-09-30.jpg"],
    category: "Calvin Klein",
    brand: "Calvin Klein",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  // Новые товары
  {
    name: "Michael Kors «Mercer Mini»",
    description: "Сумка на магнитных замках, на коротких ручках, единое отделение с дополнительным кармашком под карты. Размер: 15×17×9 см",
    price: 13790,
    imageUrl: "/products_new/Michael Kors Mercer Mini/photo_2026-01-03_18-59-28.jpg",
    imageUrls: ["/products_new/Michael Kors Mercer Mini/photo_2026-01-03_18-59-28.jpg", "/products_new/Michael Kors Mercer Mini/photo_2026-01-03_18-59-34.jpg"],
    category: "Michael Kors",
    brand: "Michael Kors",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
  {
    name: "Седло Calvin Klein",
    description: "Сумка на магнитных замках, на плечевой цепочке, с единым отделением, дополнительным кармашком на молнии и отделениями под карты, в комплекте дополнительно съемный регулируемый ремешок. Размер: 21×13×5 см",
    price: 8990,
    imageUrl: "/products_new/Седло Calvin Klein/photo_2026-01-03_18-58-28.jpg",
    imageUrls: ["/products_new/Седло Calvin Klein/photo_2026-01-03_18-58-28.jpg", "/products_new/Седло Calvin Klein/photo_2025-12-31_02-04-25.jpg", "/products_new/Седло Calvin Klein/photo_2025-12-31_02-04-25 (2).jpg"],
    category: "Calvin Klein",
    brand: "Calvin Klein",
    isFeatured: true,
    telegramLink: "https://t.me/kkivbag"
  },
];

const seedReviews = [
  { author: "@nutaaa_k", rating: 5, imageUrl: "/reviews/photo_2025-12-29_12-23-37.jpg", imageUrls: ["/reviews/review1_new.png", "/reviews/photo_2025-12-29_12-23-45.jpg", "/reviews/photo_2025-12-29_12-23-47.jpg", "/reviews/photo_2025-12-29_12-23-50.jpg"], sortOrder: 1 },
  { author: "@z.lukash", rating: 5, imageUrl: "/reviews/z_lukash_photo.jpg", imageUrls: ["/reviews/z_lukash_photo.jpg", "/reviews/z_lukash_video.mp4"], sortOrder: 2 },
  { author: "@mariyaa_hair_", rating: 5, imageUrl: "/reviews/photo_2025-12-29_12-18-14.jpg", imageUrls: ["/reviews/photo_2025-12-29_12-18-14.jpg", "/reviews/photo_2025-12-29_12-18-17.jpg", "/reviews/photo_2025-12-29_12-18-19.jpg"], sortOrder: 3 },
  { author: "@kosinova__nails", rating: 5, imageUrl: "/reviews/отзыв1(одно фото).jpg", imageUrls: ["/reviews/review_kosinova.jpg"], sortOrder: 4 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/review_watch.jpg", imageUrls: ["/reviews/review_watch.jpg"], sortOrder: 5 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв2(одно фото).jpg", imageUrls: ["/reviews/отзыв2(одно фото).jpg"], sortOrder: 11 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв3(одно фото).jpg", imageUrls: ["/reviews/отзыв3(одно фото).jpg"], sortOrder: 12 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв4(одно фото).jpg", imageUrls: ["/reviews/отзыв4(одно фото).jpg"], sortOrder: 13 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв5(одно фото).jpg", imageUrls: ["/reviews/отзыв5(одно фото).jpg"], sortOrder: 14 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв6(одно фото).jpg", imageUrls: ["/reviews/отзыв6(одно фото).jpg"], sortOrder: 15 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв7(одно фото).jpg", imageUrls: ["/reviews/отзыв7(одно фото).jpg"], sortOrder: 16 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв8(одно фото).jpg", imageUrls: ["/reviews/отзыв8(одно фото).jpg"], sortOrder: 17 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв9(одно фото).jpg", imageUrls: ["/reviews/отзыв9(одно фото).jpg"], sortOrder: 18 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв10(одно фото).jpg", imageUrls: ["/reviews/отзыв10(одно фото).jpg"], sortOrder: 19 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв12(одно фото).jpg", imageUrls: ["/reviews/отзыв12(одно фото).jpg"], sortOrder: 21 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв13(одно фото).jpg", imageUrls: ["/reviews/отзыв13(одно фото).jpg"], sortOrder: 22 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв14(одно фото).jpg", imageUrls: ["/reviews/отзыв14(одно фото).jpg"], sortOrder: 23 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв15(одно фото).jpg", imageUrls: ["/reviews/отзыв15(одно фото).jpg"], sortOrder: 24 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв16(одно фото).jpg", imageUrls: ["/reviews/отзыв16(одно фото).jpg"], sortOrder: 25 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв17(одно фото).jpg", imageUrls: ["/reviews/отзыв17(одно фото).jpg"], sortOrder: 26 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв18(одно фото).jpg", imageUrls: ["/reviews/отзыв18(одно фото).jpg"], sortOrder: 27 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв19(одно фото).jpg", imageUrls: ["/reviews/отзыв19(одно фото).jpg"], sortOrder: 28 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв20(одно фото).jpg", imageUrls: ["/reviews/отзыв20(одно фото).jpg"], sortOrder: 29 },
  { author: "Покупательница KKIVBAG", rating: 5, imageUrl: "/reviews/отзыв21(одно фото).jpg", imageUrls: ["/reviews/отзыв21(одно фото).jpg"], sortOrder: 30 },
];

const SEED_VERSION = 5;

export async function seedIfEmpty(): Promise<void> {
  try {
    const [categoryCount] = await db.select({ count: sql<number>`count(*)` }).from(categories);
    const [productCount] = await db.select({ count: sql<number>`count(*)` }).from(products);
    const [reviewCount] = await db.select({ count: sql<number>`count(*)` }).from(reviews);
    const [productsMissingBrand] = await db.select({ count: sql<number>`count(*)` }).from(products).where(sql`brand IS NULL OR brand = ''`);

    const needsReseed = Number(productCount.count) < seedProducts.length || Number(reviewCount.count) < seedReviews.length || Number(productsMissingBrand.count) > 0;

    if (needsReseed || Number(categoryCount.count) === 0) {
      console.log("Reseeding database with latest data...");
      
      await db.delete(reviews);
      await db.delete(products);
      await db.delete(categories);
      
      console.log("Seeding categories...");
      await db.insert(categories).values(seedCategories);
      console.log(`Seeded ${seedCategories.length} categories`);
      
      console.log("Seeding products...");
      await db.insert(products).values(seedProducts);
      console.log(`Seeded ${seedProducts.length} products`);
      
      console.log("Seeding reviews...");
      await db.insert(reviews).values(seedReviews);
      console.log(`Seeded ${seedReviews.length} reviews`);
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
