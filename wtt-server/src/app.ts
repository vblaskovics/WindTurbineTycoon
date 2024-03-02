import express from "express";
import { version } from "../package.json";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, WTT!");
});

app.get("/api/version", (_, res) => {
  res.send({ version });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
