var assert = require('assert');
var cowsay = require('cowsay');
var run = require('./run.js');

describe('greeting app', function() {
    it('greets by plain name with \'--plain\' flag', function() {
        var output = run(['./cli.js', 'marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('uses "stranger" as a default when no name provided along with \'--plain\' flag', function() {
        var output = run(['./cli.js', '--plain']);
        assert.equal(output, 'hello stranger\n');
    });

    it('greets with cowsay name by default', function() {
        var cowsaid = cowsay.say({text: 'hello marty'});
        var output = run(['./cli.js', 'marty']);
        assert.equal(output, cowsaid + '\n');
    });

    it('uses "stranger" as a default for cowsay when no name is provided', function (){
        var cowsaid = cowsay.say({text: 'hello stranger'});
        var output = run(['./cli.js']);
        assert.equal(output, cowsaid + '\n');
    });

});