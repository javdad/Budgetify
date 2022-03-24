const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");
const userValidate = require("../validators/userValidator");

class Controller {
	getAccount = async (req, res) => {
		try {
			const user = await User.findOne({ email: req.user.email });
			if (user) return res.status(200).json(user);
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateAccount = async (req, res) => {
		try {
			const validate = userValidate(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);

			const { name, surname, country, dateOfBirth } = req.body;

			await User.findOneAndUpdate(
				{ email: req.user.email },
				{ name, surname, country, dateOfBirth },
				{ new: true }
			);
			return res.status(200).json("Account updated!");
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteAccount = async (req, res) => {
		try {
			await User.findOneAndDelete({ email: req.user.email });
			return res.status(200).json("Account deleted!");
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new Controller();
