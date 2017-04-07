const assert = require('assert');
const optionsParser = require('../lib/options-parser');

describe.only('optionsParser', function () {
    it('correctly handles no arguments', function () {
        let output = optionsParser([]);
        assert.deepEqual(output, {});
    })


});
