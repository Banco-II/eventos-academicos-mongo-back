const { Router } = require("express");

const { signUpSchema, signInSchema } = require("../schemas/auth-schema");
const validateSchema = require("../middlewares/validate-schema");

const usersRouter = Router();

usersRouter.post("/sign-up", validateSchema(signUpSchema));
usersRouter.post("/sign-in", validateSchema(signInSchema));

module.exports = usersRouter;
