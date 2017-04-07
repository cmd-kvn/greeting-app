const assert = require('assert');
const optionsParser = require('../lib/options-parser');

describe.only('optionsParser', function () {
    it('correctly handles no arguments', function () {
        let output = optionsParser([]);
        assert.deepEqual(output, {});
    });

    it('correctly handles a --plain argument', function () {
        let output = optionsParser(['--plain']);
        assert.deepEqual(output, {'plain': true});
    });

    it('correctly handles a --key:value argument', function () {
        let output = optionsParser(['--foo:bar']);
        assert.deepEqual(output, {'foo': 'bar'});
    });

    it('correctly handles --key:value --key2:value2', function () {
        let output = optionsParser(['--foo:bar', '--baz:abc']);
        assert.deepEqual(output, {'foo': 'bar', 'baz': 'abc'});
    });

    it('correctly handles --plain --key:value', function () {
        let output = optionsParser(['--plain', '--foo:bar']);
        assert.deepEqual(output, {'plain': true, 'foo': 'bar'});
    });

});
