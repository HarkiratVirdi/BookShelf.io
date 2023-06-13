import express from "express";
import dotenv from "dotenv";
import path from "path";
import healthRoute from "./routes/index.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import ConnectDB from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
ConnectDB();

app.use("/", healthRoute);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`)
);