const Sessao = require("../models/sessions-model");
const Usuario = require("../models/users-model");
const httpStatus = require('http-status');


export async function signIn(req, res, next) {
    const { email, password } = req.body ;
  
    try {
      const result = await userService.signIn({ email, password });
  
      return res.status(httpStatus).send(result);
    } catch (error) {
      next(error);
    }
  }
  
  export async function signUp(req, res, next) {
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