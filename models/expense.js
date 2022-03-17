const { date } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
	category: {
		ref: "categories",
		type: Schema.Types.ObjectId,
	},
	account: {
		ref: "accounts",
		type: Schema.Types.ObjectId,
	},
	user: {
		ref: "users",
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model("accounts", accountSchema);
