import React, { PropTypes } from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.header`
  padding: 3rem 0;
  padding-bottom: 1rem;
`;

const HeaderTitle = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -4px;
  text-align: center;
`;

const HeaderTagline = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: -1px;
  text-align: center;
  opacity: .7;
  margin-top: 0.5rem;
`;

export const Header = ({
  title = 'Build with Nova', 
  tagline = 'Kick-ass modern products!',
}) =>
  <HeaderBlock>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderTagline>{tagline}</HeaderTagline>
  </HeaderBlock>

Header.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};
