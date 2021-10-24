import React from 'react';
import ProjectListData from './ProjectListData';
import Typography from '@mui/material/Typography';
import { animateScroll as scroll } from 'react-scroll';

import {
  Colum1,
  TextWrapper,
  PortfolioRow,
  PortfolioContainer,
  PortfolioWrapper,
  Colum2,
} from './PortfolioElement.js';

const Portfolio = ({ lightBg, imgStart }) => {
  return (
    <>
      <PortfolioContainer lightBg={lightBg} id="portfolio">
        <PortfolioWrapper>
          <PortfolioRow imgStart={imgStart}>
            <Colum1>
              <TextWrapper>
                <Typography>
                  Since I moved to Sweden, I invested my time in learning more
                  and making a practice project like Amazon clone, and more
                  projects to come in the future.
                </Typography>
              </TextWrapper>
            </Colum1>
            <Colum2>
              <ProjectListData />
            </Colum2>
          </PortfolioRow>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
