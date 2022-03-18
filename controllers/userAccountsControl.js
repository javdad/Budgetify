const Account = require("../models/account");

class userAccountController {
	getAccounts = async (req, res) => {
		try {
			const accounts = await Account.find({ user: req.user._id });
			if (accounts.length > 0) return res.status(200).json({ accounts });
			res.status(404).json({ message: "There is no any account!" });
		} catch (err) {
			console.log(err);
		}
	};

	createAccount = async (req, res) => {
		try {
			const { title, description, currency } = req.body;
			const account = Account.findOne({ title: req.body.title });
			console.log(account);
			if (account.title === title)
				return res.status(400).json({ message: "Try another title" });

			const newAccount = new Account({
				title,
				description,
				currency,
				user: req.user._id,
			});
			await newAccount.save();
			return res.status(200).json({ message: "Account created!" });
		} catch (err) {
			console.log(err.message);
			res.status(400).json(err.message);
		}
	};

	updateAccount(req, res) {
		try {
			res.send("Update account");
		} catch (err) {
			res.send(err);
		}
	}

	deleteAccount(req, res) {
		try {
			const account = Account.find({ _id: req.body._id });
			console.log(req.body._id);
			res.send(account);
		} catch (err) {
			res.send(err);
		}
	}
}

module.exports = new userAccountController();
