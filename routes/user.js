const router = require("express").Router();
let User = require("../models/user.model");

router.route("/")

    .get(function (req, res) {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err));
    })

    .post(function (req, res) {

        const uid = req.body.uid;
        const email = req.body.email;
        const name = email.substr(0, email.indexOf('@'));
        const profilePicture = "";
        const about = "";
        const followers = [];
        const following = [];
        const library = [];
        const work = [];

        const newUser = new User({
            uid,
            email,
            name,
            profilePicture,
            about,
            followers,
            following,
            library,
            work
        });

        newUser.save()
            .then(() => res.json("User created"))
            .catch(err => res.status(400).json(err));
    });

router.route("/:id")
    .get(function (req, res) {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    })

    .delete(function (req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(() => res.json("User deleted"))
            .catch(err => res.status(400).json("Error: " + err));
    })

    .patch(function (req, res) {
        User.update(
            { _id: req.params.id },
            { $set: req.body }
        )
            .then(() => res.json("User updated"))
            .catch(err => res.status(400).json("Error:" + err));
    })

router.route("/uid/:uid")
    .get(function (req, res) {
        User.find({ "uid": req.params.uid })
            .then(user => res.json(user[0]))
            .catch(err => res.status(400).json(err));
    })

module.exports = router;