// test fizzbuzz

var should = require('should');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var fizzbuzzer = require("./index.js").fizzbuzzer; 

describe('Boilerplate TDD', function () {

    it('should return the correct output', function () {
        expect(fizzbuzzer(3)).to.equal("Fizz!");
        expect(fizzbuzzer(5)).to.equal("Buzz!");
        expect(fizzbuzzer(15)).to.equal("FizzBuzz!");
        expect(fizzbuzzer(4)).to.equal(4); 
    });

})
