import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected at: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};
