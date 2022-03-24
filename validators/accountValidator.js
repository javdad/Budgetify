const Joi = require("joi");

const schema = Joi.object({
	title: Joi.string().required().min(1),
	description: Joi.string().min(1).max(128),
	currency: Joi.string().required().min(3).max(128),
});

function accountValidator(req) {
	return schema.validate(req);
}

module.exports = accountValidator;
