const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes"));
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/socialnetwork",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
