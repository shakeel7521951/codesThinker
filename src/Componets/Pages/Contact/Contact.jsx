import React from 'react'
import PageTitle from './PageTitle/PageTitle'
import ContactForm from './ContactForm/ContactForm'
import FooterHome from '../Home/Home1/FooterHome/FooterHome'

const Contact = () => {
  return (
    <>
    <div className="h-auto w-[100%] bg-[#121225] font-ui-sans-serif">
      <PageTitle title="Contact Us" Sub="Contact"/>
      <ContactForm/>
       <FooterHome/>
       </div>
    </>
  )
}

export default Contact
