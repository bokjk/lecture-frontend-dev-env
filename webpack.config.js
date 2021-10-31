const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module : {
    rules:[
      {
        test : /\.css$/,
        use : ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use : [
          {
            loader : 'url-loader',
            options: {
              publicPath: "./dist/",
              name: 'images/[name].[ext]?[hash]',
              limit: 10000 // 10kb 미만 파일만 data url로 처리
            },
          }
        ]
      }
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use : [
      //     {
      //       loader : 'file-loader',
      //       options: {
      //         publicPath: "./dist/",
      //         name: 'images/[name].[ext]?[hash]',
      //       },
      //     }
      //   ]
      // },
    ]
  }
}
