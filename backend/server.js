import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

/* ✅ CORS MUST BE HERE */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL (Vite)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Routes */
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
