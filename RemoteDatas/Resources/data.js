//data gets our remote data so we can put it in our table view
//asdi1402 week 2
//by Travis A. Mix
//on Febuary 10, 2014
//using reddit api

//create variables
var tblData = [];
var jsonData;
var datastuff;
var title;
var row;

//setup our http client
var xhr = Ti.Network.createHTTPClient({
	onload : function(){
		Ti.API.info(this.responseText);
		jsonData = JSON.parse(this.responseText);
		
		for(var i = 0; i < 10; i++){
			datastuff = jsonData.data.children[i];
			row = Ti.UI.createTableViewRow({
				height : 60
			});
			
			var lbl1 = Ti.UI.createLabel({
				text : "by " + datastuff.data.author,
				fontSize : 6,
				left : 90,
				bottom : 5
			});
			
			var lbl2 = Ti.UI.createLabel({
				text : datastuff.data.title,
				fontSize : 8,
				left : 90,
				top : 5,
				height : 10
			});
			
			var tImg= Ti.UI.createImageView({
				image : datastuff.data.thumbnail,
				left : 5
			});
			
			row.add(lbl1);
			row.add(lbl2);
			row.add(tImg);
			tblData.push(row);
		}
		
		table1.setData(tblData);
	},
	
	onerror : function(e){
		Ti.API.info("Status: " + this.status);
		Ti.API.info("Text: " + this.responseText);
		Ti.API.info("Error: " + e.error);
		alert("Problems retrieving data :(");
	},
	
	timeout : 10000
});


xhr.open("GET", "http://api.reddit.com");
xhr.send();

//create our table
var table1 = Ti.UI.createTableView();

table1.addEventListener("click", function(e){
	switch(e.index){
		case 0:
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			break;
		case 9:
			break;
	}
});

