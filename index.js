//설치한 모듈
//express , mongosse, body-parser, method-override, multer
var cors= require('cors');
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

// DB setting
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
//연결

db.once("open", function(){
  console.log("DB connected");
});

//연결실패
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});
////////////////////////////////////////////////////
var port=3001;
var route=require('./routes/route');

////////////////////////////////////////////////////////

// Routes
app.use(cors({credentials: true, origin: true}));
app.use("/", require("./routes/route"));

// Port setting

app.listen(port, function(){
  console.log("server on!  ec2-52-32-190-25.us-west-2.compute.amazonaws.com:"+port);
});
