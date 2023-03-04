const mongoose = require("mongoose");

const Note = mongoose.model("NOTE", {
  owner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
  },
  createdDate: {
    type: Date,
    required: true,
  },
  modifiedDate: {
    type: Date,
    required: true,
  },
});
