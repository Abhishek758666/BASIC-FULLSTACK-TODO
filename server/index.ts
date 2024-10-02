import express from "express";
import "dotenv/config";
import { DBconnect } from "./utils/db";
import noteRouter from "./routers/note.router";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", noteRouter);

DBconnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`);
  });
});
