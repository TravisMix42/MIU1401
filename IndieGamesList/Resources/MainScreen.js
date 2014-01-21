//MainScreen.js
//by Travis A. Mix
//January 20, 2014

//This code file will hold the code for our main app screen for the IndieGamesList application

var mainScreen = Ti.UI.createWindow({
	Title : "Indie Game List"
});

var mainView = Ti.UI.createView({
	backgroundColor : "#00CCFF",
	top: 0,
	bottom : 0,
	left : 0,
	right : 0
});


mainScreen.open();
mainScreen.add(mainView);