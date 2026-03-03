import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.products.list.path, async (req, res) => {
    const category = req.query.category as string | undefined;
    const featured = req.query.featured === 'true';
    const products = await storage.getProducts(category, featured);
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const product = await storage.getProduct(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  app.get(api.categories.list.path, async (req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  app.get(api.reviews.list.path, async (req, res) => {
    const allReviews = await storage.getAllReviews();
    res.json(allReviews);
  });

  app.get(api.reviews.getByProduct.path, async (req, res) => {
    const productId = parseInt(req.params.productId);
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const productReviews = await storage.getReviewsByProduct(productId);
    res.json(productReviews);
  });

  app.get("/api/full-stock/:brand", async (req, res) => {
    const brand = req.params.brand;
    const product = await storage.getFullStockProduct(brand);
    if (!product) {
      return res.status(404).json({ message: "Full stock product not found" });
    }
    res.json(product);
  });

  return httpServer;
}
