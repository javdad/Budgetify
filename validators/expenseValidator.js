const Joi = require("joi");

const schema = Joi.object({
	description: Joi.string().min(1).required(),
	amount: Joi.number().min(1).required(),
	currency: Joi.string().min(3),
	categoryName: Joi.string().min(1),
});

function expenseValidator(req) {
	return schema.validate(req);
}

module.exports = expenseValidator;
