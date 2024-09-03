import React from 'react'
import blog1 from './../../../images/blog-3.jpg'
import Arrow from '../BlogGrid/Arrow/Arrow';
// import FooterHome from '../../Home/Home1/FooterHome/FooterHome';

const BlogAreaRightData = () => {
    const blogPosts = [
        {
          id: 1,
          date: '20 January - 2024',
          category: 'Technology',
          title: 'What Could 5g Change About The Way We Use Technology?',
          description: 'Technology encompasses a wide array of advanced tools and solutions designed to drive progress, efficiency, and growth in today’s digital landscape.',
          image: blog1,
        },
        {
          id: 2,
          date: '25 January - 2024',
          category: 'IT Services',
          title: '3 Factors To Consider When Choosing A Managed IT Services',
          description: 'IT Solutions offer a range of services and technologies designed to streamline your business operations, enhance productivity, and secure your digital infrastructure.',
          image: blog1,
        },
        {
          id: 3,
          date: '30 January - 2024',
          category: 'Business',
          title: 'How To Quickly Shift To A Work-from-home Business Model',
          description: 'Business Solutions are designed to address the unique challenges and opportunities faced by organizations of all sizes. From streamlining operations.',
          image: blog1,
        },
        {
          id: 4,
          date: '20 January - 2024',
          category: 'Cyber Solutions',
          title: 'How To Stop Cyber Criminals During This Global Pandemic',
          description: 'Cyber Solutions are designed to safeguard your organization from the growing threats of cyber-attacks and data breaches. Our solutions encompass a wide range.',
          image: blog1,
        },
        {
          id: 5,
          date: '25 January - 2024',
          category: 'Digital Marketing',
          title: 'The First Thing You Should Do If You Fall Victim To A Cyber Attack',
          description: 'Digital Marketing encompasses a range of online strategies and tools designed to enhance your brand’s visibility, engage your target audience,',
          image: blog1,
        },
        {
          id: 6,
          date: '30 January - 2024',
          category: 'Consulting',
          title: '3 Things You Should Absolutely Demand From Your IT Services',
          description: 'Consulting services provide businesses with specialized expertise and strategic guidance to navigate complex challenges, optimize operations, and achieve their goals.',
          image: blog1,
        },
      ];
      
  return (
  <>
    <div className="flex flex-wrap -mx-4">
    {blogPosts.map((post) => (
      <div key={post.id} className="lg:w-1/2  w-full px-4 mb-8">
        <div className="single-blog  bg-[#0f0f1d] border rounded-lg  shadow-lg">
          <div className="post-img mb-4">
            <a href="/">
              <img src={post.image} alt="" className="w-full h-48 object-cover rounded-t-lg " />
            </a>
          </div>
          <div className="blog-content p-6">
            <div className="blog-date mb-2">
              <ul className="flex items-center space-x-2 text-gray-500 text-sm">
            
                  <h6 className='text-gray-300'>{post.date}</h6>
  
                <p>|</p>
              
                  <a href="/" className="text-[#EFA41C] hover:underline">{post.category}</a>
              
              </ul>
            </div>
            <div className="blog-body-title mb-2">
              <h3 className="text-xl font-semibold">
                <a href="/" className="hover:underline text-gray-200">{post.title}</a>
              </h3>
            </div>
            <div className="blog-body-text mb-4">
              <p className='text-gray-300'>{post.description}</p>
            </div>
            <div className="blog-bottom-text-link">
              <a href="/" className="text-[#EFA41C] hover:underline">+ Read More</a>
            </div>
          </div>
        </div>
      </div>
    ))}
     <div className='lg:ml-28 w-full md:w-auto'>
     <Arrow/>
     </div>
   
  </div>
  </>
  )
}

export default BlogAreaRightData
