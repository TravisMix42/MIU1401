//this file holds our objects
//by Travis Mix for asd 1402
//on Febuary 5, 2014

//create our dot notation objects
//simple car object not building a racing game here 
var Car = new Object();
	Car.doors = 4;
	Car.engine = "v8";
	Car.mpg = 9;
	Car.getDoors = function(){
		return Car.doors;
	};
	
	Car.setDoors = function(numDoors){
		Car.doors = numDoors;
	};
	
	Car.getEngine = function(){
		return Car.engine;
	};
	
	Car.setEngine = function(engineSize){
		Car.engine = engineSize;
	};
	
	Car.getMpg = function(){
		return Car.mpg;
	};
	
	Car.setMpg = function(sMpg){
		Car.mpg = sMpg;
	};
//simple airplane object 	
var Airplane = new Object();
	Airplane.wingspan = 50;
	Airplane.topSpeed = 400;
	Airplane.numOfPassengers = 4;
	Airplane.ceilingHeight = 20000;
	
	Airplane.getWingspan = function(){
		return Airplane.wingspan;
	};
	
	Airplane.setWingspan = function(wingLength){
		Airplane.wingspan = wingLength;
	};
	
	Airplane.getTopSpeed = function(){
		return Airplane.topSpeed;
	};
	
	Airplane.setTopSpeed = function(tSpeed){
		Airplane.topSpeed = tSpeed;
	};
	
	Airplane.getPassengers = function(){
		return Airplane.numOfPassengers;
	};
	
	Airplane.setPassengers = function(passengers){
		Airplane.numOfPassengers = passengers;
	};
	
	Airplane.getCeiling = function(){
		return Airplane.ceilingHeight;
	};
	
	Airplane.setCeiling = function(newCeiling){
		Airplane.ceilingHeight = newCeiling;
	};
	
var Boat = new Object();
	Boat.hasSail = true;
	Boat.length = 30;
	Boat.speed = 40;
	
	Boat.getSail = function(){
		return Boat.getSail;
	};
	
	Boat.setSail = function(bHasSail){
		Boat.hasSail = bHasSail;
	};
	
	Boat.getLength = function(){
		return Boat.length;
	};
	
	Boat.setLength = function(newLength){
		Boat.length = newLength;
	};
	
	Boat.getSpeed = function(){
		return Boat.speed;
	};
	
	Boat.setSpeed = function(newSpeed){
		Boat.speed = newSpeed;
	};
	
var Bike = new Object();

var Skateboard = new Object();

//create our literal notation objects
var Cat = {
	
};

var Dog = {
	
};

var Bird = {
	
};

var Fish = {
	
};

var Kangaroo = {
	
};

//store the objects into an array for easy exporting
var objArray = Array(Car, Airplane, Boat, Bike, Skateboard, Cat, Dog, Bird, Fish, Kangaroo);

//export the objArray
exports.data = objArray;
