var cowsay = require('cowsay');
var plainFlag = '--plain';
var name = process.argv[2] || 'stranger';

if(process.argv.includes(plainFlag)) {
    if(process.argv[2] === plainFlag){
        console.log('hello stranger');
    }
    else {
        console.log(`hello ${name}`);
    }
}
else {
    console.log(cowsay.say({
        text: `hello ${name}`
    }));
}