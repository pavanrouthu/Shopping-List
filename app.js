var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var hbars = require('express-handlebars');

var db = require('./models/db.js');
var routes = require('./routes/routes.js');


var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({secret: "myassignment", resave: true, saveUninitialized: false}));
app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({}));


app.get('/', routes.loginHandler);
app.post('/toLanding', routes.landingPageHandler);


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Http server is listening on port: ' + port);
});
