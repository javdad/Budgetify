class categoriesController {
	getAllCategories(req, res) {
		try {
			res.send("Get all category");
		} catch (err) {
			res.send(err);
		}
	}

	getCategory(req, res) {
		try {
			res.send("Get category");
		} catch (err) {
			res.send(err);
		}
	}

	createCategory(req, res) {
		try {
			res.send("Create new category");
		} catch (err) {
			res.send(err);
		}
	}

	updateCategory(req, res) {
		try {
			res.send("Update category");
		} catch (err) {
			res.send(err);
		}
	}

	deleteCategory(req, res) {
		try {
			res.send("Delete category");
		} catch (err) {
			res.send(err);
		}
	}
}

module.exports = new categoriesController();
