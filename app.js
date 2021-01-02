// var express=require("express"); 
// const connectDB = require('./config/db') 

// var bodyParser=require("body-parser"); 
// // const mongoose = require('mongoose'); 
// // mongoose.connect('mongodb://localhost:27017/gfg'); 
// // var db=mongoose.connection; 
// // db.on('error', console.log.bind(console, "connection error")); 
// // db.once('open', function(callback){ 
// //     console.log("connection succeeded"); 
// // }) 
  
// var app=express() 
  
  
// app.use(bodyParser.json()); 
// app.use(express.static('public')); 
// app.use(bodyParser.urlencoded({ 
//     extended: true
// })); 
  
// app.post('/sign_up', function(req,res){ 
//     var name = req.body.name; 
//     var email =req.body.email; 
//     var pass = req.body.password; 
//     var phone =req.body.phone; 
  
//     var data = { 
//         "name": name, 
//         "email":email, 
//         "password":pass, 
//         "phone":phone 
//     } 
// db.collection('details').insertOne(data,function(err, collection){ 
//         if (err) throw err; 
//         console.log("Record inserted Successfully"); 
              
//     }); 
          
//     return res.redirect('signup_success.html'); 
// }) 
  
  
// app.get('/',function(req,res){ 
// res.set({ 
//     'Access-control-Allow-Origin': '*'
//     }); 
// return res.redirect('index.html'); 
// }).listen(3000) 
  
  
// console.log("server listening at port 3000"); 

var express=require("express"); 
var bodyParser=require("body-parser"); 
const path = require('path')
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 

const static_path = path.join(__dirname);
app.use(express.static(static_path))

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/sign_up', function(req,res){ 
	var name = req.body.name; 
	var email =req.body.email; 
	var pass = req.body.password; 
	var phone =req.body.phone; 

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass, 
		"phone":phone 
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('signup_success.html'); 
}) 


app.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect('index.html'); 
}).listen(3000) 


console.log("server listening at port 3000"); 
