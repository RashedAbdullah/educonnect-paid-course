import mongoose, { Schema } from "mongoose";

const EnrollmentSchema = new Schema({
  user_id: {
    type: String,
    ref: "User",
  },

  course_id: {
    type: String,
    ref: "Course",
  },

  enrollment_date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  completion_dat: {
    type: Boolean,
    required: true,
  },

  method: {
    type: String,
    required: true,
  },
});

const enrollmentModel =
  mongoose.models.Enrollment || mongoose.model("Enrollment", EnrollmentSchema);

export { enrollmentModel };
