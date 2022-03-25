const Joi = require("joi");

const schema = Joi.object({
	name: Joi.string().required(),
	surname: Joi.string().min(1).max(128),
	country: Joi.string().min(3).max(128),
	dateOfBirth: Joi.date(),
});

function userValidator(req) {
	return schema.validate(req);
}

module.exports = userValidator;
