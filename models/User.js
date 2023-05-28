import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    login: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    backgroundUrl: String,
    avatarUrl: String,
    birthday: Date,
    city: String,
    university: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
