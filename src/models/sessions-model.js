const mongoose = require("../config/database");

const sessoes = new mongoose.Schema(
  {
    userId: String,
    token: String,
  },
  { collection: "sessions" }
);

const Sessao = mongoose.model("Session", sessoes);

module.exports = Sessao;
