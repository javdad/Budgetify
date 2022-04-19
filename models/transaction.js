const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	type: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	payee: {
		type: String,
	},
	amount: {
		type: Number,
		required: true,
	},
	currency: {
		type: String,
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
	categoryId: {
		ref: "categories",
		type: Schema.Types.ObjectId,
		required: true,
	},
	accountId: {
		ref: "accounts",
		type: Schema.Types.ObjectId,
	},
	userId: {
		ref: "users",
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model("transactions", transactionSchema);
