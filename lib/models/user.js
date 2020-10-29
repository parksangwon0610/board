const mongoose = require('mongoose');

// utils
const validator = require('../utils/validUtils');
const crypto = require('../utils/cryptoUtils');

const UserSchema = new mongoose.Schema({
  userId: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number },
  email: { type: String },
  phone: { type: String },
  created: { type: Date, default: Date.now },
});

UserSchema.statics.create = async function (params) {
  const {
    userId,
    password,
    name,
    age,
    email,
    phone,
  } = params;

  const hashedPW = crypto.hashing(password);

  const user = {
    userId, password: hashedPW, name, age, email, phone,
  };
  const result = await this({ ...user }).save();

  if (validator.isEmpty(result)) {
    console.log('no user create result found');
    return false;
  }

  return result;
};

UserSchema.statics.get = function () {

};
UserSchema.statics.udpate = function () {

};
UserSchema.statics.delete = function () {

};

mongoose.model('user', UserSchema);

module.exports = UserSchema;
