const Expense = require("../models/expense");
const Account = require("../models/account");
const Category = require("../models/category");
const errorHandler = require("../utils/errorHandler");
const expenseValidator = require("../validators/expenseValidator");
class expensesController {
	getExpense = async (req, res) => {
		try {
			const incomes = await Expense.find({ userId: req.user._id });
			if (incomes.length === 0)
				return res.status(404).json({ message: "There is no any expense" });
			res.status(200).json(incomes);
		} catch (err) {
			errorHandler(res, err);
		}
	};

	createExpense = async (req, res) => {
		try {
			const validate = expenseValidator(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);

			const { description, amount, currency, categoryName } = req.body;
			const account = await Account.findOne({ userId: req.user._id });

			const category = await Category.findOne({ name: categoryName });

			const newExpense = new Expense({
				categoryId: category._id,
				description,
				amount,
				currency,
				accountId: account._id,
				userId: req.user._id,
			});

			await newExpense.save().then((account.balance -= amount));
			await account.save();

			return res.status(201).json({ message: "Expense created!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateExpense = async (req, res) => {
		try {
			const { _id } = req.params;
			const { description, amount } = req.body;
			await Expense.findOneAndUpdate(
				{ _id },
				{ description, amount },
				{ new: true }
			);
			return res.status(200).json({ message: "Expense updated!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteExpense = async (req, res) => {
		try {
			const { _id } = req.params;
			await Expense.deleteOne({ _id });
			return res.status(200).json({ message: "Expense deleted!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new expensesController();
