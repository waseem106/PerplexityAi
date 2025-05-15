import mongoose, { Document, Schema } from "mongoose";

export interface UserModelI extends Document {
  name: string;
  email: string;
  credits: number;
  subscription: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserModel: Schema<UserModelI> = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    credits: {
      type: Number,
      default: 5000,
    },
    subscription: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const User =
  (mongoose.models?.User as mongoose.Model<UserModelI>) ||
  mongoose.model<UserModelI>("User", UserModel);
