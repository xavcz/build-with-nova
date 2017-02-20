# Get Started with Nova

### What's up?
Custom package for Nova with two purposes:
- give hints on how to get started with Nova, similar as [Nomad Airlines](http://nomadairlines.com/)
- experiment stuff on a custom package with Nova: `react-storybook` & `styled-components`

### `.meteor/packages`

```
############ Core Packages ############

nova:core                       # core components and wrappers
nova:forms                      # auto-generated forms
nova:routing                    # routing and server-side rendering
nova:email                      # email
nova:users                      # user management and permissions

############ Features Packages ############

nova:posts
nova:categories
nova:events
nova:embedly

nova:i18n-en-us

accounts-password@1.3.4

get-started-with-nova
```

### `.storybook/config.js`
```js
import { configure } from '@kadira/storybook';

const req = require.context(
  '../packages/get-started-with-nova/lib/components', 
  true, 
  /.stories.js$/
);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
```

Happy hacking 🚀 🔭
