const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

const productionConfig = require('./webpack.production.config');

const developmentConfig = require('./webpack.development.config.js');

module.exports = function(env, args) {
    if (env.development) {
        return merge(commonConfig, developmentConfig);
    }
    else {
        return merge(commonConfig, productionConfig);
    }
}