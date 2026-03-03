import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // in rubles (min price for range)
  priceMax: integer("price_max"), // max price for range (optional)
  imageUrl: text("image_url").notNull(),
  imageUrls: text("image_urls").array().default([]),
  category: text("category").notNull(),
  brand: text("brand"),
  isFeatured: boolean("is_featured").default(false),
  telegramLink: text("telegram_link"),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  imageUrl: text("image_url"),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  productId: integer("product_id"),
  author: text("author").notNull(),
  content: text("content"),
  rating: integer("rating").default(5),
  imageUrl: text("image_url"),
  imageUrls: text("image_urls").array().default([]),
  sortOrder: integer("sort_order").default(100),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
