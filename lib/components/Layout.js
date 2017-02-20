import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { Footer } from './Footer';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Layout = ({children}) =>
  <Wrapper>
    
    <Header />
    
    {children}
    
    <Footer />  
    
  </Wrapper>
