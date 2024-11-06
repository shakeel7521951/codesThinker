import React, { lazy, Suspense } from 'react';
import Navbar from './Componets/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatIcon from './Componets/ChatSystem/ChatIcon';
import ScrollToTop from "react-scroll-to-top";
import { BiLoaderCircle } from "react-icons/bi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home1 = lazy(() => import("./Componets/Pages/Home/Home1/Home1"));
const BlogGrid = lazy(() => import("./Componets/Pages/Blogs/BlogGrid/BlogGrid"));
const Contact = lazy(() => import("./Componets/Pages/Contact/Contact"));
const Project = lazy(() => import('./Componets/Pages/Project/Project'));
const OurTeam = lazy(() => import("./Componets/Pages/Team/OurTeam"));
const BlogAreaRight = lazy(() => import('./Componets/Pages/Blogs/BlogAreaRight/BlogAreaRight'));
const ServiceSection = lazy(() => import('./Componets/Pages/ServiceSection/ServiceSection'));
const ExecutiveDetail = lazy(() => import("./Componets/Pages/Home/Home1/TeamSection/ExecutiveDetail "));
const About = lazy(() => import('./Componets/Pages/About/About'));
const BlogDetail = lazy(() => import('./Componets/Pages/Blogs/BlogDetail'));
const Login_Signup = lazy(() => import('./Componets/Pages/auth/Login_Signup'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ChatIcon />
        <Suspense fallback={
          <div className="loader-container">
            <BiLoaderCircle className="loader-icon" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/blogs-grid" element={<BlogGrid />} />
            <Route path="/view" element={<BlogGrid />} />
            <Route path="/blogs-right-sidebar" element={<BlogAreaRight />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/executive/:id" element={<ExecutiveDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/page" element={<Home1 />} />
            <Route path="/view-service" element={<ServiceSection />} />
            <Route path="/logo" element={<Home1 />} />
            <Route path="/blog/:_id" element={<BlogDetail />} />
            <Route path="/login" element={<Login_Signup />} />
          </Routes>
        </Suspense>
        <ScrollToTop
          smooth
          color="#f29f67"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px", display: "grid", placeItems: "center" }}
        />
      <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
