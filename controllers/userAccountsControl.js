class userAccountController {
	getAllAccounts(req, res) {
		try {
			res.send("Get all accounts");
		} catch (err) {
			res.send(err);
		}
	}

	getAccount(req, res) {
		try {
			res.send("Get account by id");
		} catch (err) {
			res.send(err);
		}
	}

	createAccount(req, res) {
		try {
			res.send("Create new account");
		} catch (err) {
			res.send(err);
		}
	}

	updateAccount(req, res) {
		try {
			res.send("Update account");
		} catch (err) {
			res.send(err);
		}
	}

	deleteAccount(req, res) {
		try {
			res.send("Delete account");
		} catch (err) {
			res.send(err);
		}
	}
}

module.exports = new userAccountController();
