var express = require('express');
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs({
  extname: '.hbs'// 模版文件使用的后缀名
}));

app.set('view engine', 'hbs');//设置模板引擎

app.get('/', function (req, res) {
  res.render('index');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at 3000');
});