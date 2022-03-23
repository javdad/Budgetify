const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");

class Controller {
	getAccount = async (req, res) => {
		try {
			const user = await User.findOne({ email: req.user.email });
			if (user) return res.status(200).json({ user });
		} catch (err) {
			errorHandler(err);
		}
	};

	updateAccount = async (req, res) => {
		try {
			const { name, surname, country, dateOfBirth } = req.body;

			const user = await User.findOne({ email: req.user.email });
			if (user) {
				(user.name = name || user.name),
					(user.surname = surname || user.surname),
					(user.country = country || user.country),
					(user.dateOfBirth = dateOfBirth || user.dateOfBirth);
			}
			await user.save();
			return res.status(200).json("Account updated!");
		} catch (err) {
			errorHandler(err);
		}
	};

	deleteAccount = async (req, res) => {
		try {
			await User.findOneAndDelete({ email: req.user.email });
			return res.status(200).json("Account deleted!");
		} catch (err) {
			errorHandler(err);
		}
	};
}

module.exports = new Controller();
