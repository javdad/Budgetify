const Income = require("../models/income");
const Account = require("../models/account");
const Category = require("../models/category");
const errorHandler = require("../utils/errorHandler");
const incomeValidator = require("../validators/incomeValidator");

class incomesController {
	getIncomes = async (req, res) => {
		try {
			const incomes = await Income.find({ userId: req.user._id });
			if (incomes.length === 0)
				return res.status(404).json({ message: "There is no any income" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	createIncome = async (req, res) => {
		try {
			const validate = incomeValidator(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);

			const { description, amount, currency, categoryName } = req.body;
			const account = await Account.findOne({ userId: req.user._id });

			const category = await Category.findOne({ name: categoryName });

			const newIncome = new Income({
				categoryId: category._id,
				description,
				amount,
				currency,
				accountId: account._id,
				userId: req.user._id,
			});

			await newIncome.save().then((account.balance += amount));
			await account.save();

			return res.status(201).json({ message: "Income created!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateIncome = async (req, res) => {
		try {
			const { _id } = req.params;
			const { description, amount } = req.body;
			await Income.findOneAndUpdate(
				{ _id },
				{ description, amount },
				{ new: true }
			);
			return res.status(200).json({ message: "Income updated!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteIncome = async (req, res) => {
		try {
			const { _id } = req.params;
			await Income.deleteOne({ _id });
			return res.status(200).json({ message: "Income deleted!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new incomesController();
