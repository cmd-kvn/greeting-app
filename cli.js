const greet = require('./lib/greet');
const optionsParser = require('./lib/options-parser');

let options = optionsParser(process.argv.slice(2));
const greeting = greet(options);
process.stdout.write(greeting + '\n');

