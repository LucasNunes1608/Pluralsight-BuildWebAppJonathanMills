import express from 'express';
import chalk from 'chalk';

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World, motherfucker!')
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