import mongoose, { Schema } from "mongoose";

const LiveSchema = new Schema({
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

  video_id: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
  },

  schedule: {
    type: String,
    required: true,
  },

  quiz_id: {
    type: String,
    required: false,
  },

  instructor_id: {
    type: String,
    required: false,
  },
});

const liveModel = mongoose.models.Live || mongoose.model("Live", LiveSchema);

export { liveModel };
