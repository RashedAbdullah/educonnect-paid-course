import mongoose, { Schema } from "mongoose";

const QuizSetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
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

  status: {
    type: Boolean,
    required: true,
  },
  quizIds: {
    type: [Schema.ObjectId],
    required: true,
  },
});

const quizSetModel =
  mongoose.models.quiz_set || mongoose.model("quiz_set", QuizSetSchema);

export { quizSetModel };
