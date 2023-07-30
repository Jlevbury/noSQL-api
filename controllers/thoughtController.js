const { Thought } = require("../models");

const thoughtController = {
	// get all Thoughts
	getAllThoughts(req, res) {
		Thought.find({})
			.select("-__v")
			.sort({ _id: -1 })
			.then((dbThoughtData) => res.json(dbThoughtData))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},

	// get one Thought by id
	getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.id })
			.select("-__v")
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought found with this id!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// create Thought
	createThought({ body }, res) {
		console.log(body);
		Thought.create(body)
			.then((dbThoughtData) => res.json(dbThoughtData))
			.catch((err) => res.status(400).json(err));
	},

	// update Thought by id
	updateThought({ params, body }, res) {
		Thought.findOneAndUpdate({ _id: params.id }, body, {
			new: true,
			runValidators: true,
		})
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought found with this id!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => res.status(400).json(err));
	},

	// delete Thought
	deleteThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.id })
			.then((dbThoughtData) => {
				if (!dbThoughtData) {
					res.status(404).json({ message: "No thought found with this id!" });
					return;
				}
				res.json(dbThoughtData);
			})
			.catch((err) => res.status(400).json(err));
	},
};

module.exports = thoughtController;
