//main code file for cruddy to hold our main view of the application
//by Travis A. Mix
//on Febuary 17, 2014
//for asdi1402 week 3


//create our main window
var main = Ti.UI.createWindow({
	title : "cruddy",
	backgroundColor : "#707070"
});

//create two buttons to allow the user to either see the database or 
//add something to the database.

//make a button to allow the user to add something to the database
var addBtn = Ti.UI.createButton({
	height : 40,
	left : 20,
	right : 20,
	top : 120,
	borderRadius : 10,
	backgroundColor : "blue",
	color : "#707070",
	title : "Add"
});

//make a button to allow the user to view the database
var viewBtn = Ti.UI.createButton({
	height : 40,
	left : 20, 
	right : 20, 
	top : 240,
	borderRadius : 10,
	backgroundColor : "green",
	color : "#707070",
	title : "View / Edit"
});

//create our ios navigation window and attach the main window to it
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : main
});


//add our event listeners for our buttons
addBtn.addEventListener("click", function(){
	Ti.API.info("addBtn Clicked");
});

viewBtn.addEventListener("click", function(){
	Ti.API.info("viewBtn clicked");
});

//add our buttons to the main window
main.add(addBtn);
main.add(viewBtn);

//open the navWin which will open the main window
navWin.open();
