const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: String,

    name: String,
    email: String,
    profilePicture: String,
    about: String,

    followers: [{ type: String }],  // list of follower uids
    following: [{ type: String }],  // list of following uids

    library: [{ type: String }],
    work: [{ type: String }],

},
    {
        timestamps: true
    });

const User = mongoose.model("User", userSchema);

module.exports = User;