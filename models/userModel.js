const moongose = require("moongose");

const userSchema = moongose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, default: false, require },
  },
  {
    timestamps: true,
  }
);

module.exports = moongose.module("users", userSchema);
