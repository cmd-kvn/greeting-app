var assert = require('assert');
var cowsay = require('cowsay');
var run = require('./run.js');

describe('greeting app', function() {
    it('greets by plain name with \'--plain\' flag', function() {
        var output = run(['./cli.js', '--name:marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('uses "partner" as a default when no name provided along with \'--plain\' flag', function() {
        var output = run(['./cli.js', '--plain']);
        assert.equal(output, 'hello partner\n');
    });

    it('greets with cowsay name by default', function() {
        var cowsaid = cowsay.say({text: 'hello marty'});
        var output = run(['./cli.js', '--name:marty']);
        assert.equal(output, cowsaid + '\n');
    });

    it('uses "partner" as a default for cowsay when no name is provided', function (){
        var cowsaid = cowsay.say({text: 'hello partner'});
        var output = run(['./cli.js']);
        assert.equal(output, cowsaid + '\n');
    });

});