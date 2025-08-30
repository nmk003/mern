import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Connection Error");
  });
app.use(bodyParser.json());
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
