import { db } from "./db";
import {
  products,
  categories,
  reviews,
  type Product,
  type InsertProduct,
  type Category,
  type InsertCategory,
  type Review,
  type InsertReview
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(category?: string, featured?: boolean, brand?: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getCategories(): Promise<Category[]>;
  getReviewsByProduct(productId: number): Promise<Review[]>;
  getAllReviews(): Promise<Review[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  createCategory(category: InsertCategory): Promise<Category>;
  createReview(review: InsertReview): Promise<Review>;
  getFullStockProduct(brand: string): Promise<Product | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(category?: string, featured?: boolean, brand?: string): Promise<Product[]> {
    const accessoryCategories = ["Кошельки", "Ремни", "Часы и браслеты", "Подарочные пакеты", "Полное наличие"];
    const brandCategories = ["Guess", "Michael Kors", "Karl Lagerfeld", "Calvin Klein", "Coach", "Love Moschino", "Versace", "Armani Exchange"];
    
    const results = await db.select().from(products);
    return results.filter(p => {
      // Исключаем товары "Полное наличие" из обычного списка
      if (p.category === "Полное наличие") return false;
      
      // Фильтр по бренду - показываем все товары этого бренда
      if (brand && p.brand !== brand) return false;
      
      // Если выбрана категория-бренд, фильтруем по бренду
      if (category && brandCategories.includes(category)) {
        if (p.brand !== category) return false;
      } else if (category === "Сумки") {
        // Показываем все товары кроме аксессуаров
        if (accessoryCategories.includes(p.category)) return false;
      } else if (category && p.category !== category) {
        return false;
      }
      
      if (featured && !p.isFeatured) return false;
      return true;
    });
  }
  
  async getFullStockProduct(brand: string): Promise<Product | undefined> {
    const results = await db.select().from(products);
    return results.find(p => p.category === "Полное наличие" && p.brand === brand);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const [newCategory] = await db.insert(categories).values(category).returning();
    return newCategory;
  }

  async getReviewsByProduct(productId: number): Promise<Review[]> {
    return await db.select().from(reviews).where(eq(reviews.productId, productId));
  }

  async getAllReviews(): Promise<Review[]> {
    const allReviews = await db.select().from(reviews);
    return allReviews.sort((a, b) => (a.sortOrder || 100) - (b.sortOrder || 100));
  }

  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    return newReview;
  }
}

export const storage = new DatabaseStorage();
