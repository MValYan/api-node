const mongoose = require ("mongoose");

const PostsModel = mongoose.model(
    "api-node",
    {
        auteur: {
            type: String,
            required: true,
        },
        message: {
            type:String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
);

module.exports = { PostsModel };