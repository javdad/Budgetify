const Jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
	const payload = {
		email: user.email,
		password: user.password,
		role: user.role,
	};
	return Jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" });
};

module.exports = generateToken;
