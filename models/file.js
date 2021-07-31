var fs = require("fs");

function read(number,callback){
	//reading files
	fs.readFile("./data/" + number + ".txt",function(err,data){
		if(err){
			//file doesn't exist
			callback(-1);
			return;
		}
		//change to data
		var data = JSON.parse(data);
		//back to previsous user
		callback(data);
	});
}

//writing files
function write(number,arr){
	var data = JSON.stringify(arr);
	//wirte file
	fs.writeFile("./data/" + number + ".txt",data,function(){
		//doing nothing
	});
}

//exports together
exports.read = read;
exports.write = write;