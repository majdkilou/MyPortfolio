import { style } from '@mui/system';
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const ContactFormContainer = styled.div`
  display: grid;
  position: relative;
  height: 860px;

  top: 0;
  left: 0;
  padding: 0;
  object-fit: contain;
  align-items: center;
  justify-content: center;
  padding-left: 10rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const TextWrapper = styled.div`
  color: grey;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ContactRow = styled.div`
  display: grid;
  height: 75%;

  text-shadow: 4px 1px 3px rgba(0, 0, 0, 0.2);
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
  font-style: italic;
`;
export const Colum2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  border-color: grey;
`;

export const Social = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
`;
