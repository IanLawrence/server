var path = require('path'),
    _ = require('lodash');

var baseConfig = {
  mail: {
    key: 'put-your-mandrill-api-key-here',
    from: 'noreply@microsofteducationdelivery.net',
    recoverySubject: 'Microsoft Education Delivery password recovery',
    recoveryText: 'Hello' +
      ' <username>' +
      '! \n' +
      '\n' +
      'You are receiving this email because you, or someone else was using it for password recovery procedure. ' +
      'Follow this <a href="<link>">link </a>' +
      'to change your password. \n',
    welcomeSubject: 'Welcome to Microsoft Education Delivery',
    welcomeText: [
      'Hi',
      '',
      'Welcome to Microsoft Education Delivery.',
      'Microsoft Education Delivery carries high quality educational material to mobile devices. This makes access to education possible for anyone, anytime!',
      '',
      'Your user name and password are:',
      '',
      '<user> <password>',
      '',
      'Regards'
    ].join('\n')
  },
  app: {
    root: path.normalize(__dirname + '/../..'),
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    secret: 'secret key',
    serverId: 'sqldemo'
  },
  //TODO: env variables
  mysql: {
    dbname: 'med',
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306
  }
};

var platformConfig = {
  development: {
  },

  test: {
    app: {
      port: 3001
    }
  },

  production: {
  }
};

_.merge(baseConfig, platformConfig[baseConfig.app.env]);
module.exports = baseConfig;