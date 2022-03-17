class incomesController {
	getAllIncomes(req, res) {
		try {
			res.send("Get all incomes");
		} catch (err) {
			res.send(err);
		}
	}

	getIncome(req, res) {
		try {
			res.send("Get income by account");
		} catch (err) {
			res.send(err);
		}
	}

	createIncome(req, res) {
		try {
			res.send("Create new income");
		} catch (err) {
			res.send(err);
		}
	}

	updateIncome(req, res) {
		try {
			res.send("Update income");
		} catch (err) {
			res.send(err);
		}
	}

	deleteIncome(req, res) {
		try {
			res.send("Delete income");
		} catch (err) {
			res.send(err);
		}
	}
}

module.exports = new incomesController();
