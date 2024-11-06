const BlogsSchema = require("../Schema/BlogsSchema");

const likeBlog = async (req, res) => {
    try {
        const { _id } = req.params;
        const userId = req.user._id;

        const blog = await BlogsSchema.findById(_id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.likedBy.includes(userId)) {
            return res.status(400).json({ message: "You have already liked this blog" });
        }

        blog.likedBy.push(userId);
        blog.likes += 1;

        const updatedBlog = await blog.save();

        res.status(200).json({ message: "Blog liked successfully", updatedBlog });
    } catch (error) {
        res.status(500).json({ message: `Internal server error ${error.message}` });
    }
}

module.exports = likeBlog;
