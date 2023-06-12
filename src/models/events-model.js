const mongoose = require("../config/database");

const eventosAcademicos = new mongoose.Schema(
  {
    titulo: String,
    descricao: String,
    dataInicio: { type: Date, default: Date.now },
    dataTermino: { type: Date, default: Date.now },
    latitude: Number,
    longitude: Number,
  },
  { collection: "eventos" }
);

eventosAcademicos.index(
  { titulo: "text", descricao: "text" },
  { default_language: "pt", weights: { titulo: 2, descricao: 1 } }
);

const Evento = mongoose.model("Evento", eventosAcademicos);

module.exports = Evento;
