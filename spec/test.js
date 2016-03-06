// test fizzbuzz
var assert = require('assert'); 

import {fizzbuzzer, createFizzBuzz} from '../build/main.js'

describe('Fizzbuzzer should return the correct output', function () {

    it('and should correctly default', function () {
        assert.equal(fizzbuzzer(3), "Fizz!");
        assert.equal(fizzbuzzer(5), "Buzz!");
        assert.equal(fizzbuzzer(15), "FizzBuzz!");
        assert.equal(fizzbuzzer(4), 4); 
    });

    it('and should accept alternative modulos', function () {
        assert.equal(fizzbuzzer(3, 4, 7), 3);
        assert.equal(fizzbuzzer(5, 4, 7), 5);
        assert.equal(fizzbuzzer(15, 4, 7), 15);
        assert.equal(fizzbuzzer(8, 4, 7), "Fizz!");
        assert.equal(fizzbuzzer(21, 4, 7), "Buzz!");
        assert.equal(fizzbuzzer(28, 4, 7), "FizzBuzz!");
    });

    it('and should accept alternative outputs', function () {
        const newFizz = "Foo";
        const newBuzz = "Bar"
        assert.equal(fizzbuzzer(3, 3, 5, newFizz, newBuzz), "Foo!");
        assert.equal(fizzbuzzer(5, 3, 5, newFizz, newBuzz), "Bar!");
        assert.equal(fizzbuzzer(15, 3, 5, newFizz, newBuzz), "FooBar!");
        assert.equal(fizzbuzzer(4, 3, 5, newFizz, newBuzz), 4);
        assert.equal(fizzbuzzer(8, 4, 7, newFizz, newBuzz), "Foo!");
        assert.equal(fizzbuzzer(21, 4, 7, newFizz, newBuzz), "Bar!");
        assert.equal(fizzbuzzer(28, 4, 7, newFizz, newBuzz), "FooBar!");
        assert.equal(fizzbuzzer(15, 4, 7, newFizz, newBuzz), 15);
    });

    it('and should print "Fizz!" on multiples of 3 that are not multiples of 5', function () {
        assert.equal(fizzbuzzer(6), "Fizz!");
        assert.equal(fizzbuzzer(9), "Fizz!");
        assert.equal(fizzbuzzer(12), "Fizz!");
    });

    it('and should print "Buzz!" on multiples of 3 that are not multiples of 5', function () {
        assert.equal(fizzbuzzer(10), "Buzz!");
        assert.equal(fizzbuzzer(20), "Buzz!");
        assert.equal(fizzbuzzer(25), "Buzz!");
    });


    it('and should only print the input otherwise', function () {
        assert.equal(fizzbuzzer(1), 1);
        assert.equal(fizzbuzzer(2), 2);
        assert.equal(fizzbuzzer(4), 4);
        assert.equal(fizzbuzzer(8), 8);
        assert.equal(fizzbuzzer(7), 7);
    });


})


describe('MainFizzBuzz should return the correct output', function () {

    it('and should do a standard fizzbuzz with no other arguments', function () {
        const testArray_1_15 = [ 1, 2, 'Fizz!', 4, 'Buzz!', 'Fizz!', 7, 8, 'Fizz!', 'Buzz!', 11, 'Fizz!', 13, 14, 'FizzBuzz!' ];
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem. 
        assert.equal(JSON.stringify(createFizzBuzz(1, 15)), JSON.stringify(testArray_1_15));
    });

})
