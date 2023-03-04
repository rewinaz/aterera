import mongoose from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

// generate type from userSchema
export interface UserDocType extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  meta: any;
  generateAuthToken: () => string;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  notes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "NOTE",
    default: [],
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
  meta: {
    type: Object,
    required: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET_KEY!
  );
  return token;
};

const User = mongoose.model<UserDocType>("USER", userSchema);

export const validate = (user: any) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(user);
};

export default User;
