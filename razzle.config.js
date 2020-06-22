// const razzleHeroku = require('razzle-heroku');
// const path = require('path');

// module.exports = {
//   modify: (config, { target, dev }, webpack) => {
//     config = razzleHeroku(config, { target, dev }, webpack);
//     console.log(config);
    
//     config.resolve = {
//       ...config.resolve,
//       alias: {
//         '@pages': path.resolve(__dirname, 'src/pages'),
//         '@features': path.resolve(__dirname, 'src/features'),
//         '@ui': path.resolve(__dirname, 'src/ui'),
//       } 
//     };
//     return config;
//   }
// };

module.exports = {
  modify: require("razzle-heroku"),
}