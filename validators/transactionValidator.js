const Joi = require("joi");

const schema = Joi.object({
	type: Joi.string().required(),
	title: Joi.string().required().min(1),
	description: Joi.string().min(1),
	amount: Joi.number().min(1).required(),
	currency: Joi.string().min(3),
	payee: Joi.string(),
});

function transactionValidator(req) {
	return schema.validate(req);
}

module.exports = transactionValidator;
