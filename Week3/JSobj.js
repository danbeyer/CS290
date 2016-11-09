
function deepEqual(obj1, obj2) {
	if(obj1===obj2)
		return true;


if(obj1 == null || obj2 == null || typeof obj1 != "object" || typeof obj2 != "object")
	return false;

var obj1Props = 0;
var obj2Props = 0;

for(var prop in obj1)
	obj1Props +=1;

for(var prop in obj2) {
	obj2Props +=1;
	if((deepEqual(obj1[prop], obj2[prop]) == false) || !(prop in obj1))
			return false;
}

return obj1Props == obj2Props;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));