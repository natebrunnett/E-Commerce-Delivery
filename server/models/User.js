const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: Array, required: false },
  receipts: { type: Array, required: false}
});

module.exports = mongoose.model("users", userSchema);