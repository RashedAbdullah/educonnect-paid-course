import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  },
  total_completed_lesson: {
    type: Number,
    required: true,
  },
  total_completed_modules: {
    type: Number,
    required: true,
  },
  quiz_assessment_id: {
    type: String,
    required: true,
  },
});

const reportModel =
  mongoose.models.Report || mongoose.model("Report", ReportSchema);

export { reportModel };
