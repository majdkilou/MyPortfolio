import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Intro />
      <About {...homeObjOne} />
      <Skills {...homeObjTwo} />
      <Portfolio {...homeObjThree} />
      <ContactForm />
      <Footer/>
    </>
  );
};

export default Home;
