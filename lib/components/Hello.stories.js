import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Hello } from './Hello';

storiesOf('Hello', module)
  .add('with text', () => (
    <Hello />
  ))
  .add('with emoji', () => (
    <Hello emoji />
  ))
  .add('with Xavier', () => (
    <Hello who="Xavier" />
  ));
