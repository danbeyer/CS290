/* CS290 - Assignment: Higher-Order Functions and Objects
** Author: Daniel Beyer
** Date: 10/23/16
*/

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
// I decided to use a bubblesort algorithm here

function sortArr( comparator, array ){
    /*your code here*/
	var swapped;
	do{
		swapped = false;
		for(var i = 0;i<array.length-1; i++) {
			if(comparator(array[i], array[i+1])) {
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				swapped = true;
			}
		}
	}
	while(swapped);
	return array;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
	if(auto2.year>auto1.year) {
		return true;
	}
	else {
		return false;
	}
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
	if(auto2.make<auto1.make) {
		return true;
	}
	else {
		return false;
	}
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
	// Here each type is assigned a numeric value (or undefined) to make comparing them more straightforward
	var autoTypes = {
		"Roadster": 1,
		"Pickup": 2,
		"SUV": 3,
		"Wagon": 4,
	}
	
	var auto1Type = autoTypes[auto1.type];
	var auto2Type = autoTypes[auto2.type];
	
	if(auto1Type == undefined) {
		auto1Type = 5;
	}
	
	if(auto2Type == undefined) {
		auto2Type = 5;
	}
	
	if(auto1Type > auto2Type) {
		return true;
	}
	if(auto1Type == auto2Type) {
		if(yearComparator(auto1, auto2)) {
			return true;
		}
		else return false;
	}
	else {
		return false;
	}
}

Automobile.prototype.logMe = function(bool) {
	if(bool){
		console.log(this.year + "  " + this.make + "  " + this.model + "  " + this.type);
	}
	else {
		console.log(this.year + "  " + this.make + "  " + this.model);
	}
}

console.log("*****");
console.log("The cars sorted by year are:");
var year = sortArr (yearComparator, automobiles);
year.forEach(function(x){
	x.logMe(false);
});

console.log(" "); //Line skip

console.log("The cars sorted by make are:");
var make = sortArr(makeComparator, automobiles);
make.forEach(function(x) {
	x.logMe(false);
});

console.log(" "); //Line skip

console.log("The cars sorted by type are:");
var type = sortArr(typeComparator, automobiles);
type.forEach(function(x) {
	x.logMe(true);
});
console.log("*****");

//yearComparator()
/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */