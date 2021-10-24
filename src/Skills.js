import React from 'react';
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Colum1,
  Colum2,
  TopLine,
  TextWrapper,
  ImgWrap,
  Img,
} from './SkillsElement';
import Typography from '@mui/material/Typography';
import { SkillBar } from 'react-skills';

function Skills(
  lightBg,
  id,
  imgStart,
  img,
  alt,
  topLine,
  darkText,
  description
) {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillsRow imgStart={imgStart}>
            <Colum1>
              <TextWrapper>
                <TopLine darkText={darkText}>{topLine}</TopLine>
                <Typography>
                  Growth marketer A.J. Agrawal says,: "There're always new
                  skills to learn and techniques to adopt. "The most successful
                  people in the world understand that they must continuously
                  learn to be successful. For us to live life to the fullest, we
                  must continually look for ways to improve."
                </Typography>
                <Typography>
                  That is why I'm Looking for a company, which will challenge my
                  webdesign skills and allow me to continue to develop my
                  knowledge and potential in a professional and new ways..
                </Typography>
              </TextWrapper>
            </Colum1>
            <Colum2>
              <ImgWrap>
                <SkillBar name="Fron-End" level={90} color="red" />
                <SkillBar name="Back-End" level={80} color="blue" />
                <SkillBar name="ReactJS" level={85} color="aqua" />
                <SkillBar name="JavaScript" level={80} color="green" />
                <SkillBar name="Git" level={95} color="purple" />
                <SkillBar name="Java" level={60} color="black" />
                <SkillBar name="Python" level={55} color="orange" />
              </ImgWrap>
            </Colum2>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}

export default Skills;
