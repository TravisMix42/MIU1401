//convertListWin
//displays a list of available conversions
//for the user to chose from
//by Travis A. Mix
//Jamuary 30, 2014

//get the current window so we can add to it
var listWin = Ti.UI.currentWindow;

//array to hold our conversion types
var conversionTypes = Array("Fahrenheit", "Celsius", "Kelvin", "Rankine");

//create our list view
var listView = Ti.UI.createView({
	top : 0,
	bottom : 0,
	left : 0,
	right : 0
});

//create our table 
var convertTable = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.GROUPED
});

//create our table section
var tableSec = Ti.UI.createTableViewSection({
        headerTitle : "Temperature Conversions",
});

//create our table rows
for(var i = 0; i < conversionTypes.length; i++){
        var row = Ti.UI.createTableViewRow({
                title : conversionTypes[i],
                hasChild : true
        });
        tableSec.add(row);
}


listView.add(convertTable);
convertTable.setData([tableSec]);