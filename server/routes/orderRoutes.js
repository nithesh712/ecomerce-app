import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrders,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/OrderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.get("/", protect, admin, getOrders);

export default router;
