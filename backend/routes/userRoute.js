import express from "express";
import { getAllUsers } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();


router.get("/users",isAuthenticated, getAllUsers);

export default router;
