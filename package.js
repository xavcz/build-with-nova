Package.describe({
  name: 'build-with-nova',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3');

  api.use([
    'nova:core',
    'nova:forms',
    'std:accounts-ui@1.2.19',
  ]);
  
  api.addFiles('styles.css', 'client');

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
  
});
