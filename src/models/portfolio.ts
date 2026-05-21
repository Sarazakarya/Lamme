import mongoose from "mongoose";

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true }, 
    slug: { type: String, required: true, unique: true }, 
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);