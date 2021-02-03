import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// Get All Products
router.get("/", getProducts);

// Get Product By Id
router.get("/:id", getProductById);

export default router;
