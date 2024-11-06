const BlogsSchema = require("../Schema/BlogsSchema");

const commentBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { comment } = req.body;
        const userName = req.user.name; 
        if (!comment || !userName) {
            return res.status(400).json({ message: "Comment and user name are required" });
        }
        const updatedBlog = await BlogsSchema.findByIdAndUpdate(
            blogId,
            { $push: { comments: { userName, comment } } },
            { new: true } 
        );
        if (updatedBlog) {
            return res.status(200).json({ message: "Comment added successfully", updatedBlog });
        } else {
            return res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};

module.exports = commentBlog;
