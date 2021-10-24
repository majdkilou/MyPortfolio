import styled from 'styled-components';

export const SkillsContainer = styled.div`
  object-fit: contain;
  padding-left: 10rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SkillsRow = styled.div`
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
  padding-top: 0;
  padding-bottom: 60px;
  color: grey;
  display: grid;
  @media screen and (max-width: 768px) {
    padding: 20px;
    font-size: 15px;
  }
`;
export const TopLine = styled.p`
  color: black;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#010606' : 'f7f8fa')};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#f7f8fa' : '010606')};
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 80%;
  margin: 0 0 20px 0;
  margin-left: 7rem;
`;
