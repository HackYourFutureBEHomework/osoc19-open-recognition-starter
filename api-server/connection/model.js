const mongoose = require('mongoose');

const connection_schema = mongoose.Schema(
  {
    user1_id: Number,
    user2_id:  Number,
    accept1: Boolean,
    accept2: Boolean,
    story:String,
    date: {
      type: Date,
      default: Date.now
    }
    



  });

module.exports = mongoose.model('connections', connection_schema);
