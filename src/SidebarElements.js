import React from 'react';

import './index.css';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  float: right;
  position: fixed;
  z-index: 999;
  width: 79%;
  height: 100%;
  margin-left: 4rem;
  display: grid;
  object-fit: contain;
  overflow: auto;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  display: ${({ isOpen }) => (isOpen ? '0' : 'none')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const CloseItem = styled(FaTimes)`
  color: grey;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: grey;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: grey;
  cursor: pointer;
  border-bottom: 1px solid #888;
  font-family: 'Maven Pro', sans-serif;
  padding: 8px 16px;
  background: #1d1d1d;
  &:hover {
    background-color: rgb(81, 1, 105);
    color: aqua;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #888;
  font-family: 'Maven Pro', sans-serif;
  padding: 8px 16px;
  &:hover {
    background-color: rgb(81, 1, 105);
    color: aqua;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
