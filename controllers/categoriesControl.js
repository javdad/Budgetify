const Category = require("../models/category");
const errorHandler = require("../utils/errorHandler");
class categoriesController {
	getCategory = async (req, res) => {
		try {
			const categories = await Category.find({ userId: req.user._id });
			if (categories.length === 0)
				return res.status(404).json({ message: "There is no any catagory" });
			return res.status(200).json(categories);
		} catch (err) {
			errorHandler(err);
		}
	};

	createCategory = async (req, res) => {
		try {
			const { name, type } = req.body;
			const category = await Category.findOne({ name });
			if (category)
				return res
					.status(400)
					.json(`Category with this name: '${name}' is already exist!`);
			const newCategory = new Category({
				name,
				type,
				userId: req.user._id,
			});
			await newCategory.save();
			return res.status(201).json({ message: "Category created!" });
		} catch (err) {
			errorHandler(err);
		}
	};

	updateCategory = async (req, res) => {
		try {
			res.send("Update category");
		} catch (err) {
			res.send(err);
		}
	};

	deleteCategory = async (req, res) => {
		try {
			await Category.deleteOne({ _id: req.body._id });
			return res.status(200).json({ message: "Expense deleted!" });
		} catch (err) {
			errorHandler(err);
		}
	};
}

module.exports = new categoriesController();
