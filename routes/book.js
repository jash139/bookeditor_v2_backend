const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/")

    .get(function (req, res) {
        Book.find()
            .then(stories => res.json(stories))
            .catch(err => res.status(400).json(err));
    })

    .post(function (req, res) {
        const userId = req.body.userId;
        const bookCoverUrl = req.body.bookCoverUrl;
        const title = req.body.title;
        const summary = req.body.summary;
        const genres = req.body.genres;

        const newBook = new Book({
            userId,
            bookCoverUrl,
            title,
            summary,
            genres
        });

        newBook.save()
            .then((response) => res.json(response.data))
            .catch(err => res.status(400).json(err));
    });

router.route("/:id")
    .get(function (req, res) {
        Book.findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(400).json(err));
    })

    .delete(function (req, res) {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.json("Book deleted"))
            .catch(err => res.status(400).json("Error: " + err));
    })

    .patch(function (req, res) {
        Book.update(
            { _id: req.params.id },
            { $set: req.body }
        )
            .then(() => res.json("Book updated"))
            .catch(err => res.status(400).json("Error:" + err));
    })

module.exports = router;