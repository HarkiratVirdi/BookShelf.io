const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'address',
      required: false
  },
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

const User = mongoose.model('user', userSchema);

module.exports = User;