//holds our list creation code 
//asdi1402 week 2
//by Travis A. Mix
//Febuary 10,2014

//var rows = [{title : "apple"}, {title : "banana"}, {title : "fish"}];
//import our data.js rowData array
var rows = require("data");

//create our list view
var list1 = Ti.UI.createTableView({
	style : Ti.UI.iPhone.ListViewStyle.GROUPED,
	backgroundColor : "#C3E4ED"
});


//export our list
exports.list = list1;