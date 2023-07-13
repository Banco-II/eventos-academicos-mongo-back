const httpStatus = require("http-status");
const userService = require("../service/user-services");

async function signIn(req, res, next) {
  const { email, password } = req.body;

  try {
    const result = await userService.signIn({ email, password });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

async function signUp(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await userService.createUser({ name, email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
}

const userController = { signIn, signUp };

module.exports = userController;
