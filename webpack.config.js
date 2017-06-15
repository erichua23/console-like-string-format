const config = {
  entry: {
    main: __dirname + '/src/index.js',
  },
  output: {
    filename: 'console-like-string-format.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  }
}
module.exports = config
