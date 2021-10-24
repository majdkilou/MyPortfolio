import React from 'react';
import useSound from 'use-sound';
import fanfareSfx from './mixkit-single-classic-click-1116.wav';
import {
  SidebarContainer,
  Icon,
  CloseItem,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarLogo,
} from './SidebarElements';
import MK from './mk.jpg';
import { animateScroll as scroll } from 'react-scroll';

const SideBar = ({ isOpen, toggle }) => {
  const [play, { stop }] = useSound(fanfareSfx);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseItem />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLogo to="/" onClick={toggleHome}>
              <img src={MK} alt="MK" className="logo" />
            </SidebarLogo>

            <SidebarLink
              onClick={toggle}
              to="aboutme"
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="skills"
              onClick={toggle}
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              Skills
            </SidebarLink>
            <SidebarLink
              to="portfolio"
              onClick={toggle}
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              Portfolio
            </SidebarLink>
            <SidebarLink
              to="contactme"
              onClick={toggle}
              activeStyle
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
