const Joi = require("joi");

const schema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
});

function loginValidator(req) {
	return schema.validate(req);
}

module.exports = loginValidator;
