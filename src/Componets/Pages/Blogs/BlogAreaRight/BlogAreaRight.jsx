import React, { useEffect, useState } from "react";
import BlogAreaRightData from "./BlogAreaRightData";
import { IoSearch } from "react-icons/io5";
import FooterHome from "../../Home/Home1/FooterHome/FooterHome";
import axios from "axios";
import { Link } from "react-router-dom";


const BlogAreaRight = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendUrl}/getBlogs`, {
          withCredentials: true,
        });
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [backendUrl]);

  // Filtered blogs by title, category search input, and selected category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearchInput =
      blog.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchInput.toLowerCase());

    const matchesSelectedCategory = selectedCategory
      ? blog.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    return matchesSearchInput && matchesSelectedCategory;
  });



  // Extract unique categories from blogs
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  // Get the 3 most recent posts
  const recentPosts = blogs.slice(-3).reverse();

  // Assuming popularity is determined by a `views` property or similar
  const popularPosts = [...blogs]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <section className="blog-area pt-16 pb-24 px-10 bg-[#121225]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-2/3 w-full px-4">
            <BlogAreaRightData blogs={filteredBlogs} />
          </div>
          <div className="lg:w-1/3 w-full px-4 mt-8 lg:mt-0 border-l">
            <section className="widget widget_search mb-10">
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="bg-[#EFA41C] p-2 ">
                  <IoSearch className="text-white h-6 w-6" />
                </button>
              </div>
            </section>

            {/* Popular Posts Section */}
            <section className="widget widget_techSoft_posts_thumb mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Popular Posts
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              {popularPosts.map((post) => (
                <Link
                  to={`/blog/${post._id}`} 
                  key={post._id}
                  className="item flex items-center mb-4 cursor-pointer"
                >
                  <img
                    src={post.blogImage || "/no-img.jpg"}
                    alt={post.title || "No image available"} 
                    className="w-1/4 block h-16 rounded-lg bg-gray-300"
                  />
                  <div className="info w-3/4 ml-4">
                    <span className="text-sm text-gray-300">{post.date}</span>
                    <h4 className="title usmall text-gray-300 font-semibold text-[15px] hover:text-[#EFA41C]">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </section>


            {/* Categories Section */}
            <section className="widget widget_categories mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Categories
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
              <ul className="list-disc list-inside text-gray-300">
                {categories.map((category, index) => (
                  <div key={index} className="mb-2">
                    <Link
                      to="#"
                      onClick={() => setSelectedCategory(category)}
                      className={`hover:text-[#EFA41C] ${selectedCategory === category
                        ? "text-[#EFA41C]"
                        : "text-gray-300"
                        }`}
                    >
                      {category}
                    </Link>
                  </div>
                ))}
              </ul>
            </section>

            {/* Recent Posts Section */}
            <section className="widget widget_recent_entries mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Recent Posts
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <ul>
                {recentPosts.map((post, index) => (
                  <div key={index} className="mb-2 text-gray-300">
                    <Link to={`/blog/${post._id}`} className="hover:text-[#EFA41C]">
                      {post.title}
                    </Link>
                  </div>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <FooterHome />
    </section>
  );
};

export default BlogAreaRight;
