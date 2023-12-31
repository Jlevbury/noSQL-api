const express = require("express");
const router = require("express").Router();
const User = require("../models/user");
const userController = require("../controllers/userController");

// GET route to retrieve all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// POST route to create a new user
router.post("/", async (req, res) => {
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		// you can add other fields as needed
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// GET route to retrieve a specific user
router.get("/:id", getUser, (req, res) => {
	res.json(res.user);
});

// PUT route to update a user
router.put("/:id", getUser, async (req, res) => {
	if (req.body.username != null) {
		res.user.username = req.body.username;
	}
	if (req.body.email != null) {
		res.user.email = req.body.email;
	}

	// you can add other fields as needed

	try {
		const updatedUser = await res.user.save();
		res.json(updatedUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// DELETE route to delete a user
router.delete("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "Cannot find user" });
		}

		await User.findByIdAndDelete(req.params.id);
		res.json({ message: "Deleted User" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post("/:userId/friends/:friendId", userController.addFriend);
router.delete("/:userId/friends/:friendId", userController.removeFriend);

// Middleware function to get a user by ID
async function getUser(req, res, next) {
	let user;
	try {
		user = await User.findById(req.params.id);
		if (user == null) {
			return res.status(404).json({ message: "Cannot find user" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.user = user;
	next();
}

module.exports = router;
