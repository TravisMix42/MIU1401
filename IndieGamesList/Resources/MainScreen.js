//MainScreen.js
//by Travis A. Mix
//January 20, 2014

//This code file will hold the code for our main app screen for the IndieGamesList application

//main window for the app the starting point and the first page
var mainScreen = Ti.UI.createWindow({
	Title : "Indie Game List"
});

//the actual view that will display what the user sees once the app starts up 
var mainView = Ti.UI.createView({
	backgroundColor : "#00CCFF",
	top: 0,
	bottom : 0,
	left : 0,
	right : 0
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
	//temporary till other page is created
	Ti.API.info("You clicked the button");
});

//open the main window and all everything needed to it
mainScreen.open();
mainScreen.add(mainView);
mainScreen.add(startButton);
