var fs = require('fs');
var id3 = require('id3js');
var walk = require('walk');



var options = {
	followLinks: false
	// directories with these keys will be skipped
	, filters: ["Temp", "_Temp"]
};
var walker = walk.walk("public/record/tracks", options);

var items = [];

walker.on("file", function (root, fileStats, next) {
	// create a new parser from a node ReadStream
	
	id3({ file: root + "/" + fileStats.name, type: id3.OPEN_LOCAL }, function(err, tags) {
    	tags.fileName = fileStats.name;
    	items.push(tags);
    	next();
	});
});

walker.on("end", function () {
	console.log("Files Ready! Extracting information.");
	var outputFilename = 'public/record/mp3io.json';
	
	var songs = [];
	for (var i = 0; i < items.length; i++) {
		var song = items[i];
		var track = {
			file : song.fileName,
			title: song.title,
			artist: song.artist,
			year: song.year,
			album: song.album
		};
		songs.push(track);
		var ab = song.v2.image.data;
		var buffer = new Buffer( new Uint8Array(ab) ).toString('base64');
		fs.writeFile("public/record/photos/" + i + ".jpg", buffer, 'base64', function(err) {
		  	
		});
		
	}
	var mp3io = JSON.stringify(songs, null, 4);
	

	fs.writeFile(outputFilename, mp3io, function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to ");
	    }
	});
});

