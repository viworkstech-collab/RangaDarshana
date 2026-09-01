import express from "express";
import {
  loginAdmin,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Reset password
router.post("/reset-password/:token", resetPassword);

export default router;