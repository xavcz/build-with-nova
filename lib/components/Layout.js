import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'

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

export const Layout = ({title, tagline, meta = [], link = [], children}) =>
  <Wrapper>
    
    <Helmet title={title} meta={meta} link={link} />
    
    <Header title={title} tagline={tagline} />
    
    {children}
    
    <Footer content='Powered by Nova' link='https://github.com/TelescopeJS/Telescope' />  
    
  </Wrapper>
