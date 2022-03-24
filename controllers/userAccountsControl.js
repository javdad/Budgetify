const Account = require("../models/account");
const errorHandler = require("../utils/errorHandler");

class userAccountController {
	getAccounts = async (req, res) => {
		try {
			const accounts = await Account.find({ userId: req.user._id });
			if (accounts.length === 0)
				return res.status(404).json({ message: "There is no any account!" });
			return res.status(200).json({ accounts });
		} catch (err) {
			errorHandler(err);
		}
	};

	createAccount = async (req, res) => {
		try {
			const { title, description, currency } = req.body;
			const account = await Account.findOne({ title: req.body.title });
			if (account.title === title)
				return res.status(400).json({ message: "Try another title" });

			const newAccount = new Account({
				title,
				description,
				currency,
				userId: req.user._id,
			});
			await newAccount.save();
			return res.status(200).json({ message: "Account created!" });
		} catch (err) {
			errorHandler(err);
		}
	};

	updateAccount(req, res) {
		try {
			res.send("Update account");
		} catch (err) {
			errorHandler(err);
		}
	}

	deleteAccount = async (req, res) => {
		try {
			await Account.deleteOne({ _id: req.body._id });
			return res.status(200).json({ message: "Account deleted!" });
		} catch (err) {
			errorHandler(err);
		}
	};
}

module.exports = new userAccountController();
