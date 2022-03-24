const Joi = require("joi");

const schema = Joi.object({
	description: Joi.string().min(1).required(),
	amount: Joi.number().min(1).required(),
	currency: Joi.string().min(3),
	categoryName: Joi.string().min(1),
});

function incomeValidator(req) {
	return schema.validate(req);
}

module.exports = incomeValidator;
