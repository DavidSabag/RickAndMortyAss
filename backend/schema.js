const Joi = require('joi');

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});


const getSuggestionsSchema = Joi.object({
  searchValue: Joi.string().required(),
  
});


module.exports = {
    loginSchema,
    getSuggestionsSchema
};