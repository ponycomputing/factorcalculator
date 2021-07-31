//factor calculation
function calcfactor(number){
	var result = [];
	for(var i = 1 ; i <= number ; i++){
		number % i == 0 && result.push(i);
	}
	//here no need call back function, because no asynchronous statement
	//use return straight way直
	return result;
}

// exports together
exports.calcfactor = calcfactor;

// unit testing
// console.log(calcfactor(100));