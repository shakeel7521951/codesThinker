import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import ChatIcon from '../../../../ChatSystem/ChatIcon';
import axios from 'axios';

const MemberDetail = () => {
  const { id } = useParams();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchSingleMember = async () => {
      try {
        const response = await axios.get(`${backendUrl}/staff/getMember/${id}`, { withCredentials: true });
        setMember(response.data.member);
      } catch (error) {
        console.log("Error fetching member data:", error?.message);
      }
    };
    fetchSingleMember();
  }, [backendUrl, id]);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <>
      <div className="h-auto w-[100%] bg-[#121225]">
        <div className="container mx-auto py-8">
          <div className="min-h-screen shadow-lg p-6 border rounded-xl overflow-hidden font-ui-sans-serif mx-auto">
            <div className='lg:flex justify-between'>
              <img
                src={member.staffMemberImage}
                alt={member.name}
                className="w-[25rem] h-[27rem] border object-cover rounded-[50%]"
              />
              <div className="p-4 md:p-28 space-y-4 bg-[#0f0f1d] border shadow-lg rounded-lg overflow-hidden h-[16rem] md:h-[27rem]">
                <h2 className="text-2xl font-bold text-[#f8d022]">{member.name}</h2>
                <p className="text-gray-300">Speciality: <span className='text-[#f8d022]'>{member.skill}</span></p>
                <p className="text-gray-300 mt-2">{member.bio}</p>
                <p className="text-gray-300 mt-2">Experience: {member.skill}</p>
                <p className="text-gray-300 mt-2">Email: {member.email ? member.email : "info@codesthinker.com"}</p>
                <div className="flex mt-4">
                  {member && (
                    <>
                        <a href="" className="mx-2">
                          <FiTwitter className='text-white hover:text-[#EFA41C] text-xl' />
                        </a>
                    
                        <a href="" className="mx-2">
                          <FaFacebook className='text-white hover:text-[#EFA41C] text-xl' />
                        </a>
                        <a href="" className="mx-2">
                          <FaLinkedin className='text-white hover:text-[#EFA41C] text-xl ' />
                        </a>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className='w-[90%] mx-auto mt-9 text-justify space-y-4'>
              <h1 className='text-2xl font-bold text-white'>Personal Information</h1>
              <p className='font-thin text-gray-300'>{member.personalinfo || 'Personal information not available'}</p>
            </div>
            <ChatIcon />
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

export default MemberDetail;
