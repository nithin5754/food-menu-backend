import express from "express";

import connectDB from "./config/database";
import menuRoutes from "./routes/menu.routes";
import cors from "cors";
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://food-menu-umber.vercel.app"],
    credentials: true,
  })
);
app.use("/api", menuRoutes());

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(port, () => console.log("server started"));
  })
  .catch((err: any) => console.error("MongoDB connection error:", err));
