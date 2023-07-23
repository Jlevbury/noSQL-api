const mongoose = require("mongoose");
const { User, Thought } = require("../models");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const userSeed = [
	{
		username: "james",
		email: "james@test.com",
		thoughts: [],
		friends: [],
	},
];

const thoughtSeed = [
	{
		thoughtText: "Testing a thought",
		createdAt: Date.now(),
		username: "james",
		reactions: [],
	},
];
User.deleteMany({})
	.then(() => User.collection.insertMany(userSeed))
	.then((data) => {
		console.log(data.result.n + " user records inserted!");
		return Thought.deleteMany({});
	})
	.then(() => Thought.collection.insertMany(thoughtSeed))
	.then((data) => {
		console.log(data.result.n + " thought records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
