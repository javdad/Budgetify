const Expense = require("../models/expense");
const Account = require("../models/account");
const errorHandler = require("../utils/errorHandler");
class expensesController {
	getExpense = async (req, res) => {
		try {
			const incomes = await Expense.find({ userId: req.user._id });
			if (incomes.length === 0)
				return res.status(404).json({ message: "There is no any expense" });
			res.status(200).json(incomes);
		} catch (err) {
			errorHandler(err);
		}
	};

	createExpense = async (req, res) => {
		try {
			const { name, amount } = req.body;
			const account = await Account.findOne({ user: req.user._id });
			const newExpense = new Expense({
				name,
				amount,
				currency: account.currency,
				accountId: account._id,
				userId: req.user._id,
			});
			await newExpense.save();
			res.status(201).json({ message: "Expense created!" });
		} catch (err) {
			errorHandler(err);
		}
	};

	updateExpense = async (req, res) => {
		try {
			res.send("Update expense");
		} catch (err) {
			errorHandler(err);
		}
	};

	deleteExpense = async (req, res) => {
		try {
			await Expense.deleteOne({ _id: req.body._id }).then(
				res.status(200).json({ message: "Expense deleted!" })
			);
		} catch (err) {
			errorHandler(err);
		}
	};
}

module.exports = new expensesController();
