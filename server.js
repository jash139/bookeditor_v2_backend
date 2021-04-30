const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//receiving in json format
// app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully.");
})

const bookRouter = require("./routes/book");
const chapterRouter = require("./routes/chapter");
const userRouter = require("./routes/user");

app.use("/books", bookRouter);
app.use("/chapter", chapterRouter);
app.use("/users", userRouter);

app.get("/", function (req, res) {
    res.send("Home page bookedv2");
})

app.listen(port, function () {
    console.log("Server started on port: " + port);
})