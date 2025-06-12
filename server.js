import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import listingsRoutes from './routes/listingsroute.js';

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Logger (optional)
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/listings', listingsRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started at http://localhost:${process.env.PORT}`);
});
