const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
	name: {
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

	category: {
		ref: "categories",
		type: Schema.Types.ObjectId,
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
