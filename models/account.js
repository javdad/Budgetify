const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
	},
	currency: {
		type: String,
		required: true,
	},
	balance: {
		type: Number,
		default: 0,
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
	user: {
		ref: "users",
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model("accounts", accountSchema);
