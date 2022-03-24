require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const db_URL = process.env.MongoDB_URI;

mongoose.connect(
	db_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to Database");
	}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is working on the port: ${PORT}`));
