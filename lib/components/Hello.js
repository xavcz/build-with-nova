import React, { Component, PropTypes } from 'react';

export const Hello = ({ emoji = false, who = 'World' }) => 
  <div>{emoji ? '👋' : `Hello ${who}`}</div>
