const path = require('path')

module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  'plugins': [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        'root': [
          path.resolve(__dirname, './src/'),
        ],
      },
    ],
  ],
}
