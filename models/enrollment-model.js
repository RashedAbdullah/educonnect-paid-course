import mongoose, { Schema } from "mongoose";

const EnrollmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  video_url: {
    type: String,
    required: true,
  },

  published: {
    type: Boolean,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },

  access: {
    type: String,
    required: true,
  },
});

const enrollmentModel =
  mongoose.models.Enrollment || mongoose.model("Enrollment", EnrollmentSchema);

export { enrollmentModel };
