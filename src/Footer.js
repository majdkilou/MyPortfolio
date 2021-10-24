import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
} from './Footerelemnt';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItem>
                <FooterLinkTitle>
                  <FooterLink></FooterLink>
                </FooterLinkTitle>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>
                  <FooterLink></FooterLink>
                </FooterLinkTitle>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <WebsiteRights>Majd Kilou © 2021</WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
