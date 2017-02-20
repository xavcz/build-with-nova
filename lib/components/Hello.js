import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: crimson;
`;


export const Hello = ({ emoji = false, who = 'World' }) => 
    <Title>{emoji ? '👋' : `Hello ${who}`}</Title>
