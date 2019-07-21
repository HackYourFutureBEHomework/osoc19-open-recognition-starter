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
      required: [true, "cannot be empty."],
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean
    },
    photo: {
      type: String,
    }
  }
);

module.exports = mongoose.model('profile', profile_schema);
