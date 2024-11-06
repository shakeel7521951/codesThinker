import React from 'react';
import { Link } from 'react-router-dom';

const BlogAreaRightData = ({ blogs }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {blogs.map((post) => (
        <div key={post._id} className="lg:w-1/2 w-full px-4 mb-8">
          <div className="single-blog bg-[#0f0f1d] border rounded-lg shadow-lg">
            <div className="post-img mb-4">
              <Link to={`/blog/${post._id}`}>
                <img src={post.blogImage} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              </Link>
            </div>
            <div className="blog-content p-6">
              <div className="blog-date mb-2">
                <ul className="flex items-center space-x-2 text-gray-500 text-sm">
                  <h6 className='text-gray-300'>{post.date}</h6>
                  <p>|</p>
                  <Link to="" className="text-[#EFA41C] hover:underline">{post.category}</Link>
                </ul>
              </div>
              <div className="blog-body-title mb-2">
                <h3 className="text-xl font-semibold">
                  <Link to={`/blog/${post._id}`} className="hover:underline text-gray-200">{post.title}</Link>
                </h3>
              </div>
              <div className="blog-body-text mb-4">
                <p className='text-gray-300'>{post.description.split(' ').slice(0,25).join(' ')}</p>
              </div>
              <div className="blog-bottom-text-link">
                <Link to={`/blog/${post._id}`} className="text-[#EFA41C] hover:underline">+ Read More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogAreaRightData;
