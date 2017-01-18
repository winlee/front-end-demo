/**
 * express demp main file
 */
const express = require('express');

const app = express();

const port = process.env.PORT || 8180;
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
}));

/**
 * router.use的作用是加载一个函数。
 * 这个函数被称为中间件，作用是在请求被路由匹配之前，先进行一些处理。
 * 上面这个中间件起到 logging 的作用，每收到一个请求，就在命令行输出一条记录。
 * 请特别注意，这个函数内部的next()，它代表下一个中间件，表示将处理过的请求传递给下一个中间件。
 * 这个例子只有一个中间件，就进入路由匹配处理
 * （实际上，bodyparser、router本质都是中间件，整个 Express 的设计哲学就是不断对 HTTP 请求加工，
 * 然后返回一个 HTTP 回应）。
 */
app.use((req, res, next) => {
  // console.log('there is a requesting');
  next();
});
/**
 * 打印请求时间
 */
app.use((req, res, next) => {
  console.log(`request time:${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  const name = req.query.name;
  const sendstr = name === '' ? 'World' : name;
  res.send(`<h1>Hello ${sendstr}</h1>`);
});
app.use('/home', router);
app.use('/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`);
});


app.post('/', (req, res) => {
  const name = req.body.name;
  res.json({
    message: `hello ${name}`,
  });
});


app.listen(port);
console.log(`Magic happens on port ${port}`);
