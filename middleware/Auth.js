require("dotenv").config();
const Jwt = require("jsonwebtoken");

const Auth = function (req, res, next) {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token)
			res.status(403).json({ message: "User unauthorised. No token!" });

		const decodedData = Jwt.verify(token, process.env.SECRET_KEY);
		req.user = decodedData;
		next();
	} catch (err) {
		return res.status(403).json({ message: "User unauthorised!" });
	}
};

module.exports = Auth;
