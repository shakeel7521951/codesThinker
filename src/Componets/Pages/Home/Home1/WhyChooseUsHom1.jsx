import React,{useEffect} from 'react';
import icon1 from '../../../images/icon-1.jpg';
import icon2 from '../../../images/icon-2.jpg';
import icon3 from '../../../images/icon-3.jpg';
import icon4 from '../../../images/icon-4.jpg';
import icon5 from '../../../images/icon-5.jpg';
import icon6 from '../../../images/icon-6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const whyChooseData = [
  {
    icon: icon1,
    title: 'Protect your Business',
    description: 'At Protect Your Business, our mission is to safeguard companies of all sizes against the ever-evolving landscape of risks and challenges. We provide comprehensive business protection services.',
  },
  {
    icon: icon2,
    title: 'Network Monitoring',
    description: 'Network Monitoring is dedicated to ensuring the performance, security, and reliability of your IT infrastructure. We provide advanced network monitoring services that allow businesses to maintain.',
  },
  {
    icon: icon3,
    title: 'Network Security',
    description: 'Network Security, we specialize in protecting your digital infrastructure against the growing range of cyber threats. Our mission is to secure your business by delivering comprehensive network security.',
  },
  {
    icon: icon4,
    title: 'Managed IT Service',
    description: 'Managed IT Service, we empower businesses by taking the complexity out of technology management. We provide end-to-end IT solutions that are tailored to meet the needs of your business.',
  },
  {
    icon: icon5,
    title: 'Dedicated IT Support',
    description: 'Dedicated IT Support, we are committed to providing personalized and reliable IT support solutions for businesses of all sizes. We understand that technology is at the heart of your operations.',
  },
  {
    icon: icon6,
    title: 'Custom Developed Software',
    description: 'Custom Developed Software, we specialize in creating tailored software solutions that meet the unique needs of your business. We believe that every business is different.',
  },
];

const WhyChooseUsHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 lg:px-10 bg-[#121225] font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-300">TechSoft So Different?</h6>
          <h2 className="text-4xl font-bold text-gray-300">Why Trust Us?</h2>
        </div>
        <div className="flex flex-wrap -mx-4 " data-aos="fade-right">
          {whyChooseData.map((item, index) => (
            <div key={index} className="w-full  lg:w-1/3 md:w-1/2 px-4 mb-8">
              <div className="bg-[#0f0f1d] p-6 h-full border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <img src={item.icon} alt="svg icon" className="w-12 h-12 mx-auto rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-white">{item.title}</h3>
                <p className="text-gray-400  text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHom1;