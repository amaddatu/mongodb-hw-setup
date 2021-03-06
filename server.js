const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

const db = require("./models");

// "http://localhost:3000/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

db.User.create({name: "Bob-virus"});

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});