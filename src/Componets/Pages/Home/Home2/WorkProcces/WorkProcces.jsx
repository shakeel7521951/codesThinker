import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const workSteps = [
  {
    number: 1,
    title: 'Discover',
    description: 'The "Discover" feature is designed to help you explore and find new job opportunities effortlessly.',
    color: 'bg-blue-500',
  },
  {
    number: 2,
    title: 'Design & Build',
    description: 'The "Design and Build" feature empowers you to create and customize your ideal job search experience. ',
    color: 'bg-blue-500',
  },
  {
    number: 3,
    title: 'Deliver',
    description: 'The "Deliver" feature ensures that your job search or application process is completed effectively and on time.',
    color: 'bg-blue-500',
  },
];

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-16 bg-[#121225] font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-gray-300">3 Step Work Process</h6>
          <h2 className="text-3xl font-bold text-gray-300">Our Working Process</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right"> 
          {workSteps.map((step) => (
            <div key={step.number} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className=" p-6 rounded-lg bg-[#0f0f1d] border shadow-lg relative">
                <div className={`flex items-center justify-center w-12 h-12 text-white bg-gray-400 hover:bg-[#EFA41C] border  rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 ${step.color}`}>
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-300">{step.title}</h3>
                  <p className="text-gray-300 mt-2">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;