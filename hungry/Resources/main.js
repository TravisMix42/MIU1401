//main.js for hungry app 
//by Travis Mix
//on Febuary 23, 2014
//for Doug Arley asdi 1402

//include needed files
Ti.include("feed.js");
Ti.include("fav.js");

//create our database
var db = Ti.Database.open('myDb');
db.execute('CREATE TABLE IF NOT EXISTS favorites(id INTEGER PRIMARY KEY, author TEXT, title TEXT, image TEXT, url TEXT)');
db.close();


//create our main app window
var appMain = Ti.UI.createWindow({
	title : "Main",
	backgroundColor : "#909090"
});

//create 2 buttons one to view the reddit feed and one to view favorite posts
//create view feed button
var feedBtn = Ti.UI.createButton({
	height : 40,
	backgroundColor : "blue",
	color : "#909090",
	title : "Reddit Feed",
	textAlign : "center",
	top : 80,
	left : 20,
	right : 20,
	borderRadius : 10,
});

//create favorite button
var favBtn = Ti.UI.createButton({
	height : 40,
	backgroundColor : "green",
	color : "#909090",
	title : "Favorites",
	textAlign : "center",
	top : 160,
	left : 20,
	right : 20,
	borderRadius : 10
});

//create our button event listeners
feedBtn.addEventListener("click", function(){
	navWin.openWindow(feedWin, {animated : true});
});

favBtn.addEventListener("click", function(){
	navWin.openWindow(favWin, {animated : true});
});

appMain.add(favBtn);
appMain.add(feedBtn);
