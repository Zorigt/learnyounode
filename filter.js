var fs = require("fs");
var path = require("path");
var fileExt = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	if (err) throw err;
	list.forEach(function(file) {
		if (path.extname(file) === fileExt) {
			console.log(file);
		}
	});
});
