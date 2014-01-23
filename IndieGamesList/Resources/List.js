//List.js for IndieGameList application
//this code controls the list view screen of the application
//by Travis A. Mix
//January 21, 2014

//include or data.js that hold our json data
Ti.include("data.js");

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

//add listView to listWindow
listWindow.add(listView);
table1.setData([tableSec]);
listView.add(table1);