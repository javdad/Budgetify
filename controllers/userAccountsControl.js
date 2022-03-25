const Account = require("../models/account");
const errorHandler = require("../utils/errorHandler");
const accountValidator = require("../validators/accountValidator");

class userAccountController {
	getAccounts = async (req, res) => {
		try {
			const accounts = await Account.find({ userId: req.user._id });
			if (accounts.length === 0)
				return res.status(404).json({ message: "There is no any account!" });
			return res.status(200).json(accounts);
		} catch (err) {
			errorHandler(res, err);
		}
	};

	createAccount = async (req, res) => {
		try {
			const validate = accountValidator(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);
			const { title, description, currency } = req.body;

			const newAccount = new Account({
				title,
				description,
				currency,
				userId: req.user._id,
			});
			await newAccount.save();
			return res.status(200).json({ message: "Account created!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateAccount = async (req, res) => {
		try {
			const validate = accountValidator(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);

			const { title, description, currency } = req.body;
			const { _id } = req.params;

			await Account.findOneAndUpdate(
				{ _id },
				{ title, description, currency },
				{ new: true }
			);
			return res.status(200).json({ message: "Account updated!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteAccount = async (req, res) => {
		try {
			await Account.deleteOne({ _id: req.params._id });
			return res.status(200).json({ message: "Account deleted!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new userAccountController();
