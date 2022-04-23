const Transaction = require("../models/transaction");
const transactionValidator = require("../validators/transactionValidator");
const errorHandler = require("../utils/errorHandler");
const Account = require("../models/account");
const Category = require("../models/category");

class transactionsController {
	getTransactions = async (req, res) => {
		try {
			const transactions = await Transaction.find({ userId: req.user._id });
			if (transactions.length === 0)
				return res.status(404).json({ message: "There is no any transaction" });
			return res.status(200).json(transactions);
		} catch (err) {
			errorHandler(res, err);
		}
	};

	createTransaction = async (req, res) => {
		try {
			const validate = transactionValidator(req.body);
			if (validate.error) return res.status(400).json(validate.error.message);

			const { title, description, type, amount, categoryId, accountId, payee } =
				req.body;

			const account = await Account.findOne({ _Id: req.body.accountId });

			const newTransaction = new Transaction({
				title,
				description,
				type,
				amount,
				payee: payee || req.user.name,
				amount,
				currency: account.currency,
				categoryId,
				accountId,
				userId: req.user._id,
			});

			await newTransaction.save();
			type === "expense"
				? (account.balance -= amount)
				: (account.balance += amount);
			await account.save();

			return res.status(201).json({ message: "Transaction created!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	updateTransaction = async (req, res) => {
		try {
			const { _id } = req.params;
			const { title, description, amount, payee, categoryId } = req.body;
			await Transaction.findOneAndUpdate(
				{ _id },
				{ title, description, amount, payee, categoryId },
				{ new: true }
			);
			return res.status(200).json({ message: "Transaction updated!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};

	deleteTransaction = async (req, res) => {
		try {
			const { _id } = req.params;
			await Transaction.deleteOne({ _id });
			return res.status(200).json({ message: "Transaction deleted!" });
		} catch (err) {
			errorHandler(res, err);
		}
	};
}

module.exports = new transactionsController();
