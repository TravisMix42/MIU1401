//app.js file 
//holds our view code for the week1 project for asdi1402
//by Travis A. Mix
//on Febuary 6, 2014

var Data = require('work');


var win1 = Ti.UI.createWindow();

var view1 = Ti.UI.createView({
	top : 0,
	bottom : 0,
	left : 0, 
	right : 0,
	backgroundColor : "white"
});

var picker = Ti.UI.createPicker({
	top : 20
});


picker.addEventListener("change", Data.work[2]);

view1.add(Data.work[1]);
picker.add(Data.work[0]);
picker.selectionIndicator = true;
view1.add(picker);
win1.add(view1);
win1.open();
