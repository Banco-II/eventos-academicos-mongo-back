const mongooseConnection = require("../config/database");

const academicEvents = new mongooseConnection.Schema({
  titulo: String,
  descricao: String,
  dataInicio: { type: Date, default: Date.now },
  dataTermino: { type: Date, default: Date.now },
  latitude: Number,
  longitude: Number,
});

module.exports = academicEvents