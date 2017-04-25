import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import path from 'path';

const app = express();

const port = 3000;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../src/index.html'))
})

app.get('/books', function (req, res) {
    res.send('Hello Books, motherfucker!')
})

app.listen(3000, function(err){
  if(err)
  {
    console.log(chalk.red(err));    
  }
    console.log(chalk.green(`Running server on port: ${port}`));
});