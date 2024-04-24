const Joi = require("joi");

const signupValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
    gender: Joi.string().required().label("Gender"),
    height: Joi.number().required().integer().label("height"),
    weight: Joi.number().required().integer().label("weight"),
    target: Joi.string().required().label("target"),
  });
  return schema.validate(body);
};

const loginValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
  });
  return schema.validate(body);
};
module.exports = { signupValidation, loginValidation };
