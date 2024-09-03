import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import ct1 from "../../../../images/code.png";

const FooterHome = () => {
  return (
    <>
      <section className="bg-[#121225]  text-white py-12 md:px-6 px-4 font-ui-sans-serif">
        <div className="container mx-auto  bg-[#0f0f1d] rounded-lg p-6 border px-4">
          <div className="flex flex-wrap -mx-4">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-about">
                <a className="footer-logo" href="/">
                  <img
                    src={ct1}
                    alt="logo"
                    className="w-[50px] bg-white h-[40px]"
                  />
                </a>
                <p className="mt-4 text-white text-sm">
                  we offer a range of cutting-edge web development and software
                  solutions that are tailored to meet the specific needs of our
                  clients.Our team of experienced developers, designers, and
                  strategists works collaboratively with clients to deliver.
                </p>
                <ul className="flex mt-4 space-x-4">
                  <a href="/" className=" hover:text-white">
                    <FaFacebookF />
                  </a>

                  <a href="/" className=" hover:text-white">
                    <FaTwitter />
                  </a>

                  <a href="/" className=" hover:text-white">
                    <FaLinkedinIn />
                  </a>

                  <a href="/" className=" hover:text-white">
                    <FaYoutube />
                  </a>
                </ul>
                <form className="flex flex-col sm:flex-row mt-5 gap-2">
                  <input
                    type="email"
                    className="flex-1 px-4 py-1 mb-2 sm:mb-0 border border-gray-600 rounded-md text-black "
                    placeholder="Enter your email"
                    name="EMAIL"
                    required=""
                    autoComplete="off"
                  />
                  <button className="bg-[#EFA41C] text-white py-1 px-4 rounded-md hover:bg-[#EFA41C] transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {/* Company Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4">Company</h5>
                <ul className="flex flex-col gap-1">
                  <a href="about.html" className="hover:text-white">
                    About Us
                  </a>
                  <a href="projects.html" className="hover:text-white">
                    Latest Project
                  </a>
                  <a href="services.html" className="hover:text-white">
                    IT Solutions
                  </a>
                  <a href="services.html" className="hover:text-white">
                    Digital Solutions
                  </a>
                  <a href="team.html" className="hover:text-white">
                    Team Member
                  </a>
                  <a href="contact.html" className="hover:text-white">
                    Contact Us
                  </a>
                </ul>
              </div>
            </div>
            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list  ">
                <h5 className="text-lg font-semibold mb-4">Services</h5>
                <ul className="flex flex-col gap-1">
                  <a href="/" className="hover:text-white">
                    IT Strategy
                  </a>
                  <a href="/" className="hover:text-white">
                    Network Services
                  </a>
                  <a href="/" className="hover:text-white">
                    Software Audits
                  </a>
                  <a href="/" className="hover:text-white">
                    Business Intelligence
                  </a>
                  <a href="/" className="hover:text-white">
                    Data Science
                  </a>
                  <a href="/" className="hover:text-white">
                    Virtual Workstation
                  </a>
                </ul>
              </div>
            </div>
            {/* Contact Info Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
                <ul className=" mb-4 flex flex-col gap-1">
                  <span className="font-semibold">
                    Address:Hassan Manzil Basement Hall Goheer Town Bahawlpur
                  </span>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:03483873980" className="hover:text-white">
                    03483873980
                  </a>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="info@codesthinker.com" className="hover:text-white">
                    info@codesthinker.com
                  </a>
                </ul>
                <div className="footer-info-newsletter"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copyright Section */}
      <div className=" bg-[#121225] py-7">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-sm text-gray-300">
              <p>
                © 2024 - All Rights Reserved -{" "}
                <span className="font-semibold"> Codes Thinker</span>
              </p>
            </div>
            <ul className="flex space-x-4 text-sm text-gray-300">
              <a href="terms-condition.html" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="privacy-policy.html" className="hover:text-white">
                Privacy Policy
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
