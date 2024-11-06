import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const TeamSection = () => {
  const [teamMembers,setTeamMembers] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log(teamMembers);
  useEffect(()=>{
    const fetchTeam = async()=>{
     try {
      const response = await axios.get(`${backendUrl}/staff/staff-members`,{withCredentials:true});
      setTeamMembers(response.data.members);
     } catch (error) {
      console.log(`Error fetching Team Members ${error?.message}`)
     }
    }
    fetchTeam();
  },[backendUrl]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-16 lg:px-10 bg-[#121225] font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-300">Our Leadership</h6>
          <h2 className="text-4xl font-bold text-gray-300">Team Members</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {teamMembers.map((member) => (
            <div key={member._id} className="w-full   lg:w-1/4 md:w-1/2 px-4 mb-8">
              <Link to={`/executive/${member._id}`}>
                <div className="relative h-72 bg-white rounded-lg shadow-md overflow-hidden border-dotted border-3 border-blue-600">
                  <img
                    src={member.staffMemberImage}
                    alt={member.name}
                    className="w-full  object-cover border"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 flex justify-center space-x-3">
                        {/* <a href={member.socialLinks.facebook}>
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="text-xl"
                        />
                      </a>
                      <a href={member.socialLinks.twitter}>
                        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                      </a>
                      <a href={member.socialLinks.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-xl"
                        />
                      </a> */}
                      </div>
                      <h3 className="text-2xl mb-2">{member.name}</h3>
                      <span className="text-lg text-[#EFA41C] ">
                        {member.skill}
                      </span>
                      <span className="text-lg ">{member.work}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3 ">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <span className="text-gray-300 text-xm">{member.skill}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
