import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ListCallToAction } from './ListCallToAction';

storiesOf('ListCallToAction', module)
  .add('with 2 CTA', () =>
    <ListCallToAction />
  )
  .add('with 1 CTA', () =>
    <ListCallToAction secondary={null} />
  );
