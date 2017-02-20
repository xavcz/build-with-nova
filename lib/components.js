import { Components, registerComponent } from 'meteor/nova:core';
import * as registry from './components/index.js';

Object.keys(registry).map(name => registerComponent(name, registry[name]));
