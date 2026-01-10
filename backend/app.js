import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
export default app;
