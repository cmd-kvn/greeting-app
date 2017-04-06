const greet = require('./lib/greet');
const greeting = greet(process.argv[2], process.argv[3]);
process.stdout.write(greeting + '\n');