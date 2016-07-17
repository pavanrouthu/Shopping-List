var mongoose = require('mongoose');

var dbURL = 'mongodb://127.0.0.1/tech';
console.log("Establishing connection to the database");

mongoose.connect(dbURL);
mongoose.connection.on('connected', function(){
	console.log('mongoose connected to' + dbURL);
});

var techSchema = new mongoose.Schema({
	name: {type: String, unique: false},
	description: {type: String, unique: false}
}, {collection: 'tech'});

mongoose.model('tech', techSchema);