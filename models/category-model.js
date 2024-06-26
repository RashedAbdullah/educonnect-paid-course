import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },
});

const categoryModel =
  mongoose.models.Categorie || mongoose.model("Categorie", CategorySchema);

export { categoryModel };
