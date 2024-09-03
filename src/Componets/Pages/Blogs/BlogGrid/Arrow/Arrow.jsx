import React, { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
const Arrow = () => {
    const [activePage, setActivePage] = useState(0);

    const handlePageClick = (pageNumber) => {
      setActivePage(pageNumber);
    };
  return (
    <div className="pagination-area mt-12 mx-auto w-full flex justify-center items-center">
    <FaAngleDoubleLeft
      className="text-center p-2 font-bold mx-auto md:mx-3 h-10 w-10 cursor-pointer text-[#EFA41C]"
      onClick={() => handlePageClick(activePage - 1)} // Change the page logic as needed
    />
    {[1, 2, 3, 4 ].map((page) => (
      <a
        key={page}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handlePageClick(page);
        }}
        className={`text-center p-2  font-bold md:mx-3 h-10 w-10 border border-gray-300 cursor-pointer ${
          activePage === page ? 'bg-blue-600 text-white' : 'bg-white text-black hover:bg-[#EFA41C] hover:text-white'
        }`}
      >
        {page}
      </a>
    ))}
    <FaAngleDoubleRight
      className="text-center p-2 mx-auto font-bold mx-3 h-10 w-10 cursor-pointer text-[#EFA41C]"
      onClick={() => handlePageClick(activePage + 1)} // Change the page logic as needed
    />
  </div>
 
  )
}

export default Arrow