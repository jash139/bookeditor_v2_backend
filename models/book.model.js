const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    userId: String,
    userName: String,
    rating: Number,
    bookCoverUrl: String,
    title: String,
    summary: String,
    genres: [{ type: String }],
},
    {
        timestamps: true
    });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;