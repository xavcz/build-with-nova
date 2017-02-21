import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CategoriesList } from './CategoriesList';
import { ListCallToAction } from './ListCallToAction';

const Card = styled.div`
  width: 400px;
  background: #fff;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const ListTitle = styled.h3`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #2c2e34;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem 0.5rem 0 0;
  font-stretch: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
`;

const ListWelcome = styled.div`
  border-top: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;
`;

export const ListWrapper = ({
  title = 'This is great',
  welcome = 'Oh yeah.',
  loading,
  results: categories,
}) => 
  <Card>
    
    <ListTitle>{title}</ListTitle>

    <ListWelcome>{welcome}</ListWelcome>

    <CategoriesList loading={loading} categories={categories} />
    
    <ListCallToAction />
    
  </Card>

ListWrapper.propTypes = {
  title: PropTypes.string,
  welcome: PropTypes.string,
  loading: PropTypes.bool,
  results: PropTypes.array,
};
