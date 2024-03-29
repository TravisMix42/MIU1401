//this file holds our objects
//by Travis Mix for asd 1402
//on Febuary 5, 2014

//create our dot notation objects
//simple car object
var Car = new Object();
	Car.doors = 4;
	Car.engine = "v8";
	Car.mpg = 9;
	Car.name = "Car";
	
	Car.about = function(){
		var x = "I am a Car that has " + Car.getDoors() + " doors, a " + Car.getEngine() + " engine, and I get " + Car.getMpg() + " miles per gallon,";
		return x;
	};
	
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
	Airplane.name = "Airplane";
	
	Airplane.about = function(){
		var x = "I am an airplane that has a wingspan of " + Airplane.getWingspan() + " feet, a top speed of " + Airplane.getTopSpeed() + " knots." + 
		"  I can carry " + Airplane.getPassengers() + " passengers and can climb to " + Airplane.getCeiling() + " feet high!";
		return x;
	};
	
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
	Boat.name = "Boat";
	
	Boat.about = function(){
		if(Boat.hasSail == true){
			var x = "I am a sailboat that is " + Boat.getLength() + " feet long, and has a top speed of " + Boat.getSpeed() + " knots";
		}
		else{
			var x = "I am a boat that is " + Boat.getLength() + " feet long, and have a top speed of " + Boat.getSpeed() + " knots";
		}
		
		return x;
	};
	
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
	Bike.wheelSize = 16;
	Bike.make = "Schwinn";
	Bike.numOfGears = 10;
	Bike.name = "Bike";
	
	Bike.about = function(){
		var x = "I am a " + Bike.getMake() + " bike with " + Bike.getWheelSize() + " inch tires, I also have " + Bike.getNumOfGears() + " gears";
		return x;
	};
	
	Bike.getWheelSize = function(){
		return Bike.wheelSize;
	};
	
	Bike.setWheelSize = function(newWheelSize){
		Bike.wheelSize = newWheelSize;
	};
	
	Bike.getMake = function(){
		return Bike.make;
	};
	
	Bike.setMake = function(newMake){
		Bike.make = newMake;
	};
	
	Bike.getNumOfGears = function(){
		return Bike.numOfGears;
	};
	
	Bike.setNumOfGears = function(newGears){
		Bike.numOfGears = newGears;
	};
	

var Skateboard = new Object();
	Skateboard.size = 38;
	Skateboard.material = "wood";
	Skateboard.brand = "Zero";
	Skateboard.name = "Skateboard";
	
	Skateboard.about = function(){
		var x = "I am a skateboard made by " + Skateboard.getBrand() + ", I am made out of " + Skateboard.getMaterial() + " and I am " + 
		Skateboard.getSize() + " inches long";
		return x;
	};
	
	Skateboard.getSize = function(){
		return Skateboard.size;
	};
	
	Skateboard.setSize = function(newSize){
		Skateboard.size = newSize;
	};
	
	Skateboard.getMaterial = function(){
		return Skateboard.material;
	};
	
	Skateboard.setMaterial = function(newMat){
		Skateboard.material = newMat;
	};
	
	Skateboard.getBrand = function(){
		return Skateboard.brand;
	};
	
	Skateboard.setBrand = function(newBrand){
		Skateboard.brand = newBrand;
	};
	
//create our literal notation objects
var Cat = {
	breed : "tabby",
	age : 3,
	weight : 5,
	name : "Cat",
	
	about : function(){
		var x = "I am a " + Cat.getType() + " cat that is " + Cat.getAge() + " years old and weigh " + Cat.getWeight() + " pounds";
		return x;
		
	},
	
	getType : function(){
		return Cat.breed;
	},
	
	setType : function(newType){
		Cat.breed = newType;
	},
	
	getAge : function(){
		return Cat.age;
	},
	
	setAge : function(newAge){
		Cat.age = newAge;
	},
	
	getWeight : function(){
		return Cat.weight;
	},
	
	setWeight : function(newWeight){
		Cat.weight = newWeight;
	}
	
	
	
};

var Dog = {
	breed : "lab",
	age : 6,
	weight : 25,
	name : "Dog",
	
	about : function(){
		var x = "I am a " + Dog.getType() + " dog that is " + Dog.getAge() + " years old and weigh " + Dog.getWeight() + " pounds";
		return x;
		
	},
	
	getType : function(){
		return Dog.breed;
	},
	
	setType : function(newType){
		Dog.breed = newType;
	},
	
	getAge : function(){
		return Dog.age;
	},
	
	setAge : function(newAge){
		Dog.age = newAge;
	},
	
	getWeight : function(){
		return Dog.weight;
	},
	
	setWeight : function(newWeight){
		Dog.weight = newWeight;
	}
};

var Bird = {
	breed : "parrot",
	age : 1,
	weight : 10,
	name : "Bird",
	
	about : function(){
		var x = "I am a " + Bird.getType() + " that is " + Bird.getAge() + " year old and weigh " + Bird.getWeight() + " pounds";
		return x;
		
	},
	
	getType : function(){
		return Bird.breed;
	},
	
	setType : function(newType){
		Bird.breed = newType;
	},
	
	getAge : function(){
		return Bird.age;
	},
	
	setAge : function(newAge){
		Bird.age = newAge;
	},
	
	getWeight : function(){
		return Bird.weight;
	},
	
	setWeight : function(newWeight){
		Bird.weight = newWeight;
	}
};

var Fish = {
	breed : "flounder",
	age : 2,
	weight : 6,
	name : "Fish",
	
	about : function(){
		var x = "I am a " + Fish.getType() + " that is " + Fish.getAge() + " years old and weigh " + Fish.getWeight() + " pounds";
		return x;
		
	},
	
	getType : function(){
		return Fish.breed;
	},
	
	setType : function(newType){
		Fish.breed = newType;
	},
	
	getAge : function(){
		return Fish.age;
	},
	
	setAge : function(newAge){
		Fish.age = newAge;
	},
	
	getWeight : function(){
		return Fish.weight;
	},
	
	setWeight : function(newWeight){
		Fish.weight = newWeight;
	}
};

var Kangaroo = {
	breed : "austrailian",
	age : 7,
	weight : 75,
	name : "Kangaroo",
	
	about : function(){
		var x = "I am a " + Kangaroo.getType() + " Kangaroo that is " + Kangaroo.getAge() + " years old and weigh " + Kangaroo.getWeight() + " pounds";
		return x;
		
	},
	
	getType : function(){
		return Kangaroo.breed;
	},
	
	setType : function(newType){
		Kangaroo.breed = newType;
	},
	
	getAge : function(){
		return Kangaroo.age;
	},
	
	setAge : function(newAge){
		Kangaroo.age = newAge;
	},
	
	getWeight : function(){
		return Kangaroo.weight;
	},
	
	setWeight : function(newWeight){
		Kangaroo.weight = newWeight;
	}
};

//store the objects into an array for easy exporting
var objArray = Array(Car, Airplane, Boat, Bike, Skateboard, Cat, Dog, Bird, Fish, Kangaroo);

//export the objArray
exports.objects = objArray;
