const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},

	type: {
		type: String,
		required: true,
	},

	userId: {
		ref: "users",
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model("categories", categorySchema);
