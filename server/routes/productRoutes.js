import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";

// Get All Products
router.get("/", getProducts);

// Get Product By Id
router.get("/:id", getProductById);

// Admin Products editing
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);
router.post("/", protect, admin, createProduct);

export default router;
