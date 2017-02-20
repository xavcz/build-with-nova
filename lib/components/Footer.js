import React, { PropTypes } from 'react';
import styled from 'styled-components';

const FooterLink = styled.footer`
  color: rgba(85, 26, 139, 0.5);
  padding: 20px 14px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: rgba(85, 26, 139, 0.8);
  }
`;

export const Footer = ({
  link,
  content = 'Happy hacking! 🎉',
}) => 
  <footer>
    { link ? <FooterLink href={ link } target="_blank">{ content }</FooterLink> : content }
  </footer>

Footer.propTypes = {
  link: PropTypes.string,
  content: PropTypes.string,
};
