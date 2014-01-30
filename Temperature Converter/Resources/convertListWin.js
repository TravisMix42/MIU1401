//convertListWin
//displays a list of available conversions
//for the user to chose from
//by Travis A. Mix
//Jamuary 30, 2014

var i;
var opt1;
var opt2;
var opt3;

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

convertTable.addEventListener("click", function(e){
	switch(e.row.title){
		case "Fahrenheit":
			i = 0;
			opt1 = "Celsius:";
			opt2 = "Kelvin:";
			opt3 = "Rankine:";
			break;
		case "Celsius":
			i = 1;
			opt1 = "Fahrenheit:";
			opt2 = "Kelvin:";
			opt3 = "Rankine:";
			break;
		case "Kelvin":
			i = 2;
			opt1 = "Fahrenheit:";
			opt2 = "Celsius:";
			opt3 = "Rankine:";
			break;
		case "Rankine":
			i = 3;
			opt1 = "Fahrenheit:";
			opt2 = "Celsius:";
			opt3 = "Kelvin:";
			break;
	}
	
	//create actual conversion window
	var convWin = Ti.UI.createWindow({
		title : conversionTypes[i] + " to",
		backgroundColor : "white"
	});
	
	var convView = Ti.UI.createView({
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	});
	
	var convLbl = Ti.UI.createLabel({
		text : conversionTypes[i] + ":",
		textAlign : "left",
		top : 20,
		left : 20
	});
	
	var convText = Ti.UI.createTextArea({
		top : 45,
		left : 20,
		right : 20,
		borderRadius : 10,
		borderColor : "black",
		keyboardType : Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
		
	});
	
	var convLbl2 = Ti.UI.createLabel({
		text : opt1,
		textAlign : "left",
		top : 95,
		left : 20,
		right : 20
	});
	
	var convText2 = Ti.UI.createTextArea({
		top : 120,
		left : 20,
		right : 20,
		borderRadius : 10,
		borderColor : "black",
		editable : false
				
	});
	
	var convLbl3 = Ti.UI.createLabel({
		text : opt2,
		textAlign : "left",
		top : 170,
		left : 20,
		right : 20
	});
	
	var convText3 = Ti.UI.createTextArea({
		top : 195,
		left : 20,
		right : 20,
		borderRadius : 10,
		borderColor : "black",
		editable : false
		
	});
	
	var convLbl4 = Ti.UI.createLabel({
		text : opt3,
		textAlign : "left",
		top : 245,
		left : 20,
		right : 20
	});
	
	var convText4 = Ti.UI.createTextArea({
		top : 270,
		left : 20,
		right : 20,
		borderRadius : 10,
		borderColor : "black",
		editable : false
	});
	
	var convBtn = Ti.UI.createButton({
		title : "Convert",
		left : 20,
		right : 20,
		height : 40,
		bottom : 40,
		borderRadius : 10,
		borderColor : "black",
		backgroundColor : "green"
	});
	
	
	convBtn.addEventListener("click", function(){
		Ti.API.info("Button Pressed");
	});
	
	navWin.openWindow(convWin, {animated : true});
	convWin.add(convView);
	convWin.add(convLbl);
	convWin.add(convText);
	convWin.add(convLbl2);
	convWin.add(convText2);
	convWin.add(convLbl3);
	convWin.add(convText3);
	convWin.add(convLbl4);
	convWin.add(convText4);
	convWin.add(convBtn);
});



listView.add(convertTable);
convertTable.setData([tableSec]);
