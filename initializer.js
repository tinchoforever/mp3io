var fs = require('fs');
var mm = require('musicmetadata');
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
	var parser = new mm(fs.createReadStream(root + "/" + fileStats.name));
	// listen for the metadata event
	parser.on('metadata', function (result) {
		items.push(result);
	  	next();
	});
});

walker.on("end", function () {
	console.log("all done");
	console.log(items.length);
});

