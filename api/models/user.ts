// const mongoose = require("mongoose");

const User = mongoose.model("USER", {
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
