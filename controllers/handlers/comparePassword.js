const bcrypt = require("bcrypt");

const comparePassword = (password, candidate) => {
	return bcrypt.compareSync(password, candidate.password);
};

module.exports = comparePassword;
