/*

  Experiment decoupling meteor packages to components

*/

import gql from 'graphql-tag';
import { pure, compose, withProps } from 'recompose';
import { withApollo } from 'react-apollo';

import { withList } from 'meteor/nova:core';
import Categories from 'meteor/nova:categories';

export { Header } from './Header';
export { Footer } from './Footer';

export { PostsNewForm } from './PostsNewForm';

import { Layout as LayoutPure } from './Layout';

const title = 'Build with Nova';
const tagline = 'Kick-ass modern products!';
const image = 'http://orig10.deviantart.net/d0ae/f/2007/314/6/2/rocket_by_luke_chueh.jpg';

const meta = [
  { charset: 'utf-8' },
  { name: 'description', content: tagline },
  { name: 'viewport', content:'width=device-width, initial-scale=1' },
  { property: 'og:type', content: 'article' },
  { property: 'og:url', content: Meteor.absoluteUrl() },
  { property: 'og:image', content: image },
  { property: 'og:title', content: 'Build with Nova' },
  { property: 'og:description', content: tagline },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:image:src', content: image },
  { name: 'twitter:title', content: 'Build with Nova' },
  { name: 'twitter:description', content: tagline },
];

const link = [
  { rel: 'canonical', href: Meteor.absoluteUrl() },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,500,700,900' },
];

export const Layout = compose(
  withProps({
    title,
    tagline,
    meta,
    link
  }),
  pure,
)(LayoutPure);

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
