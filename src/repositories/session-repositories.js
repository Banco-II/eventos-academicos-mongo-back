const Sessao = require("../models/sessions-model");

async function create(data) {
  return await Sessao.create({data});
}
const sessionRepository = { create };

module.exports = sessionRepository;
