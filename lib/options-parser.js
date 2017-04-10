module.exports = function optionsParser (argumentsArr) {
    let options = argumentsArr.reduce((acc, curr) => {
        let splitted = curr.split(':'); // makes an array
        let keyName = splitted[0].replace('--', '');
        acc[keyName] = splitted[1];
        if(keyName === 'plain') acc['plain'] = true;

        return acc;
    }, {});
    return options;
}