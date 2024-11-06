import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import { FaThumbsUp } from "react-icons/fa";
import FooterHome from "../Home/Home1/FooterHome/FooterHome";
import { toast } from 'react-toastify';

const BlogDetail = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [blogLikes, setBlogLikes] = useState(0);
  const { _id } = useParams();
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${backendUrl}/getBlogs/${_id}`, { withCredentials: true });
        if (response.data.message === "Blog found successfully") {
          const blogData = response.data.blog;
          setBlog(blogData);
          setComments(blogData.comments || []);
          setBlogLikes(blogData.likes || 0);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [_id, backendUrl]);

  const handleBlogLike = async () => {
    try {
      await axios.put(`${backendUrl}/blogs/${_id}/like`, {}, { withCredentials: true });
      setBlogLikes(prevLikes => prevLikes + 1);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 402) {
          toast.info("Please login first",{position:'top-center'});
          navigate('/login');
        }
      }
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const newCommentData = {
          comment: newComment
        };

        const response = await axios.put(`${backendUrl}/blogs/${_id}/comment`, newCommentData, { withCredentials: true });

        if (response.data.message === "Comment added successfully") {
          setComments(response.data.updatedBlog.comments);
          setNewComment("");
          setVisibleCount(5); 
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 402) {
            toast.info("Please login first",{position:'top-center'});
            navigate('/login');
          } else {
            console.error("Error adding comment:", error.response.data);
          }
        } else {
          console.error("Error adding comment:", error.message);
        }
      }
    }
  };

  const likeComment = async (commentId) => {
    try {
      const response = await axios.put(`${backendUrl}/blogs/${_id}/comments/${commentId}/like`, {}, { withCredentials: true });

      if (response.data.message === "Comment liked successfully") {
        const updatedComments = comments.map(comment =>
          comment._id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 402) {
          toast.info("Please login first",{position:'top-center'});
          navigate('/login');
        }
      }
    }
  };

  // Function to show more comments
  const showMoreComments = () => {
    setVisibleCount(prevCount => prevCount + 5); 
  };

  // Function to show less comments
  const showLessComments = () => {
    setVisibleCount(5); 
  };

  return (
    <div className="flex flex-col items-center bg-[#121225] p-4">
      <div className="w-full sm:w-4/5 lg:w-3/5 m-auto mt-6 p-6 bg-[#121225] text-white rounded-lg shadow shadow-white">
        <div className="bg-blue-600 py-1 px-3 max-w-fit text-white text-xs sm:text-sm font-normal rounded-full">
          {blog?.category}
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 mb-4">{blog?.title}</h1>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-white gap-2 text-sm">
            <span>{blog?.author}</span>
          </div>
        </div>

        <div className="w-full relative overflow-hidden rounded-lg shadow-md">
          <img src={blog?.blogImage} alt={blog?.title} className="w-full h-[200px] sm:h-[400px] lg:h-[312px] object-fit" />
        </div>

        <div className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mt-8">
          {blog?.description ? parse(blog.description) : <p>No content available.</p>}
        </div>

        <button onClick={handleBlogLike} className="flex items-center text-blue-500 gap-1 mt-3 hover:text-blue-600 transition">
          <FaThumbsUp /> <span>{blogLikes}</span>
        </button>
      </div>

      <div className="w-full sm:w-4/5 lg:w-3/5 m-auto mt-8 p-6 shadow shadow-white bg-[#121225] rounded-lg">
        <h2 className="text-lg font-semibold mb-6 text-white">Leave a Comment</h2>
        <form onSubmit={addComment} className="mb-6">
          <textarea
            className="w-full p-3 border outline-none border-gray-300 bg-[#121225] text-white rounded-md focus:border-blue-500 transition ease-in-out duration-300"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="4"
          />
          <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" type="submit">
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Comments</h2>
            {comments.slice(0, visibleCount).reverse().map((comment, index) => (
              <div key={index} className="mb-4 rounded-lg p-4 shadow bg-[#121225] shadow-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{comment.userName}</p>
                  <p className="text-xs text-white">{comment.date ? new Date(comment.date).toLocaleString() : ""}</p>
                </div>
                <p className="text-base text-white my-2">{comment.comment}</p>

                <div className="flex items-center gap-3">
                  <button onClick={() => likeComment(comment._id)} className="flex items-center text-sm text-blue-500 hover:text-blue-700">
                    <FaThumbsUp className="mr-1" /> {comment.likes || 0}
                  </button>
                </div>
              </div>
            ))}
            {comments.length > visibleCount && (
              <button
                onClick={showMoreComments}
                className="text-blue-500 hover:underline"
              >
                Read More
              </button>
            )}
            {visibleCount > 5 && visibleCount > comments.length && (
              <button
                onClick={showLessComments}
                className="text-blue-500 hover:underline mt-2"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
      <FooterHome />
    </div>
  );
};

export default BlogDetail;
