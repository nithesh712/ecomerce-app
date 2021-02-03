import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  createUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", createUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);

export default router;
