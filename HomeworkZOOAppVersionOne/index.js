import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectedToDatabase } from "./db/mongo-connection.js";
import router from "./router.const.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, async (err) => {
  if (err) throw new Error("Error while running the server", err);
  await connectedToDatabase();
  console.log(
    `Server is running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
