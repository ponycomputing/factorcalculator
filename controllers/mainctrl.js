/*controller*/
var file = require("../models/file.js");
var math = require("../models/math.js");

//show home page
exports.showIndex = function(req,res){
	res.render("index");
}

//show result
exports.showResult = function(req,res){
	//recording T1
	var T1 = new Date();
	//got numbers
	var number = parseInt(req.params.number);
	//verify numbers validation
	if(isNaN(number)){
		res.send("Enter valid number！");
		return;
	}
	if(number > 100000){
		res.send("Too Big！");
		return;
	}

	//reading the number if already existed
	file.read(number,function(result){
		//result either -1, or array
		if(result == -1){
			//this number not been calculated yet,below statement
			//is asychronous, very cost time
			//nodejs afraid this statement, block thread
			var result = math.calcfactor(number);
			//save this number
			file.write(number,result);
		}

		var T2 = new Date();
		//result is not -1,will be array
		res.render("result",{
			"result" : result,
			"number" : number,
			"during" : T2 - T1
		});
	});
}