const path = require('path');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;

    appConfig.resolve = {
      ...appConfig.resolve,
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@ui': path.resolve(__dirname, 'src/ui'),
      } 
    };

    return appConfig;
  },
};