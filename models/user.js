const { Schema, model } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: "Username is Required",
			trim: true,
		},
		email: {
			type: String,
			required: "Email address is Required",
			unique: true,
			validate: {
				validator: validator.isEmail,
				message: "Not a valid email",
			},
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Thought",
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

UserSchema.virtual("friendCount").get(function () {
	return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
