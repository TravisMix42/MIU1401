//main code file for the Temperature converter app
//January 29, 2014
//by Travis A. Mix

//include our required files 
Ti.include("conversions.js");
Ti.include("convertListWin.js");

//create our login window
var loginWin = Ti.UI.createWindow({
	title : "login",
	backgroundColor : "white"
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
	clearOnEdit : true,
	borderColor : "black"
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
	clearOnEdit : true,
	borderColor : "black"
});

//create login button
var loginBtn = Ti.UI.createButton({
	title : "login",
	top : 200,
	left : 20,
	right : 20,
	height : 40,
	borderRadius : 10,
	borderColor : "black",
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
	//check to make sure that the username and password are correct
	if(userText.value != "Username" || passText.value != "Password"){
		errorLbl.text = "wrong username or password entered!!!";
	}
	//if the username and password are correct create and open the conversions list window
	//clear the username and password text areas
	else{
		errorLbl.text = "";
		var convertListWin = Ti.UI.createWindow({
			title : "conversions",
			backgroundColor : "#48819d"
		});
		
		navWin.openWindow(convertListWin, {animated : true});
		userText.value = "";
		passText.value = "";
		convertListWin.add(listView);
		
		
	}
	
});

loginWin.add(errorLbl);
loginWin.add(loginBtn);
loginWin.add(passLbl);
loginWin.add(passText);
loginWin.add(userLbl);
loginWin.add(userText);
navWin.open();
