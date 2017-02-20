import React, { PropTypes } from 'react';
import styled from 'styled-components';

const CtaBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CtaLink = styled.a`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 2rem;
  border: 2px solid purple;
  border-radius: 3px;
  text-decoration: none;
  background: ${props => props.primary ? 'purple' : 'white'};
  color: ${props => props.primary ? 'white' : 'purple'};
`;

export const ListCallToAction = ({
  primary = { link: 'https://github.com/TelescopeJS/Telescope', text: 'GitHub' },
  secondary = { link: 'http://nova-docs.telescopeapp.org', text: 'Docs' },
}) =>
  <CtaBlock>
    <CtaLink href={primary.link} target='_blank' primary>{primary.text}</CtaLink>
    {secondary && <CtaLink href={secondary.link} target='_blank'>{secondary.text}</CtaLink>}
  </CtaBlock>

const linkPropTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

ListCallToAction.propTypes = {
  primary: PropTypes.shape(linkPropTypes),
  secondary: PropTypes.shape(linkPropTypes),
};
