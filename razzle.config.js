const isHeroku = require("is-heroku")
const entries = require("object.entries")
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

    if (target !== "node") return appConfig

    const isDefinePlugin = plugin => plugin.constructor.name === "DefinePlugin"
    const indexDefinePlugin = appConfig.plugins.findIndex(isDefinePlugin)
  
    if (indexDefinePlugin < 0) {
      console.warn("Couldn't setup razzle-heroku, no DefinePlugin...")
      return appConfig
    }
  
    const {definitions} = appConfig.plugins[indexDefinePlugin]
    const newDefs = Object.assign({}, definitions);
  
    if (isHeroku) {
      delete newDefs["process.env.PORT"]
      newDefs["process.env.RAZZLE_PUBLIC_DIR"] = '"/app/build/public"'
    }
  
    appConfig.plugins[indexDefinePlugin] = new webpack.DefinePlugin(newDefs)

    return appConfig;
  }
};