var fs = require('fs');
var fileName = process.argv[2];
var output = fs.createWriteStream(fileName);

console.log("This is a typing test, you have 10 seconds to type as much as you can.");
console.log("You can view the results of your test at '" + process.argv[2] + "'.");
console.log("Good luck and godspeed, test starts NOW.")

process.stdin.pipe(process.stdout);
process.stdin.pipe(output);

setTimeout(function() {
  console.log("\n Time! View your results at '" + process.argv[2] + "'.");
  process.exit(0);
}, 10000);