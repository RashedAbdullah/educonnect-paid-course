import mongoose, { Schema } from "mongoose";

const WatchHistorySchema = new Schema({
  user_id: {
    type: Schema.ObjectId,
    required: true,
  },

  lesson_id: {
    type: Schema.ObjectId,
    required: true,
  },

  created_at: {
    type: String,
    required: true,
  },

  modified_at: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  last_time: {
    type: Number,
    required: true,
  },
});

const watchHistoryModel =
  mongoose.models.watch_history ||
  mongoose.model("watch_history", WatchHistorySchema);

export { watchHistoryModel };
