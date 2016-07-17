var mongoose = require('mongoose');
var tech = mongoose.model('tech');

exports.loginHandler = function(req, res){
	req.session.destroy();
	res.render('login.handlebars', {});
};

exports.landingPageHandler = function(req, res){
	var name = req.body.nm;
	var pwd = req.body.pwd;

	tech.find({}, function(err, data){
		if(err){
			console.log('Unable to read data from DB');
		}
		else{
			// console.log(data);
			res.render('landing.handlebars', {techdata: data});
		}
	});

	
};