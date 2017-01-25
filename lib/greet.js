var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';

// if (name + '--plain'){
//     console.log(`hello ${name}`);
// } else {
console.log(cowsay.say({
    text: `hello ${name}`
}));
// }