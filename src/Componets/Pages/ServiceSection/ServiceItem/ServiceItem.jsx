import React, { useEffect} from 'react';
import { SiVorondesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa6";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";
import Hovimg from './../../../images/projects-2.png';
import Hovimg2 from './../../../images/projects-3.png';
import Hovimg3 from './../../../images/projects-4.png';
import { FaPython } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { TbWriting } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { SiGoogleads } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';

const servicesData = [
  {
    id:1,
    icon: <SiVorondesign size={35} />,
    title: 'Web Designing',
    description: 'Professional Web Designer, I specialize in creating modern, responsive, My goal is to transform your ideas into a digital reality,',
    link: 'ecom',
    HovImg: Hovimg,
  },
  {
    id:2,
    icon: <FaConnectdevelop size={35} />,
    title: 'Web Development',
    description: 'Web Developer, I offer comprehensive web development services tailored to meet the specific needs of businesses and individuals.',
    link: 'webdes',
    HovImg: Hovimg2,
  },
  {
    id:3,
    icon: <RiFlutterFill size={35} />,
    title: 'Mobile App Development',
    description: 'I offer professional Flutter development services that enable you to build beautiful, high-performance, and natively compiled applications for mobile, web.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:4,
    icon: <LiaDigitalTachographSolid size={35} />,
    title: 'Digital Marketing',
    description: ' Comprehensive digital marketing services designed to enhance your online presence, attract and engage your target audience.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:5,
    icon: <TbSeo size={35} />,
    title: 'SEO',
    description: 'SEO services designed to enhance your online presence, improve search engine rankings, and drive targeted traffic to your website.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:6,
    icon: <TbWriting size={35} />,
    title: 'Content Writing',
    description: 'High-quality content writing services that captivate your audience, communicate your message effectively, and drive engagement.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:7,
    icon: <FaConnectdevelop size={35} />,
    title: 'Full Stack Development',
    description: 'As a seasoned Full Stack Developer, I provide end-to-end web development services, covering both front-end and back-end development.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:8,
    icon: <FaLaravel size={35} />,
    title: 'Laravel',
    description: 'Laravel Developer, I offer professional Laravel development services tailored to build powerful, scalable, and secure web applications.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:9,
    icon: <FaWordpress size={35} />,
    title: 'Word Press Development',
    description: 'WordPress Developer, I specialize in creating custom, high-performance websites using the world’s most popular content management.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:10,
    icon: <IoCameraReverseOutline size={35} />,
    title: 'Graphics Designing',
    description: 'I offer creative graphic design services that help businesses visually communicate their message and stand out from the competition.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:11,
    icon: <TbUxCircle size={35} />,
    title: 'UI/UX Designing',
    description: 'UI/UX Designer, I specialize in creating user-centered designs that deliver intuitive, engaging, and seamless digital experiences.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:12,
    icon: <FaPython size={35} />,
    title: 'Python',
    description: 'Python Developer, I provide comprehensive Python development services that help businesses build reliable, scalable, and high-performance applications.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },

  {
    id:13,
    icon: <MdAnimation size={35} />,
    title: '2d & 3d Animations',
    description: 'Expert 2D and 3D animation services designed to captivate your audience and convey your message in a visually compelling way.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },

  {
    id:14,
    icon: <SiGoogleads size={35} />,
    title: 'Lead Generation',
    description: 'Lead generation services designed to help you attract, engage, and convert high-quality leads into loyal customers.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
];

const ServicItem = () => {

const location = useLocation()
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    // Determine which subset of servicesData to use based on the path
  const displayedServices = location.pathname === "/" 
    ? servicesData.slice(0, 6) // Display first 6 items on the home path
    : servicesData; // Display all items otherwise


  return (
    <div className="h-auto w-[100%] bg-[#121225]">
    <section className="py-16 lg:px-10 font-ui-sans-serif">
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h6 className="text-lg font-medium text-gray-300">What We Do</h6>
            <h2 className="text-4xl font-bold text-gray-300">Our Services</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div
                className="flex flex-col h-full bg-[#0f0f1d] p-6 border rounded-lg"
              >
                {/* Background image and overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 group-hover:opacity-40 opacity-0"
                  style={{ backgroundImage: `url(${service.HovImg})` }}
                >
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0  bg-opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-[#f3b81b] mx-auto">
               <p className='text-white'>{service.icon}</p>
                </div>
                <h3 className="relative z-10 text-2xl font-semibold mb-4 text-white group-hover:text-white transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-400 mb-4 group-hover:text-white transition-colors duration-300 text-center">
                  {service.description}
                </p>
                <div className="relative z-10 text-center mt-auto">
                  <Link to={service.link}
                    className="text-[#f3b81b] text-xl hover:underline group-hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default ServicItem;
