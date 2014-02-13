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
	backgroundColor : "#C3E4ED"
});

table1.addEventListener("click", function(e){
	
	var infoWin = Ti.UI.createWindow({
		title : jsonData.data.children[e.index].data.author,
		backgroundColor : "#C3E4ED"
	});
	
	var infoScroll = Ti.UI.createScrollView({
		backgroundColor : "#C3E4ED"
	});
	
	var infoLbl1 = Ti.UI.createLabel({
		backgroundColor : "#C3E4ED",
		height : 100,
		left : 10, 
		top : 0,
		right : 10,
		text : jsonData.data.children[e.index].data.title,
		textAlign : "center"
	});
	
	var infoWeb = Ti.UI.createWebView({
		url : jsonData.data.children[e.index].data.url,
		top : 100,
		left : 0,
		right : 0,
		bottom : 0,
		height : "auto"
	});
	
	infoScroll.add(infoWeb);
	infoScroll.add(infoLbl1);
	infoWin.add(infoScroll);
	navWin.openWindow(infoWin, {animated : true});
});

//exports.data = table1;
