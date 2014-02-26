//feed.js for hungry app
//by Travis A. Mix
//on Febuary 26, 2014
//for Doug Arley asdi 1402 week 4

//create variables
var tblData = [];
var jsonData;
var datastuff;
var title;
var row;



var feedWin = Ti.UI.createWindow({
	title : "Reddit",
	backgroundColor : "#909090"
});


//setup our http client
var xhr = Ti.Network.createHTTPClient({
	onload : function(){
		//Ti.API.info(this.responseText);
		jsonData = JSON.parse(this.responseText);
		
		for(var i = 0; i < jsonData.data.children.length; i++){
			datastuff = jsonData.data.children[i];
			row = Ti.UI.createTableViewRow({
				height : 60,
				hasChild : true
			});
			
			var lbl1 = Ti.UI.createLabel({
				text : "by " + datastuff.data.author,
				font : {fontSize : 12},
				left : 90,
				bottom : 5
			});
			
			var lbl2 = Ti.UI.createLabel({
				text : datastuff.data.title,
				font : {fontSize : 16},
				left : 90,
				top : 5,
				height : 10
			});
			
			var tImg = Ti.UI.createImageView({
				image : datastuff.data.thumbnail,
				left : 5
			});
			
			if(datastuff.data.thumbnail.slice(0,4) != "http")
			{
				tImg.image = "img/noImage.png";
			}
				
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
var table1 = Ti.UI.createTableView({
	style : Ti.UI.iPhone.ListViewStyle.GROUPED,
	backgroundColor : "#909090"
});

table1.addEventListener("click", function(e){
	
	var infoWin = Ti.UI.createWindow({
		title : jsonData.data.children[e.index].data.author,
		backgroundColor : "#909090"
	});
	
	var infoScroll = Ti.UI.createScrollView({
		backgroundColor : "#909090"
	});
	
	var infoLbl1 = Ti.UI.createLabel({
		backgroundColor : "#909090",
		height : 120,
		left : 10, 
		top : 0,
		right : 10,
		text : jsonData.data.children[e.index].data.title,
		textAlign : "center",
		font : {fontSize : 14}
	});
	
	var infoWeb = Ti.UI.createWebView({
		url : jsonData.data.children[e.index].data.url,
		top : 120,
		left : 0,
		right : 0,
		bottom : 0,
		height : "auto"
	});
	
	//create a edit button in our nav bar to handle deleting stuff from the database
var editBtn = Ti.UI.createButton({
	title : "favorite"
});


editBtn.addEventListener("click", function(){
	Ti.API.info("post favorited");
	//open our database
	var db = Ti.Database.open('myDb');
	db.execute('INSERT INTO favorites(author, title, image, url) VALUES(?,?,?,?)', jsonData.data.children[e.index].data.author, 
	jsonData.data.children[e.index].data.title, jsonData.data.children[e.index].data.thumbnail, jsonData.data.children[e.index].data.url);
	Ti.API.info("author: " + jsonData.data.children[e.index].data.author + "img: " + jsonData.data.children[e.index].data.thumbnail + 
	"url: " + jsonData.data.children[e.index].data.url);
	db.close();
	createRows();
});

	
	infoWin.setRightNavButton(editBtn);
	infoScroll.add(infoWeb);
	infoScroll.add(infoLbl1);
	infoWin.add(infoScroll);
	navWin.openWindow(infoWin, {animated : true});
});

feedWin.add(table1);
