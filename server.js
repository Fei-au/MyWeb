const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
// cors middleware
app.use(cors());

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
})
app.get('/data', (req, res)=>{

    res.send('some names');
})
app.listen(5000, ()=>{
    console.log('server start');
});