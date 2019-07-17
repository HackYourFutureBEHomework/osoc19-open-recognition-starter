const mongoose = require('mongoose');

const profile_schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "cannot be empty."],
    },
    lastName: {
      type: String,
      required: [true, "cannot be empty."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "cannot be empty."],
      lowercase: true,
    },
    image: String,
    password: {
      type: String,
      required: true
    },

  }, { timestamps: true }
);

module.exports = mongoose.model('profile', profile_schema);
