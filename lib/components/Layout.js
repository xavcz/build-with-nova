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

const title = 'Build with Nova';
const tagline = 'Kick-ass modern products!';
const image = 'http://orig10.deviantart.net/d0ae/f/2007/314/6/2/rocket_by_luke_chueh.jpg';

const meta = [
  { charset: 'utf-8' },
  { name: 'description', content: tagline },
  { name: 'viewport', content:'width=device-width, initial-scale=1' },
  { property: 'og:type', content: 'article' },
  { property: 'og:url', content: Meteor.absoluteUrl() },
  { property: 'og:image', content: image },
  { property: 'og:title', content: 'Build with Nova' },
  { property: 'og:description', content: tagline },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:image:src', content: image },
  { name: 'twitter:title', content: 'Build with Nova' },
  { name: 'twitter:description', content: tagline },
];

const link = [
  { rel: 'canonical', href: Meteor.absoluteUrl() },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,500,700,900' },
];

export const Layout = ({children}) =>
  <Wrapper>
    
    <Helmet title={title} meta={meta} link={link} />
    
    <Header title={title} tagline={tagline} />
    
    {children}
    
    <Footer content='Powered by Nova' link='https://github.com/TelescopeJS/Telescope' />  
    
  </Wrapper>
