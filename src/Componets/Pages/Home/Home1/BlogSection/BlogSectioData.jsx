import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogSectionData = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendUrl}/getBlogs`, {
          withCredentials: true,
        });
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [backendUrl]);

  const popularPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-[#121225] py-12 font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-gray-300 text-sm font-semibold">Our Latest Blog</h6>
          <h2 className="text-3xl font-bold text-gray-300">News & Updates</h2>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center" data-aos="fade-right">
          {blogPosts.length > 0 ? (
            popularPosts.map((post, index) => (
              <div key={index} className="lg:w-1/3 md:w-1/2 p-4" onClick={()=>navigate(`blog/${post._id}`)}>
                <div>
                  <Link to={post.link}>
                    <img
                      className="w-full h-64 object-cover rounded-t-lg border border-b-0 p-1"
                      src={post.blogImage}
                      alt={post.title || "Blog Post Image"}
                    />
                  </Link>
                </div>
                <div className="bg-[#0f0f1d] border border-t-0 rounded-b-lg p-6 shadow-lg">
                  <ul className="flex items-center text-gray-300 text-sm mb-4">
                    <li className="mr-4">{post.date}</li>
                    <li className="mx-2">|</li>
                    <li>
                      <Link className="text-[#EFA41C] hover:underline">{post.category}</Link>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold mb-4">
                    <Link to={post.link} className="text-gray-300 hover:underline">{post.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-4">  {post.description.split(" ").slice(0, 20).join(" ")}</p>
                  <Link to={`blog/${post._id}`} className="text-[#EFA41C] hover:underline">+ Read More</Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-300">No blog posts available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionData;
