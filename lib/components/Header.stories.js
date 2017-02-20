import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Header } from './Header';

storiesOf('Header', module)
  .add('basic', () => 
    <Header />
  )
  .add('secret project 🤐', () => 
    <Header title="Build with VolkanJS" tagline="nom nom nom nom" /> // don't tell anyone! 🤐
  );
