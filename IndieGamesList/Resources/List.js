//List.js for IndieGameList application
//this code controls the list view screen of the application
//by Travis A. Mix
//January 21, 2014

//include or data.js that hold our json data
Ti.include("data.js");

var i = 0;

//create Nav window
var nav = Ti.UI.iOS.createNavigationWindow({
	window : listWindow
});

//create our list window and view
var listWindow = Ti.UI.createWindow({
	title : "Indie Game List"
});

var listView = Ti.UI.createView({
	top: 0,
	bottom : 0,
	left : 0,
	right : 0
});

//create our table view 
var table1 = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor : "#00CCFF"
});

//create our table section
var tableSec = Ti.UI.createTableViewSection({
	headerTitle : "Games List",
	footerTitle: "A list of my favorite Indie Games"
});

//create our table rows
for(var i = 0; i < games.length; i++){
	var row = Ti.UI.createTableViewRow({
		title : games[i].name,
		hasChild : true
	});
	tableSec.add(row);
}

//add event listener to the table to open the child views
tableSec.addEventListener("click", function(e){
	
	//debug
	Ti.API.info(e.row.title);
	switch(e.row.title)
	{
		case "Starbound":
			i = 0;
			break;
		case "Prison Architect":
			i = 1;
			break;
		case "Gnomoria":
			i = 2;
			break;
		case "Unstoppable Gorg":
			i = 3;
			break;
		case "Spacebase DF-9":
			i = 4;
			break;
	}
	//debug
	Ti.API.info(i);
	detailWin.open();
});

//create our detail view window
var detailWin = Ti.UI.createWindow({
});

//var detailImage = Ti.UI.createImageView({
	
//});

var detailName = Ti.UI.createLabel({
	textAlign : "left",
	text : "test"
});

//add listView to listWindow
detailWin.add(detailName);
listWindow.add(listView);
table1.setData([tableSec]);
listView.add(table1);
