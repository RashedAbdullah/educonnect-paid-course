import mongoose, { Schema } from "mongoose";

const ModuleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
  },

  course: {
    type: Boolean,
    required: true,
  },
  lessonIds: {
    type: [Schema.ObjectId],
    required: true,
  },
});

const moduleModel =
  mongoose.models.Module || mongoose.model("Module", ModuleSchema);

export { moduleModel };
