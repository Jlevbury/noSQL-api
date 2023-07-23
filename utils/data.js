// utils/data.js
const faker = require("faker");

const Users = [...Array(10)].map((_, index) => ({
	username: faker.internet.userName() + index,
	email: faker.internet.email(),
}));

const Thoughts = [...Array(10)].map(() => ({
	thoughtText: faker.lorem.sentence(),
	username: Users[Math.floor(Math.random() * Users.length)].username, // Randomly assign a username from the Users array
}));

module.exports = { Users, Thoughts };

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
