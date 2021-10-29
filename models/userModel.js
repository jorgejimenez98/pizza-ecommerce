const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
    unique: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

// Methods

// Check Password
UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// SET Password
UserSchema.methods.set_passwordHash = function (password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

// GET USER TO AUTH JSON
UserSchema.methods.toAuthJson = function () {
  return { email: this.email, name: this.name, isAdmin: this.isAdmin };
};

const User = mongoose.model("users", UserSchema);
module.exports = User;
