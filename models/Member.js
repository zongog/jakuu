var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
	id : {type:String, required: true, unique :true},
	password : {type: String},
	name : {type: String},
	email : {type: String},
	role : {type : Number}
},{collection:'member'});

module.exports = mongoose.model('member',MemberSchema);
