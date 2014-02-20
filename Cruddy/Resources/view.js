//view.js code is for the edit/view view of the cruddy application
//this is the view that will allow the user to see information in 
//the database
//by Travis A. Mix
//on Febuary 17, 2014
//for asdi1402 week 3

//vars 
var rows;
var name;
var email;
var phone;
var id;
var row;


var table1 = Ti.UI.createTableView({
	
});

//initialize our rows
var createRows = function(){
	var rowData = [];
	
	//open our database
	var db = Ti.Database.open('myDb');
	//get info from database
	rows = db.execute('SELECT * FROM contacts');
	
	while(rows.isValidRow()){
		name = rows.fieldByName('name');
		email = rows.fieldByName('email');
		phone = rows.fieldByName('phone');
		id = rows.fieldByName('id');
		
		row = Ti.UI.createTableViewRow({
			height : 'auto',
			hasChild : true,
			id : id
		});
		
		var lbl1 = Ti.UI.createLabel({
			text : "Name: " + name,
			font : {fontSize : 12},
			left : 10,
			top : 0
		});
		
		var lbl2 = Ti.UI.createLabel({
			text : "Phone: " + phone,
			font : {fontSize : 10},
			top : 15,
			left : 10
		});
		
		var lbl3 = Ti.UI.createLabel({
			text : "Email: " + email,
			font : {fontSize : 10},
			top : 27,
			left : 10
		});
		
		row.add(lbl1);
		row.add(lbl2);
		row.add(lbl3);
		rowData.push(row);
		rows.next();
	}
	table1.setData(rowData);
};


//create our view window 
var viewWin = Ti.UI.createWindow({
	title : "View / Edit",
	backgroundColor : "#707070"
});


//create a edit button in our nav bar to handle deleting stuff from the database
var editBtn = Ti.UI.createButton({
	title : "Delete"
});

var cancelBtn = Ti.UI.createButton({
	title : "Done",
	style : Ti.UI.iPhone.SystemButtonStyle.DONE
});

editBtn.addEventListener("click", function(){
	viewWin.setRightNavButton(cancelBtn);
	table1.editing = true;
});

cancelBtn.addEventListener("click", function(){
	viewWin.setRightNavButton(editBtn);
	table1.editing = false;
});

table1.addEventListener("delete", function(e){
	Ti.API.info();
	var db = Ti.Database.open('myDb');
	db.execute("DELETE FROM contacts WHERE id = ?", e.rowData.id);
	db.close();
});

//create our editing capabilities for our table 
table1.addEventListener("click", function(e){
	//create a new window
	//var id = e.rowData.id;
	var db = Ti.Database.open('myDb');
	var editData = db.execute('SELECT * FROM contacts WHERE ID=?', e.rowData.id);
	
	var editWin = Ti.UI.createWindow({
		title : 'edit',
		backgroundColor : "#707070"
	});
	
	var eTxt1 = Ti.UI.createTextField({
		value : editData.fieldByName('name'),
		top : 20,
		left : 20, 
		right : 20,
		height : 40,
		backgroundColor : "white",
		font : {fontSize : 20},
		borderRadius : 10,
		textAlign : 'center'
	});
	
	var eTxt2 = Ti.UI.createTextField({
		value : editData.fieldByName('phone'),
		top : 80,
		left : 20,
		right : 20,
		height : 40,
		backgroundColor : 'white',
		font : {fontSize : 20},
		borderRadius : 10,
		textAlign : 'center'
	});
	
	var eTxt3 = Ti.UI.createTextField({
		value : editData.fieldByName('email'),
		top : 140,
		left : 20,
		right : 20,
		height : 40,
		backgroundColor : 'white',
		font : {fontSize : 20},
		borderRadius : 10,
		textAlign : 'center'
	});
	
	//submit button
	var subBtn2 = Ti.UI.createButton({
		title : "SUBMIT CHANGES",
		backgroundColor : 'green',
		height : 40,
		top : 200,
		left : 20,
		right : 20,
		color : '#707070',
		textAlign : 'center',
		borderRadius : 10
	});
	
	subBtn2.addEventListener("click", function(){
		db.execute('UPDATE contacts SET name=?, email=?, phone=? WHERE ID=?', eTxt1.value, eTxt3.value, eTxt2.value, e.rowData.id);
		createRows();
		db.close();
	});
	
	
	
	editWin.add(subBtn2);
	editWin.add(eTxt3);
	editWin.add(eTxt2);
	editWin.add(eTxt1);
	navWin.openWindow(editWin, {animated : true});
});

viewWin.setRightNavButton(editBtn);
viewWin.add(table1);