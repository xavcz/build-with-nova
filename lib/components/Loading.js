import React from 'react';
import styled, { keyframes } from 'styled-components';

// &:last-child{
//   margin-right: 0;
// }
// }
// &.white div{
// background-color: rgba(255,255,255,0.55);
// }

const bounceDelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bounce = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(0,0,0,0.35);

  border-radius: 100%;
  display: inline-block;
  margin-right: .25rem;
  
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  animation-delay: ${props => -props.index * 0.16}s;
`;

export const Loading = () => 
  <Spinner>
    <Bounce index={2} />
    <Bounce index={1} />
    <Bounce index={0} />
  </Spinner>
