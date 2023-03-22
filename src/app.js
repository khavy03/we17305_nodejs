
import mongoose from "mongoose";
import express from "express";
import router from "./routers/product";

const app = express();
app.use(express.json())
app.use('/api', router)


mongoose.connect('mongdb://localhost:27017/asm1')

export const viteNodeApp = app;