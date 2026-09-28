module.exports = {
    publicPath: './',
    outputDir: 'docs',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
