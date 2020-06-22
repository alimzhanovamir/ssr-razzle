const razzleHeroku = require('razzle-heroku');
const path = require('path');
const razzleConfigEnv = require('razzle/config/env');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // const appConfig = razzleHeroku(config, { target, dev }, webpack);

    if (target === 'node') {
      config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'DefinePlugin');
      const dotenv = razzleConfigEnv.getClientEnv(target, {
        clearConsole: true,
        host: 'localhost',
        port: 3000
      });
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env': `Object.assign(${JSON.stringify(dotenv.raw)}, process.env)`
        })
      );
    }

    config.resolve = {
      ...config.resolve,
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@ui': path.resolve(__dirname, 'src/ui'),
      } 
    };
    return config;
  }
};