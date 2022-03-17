class expensesController {
	getAllExpenses(req, res) {
		try {
			res.send("Get all expenses");
		} catch (err) {
			res.send(err);
		}
	}

	getExpense(req, res) {
		try {
			res.send("Get expense by account");
		} catch (err) {
			res.send(err);
		}
	}

	createExpense(req, res) {
		try {
			res.send("Create new expense");
		} catch (err) {
			res.send(err);
		}
	}

	updateExpense(req, res) {
		try {
			res.send("Update expense");
		} catch (err) {
			res.send(err);
		}
	}

	deleteExpense(req, res) {
		try {
			res.send("Delete expense");
		} catch (err) {
			res.send(err);
		}
	}
}

module.exports = new expensesController();
