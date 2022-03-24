const supertest = require("supertest");
const express = require("express");
require("dotenv").config();
const app = express();
const db_URL = process.env.MongoDB_URI;

describe("app", () => {
	beforeAll(async () => {
		await mongoose.disconnect();
		await mongoose.connect(db_URL);
	});

	afterAll(async () => {
		await mongoose.disconnect();
	});
}),
	describe("POST /login", () => {
		describe("Request is valid", () => {
			it("Email and password is valid", async () => {
				const response = await supertest(app)
					.post("/login")
					.send({ email: "jon@email.com", password: "jon-password" });

				expect(response.status).toBe(200);
				expect(response.header["content-type"]).toBe(
					"application/json; charset=utf-8"
				);
			});
		});

		describe("Request is not valid", () => {
			it("Email is not given", async () => {
				const response = await supertest(app)
					.post("/login")
					.send({ password: "jon-password" });

				expect(response.status).toBe(400);
				expect(response.body).toBe("'email' is required");
				expect(response.header["content-type"]).toBe(
					"application/json; charset=utf-8"
				);
			});

			it("Password is not given", async () => {
				const response = await supertest(app)
					.post("/login")
					.send({ email: "jon@email.com" });

				expect(response.status).toBe(400);
				expect(response.body).toBe("'password' is required");
				expect(response.header["content-type"]).toBe(
					"application/json; charset=utf-8"
				);
			});
		});
	});
