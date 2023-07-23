// seeds/seed.js
const mongoose = require("mongoose");
const { User, Thought } = require("../models");
const { Users, Thoughts } = require("./data");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

User.insertMany(Users)
	.then(() => {
		console.log("Users inserted");
	})
	.catch((err) => {
		console.error(err);
	});

Thought.insertMany(Thoughts)
	.then(() => {
		console.log("Thoughts inserted");
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
		mongoose.connection.close();
	});
