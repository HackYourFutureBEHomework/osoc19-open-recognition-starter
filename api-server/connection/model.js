const mongoose = require('mongoose');


const connection_schema = mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  accepted: {
    type: Boolean,
    default: false
   }
})



module.exports = mongoose.model('connection', connection_schema);
