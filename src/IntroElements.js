import styled from 'styled-components';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 860px;
  top: 5rem;
  position: relative;
  z-index: 1;
  margin-left: 9rem;
  @media screen and (max-width: 768px) {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 9rem 3rem;
    height: 630px;
  }
`;
export const IntroBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const IntroContent = styled.div`
  z-index: 3;

  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0;
`;
export const IntroH1 = styled.h1`
  color: aqua;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const IntroP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  color: grey;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    object-fit: contain;
    display: inline-block;
  }
`;
export const IntroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  position: relative;
  @media screen and (min-width: 652px) {
    margin-right: 22rem;
  }
`;
export const ArrowForward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;
