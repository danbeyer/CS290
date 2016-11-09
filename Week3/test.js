console.log("JS Functions");

console.log(doubling(3));

function doubling(x) {
	return x + x;
}

//The below code gives an error: "TypeError: tripling is not a function [Learn More]"
//If the line of code below is commented out, the function is successfully called and displays "9"
//console.log(tripling(3));

var tripling = function(x) {
	return x*3;
}

console.log(tripling(3));

