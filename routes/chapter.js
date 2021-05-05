const router = require("express").Router();
let Chapter = require("../models/chapter.model");

router.route("/")

    .get(function (req, res) {
        Chapter.find()
            .then(chapters => res.json(chapters))
            .catch(err => res.status(400).json(err));
    })

    .post(function (req, res) {
        const bookId = req.body.bookId;
        const title = req.body.title;
        const content = req.body.content;
        const chapterNumber = req.body.chapterNumber;
        const newChapter = new Chapter({
            bookId,
            title,
            content,
            chapterNumber
        });

        newChapter.save()
            .then(() => res.json("Chapter Added"))
            .catch(err => res.status(400).json(err));
    })

router.route("/:id")
    .delete(function (req, res) {
        Chapter.findByIdAndDelete(req.params.id)
            .then(() => res.json("Chapter deleted"))
            .catch(err => res.status(400).json("Error: " + err));
    })

router.route("/book/:bookId")
    .get(function (req, res) {
        Chapter.find({ "bookId": req.params.bookId })
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    })

module.exports = router;