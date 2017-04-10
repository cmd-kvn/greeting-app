var cowsay = require('cowsay');
var plainFlag = '--plain';

module.exports = function greet(optionsObj) {
    let name = optionsObj.name || 'partner';
    let greeting = optionsObj.greeting || 'hello';
    let plain = optionsObj.plain || false;

    let message = `${greeting} ${name}`;

    return plain ? message : cowsay.say({text: message});

    /* same as the ternary */
    // if (plain) return message;
    // else return cowsay.say({text: message});
    
    /* or */
    // let result;
    // if(plain) result = message;
    // else result = cowsay.say({text: message});
    // return result;
};
