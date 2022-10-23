import Joi from "joi-browser";

const registerSchema = {
  emailInput: Joi.string().email().min(6).max(100).required().label("Email"),
  passwordInput: Joi.string().min(6).max(100).required().label("Password"),
  firstnameInput: Joi.string().min(2).max(100).required().label("Firstname"),
  lastnameInput: Joi.string().min(2).max(100).required().label("Lastname"),
};

export default registerSchema;
