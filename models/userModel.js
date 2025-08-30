import mongoose, { Mongoose, Types } from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Types.ObjectId,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
