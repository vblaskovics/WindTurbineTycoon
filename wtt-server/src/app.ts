import express from "express";
import { version } from "../package.json";
import cors from "cors";
import path from "path";

const app = express();
const port = 5000;

switch (process.env.NODE_ENV) {
  case "development":
    app.use(cors());
    console.log("CORS enabled")
  
    // const projectPath = path.resolve(__dirname, '../..');
    // const distFolderPath = path.join(projectPath, 'wtt-app', 'dist', 'wtt-app', 'browser');
    // app.use(express.static(distFolderPath));    
    break;
  default:
    // PRODUCTION
    app.use(express.static(path.join(__dirname, "public")));
    break;
}

app.get("/api/version", (_, res) => {
  res.send({ version });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
