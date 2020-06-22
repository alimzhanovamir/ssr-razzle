const isHeroku = require("is-heroku")
const entries = require("object.entries")
const path = require('path');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;

    if (target !== "node") return appConfig
    console.log(' LOG 1');
    
    const isDefinePlugin = plugin => plugin.constructor.name === "DefinePlugin"
    const indexDefinePlugin = appConfig.plugins.findIndex(isDefinePlugin)
    
    if (indexDefinePlugin < 0) {
      console.log(' LOG 2');
      console.warn("Couldn't setup razzle-heroku, no DefinePlugin...")
      return appConfig
    }
    
    const {definitions} = appConfig.plugins[indexDefinePlugin]
    const newDefs = Object.assign({}, definitions);
    
    if (isHeroku) {
      console.log(' LOG 3');
      delete newDefs["process.env.PORT"]
      newDefs["process.env.RAZZLE_PUBLIC_DIR"] = '"/app/build/public"'
    }
    
    console.log(' LOG 4');
    appConfig.plugins[indexDefinePlugin] = new webpack.DefinePlugin(newDefs)

    
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