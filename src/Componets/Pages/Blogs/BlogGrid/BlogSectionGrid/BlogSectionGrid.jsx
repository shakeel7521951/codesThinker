import React, { useEffect, useState } from 'react';
import Arrow from '../Arrow/Arrow';
 // Adjust the import path if necessary
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import BlogSectioData from '../../../Home/Home1/BlogSection/BlogSectioData';

const BlogSectionGrid = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  console.log(blogPosts)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendUrl}/getBlogs`, {
          withCredentials: true,
        });
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blogs. Please try again later."); 
      }
    };
    fetchBlogs();
  }, [backendUrl]);

  const popularPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

    console.log("popular posts ===="+popularPosts)

  return (
    <section className="blog-area py-12 lg:px-16 bg-[#121225]">
      <div className="container mx-auto">
        {error && <p className="text-red-500">{error}</p>}
        {/* <BlogSectioData blogPosts={popularPosts} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <div key={index} className="single-blog shadow-lg overflow-hidden rounded border " onClick={() => navigate(`/blog/${blog._id}`)}>
              <div className="post-img">
                <Link to={blog.link}>
                  <img src={blog.blogImage} alt={blog.title} className="w-full h-48 object-cover" />
                </Link>
              </div>
              <div className="p-6">
                <div className="blog-date text-sm text-gray-500 mb-2">
                  <ul className="flex items-center space-x-2">
                    <li><h6>{blog.date}</h6></li>
                    <li><span className="blog-inline-sep">|</span></li>
                    <li><Link to="/" className="text-indigo-600">{blog.category}</Link></li>
                  </ul>
                </div>
                <div className="blog-body-title mb-2">
                  <h3 className="text-xl font-semibold text-white"><Link to={`/blog/${blog._id}`}>{blog.title}</Link></h3>
                </div>
                <div className="text-white mb-4">
                  <p>{blog.description.split(" ").slice(0,25).join(" ")}</p>
                </div>
                <div className="blog-bottom-text-link">
                  <Link to={`blog/${blog._id}`} className="text-indigo-600 hover:text-indigo-400">+ Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Arrow />
      </div>
    </section>
  );
};

export default BlogSectionGrid;
