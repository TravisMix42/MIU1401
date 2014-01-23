//MainScreen.js
//by Travis A. Mix
//January 20, 2014

//This code file will hold the code for our main app screen for the IndieGamesList application

//include all needed code files
Ti.include("List.js");


//create our main window
var mainWin = Ti.UI.createWindow({
	title : "Indie Game List",
	backgroundColor : "#00CCFF"
});

//create nav window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : mainWin
});

//create our label for the mainscreen so that we can tell the user what to do
var mainLbl = Ti.UI.createLabel({
	text : "Press start to see the list of games!!!",
	top : 40,
	left : 20,
	right : 20,
	bottom : 240,
	textAlign : "center"
});

//create our button to move the user to the main app functionallity
var mainBtn = Ti.UI.createButton({
	title : "Start",
	borderRadius : 10,
	height : 40,
	left : 20,
	right : 20, 
	bottom : 40,
	backgroundColor : "green"
});

//add event listener for the button
mainBtn.addEventListener("click", function(){
	navWin.openWindow(listWindow, {animated : true});
});

mainWin.add(mainBtn);
mainWin.add(mainLbl);
navWin.open();