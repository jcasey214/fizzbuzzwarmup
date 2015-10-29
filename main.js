module.exports = {
// 	fizzbuzzfxn: function(n) {
// 		var result = "";
// 	for(i = 1; i <= n; i += 1 ){
// 		if(i !==n){
// 			if(i % 3 === 0 && i % 5 === 0 ){
// 				result += "FizzBuzz, ";
// 			}
// 			else if(i % 3 === 0){
// 				result += "Fizz, ";
// 			}
// 			else if( i % 5 === 0){
// 				result += "Buzz, ";
// 			}
// 			else{
// 				result += i + ', ';
// 			}
// 	}else{
// 		if(i % 3 === 0 && i % 5 === 0 ){
// 			result += "FizzBuzz";
// 		}
// 		else if(i % 3 === 0){
// 			result += "Fizz";
// 		}
// 		else if( i % 5 === 0){
// 			result += "Buzz";
// 		}
// 		else{
// 			result += i;
// 		}
// 	}
// }
// 	return result;
// 	}

// fizzbuzzfxn: function(n) {
// var result = "";
// for(i = 1; i <= n; i += 1 ){
// 	if(i === 1){
// 		result += i;
// 	}
// 	else if(i % 3 === 0 && i % 5 === 0 ){
// 		result += ", FizzBuzz";
// 	}
// 	else if(i % 3 === 0){
// 		result += ", Fizz";
// 	}
// 	else if( i % 5 === 0){
// 		result += ", Buzz";
// 	}
// 	else{
// 		result += ", " + i;
// 	}
// }
// return result;
// }
fizzbuzzfxn: function(start, end) {
var result = "";
	for(i = start; i <= end; i += 1 ){
		if(i !== end){
			if(i % 3 === 0 && i % 5 === 0 ){
				result += "FizzBuzz, ";
			}
			else if(i % 3 === 0){
				result += "Fizz, ";
			}
			else if( i % 5 === 0){
				result += "Buzz, ";
			}
			else{
				result += i + ', ';
			}
	}else{
		if(i % 3 === 0 && i % 5 === 0 ){
			result += "FizzBuzz";
		}
		else if(i % 3 === 0){
			result += "Fizz";
		}
		else if( i % 5 === 0){
			result += "Buzz";
		}
		else{
			result += i;
		}
	}
}
	return result;
}
}
