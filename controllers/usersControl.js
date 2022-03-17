const mongoose = require("mongoose");
const User = require("../models/user");

class Controller {
	getAccount = async (req, res) => {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (user) res.status(200).send(user);
		} catch (err) {
			console.log(err);
		}
	};

	updateAccount = async (req, res) => {
		try {
			res.json({ message: "Update Account" });
		} catch (err) {
			console.log(err);
		}
	};

	deleteAccount = async (req, res) => {
		try {
			res.json({ message: "Delete Account" });
		} catch (err) {}
	};
}

module.exports = new Controller();
