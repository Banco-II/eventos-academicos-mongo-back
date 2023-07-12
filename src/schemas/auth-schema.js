const joi = require("joi");

const signUpSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: ["com", "net"] })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const signInSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: ["com", "net"] })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = { signInSchema, signUpSchema };
