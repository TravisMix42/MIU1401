//MainScreen.js
//by Travis A. Mix
//January 20, 2014

//This code file will hold the code for our main app screen for the IndieGamesList application

//include all needed code files
Ti.include("List.js");

//main window for the app the starting point and the first page
var mainScreen = Ti.UI.createWindow({
	title : "Indie Game List"
});

//the actual view that will display what the user sees once the app starts up 
var mainView = Ti.UI.createView({
	backgroundColor : "#00CCFF",
	top: 0,
	bottom : 0,
	left : 0,
	right : 0
});

//create a label to display some text in the mainView
var mainLabel = Ti.UI.createLabel({
	textAlign : "center",
	text : "Press the button to view the list of my top 5 favorite indie games.",
	top : 80,
	left : 20,
	right : 20
});

//create a button to allow the user to move to the main app functionality
var startButton = Ti.UI.createButton({
	title : "Start",
	backgroundColor : "#00FF00",
	height : 40,
	left : 20,
	right : 20,
	bottom : 40,
	borderRadius : 10
});

//startButton Click event listener
startButton.addEventListener('click', function(e){
	//open the listWindow
	listWindow.open();
	//close the mainScreen Window
	mainScreen.close();
});

//open the main window and all everything needed to it
mainScreen.open();
mainScreen.add(mainView);
mainView.add(mainLabel);
mainScreen.add(startButton);
