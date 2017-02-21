import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { CategoriesItem } from './CategoriesItem';

const category = {
  name: 'Test Category 1',
  order: 1,
  posts: [
    {
      url: 'http://www.telescopeapp.org',
      thumbnailUrl: 'http://www.telescopeapp.org/images/telescope-logo-square.png',
      title: 'Telescope Nova',
      body: 'Build great products with React, GraphQL & Meteor',
      user: { twitterUsername: 'xav_cz' },
    },
  ],
};

storiesOf('CategoriesItem', module)
  .add('closed', () => 
    <CategoriesItem {...category} />
  )
  .add('opened', () => 
    <CategoriesItem isOpen {...category} />
  );
