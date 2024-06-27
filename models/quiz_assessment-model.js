import mongoose, { Schema } from "mongoose";

const QuizAssessmentSchema = new Schema({
  mark: {
    type: Number,
    required: true,
  },

  noc: {
    type: Number,
    required: true,
  },

  assessments: {
    type: Array,
    required: true,
  },

  user_id: {
    type: String,
    required: true,
  },

  course_id: {
    type: Boolean,
    required: true,
  },
});

const quizAssessmentModel =
  mongoose.models.quiz_assessment ||
  mongoose.model("quiz_assessment", QuizAssessmentSchema);

export { quizAssessmentModel };
