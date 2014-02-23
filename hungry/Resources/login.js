//main.js file for the hungry app
//by Travis Mix
//on Febuary 23, 2014
//for Doug Arley asdi 1402

//include files
Ti.include("main.js");


//create our main window
var main = Ti.UI.createWindow({
	title : "login",
	backgroundColor : "#909090"
});

//create our navigation window and point to main window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window : main
});

//create a login system
//username textfield
var uName = Ti.UI.createTextField({
	hintText : "username",
	height : 40,
	top : 80,
	left : 20,
	right : 20,
	backgroundColor : "white",
	textAlign : "center",
	borderRadius : 10
});

//password textfield
var uPassword = Ti.UI.createTextField({
	hintText : "password",
	height : 40,
	top : 140,
	left : 20,
	right : 20,
	backgroundColor : "white",
	textAlign : "center",
	borderRadius : 10
});

//login submit button
var subBtn = Ti.UI.createButton({
	title : "Submit",
	backgroundColor : "green",
	color : "#909090",
	textAlign : "center",
	height : 40,
	left : 20,
	right : 20,
	top : 200,
	borderRadius : 10
});

//submit button event listener to open the main login screen
subBtn.addEventListener("click", function(){
	//debug make sure its working first
	Ti.API.info("submit button clicked!");
	var nameTest = uName.value.toString();
	var passTest = uPassword.value.toString();
	Ti.API.info("Username: " + nameTest + " Password: " + passTest);
	//end debug
	
	if(nameTest == "Testname" && passTest == "Testpassword"){
		navWin.openWindow(appMain, {animated : true});
	}
	else{
		alert("Wrong username or password");
	}
});

main.add(subBtn);
main.add(uPassword);
main.add(uName);
navWin.open();