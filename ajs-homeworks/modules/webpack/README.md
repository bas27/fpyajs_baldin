Webpack

Инициализация проекта

`cd <Директория проекта>`

`npm init`

установка Webpack

`npm i -D webpack webpack-cli`

, где 
i - install
-D - --save-dev

Добавим в Package.json в scripts

`"build": "webpack --mode production"`

```
...
"scripts": {
    "build": 'webpack --mode production',
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

настройка weback осуществляется в `webpack.config.js`

изменить точку входа (файл js с инструкциями для сборки бандла, где что лежит):

`entry: './src/entry.js'`

по-умолчанию: `'./src/index.js`

Загрузчики - расширение возможностей Webpack, работа с файлами отличными от js, такими как html, css и др. с помощью устанавливаемых модулей

`const path = require('path');` - разрешение путей файлов
```
module.exports = {
  entry: './src/entry.js'
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: app.bundle.js
    },
```
output - куда выводить создаваемые бандлы и как их называть

Свойства загрзчиков: \
test - какие файлы обрабатываются\
use - каким загрузчиком производится обработка, выбранного типа файла

Для подключения загрузчика используется свойство rules:

```
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
```
просмотр информации о загрузчике
npm repo raw-loader
другие:
html-webpack-plugin\
mini-css-extract-plugin\
babel-loader\
html-loader\
css-loader\
webpack-dev-server\
http-server