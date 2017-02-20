import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout = ({children}) =>
  <Wrapper>{children}</Wrapper>
