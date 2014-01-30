//main code file for the Temperature converter app
//January 29, 2014
//by Travis A. Mix

//include our required files 
Ti.include("conversions.js");
Ti.include("convertListWin.js");

//create our login window
var loginWin = Ti.UI.createWindow({
	title : "login",
	backgroundColor : "#48819d"
});

//create navigation window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : loginWin
});

//create our username textbox
var userLbl = Ti.UI.createLabel({
	top : 50,
	left : 20,
	right : 20,
	textAlign : "left",
	text : "username:"
});

var userText = Ti.UI.createTextArea({
	top : 75,
	left : 20,
	right : 20,
	borderRadius : 10,
	clearOnEdit : true
});


//create our password textbox
var passLbl = Ti.UI.createLabel({
	top : 125,
	left : 20, 
	right : 20,
	textAlign : "left",
	text : "password:"
});

var passText = Ti.UI.createTextArea({
	top : 150,
	left : 20,
	right : 20,
	borderRadius : 10,
	clearOnEdit : true
});

//create login button
var loginBtn = Ti.UI.createButton({
	title : "login",
	top : 200,
	left : 20,
	right : 20,
	height : 40,
	borderRadius : 10,
	textAlign : "center",
	backgroundColor : "green"
});

var errorLbl = Ti.UI.createLabel({
	top : 250,
	left : 20,
	right : 20,
	textAlign : "left",
	text : "",
	color : "red"
});

//button event listener to load convertListWin.js window
loginBtn.addEventListener("click", function(){
	//debug
	Ti.API.info("U pressed the button");
	//end debug
	if(userText.value != "username" || passText.value != "password"){
		errorLbl.text = "wrong username or password entered!!!";
	}
	else{
		//debug
		Ti.API.info("Username and password correct");
		//end debug
		errorLbl.text = "";
		var convertListWin = Ti.UI.createWindow({
			title : "conversions",
			backgroundColor : "#48819d"
		});
		
		navWin.openWindow(convertListWin, {animated : true});
		userText.value = "";
		passText.value = "";
	}
	
});

loginWin.add(errorLbl);
loginWin.add(loginBtn);
loginWin.add(passLbl);
loginWin.add(passText);
loginWin.add(userLbl);
loginWin.add(userText);
navWin.open();
