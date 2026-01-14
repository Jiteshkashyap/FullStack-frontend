import Joi from "joi";

export const registerSchema =Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    dateOfBirth: Joi.date()
    .less("now")
    .required()
    .messages({
      "date.base": "Date of birth must be a valid date",
      "date.less": "Date of birth must be in the past",
      "any.required": "Date of birth is required",
    }),

    
})

export const loginSchema =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()
})