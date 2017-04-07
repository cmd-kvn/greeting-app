module.exports = function optionsParser (argumentsArr) {
    let options = argumentsArr.reduce((acc, curr) => {
        let splitted = curr.split(':'); // makes an array


        return acc;
    }, {});
    return options;
}