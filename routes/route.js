//route

var express=require('express');
var router = express.Router();
//////////디비 추가/////////
var BoardModel = require('../models/BoardModel');
var Member = require ('../models/Member');
var Drone = require('../models/DroneModel');
var MongoClient = require('mongodb').MongoClient; ////
var url = "mongodb://localhost/test";
////////////////////////////
const fs =require('fs');

function DB(){
	this.db=null;
}////추가

router.get('/', function(req,res){
	//res.json({"hi":"hi"});
        //res.writeHead(200, {'Content-Type':'text/html'});
	//fs.readFile('/home/ec2-user/temp/build/index.html', (err, data)=>{
	//	console.log(err);
	//	res.sendFile(data,'utf-8');
	//})
	res.sendFile('/home/ec2-user/temp/build/index.html');
});
router.get('/board_list',function(req,res){
	BoardModel.find({})
		   .exec(function(err, boards){
			if(err) res.status(403).json({success:false});
		console.log(boards);
		res.json(boards);
		});
});
router.get('/member',function(req,res){
	Member.find({})
            	.exec(function(err, boards){
			if(err) res.status(403).json({success:false});
		console.log(boards);
		res.json(boards);
		});
});
router.get('/drone',function(req,res){
	drone.find({part: {$eq:"3"}})
//		.where('part').equals(3)
		/*var results_from_mongo = [];
		var str = Drone.find({part: {$eq:"3"}})
			if(err){
				return res.send('error')
			}
			console.log(docs)
			return res.json('drone', {results_from_mongo : docs});
			})
*/
		.exec(function(err, boards){
			if(err) res.status(403).json({success:false});
		console.log(boards);
		res.json(boards);
		});
});
router.post('/drone',function(req,res){
	console.log("post drone");
	console.log(req.body);
	console.log("------------------------------------");
});
router.get('/buy',function(req,res){
	var weigh = 0;
	var sLength=0;
	var lLength=0;
	//weigh = Drone.find({}, {projection: {weight:1, long_length:0, short_length:0, store:0, description:0, part:0, thrust:0, HOU:0, rating:0, frameMaterial:0, wingMaterial:0}}).limit(1)
		//.exec(function(err, boards){
			//if(err) res.status(403).json({success:false});
		//Drone.find({weight: {$gt: weigh}}, {long_length: 1, short_length: 1})
	Drone.find({price:{price: 120}}, {long_length:1, short_length:1})
		.exec(function(err, boards){
			if(err) res.status(403).json({success:false});
		console.log(boards);
		res.json(boards);
		});
});
module.exports = router;
