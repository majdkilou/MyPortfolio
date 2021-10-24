import React from 'react';

import './SideBar.css';
import RecipeReviewCard from './Card';
import Typography from '@mui/material/Typography';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Colum1,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
  Colum2,
} from './AboutElement';
import Hello from './undraw_Hello_re_3evm.png';

const About = ({
  lightBg,
  id,
  imgStart,
  img,
  alt,
  topLine,
  darkText,
  description,
}) => {
  return (
    <>
      <div>
        <AboutContainer lightBg={lightBg} id="about">
          <AboutWrapper>
            <AboutRow imgStart={imgStart}>
              <Colum1>
                <TextWrapper>
                  <TopLine darkText={darkText}>{topLine}</TopLine>
                  <Typography paragraph>
                    I have a Higher National Diploma in Computing and Business
                    Applications, a junior BS Computer science student, Building
                    a high quality website with, HTML, CSS, JavaScript and React
                    is my passion .
                  </Typography>
                  <Typography paragraph>
                    A problem solver who enjoys a challenge and can work well
                    under pressure and who possesses strong customer service
                    skills, good communication skills and attention to detail.
                  </Typography>
                </TextWrapper>
              </Colum1>
              <Colum2>
                <ImgWrap>
                  <Img src={Hello} />
                </ImgWrap>
              </Colum2>
            </AboutRow>
          </AboutWrapper>
        </AboutContainer>
      </div>
      <div className="card" id="aboutme">
        <RecipeReviewCard />
      </div>
    </>
  );
};

export default About;
