const express = require("express");
const router = express.Router();
const Thought = require("../models/Thought");

// GET route to retrieve all thoughts
router.get("/", async (req, res) => {
	try {
		const thoughts = await Thought.find();
		res.json(thoughts);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// POST route to create a new thought
router.post("/", async (req, res) => {
	const thought = new Thought({
		thoughtText: req.body.thoughtText,
		// you can add other fields as needed
	});

	try {
		const newThought = await thought.save();
		res.status(201).json(newThought);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// GET route to retrieve a specific thought
router.get("/:id", getThought, (req, res) => {
	res.json(res.thought);
});

// PUT route to update a thought
router.put("/:id", getThought, async (req, res) => {
	if (req.body.thoughtText != null) {
		res.thought.thoughtText = req.body.thoughtText;
	}

	try {
		const updatedThought = await res.thought.save();
		res.json(updatedThought);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// DELETE route to delete a thought
router.delete("/:id", getThought, async (req, res) => {
	try {
		await res.thought.remove();
		res.json({ message: "Deleted Thought" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Middleware function to get a thought by ID
async function getThought(req, res, next) {
	let thought;
	try {
		thought = await Thought.findById(req.params.id);
		if (thought == null) {
			return res.status(404).json({ message: "Cannot find thought" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.thought = thought;
	next();
}

module.exports = router;
