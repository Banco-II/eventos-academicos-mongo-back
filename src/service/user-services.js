const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { invalidCredentialsError, duplicatedEmailError } = require("../errors");
const sessionRepository = require("../repositories/session-repositories");
const userRepository = require("../repositories/user-repositories");

async function signIn(params) {
  const { email, password } = params;

  console.log(params);
  const [user] = await getUser(email);

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) throw invalidCredentialsError();

  const token = await createSession(user._id);

  return {
    id: user._id,
    token,
  };
}

async function createSession(userId) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({ token, userId });

  return token;
}

async function getUser(email) {
  const user = await userRepository.findByEmail(email);
  console.log("aqui", user);
  if (!user) throw invalidCredentialsError();
  return user;
}

async function createUser(params) {
  const { name, email, password } = params;

  await validateUniqueEmail(email);

  const hashPassword = await bcrypt.hash(password, 12);

  return userRepository.create({ name, email, password: hashPassword });
}

async function validateUniqueEmail(email) {
  const findEmail = await userRepository.findByEmail(email);
  if (findEmail.length !== 0) throw duplicatedEmailError();
}

const userService = { signIn, createUser };

module.exports = userService;
