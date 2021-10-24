import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? 'red' : 'transparent')};
width: 10rem;
background-color: #181818;
height: 100vh;
position: fixed;
object-fit: fill;
display: flex;
z-index: 2;
flex-direction: column;
@media screen and (max-width: 768px) {
  background: orangered;
    height: 0;
    display: flex;
    justify-content: space-between;
    
   
    z-index: 12;
  
}
`;
export const NavLogo = styled(LinkR)`
display: block;
color: rgb(87, 87, 87);
padding: 8px 16px;

text-decoration: none;
font-family: "Maven Pro", sans-serif;
  border-bottom: 1px solid #888;
  text-align: center;
  
  cursor: pointer;
  &:hover {
    background-color: rgb(81, 1, 105);
    color: aqua;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavLink = styled(LinkS)`
display: block;
color: rgb(87, 87, 87);
padding: 8px 16px;

text-decoration: none;
font-family: "Maven Pro", sans-serif;
  border-bottom: 1px solid #888;
  text-align: center;
  
  cursor: pointer;
  &:hover {
    background-color: rgb(81, 1, 105);
    color: aqua;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  &.active {
    border-bottom : 3px solid #01bf71;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-right:4.5rem;
    
    
  }
`;

export const NavMenu = styled.div`
display: flex;
flex-direction: column;
width: 10rem;
height:2rem ;
background-color: #181818;
margin-right: 4rem;
margin-top: 7rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

