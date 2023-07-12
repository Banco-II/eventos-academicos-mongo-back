const mongoose = require("../config/database");

const sessoes = new mongoose.Schema(
  {
    userId: Number,
    token: String,
  },
  { collection: "sessions" }
);

const Sessao = mongoose.model("Session", sessoes);

module.exports = Sessao;
