//List.js for IndieGameList application
//this code controls the list view screen of the application
//by Travis A. Mix
//January 21, 2014

//include or data.js that hold our json data
Ti.include("data.js");

//global variables
var i;

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

//add event listener to the table
table1.addEventListener("click", function(e){
	
	switch(e.row.title){
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
	
	//create detail window
	var detWin = Ti.UI.createWindow({
		title : games[i].name,
		backgroundColor : "#00CCFF"
	});
	
	//make the views scrollable
	var detScrollView = Ti.UI.createScrollView({
		scrollType : "vertical"
	});
	
	var detImage = Ti.UI.createImageView({
		top : 0,
		height : 200,
		imageAlign : "center",
		image : games[i].image
	});
	
	var detLblDev = Ti.UI.createLabel({
		text : "Developer:\n" +  games[i].developer + "\n\nGenre:\n" + games[i].genre + 
			"\n\nRelease Date:\n" + games[i].release + "\n\nReview:\n" + games[i].review + 
			"\n\nAbout the Game:\n" + games[i].about,
		top : 200,
		left : 20,
		right : 20,
		textAlign : "left"
	});
	
	detScrollView.add(detImage);
	detScrollView.add(detLblDev);
	detWin.add(detScrollView);
	navWin.openWindow(detWin, {animated : true});
});

//add listView to listWindow
listWindow.add(listView);
table1.setData([tableSec]);
listView.add(table1);