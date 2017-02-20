import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Footer } from './Footer';

storiesOf('Footer', module)
  .add('basic', () => 
    <Footer />
  )
  .add('link to Nova', () => 
    <Footer content="Powered by Nova" link="https://github.com/TelescopeJS/Telescope" />
  )
  .add('secret project 🤐', () => 
    <Footer content="Powered by VolkanJS" link="https://volkan.build"/> // don't tell anyone! 🤐
  );
