//fav.js for hungry app
//by Travis A. Mix
//on Febuary 26, 2014
//for Doug Arley asdi 1402 week 4


//vars 
var rows;
var author;
var title;
var image;
var urls;
var id;
var row;



//initialize our rows
var createRows = function(){
	var rowData = [];
	
	//open our database
	var db = Ti.Database.open('myDb');
	//get info from database
	rows = db.execute('SELECT * FROM favorites');
	
	while(rows.isValidRow()){
		author = rows.fieldByName('author');
		title = rows.fieldByName('title');
		image = rows.fieldByName('image');
		urls = rows.fieldByName('url');
		id = rows.fieldByName('id');
		
		row = Ti.UI.createTableViewRow({
			height : 'auto',
			id : id
		});
		
		var lbl1 = Ti.UI.createLabel({
			text : title,
			font : {fontSize : 9},
			left : 80,
			top : 0,
			textAlign : 'center'
		});
		
		var lbl2 = Ti.UI.createLabel({
			text : "by " + author,
			font : {fontSize : 8},
			top : 40,
			left : 80,
			textAlign : 'center'
		});
		
		var img = Ti.UI.createImageView({
			image : image,
			left : 5
		});
		
		row.add(lbl1);
		row.add(lbl2);
		row.add(img);
		rowData.push(row);
		rows.next();
	}
	table2.setData(rowData);
	db.close();
};

var favWin = Ti.UI.createWindow({
	title : "Favorites",
	backgroundColor : "#909090"
});

//create our table to hold our favorite posts
var table2 = Ti.UI.createTableView({
	backgroundColor : "#909090"
});

//create a edit button in our nav bar to handle deleting stuff from the database
var deleteBtn = Ti.UI.createButton({
	title : "Delete"
});

var doneBtn = Ti.UI.createButton({
	title : "Done",
	style : Ti.UI.iPhone.SystemButtonStyle.DONE
});

deleteBtn.addEventListener("click", function(){
	favWin.setRightNavButton(doneBtn);
	table2.editing = true;
});

doneBtn.addEventListener("click", function(){
	favWin.setRightNavButton(deleteBtn);
	table2.editing = false;
});

table2.addEventListener("delete", function(e){
	Ti.API.info();
	var db = Ti.Database.open('myDb');
	db.execute("DELETE FROM favorites WHERE id = ?", e.rowData.id);
	db.close();
});


favWin.setRightNavButton(deleteBtn);
favWin.add(table2);
