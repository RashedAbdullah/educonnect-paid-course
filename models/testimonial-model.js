import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  courseId: {
    type: Schema.ObjectId,
    required: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
});

const testimonialModel =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

export { testimonialModel };
