import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

// Get All Products
router.get("/", getProducts);

// Get Product By Id
router.get("/:id", getProductById);

// Admin Products editing
router.delete("/:id", protect, admin, deleteProduct);

export default router;
