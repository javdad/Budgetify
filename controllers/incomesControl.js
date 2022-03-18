const Income = require("../models/income");
const Account = require("../models/account");
const errorHandler = require("../utils/errorHandler");

class incomesController {
	getIncomes = async (req, res) => {
		try {
			const incomes = await Income.find({ user: req.user._id });
			res.status(200).json(incomes);
		} catch (err) {
			console.log(err);
			errorHandler(res, err);
		}
	};

	createIncome = async (req, res) => {
		try {
			const { name, amount, currency } = req.body;
			const account = await Account.findOne({ user: req.user._id });
			const newIncome = new Income({
				name,
				amount,
				currency,
				account: account._id,
				user: req.user._id,
			});
			await newIncome.save();
			res.status(201).json({ message: "Income created!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateIncome = async (req, res) => {
		try {
			res.send("Update income");
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteIncome = async (req, res) => {
		try {
			await Income.deleteOne({ _id: req.body._id }).then(
				res.status(200).json({ message: "Income deleted!" })
			);
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new incomesController();
