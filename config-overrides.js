const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    // config.ignoreWarnings = [/Failed to parse source map/];
    Object.assign(fallback, {
        'fs': false,
        // 'path': false,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "path": require.resolve("path-browserify"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
}





// const webpack = require('webpack');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// module.exports = function override(config, env) {
//  config.resolve = {
//   fallback: {
//     'fs': false,
//     'tls': false,
//     'net': false,
//     'http': false,
//     'https': false,
//     'zlib': false,
//     'stream': false,
    // 'util': false,
    // 'http': require.resolve("stream-http"),
    // 'https': require.resolve('https-browserify'),
    // 'zlib': require.resolve("browserify-zlib"),
    // 'path': require.resolve("path-browserify"),
    // 'stream': require.resolve("stream-browserify"),
    // 'util': require.resolve("util/"),
//     'crypto': require.resolve("crypto-browserify")
//   },
//   plugins: [
//     new NodePolyfillPlugin()
//   ]
// }

  
    // config.resolve.fallback = {
    //     url: require.resolve('url'),
    //     fs: require.resolve('fs'),
    //     assert: require.resolve('assert'),
    //     // crypto: require.resolve('crypto-browserify'),
    //     http: require.resolve('stream-http'),
    //     https: require.resolve('https-browserify'),
    //     os: require.resolve('os-browserify/browser'),
    //     buffer: require.resolve('buffer'),
    //     stream: require.resolve('stream-browserify'),
        
    // };
    // config.plugins.push(
    //     new webpack.ProvidePlugin({
    //         process: 'process/browser',
    //         Buffer: ['buffer', 'Buffer'],
    //     }),
    // );

//     return config;
// }