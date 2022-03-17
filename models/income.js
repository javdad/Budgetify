const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
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
	account: {
		ref: "accounts",
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model("incomes", incomeSchema);
