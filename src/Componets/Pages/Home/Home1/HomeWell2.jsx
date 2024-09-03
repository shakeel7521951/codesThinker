import React, { useEffect } from 'react';
import backgroundImage2 from './../../../images/frontimg2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeWell2 = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div 
      className='relative w-full h-screen flex items-center justify-center text-center px-4 font-ui-sans-serif'
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 font-ui-sans-serif bg-[#121225] opacity-60' aria-hidden='true'></div>

      <div 
        className='relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-8'
        data-aos="fade-down-right"
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold px-4 md:px-10'>
          We Provide Best Technology Solutions
        </h1>
        <p className='text-base md:text-lg lg:text-lg text-center text-white px-4 md:px-10 '>
          We are passionate about bringing enterprise-level productivity, scalability, and security to small and medium businesses.
        </p>
        <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
        <button className='bg-[#F1B81A] p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-bold'>
          How Its Work
        </button>
        <button className='bg-[#F1B81A] p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-bold'>
          Contact Us
        </button>
        </div>
      </div>
    </div>
  );
}

export default HomeWell2;
