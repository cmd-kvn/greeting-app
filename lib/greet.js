var cowsay = require('cowsay');
var plainFlag = '--plain';

module.exports = function greet(name, plain) {
    if (!name) {
        return cowsay.say({ text: 'hello stranger' });
    }
    else if (name === plainFlag) {
        return 'hello stranger';
    }
    else if (name !== plainFlag && (!plain)) {
        return cowsay.say({ text: `hello ${name}` });
    }    
    else if (plain) {
        return `hello ${name}`;
    }
};
