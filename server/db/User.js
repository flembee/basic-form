var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: {type: String},
  createdForms: []
 }, {timestamps: true});

UserSchema.plugin(mongoosePaginate);
module.exports = new mongoose.model('User', UserSchema);

