const User = require("../models/user");

const isAdmin = async (req, res, next) => {
	try {
		const condidate = await User.findOne({ email: req.user.email });
		if (!(condidate.role.toLowerCase() === "admin"))
			return res.status(403).json({ message: "You have not permissions!" });
		next();
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = isAdmin;
