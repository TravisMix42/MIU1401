//data gets our remote data so we can put it in our table view
//asdi1402 week 2
//by Travis A. Mix
//on Febuary 10, 2014
//using reddit api

var jsonData;
var tableData = [];
var jsonAuthorList = [];
var row;
var titles = [];
var authors = [];
var lbl1;


var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload : function(){
    	Ti.API.info(this.responseText);
    jsonData = JSON.parse(this.responseText);
    Ti.API.info("Author: " + jsonData.data.children[0].data.author);
    for(var i = 0; i < 10; i++){
    	titles[i] = jsonData.data.children[i].data.title;
    	authors[i] = jsonData.data.children[i].data.author;
    	Ti.API.info(authors[i]);
    	Ti.API.info(titles[i]);
    }
    //create a label
	lbl1 = Ti.UI.createLabel({
		text : "" + titles[1],
		height : "auto",
		width : "auto",
		backgroundColor : "red"
	});

    },
    onerror : remoteError,
    timeout : 5000
});

xhr.open("GET", "http://api.reddit.com");
xhr.send();

exports.data = lbl1;

