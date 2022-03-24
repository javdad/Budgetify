const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		min: 8,
	},
	name: {
		type: String,
		required: true,
		min: 1,
	},
	surname: {
		type: String,
		min: 1,
	},
	country: {
		type: String,
		min: 1,
	},
	dateOfBirth: {
		type: Date,
	},
	role: {
		type: String,
		default: "user",
	},
});

module.exports = mongoose.model("users", userSchema);
