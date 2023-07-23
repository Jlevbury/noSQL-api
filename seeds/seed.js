const mongoose = require("mongoose");
const { User, Thought } = require("../models");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const User = [
	{
		username: "james",
		email: "james@test.com",
		thoughts: [],
		friends: [],
	},
];

const Thought = [
	{
		thoughtText: "Testing a thought",
		createdAt: Date.now(),
		username: "james",
		reactions: [],
	},
];
