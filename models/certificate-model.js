import mongoose, { Schema } from "mongoose";

const certificateSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },

  course_id: {
    type: String,
    required: true,
  },

  enrollment_id: {
    type: String,
    required: true,
  },
  certificate_link: {
    type: String,
    required: true,
  },
});

const certificateModel =
  mongoose.models.certificate ||
  mongoose.model("certificate", certificateSchema);

export { certificateModel };
