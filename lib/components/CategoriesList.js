import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { pure, branch, renderComponent, compose } from 'recompose';

import { CategoriesItem } from './CategoriesItem';
import { Loading } from './Loading';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 360px;
  padding: 0 1rem;
`;

const displayLoadingState = branch(
  (props) => props.loading,
  renderComponent(Loading),
);


const CategoriesListPure = ({
  categories = [],
}) =>
  <Menu>
    {categories.map(category => <CategoriesItem {...category} key={category.order}/>)}
  </Menu>

export const CategoriesList = compose(
  displayLoadingState,
  pure,
)(CategoriesListPure);

CategoriesList.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
};
