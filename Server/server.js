require("dotenv").config();

const express = require("express");
var cors = require("cors");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const recipesRouter = require("./routes/recipes");
app.use("/recipes", recipesRouter);

app.listen(8080, () => console.log("Server Started"));
