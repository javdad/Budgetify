const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const mongoose = require("mongoose");
const Users = mongoose.model("users");
require("dotenv").config();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY,
};

const JWT_Callback = async (payload, done) => {
	try {
		const user = await Users.findOne({ email: payload.email });
		if (user) done(null, user);
		done(null, false);
	} catch (err) {
		console.log(err);
	}
};

module.exports = (passport) => {
	passport.use(new JwtStrategy(options, JWT_Callback));
};
