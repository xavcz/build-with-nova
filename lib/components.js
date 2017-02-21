import { Components, registerComponent } from 'meteor/nova:core';
import * as registry from './components/index.js';

console.log(registry);
Object.keys(registry).map(name => registerComponent(name, registry[name]));
