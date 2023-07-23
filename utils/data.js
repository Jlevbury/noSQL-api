const mongoose = require("mongoose");
const { User, Thought } = require("../models");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const userData = [
	{
		username: "james",
		email: "james@test.com",
		thoughts: [],
		friends: [],
	},
];

const thoughtData = [
	{
		thoughtText: "I dont think this is working correctly",
		createdAt: Date.now(),
		username: "james",
		reactions: [],
	},
];

User.insertMany(userData)
	.then(() => {
		console.log("Users inserted");
	})
	.catch((err) => {
		console.error(err);
	});

Thought.insertMany(thoughtData)
	.then(() => {
		console.log("Thoughts inserted");
	})
	.catch((err) => {
		console.error(err);
	});
