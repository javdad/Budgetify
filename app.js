const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const categoriesRouter = require("./routes/categories");
const transactionsRouter = require("./routes/transactions");
const userAccountRouter = require("./routes/user-account");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/accounts", userAccountRouter);

app.get("/", (req, res) => {
	res.send("Server is working!");
});

module.exports = app;
