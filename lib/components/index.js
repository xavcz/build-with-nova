/*

  Experiment decoupling meteor packages to components

*/

import gql from 'graphql-tag';
import { pure, compose } from 'recompose';
import { withApollo } from 'react-apollo';

import { withList } from 'meteor/nova:core';
import Categories from 'meteor/nova:categories';

export { Layout } from './Layout';
export { Header } from './Header';
export { Footer } from './Footer';

export { PostsNewForm } from './PostsNewForm';

import { ListWrapper as ListWrapperPure } from './ListWrapper';

const data = withList({
  collection: Categories,
  queryName: 'categoriesListQuery',
  fragment: gql`
    fragment categoriesList on Category {
      name
      order
    }
  `
});

export const ListWrapper = compose(
  data,
  pure
)(ListWrapperPure);

import { UsersAccountForm as UsersAccountFormPure } from './UsersAccountForm.js';

export const UsersAccountForm = withApollo(UsersAccountFormPure);
