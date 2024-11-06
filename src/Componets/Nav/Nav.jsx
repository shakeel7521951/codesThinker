import React, {  useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ct from './../images/codelogo.png';
import "../Nav/Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);


  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#121225]  h-20 sticky z-40 top-0 shadow-md p-3">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 font-ui-sans-serif">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/logo">
            <img src={ct} alt="Codes Thinker Logo" className="h-[150px] w-30 rounded-2xl" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        
        <button 
          className="md:hidden flex items-center text-black hover:text-red-700 focus:text-[#f0db1b]" 
          onClick={toggleMenu}
        >
          {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg> */}

          <div className='flex flex-col absolute right-5 gap-1 items-center'>
            <section className={`bg-white w-7 rounded h-1 origin-left transition-transform duration-300 ${isOpen===false?"rotate-0":"rotate-[45deg]"}`}></section>
            <section className={`bg-white w-7 rounded h-1  ${isOpen===false?"opacity-100":"opacity-0"}`}></section>
            <section className={`bg-white w-7 rounded h-1 origin-left transition-transform duration-300 ${isOpen===false?"rotate-0":"rotate-[-45deg] translate-x-0 translate-y-1"}`}></section>
          </div>
        </button>

        {/* Navigation Items */}
        <div className={`flex-grow bg-[#121225] flex items-center ${isOpen ? '' : ''} md:flex md:items-center md:justify-center `}>
          <ul ref={navRef} className={`flex bg-[#121225] flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-4 absolute md:static ring-1 ring-white md:ring-0  md:bg-transparent w-full md:w-auto  ${isOpen ? 'top-20 left-0 md:left-0' : 'top-[-100vh] md:left-0 left-0'} duration-500 w-screen md:top-0 px-4 md:px-0`}>
            {/* Home Menu */}
            <li className="relative group">
              <Link onClick={()=>setIsOpen(false)} to="/" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Home
              </Link>

              
          
                
              {/* <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg z-50 w-56">
                <li>
                  <Link to="/home1" className="nav-link block text-black px-4 py-2 hover:text-[#5764ec]">Home 1</Link>
                </li>
                <hr />
                <li>
                  <Link to="/home2" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Home 2</Link>
                </li>
              </ul> */}
            </li>
            <li className="relative group">
              <Link  onClick={()=>setIsOpen(false)} to="/about" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                About Us
              </Link>
            </li>
            {/* Service Menu */}
            <li className="relative group">
              <Link  onClick={()=>setIsOpen(false)} to="/services" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Service
              </Link>
            </li>
            {/* Project Menu */}
            <li className="relative group">
              <Link  onClick={()=>setIsOpen(false)} to="/project" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Project
              </Link>
            </li>
            {/* Pages Menu */}
            <li className="relative group">
              <Link  onClick={()=>setIsOpen(false)} to="/team" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Team
              </Link>
            </li>
            {/* Blogs Menu */}
            <li className="relative group">
              <Link   onClick={()=>setIsOpen(false)} to="/blogs-right-sidebar" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Blogs
              </Link>
            </li>
            {/* Contact Menu */}
            <li className="relative group">
              <Link  onClick={()=>setIsOpen(false)} to="/contact" className="nav-link flex items-center text-white py-2 md:py-0 hover:text-[orange]">
                Contact
              </Link>
            </li>
            {/* About Us Menu */}
          
          </ul>
        </div>

        {/* Join Us Button */}
      
        <div className="flex-shrink-0 hidden md:block">
          <button className="bg-[orange] text-white px-6 py-2 text-lg rounded-lg " onClick={()=>window.location.href="/login"}>Join Us</button>
        </div>
        {/* Mobile Search Icon */}
        {/* <div className='md:hidden flex items-center text-black'>
          <IoSearch size={22} />
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
