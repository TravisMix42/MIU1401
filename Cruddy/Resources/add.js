//add.js code is for the add view of the cruddy application
//this is the view that will allow the user to add new information 
//to the database...
//by Travis A. Mix
//on Febuary 17, 2014
//for asdi1402 week 3

//include view.js
Ti.include("view.js");

//create our add window
var addWin = Ti.UI.createWindow({
	title : "Add Data",
	backgroundColor : "#707070"
});

//create our form so the user can add information to the database
//create our name label
var nameLbl = Ti.UI.createLabel({
	text : "Name: ",
	height : 40,
	top : 20,
	left : 10,
	right : 60,
	color : "black"
});

//create our name text field
var nameTxtField = Ti.UI.createTextField({
	height : 40,
	top : 20,
	left : 80,
	right : 20,
	backgroundColor : "white",
	borderRadius : 10,
	textAlign : "center"
});

//create our email label
var emailLbl = Ti.UI.createLabel({
	text : "Email: ",
	height : 40,
	top : 80,
	left : 10,
	right : 60,
	color : "black"
});

//create our email text field
var emailTxtField = Ti.UI.createTextField({
	height : 40,
	top : 80,
	left : 80,
	right : 20,
	backgroundColor : "white",
	borderRadius : 10,
	textAlign : "center"
});

//add our phone number label
var phoneLbl = Ti.UI.createLabel({
	text : "Phone: ",
	height : 40,
	top : 140,
	left : 10, 
	right : 60,
	color : "black"
});

//add our phone text field
var phoneTxtField = Ti.UI.createTextField({
	height : 40,
	top : 140,
	left : 80,
	right : 20,
	backgroundColor : "white",
	borderRadius : 10,
	textAlign : "center"
});

//add our submit button
var subBtn = Ti.UI.createButton({
	title : "SUBMIT",
	borderRadius : 10,
	right : 20,
	left : 80,
	height : 40,
	top : 200,
	backgroundColor : "green",
	color : "#707070"
});

//add our eventlistener to our subBtn
subBtn.addEventListener("click", function(){
	Ti.API.info("Submit button clicked");
	db = Ti.Database.open('myDb');
	db.execute('INSERT INTO contacts(name, email, phone) VALUES (?, ?, ?)', nameTxtField.value, emailTxtField.value, phoneTxtField.value);
	nameTxtField.value = "";
	emailTxtField.value = "";
	phoneTxtField.value = "";
	db.close();
	createRows();
});

//add our stuff to the addWin window
addWin.add(nameLbl);
addWin.add(nameTxtField);
addWin.add(emailLbl);
addWin.add(emailTxtField);
addWin.add(phoneLbl);
addWin.add(phoneTxtField);
addWin.add(subBtn);
