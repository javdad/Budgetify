const User = require("../models/user");

class Controller {
	getAccount = async (req, res) => {
		try {
			const user = await User.findOne({ email: req.user.email });
			if (user) res.status(200).json({ user });
		} catch (err) {
			console.log(err);
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
		} catch (err) {
			console.log(err);
		}
	};

	deleteAccount = async (req, res) => {
		try {
			await User.findOneAndDelete({ email: req.user.email });
			res.status(200).json("Account deleted!");
		} catch (err) {
			console.log(err);
		}
	};
}

module.exports = new Controller();
