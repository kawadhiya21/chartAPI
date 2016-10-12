var express = require('express')
var app = express();
var port = 3002;
var path = require('path');

app.set('view engine', 'html');
app.engine('html', require('hogan-express'));
app.set('views', path.join(__dirname, 'views'));

app.get('/line_chart', function(req, res) {
    res.locals = { size : { x: 700, y: 700 }};
    res.render('line_chart');
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("--- Running on " + port + " ---");
});
