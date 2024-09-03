import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import teamMembers from './teamMembers';
import ChatIcon from '../../../../ChatSystem/ChatIcon';


const ExecutiveDetail = () => {
  const { id } = useParams();
  const executive = teamMembers.find(member => member.id === Number(id));

  // Handle case where executive is not found
  if (!executive) {
    return <div>Executive not found</div>;
  }

  return (
    <>
    <div className="h-auto w-[100%] bg-[#121225]">
    <div className="container mx-auto py-8">
      <div className="min-h-screen shadow-lg p-6 border rounded-xl overflow-hidden font-ui-sans-serif mx-auto">
        <div className=' lg:flex justify-between '>
          <img
            src={executive.image}
            alt={executive.name}
            className="w-[25rem] h-[27rem] border object-cover rounded-[50%]"
          />
          <div className=" p-4 md:p-28 space-y-4 bg-[#0f0f1d] border shadow-lg rounded-lg overflow-hidden h-[16rem] md:h-[27rem]">
            <h2 className="text-2xl font-bold text-[#f8d022]">{executive.name}</h2>
            <p className="text-gray-300">Speciality: <span className='text-[#f8d022]'>{executive.role}</span></p>
            <p className="text-gray-300 mt-2">{executive.bio}</p>
            {executive.Experience && <p className="text-gray-300 mt-2">Experience: {executive.Experience}</p>}
            {executive.email && <p className="text-gray-300 mt-2">Email: {executive.email}</p>}
            <div className="flex mt-4">
              {/* Ensure properties exist before rendering */}
              {executive.socialLinks && (
                <>
                  {executive.socialLinks.twitter && (
                    <a href={executive.socialLinks.twitter} className="mx-2">
                      <FiTwitter className='text-white hover:text-[#EFA41C] text-xl'/>
                    </a>
                  )}
                  {executive.socialLinks.facebook && (
                    <a href={executive.socialLinks.facebook} className="mx-2">
                      <FaFacebook className='text-white hover:text-[#EFA41C] text-xl'/>
                    </a>
                  )}
                  {executive.socialLinks.linkedin && (
                    <a href={executive.socialLinks.linkedin} className="mx-2">
                      <FaLinkedin className='text-white hover:text-[#EFA41C] text-xl '/>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto mt-9 text-justify space-y-4'>
          <h1 className='text-2xl font-bold text-white'>Personal Information</h1>
          <p className='font-thin text-gray-300'>{executive.personalinfo || 'Personal information not available'}</p>
        </div>
           <ChatIcon/>
        <div className='w-[90%] mx-auto flex justify-between mt-7'>
          <div>
            <h1 className='text-gray-300'>Skills</h1>
          </div>
          <div>
            <h1 className='text-gray-300'>Experience</h1>
          </div>
        </div>
          
      </div>
    </div>
    </div>
    </>
  );
};

export default ExecutiveDetail;
