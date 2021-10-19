const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require, unique: true },
    password: { type: String, require },
    isAdmin: { type: Boolean, default: false, require },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, "This email is already taken.");

module.exports = mongoose.model("users", userSchema);
