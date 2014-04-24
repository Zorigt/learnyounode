module.exports = function (dir, ext, callback) {
var fs = require('fs');
var path = require('path');
var array = new Array;

fs.readdir(dir, function(err, list) {
	if (err) return callback(err);
	list.forEach(function(file) {
		if (path.extname(file) === '.' + ext) {
			array.push(file);
		}
	});
	
	callback(null, array);
});	

}

