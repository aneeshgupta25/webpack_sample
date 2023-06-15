const path = require('path') 
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    node: {
        crypto: 'empty',
        tls: 'empty',
        net: 'empty',
        fs: 'empty',
        },
}
