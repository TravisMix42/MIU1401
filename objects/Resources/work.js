//work.js
//handles all of our operations to display our data
//for asdi1402
//by Travis A. Mix
//on Febuary 6, 2014

var objs = require("objects");
var data = [];
var j;

for(var i = 0; i < objs.objects.length; i++){
	data[i] = Ti.UI.createPickerRow({title : objs.objects[i].name});
}



var label1 = Ti.UI.createLabel({
	top : 100,
	bottom : 0, 
	right : 20,
	left : 20,
	backgroundColor : "white",
	text : objs.objects[0].about(),
	textAlign : "center"
	
});

var pickerstuff = function(){
		switch(picker.getSelectedRow(0).title){
		case "Car":
			j = 0;
			break;
		case "Airplane":
			j = 1;
			break;
		case "Boat":
			j = 2;
			break;
		case "Bike":
			j = 3;
			break;
		case "Skateboard":
			j = 4;
			break;
		case "Cat":
			j = 5;
			break;
		case "Dog":
			j = 6;
			break;
		case "Bird":
			j = 7;
			break;
		case "Fish":
			j = 8;
			break;
		case "Kangaroo":
			j = 9;
			break;
}

	label1.text = objs.objects[j].about();
};


var workArray = Array(data, label1, pickerstuff);
exports.work = workArray;