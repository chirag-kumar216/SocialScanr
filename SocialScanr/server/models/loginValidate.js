const Joi = require("joi");

function validateLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
}

module.exports = validateLogin;
