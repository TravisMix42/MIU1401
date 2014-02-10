//remoteDatas app for week 2 asdi1402
//by Travis A. Mix
//on Febuary 10, 2014


//imports
var lists = require("list");


//create our main window
var main = Ti.UI.createWindow({
	title : "main"
});

//our navigation window for our application
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : main
});

//create our main view 
var mainView = Ti.UI.createView({
	top: 0,
	bottom : 0,
	left : 0,
	right : 0,
	backgroundColor : "#C3E4ED"
});

mainView.add(lists.list);
main.add(mainView);
navWin.open();