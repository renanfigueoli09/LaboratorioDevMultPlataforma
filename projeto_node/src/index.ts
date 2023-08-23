import express, { Request, Response, NextFunction, Router } from "express";
import cors from "cors";
import { Routes } from "./routes";
import * as handlebars from "express-handlebars";
import bodyParser from "body-parser";
const app = express();
const route = Router();
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("'Content-Type'", "'multipart/form-data'");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(route);
Routes(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
