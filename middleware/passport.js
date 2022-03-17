const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Users = mongoose.model("users");
require("dotenv").config();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY,
};

module.exports = (passport) => {
	passport.use(
		new JwtStrategy(options, async (payload, done) => {
			try {
				const user = await Users.findOne(payload.email).select("email");

				if (user) done(null, user);
				done(null, false);
			} catch (err) {}
		})
	);
};
