import { addRoute, getComponent } from 'meteor/nova:core';

addRoute({ name: 'hello', path: '/', componentName: 'Hello' });
