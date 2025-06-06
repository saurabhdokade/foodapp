import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';
import cors from 'cors';

import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import uploadRouter from './routers/upload.router.js';
import { dbconnect } from './config/database.config.js';

dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000" || "https://food-app-wtkv.vercel.app"],
  })
);

// https://food-app-wtkv.vercel.app
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

// const publicFolder = path.join(__dirname, 'public');
// app.use(express.static(publicFolder));

// app.get('*', (req, res) => {
//   const indexFilePath = path.join(publicFolder, 'index.html');
//   res.sendFile(indexFilePath);
// });

export default app;
