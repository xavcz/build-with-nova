import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ListWrapper } from './ListWrapper';

storiesOf('ListWrapper', module)
  .add('loading', () =>
    <ListWrapper loading />
  )
  .add('with content', () =>
    <ListWrapper 
      categories={[
        {
          name: 'Test Category 1',
          order: 1,
        },
        {
          name: 'Test Category 2',
          order: 2,
        },
        {
          name: 'Test Category 3',
          order: 3,
        }
      ]}
    />
  );
