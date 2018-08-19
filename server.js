var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req,res){
    res.redirect('mainView');
});

app.get('/mainView', function(req,res){
    res.render('mainView');
});

app.get('/auth/google', function(req,res){
    res.render('authGoogle');
});

app.get('/thankyou', function(req,res){
    res.render('thankYou');
})

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port; 
    console.log('Application is listening on http://' + host + ':' + port);
})