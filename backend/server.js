import express from "express";
import verdictRoutes from "./routes/verdictRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config()
const app = express();

connectDB();

app.use(express.json())
app.use("/verdict", verdictRoutes);

app.listen(process.env.PORT || 6969, () => {
  console.log(`✅ Server Working on ${process.env.PORT}...`);
});
