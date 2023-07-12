const { Router } = require("express");

const { signUpSchema, signInSchema } = require("../schemas/auth-schema");
const validateSchema = require("../middlewares/validate-schema");
const userController = require("../controllers/users-controller");

const usersRouter = Router();

usersRouter
  .post("/sign-up", validateSchema(signUpSchema), userController.signUp)
  .post("/sign-in", validateSchema(signInSchema), userController.signIn);

module.exports = usersRouter;
