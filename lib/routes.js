import { addRoute, getComponent } from 'meteor/nova:core';

addRoute({ name: 'posts.new', path: '/new-post', componentName: 'PostsNewForm' });
addRoute({ name: 'login', path: '/login', componentName: 'UsersAccountForm' });
addRoute({ name: 'posts.list', path: '/', componentName: 'ListWrapper' });
