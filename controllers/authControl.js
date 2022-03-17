const bcrypt = require("bcrypt");
const comparePassword = require("./handlers/comparePassword");
const generateToken = require("./handlers/generateToken");

const User = require("../models/user");

class AuthController {
	registerUsers = async (req, res) => {
		try {
			const { email, password, name } = req.body;
			const candidate = await User.findOne({ email });

			if (candidate)
				res.status(400).json({
					massage: `User with this email: ${email} is already exist!`,
				});

			const user = new User({
				email,
				password: bcrypt.hashSync(password, 10),
				name,
			});

			await user.save();
			res.status(200).json({ massage: "Registration completed" });
		} catch (err) {}
	};

	loginUser = async (req, res) => {
		try {
			const { email, password } = req.body;
			const candidate = await User.findOne({ email });
			if (!candidate)
				res.status(404).json({
					massage: `Account with this emal: ${email} doesn't exist!`,
				});
			if (!comparePassword(password, candidate))
				res.status(400).json({ massage: "Password is wrong!" });

			const token = generateToken(candidate);
			return res.json({ token: `Bearer ${token}` });
		} catch (err) {
			res.json({ massage: "Please, enter the password!" });
		}
	};

	async logoutUser(req, res) {
		try {
			res.send("logout");
		} catch (err) {}
	}
}

module.exports = new AuthController();
