const mongoose = require("mongoose");

const blogs = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        minlength: 3 
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy: [{  // Field to track users who liked the blog
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [
        {
            userName: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            likes: {
                type: Number,
                default: 0
            },
            likedBy: [{ 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }],
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true });

const BlogsSchema = mongoose.model('Blog', blogs);
module.exports = BlogsSchema;
