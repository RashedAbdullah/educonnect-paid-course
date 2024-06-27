import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
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
  modules: [
    {
      type: Schema.ObjectId,
      ref: "Module",
    },
  ],

  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },

  category: {
    type: Schema.ObjectId,
    ref: "Categorie",
  },

  instructor: {
    type: Schema.ObjectId,
    ref: "User",
  },

  testimonials: [
    {
      type: Schema.ObjectId,
      ref: "Testimonial",
    },
  ],

  quizSet: {
    type: Schema.ObjectId,
    required: false,
  },
});

const courseModel =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);

export { courseModel };
