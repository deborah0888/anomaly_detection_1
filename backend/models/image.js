import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  contentType: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
});

export const image = mongoose.model("Image", imageSchema); // Named export
