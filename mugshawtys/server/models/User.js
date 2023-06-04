const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const inmateSchema = require('./Inmate');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      index: { unique: false },
      default: null,
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    preferences: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    savedInmates: [inmateSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
