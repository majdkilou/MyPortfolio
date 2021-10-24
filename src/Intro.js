import React, { useState } from 'react';
import {
  IntroContainer,
  IntroBG,
  IntroContent,
  IntroH1,
  IntroP,
  ArrowForward,
  ArrowRight,
  IntroBtnWrapper,
} from './IntroElements';
import './SideBar.css';
import { Button } from './ButtonElement';

const Intro = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <IntroContainer>
      <IntroBG>
        <IntroContent className="text-animi">
          <IntroH1>
            Hi There,
            <br />
            <h1>
              <span>I</span>m <span>Majd Kilou</span>
            </h1>
            <br />
            <p> Welcome To My Personal Website</p>
          </IntroH1>
          <IntroBtnWrapper>
            <Button
              to="contactme"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </IntroBtnWrapper>
        </IntroContent>
      </IntroBG>
    </IntroContainer>
  );
};

export default Intro;
