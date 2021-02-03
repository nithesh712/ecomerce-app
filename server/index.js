import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/error.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Port And Listening
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
