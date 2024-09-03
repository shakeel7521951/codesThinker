import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-[#121225]  about-area py-12 lg:px-16 font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center"  data-aos="fade-right">
          <div className="w-full lg:w-6/12 md:w-full">
            <div className="about-content">
              <h6 className="text-lg font-semibold text-gray-300">Code's Thinker</h6>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-white">
              We design, develop, implement and support IT Systems
              </h2>
              <p className="mt-4 text-gray-300">
              Code Thinker Software House is a forward-thinking technology
                company dedicated to providing cutting-edge software development
                solutions. We specialize in crafting innovative digital
                experiences through a blend of creativity, technical expertise,
                and a customer-first approach. At Code Thinker, we offer a wide
                range of services, including custom web and mobile application
                development, full-stack development, UI/UX design.
                products.
              </p>
              <div className="skills mt-6">
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center text-white">
                    IT Consulting <em className="text-gray-300">90%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-[#EFA41C] h-1.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center text-white">
                    Virtual Workstation <em className="text-gray-300">75%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-[#EFA41C] h-1.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center text-white">
                    Managed IT Service <em className="text-gray-300">80%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-[#EFA41C] h-1.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:ml-auto md:w-full mt-12 lg:mt-0">
            <div className="contact-section bg-[#0f0f1d] border p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white">Free Consultation</h3>
              <div className="contact-form mt-6">
                <form id="contact-form" className="form" action="mail.php" method="POST">
                  <div className="space-y-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control w-full p-3 border bg-gray-200  border-gray-300 rounded"
                        required
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control w-full p-3 border bg-gray-200 border-gray-300 rounded"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control w-full p-3 border bg-gray-200 border-gray-300 rounded"
                        required
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control w-full p-3 border bg-gray-200 border-gray-300 rounded"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary w-32 bg-[#EFA41C] text-white py-3 rounded">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;