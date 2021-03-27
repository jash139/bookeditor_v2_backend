const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    bookId: String,
    title: String,
    content: [{ type: Object }],
    chapterNumber: Number
},
    {
        timestamps: true
    });

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;