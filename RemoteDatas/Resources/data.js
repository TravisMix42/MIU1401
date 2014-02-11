//data gets our remote data so we can put it in our table view
//asdi1402 week 2
//by Travis A. Mix
//on Febuary 10, 2014
//using reddit api

//create our array to for exporting
var rowDataTitle = [];
var rowDataAuthor = [];

//create our remoteRespone function
var remoteResponse = function(){
	Ti.API.info(this.responseText);
	var jsonData = JSON.parse(this.responseText);
	
	for(var i = 0; i < 10; i++){
		rowDataTitle.push(jsonData.data.children[i].data.title);
		rowDataAuthor.push(jsonData.data.children[i].data.author);
		
		Ti.API.info(rowDataAuthor[i]);
		Ti.API.info(rowDataTitle[i]);
		
	}
	//var testTitle = jsonData.data.children[0].data.title;
	//var testAuthor = jsonData.data.children[0].data.author;
	
	
};

//create our remoteError function
var remoteError = function(e){
	Ti.API.info("Status: " + this.status);
	Ti.API.info("Text: " + this.responseText);
	Ti.API.info("Error: " + e.error);
};

//create our http client object
var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onError : remoteError,
	timeout : 10000
});

//open the remote server and get info
xhr.open("GET", "http://api.reddit.com/");
xhr.send();

