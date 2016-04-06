const path = require('path'),
    webpack = require('webpack');

const linksWebpack = {
    app: path.join(__dirname, 'production/js'),
    build: path.join(__dirname, 'production/js')
};

module.exports = {

    entry: './production/js/index.js',
    output: {
        path: './production/js/',
        filename: 'bundle.js'
    },

    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        }]
    }

};