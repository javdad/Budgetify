const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
	description: {
		type: String,
		required: true,
		min: 1,
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

module.exports = mongoose.model("incomes", incomeSchema);
