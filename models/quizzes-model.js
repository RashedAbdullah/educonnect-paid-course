import mongoose, { Schema } from "mongoose";

const QuizzeSchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  options: {
    type: Array,
    required: true,
  },

  explanations: {
    type: String,
    required: true,
  },

  mark: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const quizzeSetModel =
  mongoose.models.Quizze || mongoose.model("Quizze", QuizzeSchema);

export { quizzeSetModel };
