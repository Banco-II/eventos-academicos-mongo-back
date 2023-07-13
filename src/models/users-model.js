const mongoose = require("../config/database");

const usuarios = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  { collection: "users" }
);

const Usuario = mongoose.model("Users", usuarios);

module.exports = Usuario;
