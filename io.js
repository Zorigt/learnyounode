var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var result = buf.toString().split('\n');
console.log( result.length - 1);
