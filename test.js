// test fizzbuzz

var should = require('should');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var fizzbuzzer = require("./index.js").fizzbuzzer; 

describe('Fizzbuzzer should return the correct output', function () {

    it('should print "FizzBuzz!" on multiples of 15', function () {
        expect(fizzbuzzer(15)).to.equal("FizzBuzz!");
        expect(fizzbuzzer(30)).to.equal("FizzBuzz!");
        expect(fizzbuzzer(45)).to.equal("FizzBuzz!");
    });
    it('should print "Buzz!" on multiples of 5 that are not multiples of 3', function () {
        expect(fizzbuzzer(5)).to.equal("Buzz!");
        expect(fizzbuzzer(10)).to.equal("Buzz!");
        expect(fizzbuzzer(20)).to.equal("Buzz!");
        expect(fizzbuzzer(25)).to.equal("Buzz!");
    });

    it('should print "Fizz!" on multiples of 3 that are not multiples of 5', function () {
        expect(fizzbuzzer(3)).to.equal("Fizz!");
        expect(fizzbuzzer(6)).to.equal("Fizz!");
        expect(fizzbuzzer(9)).to.equal("Fizz!");
        expect(fizzbuzzer(12)).to.equal("Fizz!");
    });

    it('should only print the input otherwise', function () {
        expect(fizzbuzzer(1)).to.equal(1);
        expect(fizzbuzzer(2)).to.equal(2);
        expect(fizzbuzzer(4)).to.equal(4);
        expect(fizzbuzzer(8)).to.equal(8);
        expect(fizzbuzzer(7)).to.equal(7);
    });


})
