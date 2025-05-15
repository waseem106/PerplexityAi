
import mongoose from 'mongoose';

export async function dbConnect() {
  const uri = process.env.DB_URI;
  if (!uri) {
    throw new Error("Missing DB_URI environment variable");
  }

  try {
    const connection = await mongoose.connect(uri, {
      dbName: 'Perplexity',
      bufferCommands: false,
    });

    if (connection.connections[0].readyState === 1) {
      console.log("Database connected");
    } else {
      console.log("Failed to connect to database");
    }
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;
  }
}
