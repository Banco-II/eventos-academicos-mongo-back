const Usuario = require("../models/users-model");

async function findByEmail(email) {
  return Usuario.find({email});
}

async function create(data) {
  return await Usuario.create(data);
}
const userRepository = {
  findByEmail,
  create,
};

module.exports = userRepository;
