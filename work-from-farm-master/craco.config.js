// const webpack = require('webpack');

// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       webpackConfig.resolve.fallback = {
//         ...webpackConfig.resolve.fallback,
//         buffer: require.resolve('buffer/'),
//         stream: require.resolve('stream-browserify'),
//         crypto: require.resolve('crypto-browserify'), // Add crypto polyfill
//       };
//       webpackConfig.plugins = (webpackConfig.plugins || []).concat([
//         new webpack.ProvidePlugin({
//           Buffer: ['buffer', 'Buffer'],
//           process: 'process/browser', // Provide process polyfill if needed
//         }),
//       ]);
//       webpackConfig.optimization.minimize = false;  // Disable minification temporarily

//       return webpackConfig;
//     },
//   },
// };
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ensure the necessary polyfills are loaded
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        process: require.resolve('process/browser'),
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      };

      // Provide the necessary plugins for global variables
      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ]);
      
      webpackConfig.optimization.minimize = false; // Disable minification temporarily for debugging
      return webpackConfig;
    },
  },
};
