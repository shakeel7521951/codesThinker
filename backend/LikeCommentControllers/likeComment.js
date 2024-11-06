const BlogsSchema = require("../Schema/BlogsSchema");

const likeComment = async (req, res) => {
    const { blogId, commentId } = req.params;
    const userId = req.user._id; 

    try {
        const blog = await BlogsSchema.findOne({ _id: blogId, "comments._id": commentId });

        if (!blog) {
            return res.status(404).json({ message: "Comment not found" });
        }
        const comment = blog.comments.id(commentId);
        if (comment.likedBy.includes(userId)) {
            return res.status(400).json({ message: "You have already liked this comment" });
        }
        comment.likedBy.push(userId);
        comment.likes += 1;
        const updatedBlog = await blog.save();
        res.status(200).json({ message: "Comment liked successfully", updatedBlog });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = likeComment;
