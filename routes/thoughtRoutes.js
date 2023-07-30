const router = require("express").Router();
const { Types } = require("mongoose");

const Thought = require("../models/thought");
const {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
} = require("../controllers/thoughtController");

// Route for getting all thoughts and creating a new thought
router.route("/").get(getAllThoughts).post(createThought);

// Route for getting a thought by ID, updating a thought, and deleting a thought
router
	.route("/:id")
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

router.post("/:thoughtId/reactions", async (req, res) => {
	try {
		const updatedThought = await Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $push: { reactions: req.body } },
			{ new: true, runValidators: true }
		);

		if (!updatedThought) {
			return res
				.status(404)
				.json({ message: "No thought found with this id!" });
		}

		res.json(updatedThought);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
	try {
		const updatedThought = await Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $pull: { reactions: { reactionId: req.params.reactionId } } },
			{ new: true, runValidators: true }
		);

		if (!updatedThought) {
			return res
				.status(404)
				.json({ message: "No thought found with this id!" });
		}

		res.json(updatedThought);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
