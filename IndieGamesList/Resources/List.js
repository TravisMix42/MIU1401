//List.js for IndieGameList application
//this code controls the list view screen of the application
//by Travis A. Mix
//January 21, 2014

//create our list window and view
var listWindow = Ti.UI.createWindow({
	title : "Indie Game List"
});

var listView = Ti.UI.createView({
	backgroundColor : "#00CCFF",
	top: 0,
	bottom : 0,
	left : 0,
	right : 0
});

//temporary label to show that the screen is actually loading
var tempLabel = Ti.UI.createLabel({
	color : "#FF0000",
	textAlign : "center",
	text : "Hey it worked however please replace me with the actual list when you quit being lazy!!!",
	top : 20,
	left : 20,
	right : 20,
	bottom : 20
});

//add listView to listWindow
listWindow.add(listView);
listView.add(tempLabel);