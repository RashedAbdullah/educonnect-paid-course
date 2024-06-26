import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phone: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: Object,
    required: false,
  },

  profilePicture: {
    type: String,
    required: false,
  },
});

const userModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { userModel };
