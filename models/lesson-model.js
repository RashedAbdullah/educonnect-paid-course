import mongoose, { Schema } from "mongoose";

const LessonSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  },

  enrollment_date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  completion_date: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
});

const lessonModel =
  mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);

export { lessonModel };
