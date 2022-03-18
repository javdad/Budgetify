const Jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
	const payload = {
		_id: user._id,
		email: user.email,
		role: user.role,
	};
	return Jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" });
};

module.exports = generateToken;
