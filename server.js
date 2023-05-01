const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const app = express();
const fs = require('fs');
const history = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const isDev = true;


// cors middleware
app.use(cors());

// use history api fallback. Solve problem like firstly open www.xxx.com/blog, while the server haven't deal with such request, or not send back index.html from this request.
// GET 404 error
app.use(history());

// webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// get request
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
})

// get request
app.get('/data', (req, res)=>{
    res.send('some names');
})



// server start
if(isDev){
    app.listen(3000, ()=>{
        console.log('server start');
    });
}else{
    // ca certificate
    const options = {
        key: fs.readFileSync('./ssl/9854255_www.afeiatus.com.key'),
        cert: fs.readFileSync('./ssl/9854255_www.afeiatus.com.pem'),
    }
    const httpsServer = https.createServer(options, app);
    const httpServer = http.createServer(app);
    httpsServer.listen(4000, ()=>{
        console.log('https server start');
    });
    httpServer.listen(3000, ()=>{
        console.log('http server start');
    });
}



