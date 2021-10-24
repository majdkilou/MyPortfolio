import styled from 'styled-components';
import { MdOutlineArrowCircleUp } from 'react-icons/md';

export const PortfolioContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  box-sizing: border-box;

  object-fit: contain;
  padding-left: 10rem;
  display: grid;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0;
    min-height: 100vh;
    object-fit: contain;
    display: grid;
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const PortfolioRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1 ' 'col2 col2'`};
  }
`;

export const Colum1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Colum2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.text`
  max-width: 540px;
  display: grid;
  padding-top: 0;
  padding-bottom: 60px;
  color: grey;
`;
export const ScrollToTop = styled(MdOutlineArrowCircleUp)`
  position: relative;
  justify-content: center;
color:rgb(81, 1, 105);
  align-items: center;
  font-size: 32px;
  margin-bottom: 2rem;
`;
