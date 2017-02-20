Package.describe({
  name: 'get-started-with-nova',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3');

  api.use([
    'nova:core',
    'nova:forms',
    'std:accounts-ui@1.2.19',
  ]);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
  
});