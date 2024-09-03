import React from 'react';
import BlogSectioData from './BlogSectioData';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section className="bg-[#121225] font-ui-sans-serif">
        <div>
           <BlogSectioData/>
        <div className="text-center  pb-10 bg-[#121225]">
          <Link to=""className="bg-[#EFA41C] text-white py-2 px-6 rounded-md mr-4 hover:bg-[#EFA41C]">Get Free Quote</Link>
          <Link to="/view" className="bg-[#EFA41C] text-white py-2 px-6 rounded-md hover:bg-[#EFA41C]">View All Blog</Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;