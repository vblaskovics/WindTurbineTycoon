import express from "express";
import { version } from "../package.json";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, WTT!");
});

app.get("/version", (_, res) => {
  res.send(`Server version: ${version}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
