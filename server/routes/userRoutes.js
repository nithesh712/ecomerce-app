import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/", createUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

// Admin Routes
router.get("/", protect, admin, getUsers);
export default router;
