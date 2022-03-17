const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const categoriesRouter = require("./routes/categories");
const expensesRouter = require("./routes/expenses");
const incomesRouter = require("./routes/incomes");
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
app.use("/api/expenses", expensesRouter);
app.use("/api/incomes", incomesRouter);
app.use("/api/userAccount", userAccountRouter);

app.get("/", (req, res) => {
	res.send("Server is working!");
});

module.exports = app;
