const razzleHeroku = require('razzle-heroku');
const path = require('path');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = razzleHeroku(config, { target, dev }, webpack);

    appConfig.resolve = {
      ...appConfig.resolve,
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@ui': path.resolve(__dirname, 'src/ui'),
      } 
    };
    return appConfig;
  }
};