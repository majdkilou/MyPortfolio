import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import fanfareSfx from './mixkit-single-classic-click-1116.wav';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconContext } from 'react-icons/lib';
import MK from './mk.jpg';
import { animateScroll as scroll } from 'react-scroll';
import './SideBar.css';
import { Nav, NavLink, Bars, NavMenu, NavLogo } from './NavbarElements';

const NavbarElements = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [play, { stop }] = useSound(fanfareSfx);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#510169' }}>
        <Nav className="sidebar" scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={MK} alt="MK" className="logo" />
          </NavLogo>
          <Bars onClick={toggle} />
          <NavMenu className="nav">
            <NavLink
              to="about"
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              About
            </NavLink>
            <NavLink
              to="skills"
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              My Skills
            </NavLink>
            <NavLink
              to="portfolio"
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="contactme"
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              Contact Me
            </NavLink>
          </NavMenu>

          <div className="social">
            <a
              href="https://www.facebook.com/glory.kilou1"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <FacebookIcon />
              </i>
            </a>
            <a
              href="https://twitter.com/KilouMajd"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <TwitterIcon />
              </i>
            </a>
            <a
              href="https://www.instagram.com/majdkilou/"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/majd-kilou-13a07a222/"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <LinkedInIcon />
              </i>
            </a>
          </div>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarElements;
