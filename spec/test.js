// test fizzbuzz
var assert = require('assert');

import { fizzbuzzer, createFizzBuzz } from '../src/fizzbuzz.js'
import { bigFizzbuzzer, bigCreateFizzBuzz } from '../src/bigBuzz.js'


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



describe('createFizzBuzz should return the correct output', function () {
    const tst_1_15 = [ 1, 2, 'Fizz!', 4, 'Buzz!', 'Fizz!', 7, 8, 'Fizz!', 'Buzz!', 11, 'Fizz!', 13, 14, 'FizzBuzz!' ];
    const tst_1_28_4_7 = [ 1, 2, 3, 'Foo!', 5, 6, 'Bar!', 'Foo!', 9, 10, 11, 'Foo!', 13, 'Bar!', 15, 'Foo!', 17, 18, 19, 'Foo!', 'Bar!', 22, 23, 'Foo!', 25, 26, 27, 'FooBar!' ];
    const tst_minus15_15 = ["FizzBuzz!",-14,-13,"Fizz!",-11,"Buzz!","Fizz!",-8,-7,"Fizz!","Buzz!",-4,"Fizz!",-2,-1,0,1,2,"Fizz!",4,"Buzz!","Fizz!",7,8,"Fizz!","Buzz!",11,"Fizz!",13,14,"FizzBuzz!"]

    it('and should do a standard fizzbuzz with no other arguments', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(createFizzBuzz(1, 15)), JSON.stringify(tst_1_15));
    });


    it('and should take custom parameters', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(createFizzBuzz(1, 28, 4, 7, 'Foo', 'Bar')), JSON.stringify(tst_1_28_4_7));
    });


    it('and it should be able to count backwards', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(createFizzBuzz(15, 1)), JSON.stringify(tst_1_15.reverse()));
    });

    it('and it should be able to count backwards with custom parameters', function () {
        const tst_15_1 = ["FizzBuzz!" ,14 ,13, "Fizz!", 11, "Buzz!", "Fizz!", 8, 7, "Fizz!", "Buzz!", 4, "Fizz!", 2, 1];
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(createFizzBuzz(28, 1, 4, 7, 'Foo', 'Bar')), JSON.stringify(tst_1_28_4_7.reverse()));
    });

    it('and should handle positive numbers, negative numbers, and 0', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(createFizzBuzz(-15, 15)), JSON.stringify(tst_minus15_15));
    });
})


describe('bigFizzbuzzer should return the correct output for even small numbers', function () {

    it('and should correctly default', function () {
        assert.equal(bigFizzbuzzer(3), "Fizz!");
        assert.equal(bigFizzbuzzer(5), "Buzz!");
        assert.equal(bigFizzbuzzer(15), "FizzBuzz!");
        assert.equal(bigFizzbuzzer(4), 4);
    });

    it('and should accept alternative modulos', function () {
        assert.equal(bigFizzbuzzer(3, 4, 7), 3);
        assert.equal(bigFizzbuzzer(5, 4, 7), 5);
        assert.equal(bigFizzbuzzer(15, 4, 7), 15);
        assert.equal(bigFizzbuzzer(8, 4, 7), "Fizz!");
        assert.equal(bigFizzbuzzer(21, 4, 7), "Buzz!");
        assert.equal(bigFizzbuzzer(28, 4, 7), "FizzBuzz!");
    });

    it('and should accept alternative outputs', function () {
        const newFizz = "Foo";
        const newBuzz = "Bar"
        assert.equal(bigFizzbuzzer(3, 3, 5, newFizz, newBuzz), "Foo!");
        assert.equal(bigFizzbuzzer(5, 3, 5, newFizz, newBuzz), "Bar!");
        assert.equal(bigFizzbuzzer(15, 3, 5, newFizz, newBuzz), "FooBar!");
        assert.equal(bigFizzbuzzer(4, 3, 5, newFizz, newBuzz), 4);
        assert.equal(bigFizzbuzzer(8, 4, 7, newFizz, newBuzz), "Foo!");
        assert.equal(bigFizzbuzzer(21, 4, 7, newFizz, newBuzz), "Bar!");
        assert.equal(bigFizzbuzzer(28, 4, 7, newFizz, newBuzz), "FooBar!");
        assert.equal(bigFizzbuzzer(15, 4, 7, newFizz, newBuzz), 15);
    });

    it('and should print "Fizz!" on multiples of 3 that are not multiples of 5', function () {
        assert.equal(bigFizzbuzzer(6), "Fizz!");
        assert.equal(bigFizzbuzzer(9), "Fizz!");
        assert.equal(bigFizzbuzzer(12), "Fizz!");
    });

    it('and should print "Buzz!" on multiples of 3 that are not multiples of 5', function () {
        assert.equal(bigFizzbuzzer(10), "Buzz!");
        assert.equal(bigFizzbuzzer(20), "Buzz!");
        assert.equal(bigFizzbuzzer(25), "Buzz!");
    });


    it('and should only print the input otherwise', function () {
        assert.equal(bigFizzbuzzer(1), 1);
        assert.equal(bigFizzbuzzer(2), 2);
        assert.equal(bigFizzbuzzer(4), 4);
        assert.equal(bigFizzbuzzer(8), 8);
        assert.equal(bigFizzbuzzer(7), 7);
    });

    it('it should handle huge numbers (when passed in as strings)', function () {
        assert.equal(bigFizzbuzzer("900000000000000000000001"), "900000000000000000000001");
        assert.equal(bigFizzbuzzer("900000000000000000000003"), "Fizz!");
        assert.equal(bigFizzbuzzer("900000000000000000000005"), "Buzz!");
        assert.equal(bigFizzbuzzer("900000000000000000000000"), "FizzBuzz!");
    });


})



describe('bigCreateFizzBuzz should return the correct output even for small numbers', function () {
    const tst_1_15 = [ 1, 2, 'Fizz!', 4, 'Buzz!', 'Fizz!', 7, 8, 'Fizz!', 'Buzz!', 11, 'Fizz!', 13, 14, 'FizzBuzz!' ];
    const tst_1_28_4_7 = [ 1, 2, 3, 'Foo!', 5, 6, 'Bar!', 'Foo!', 9, 10, 11, 'Foo!', 13, 'Bar!', 15, 'Foo!', 17, 18, 19, 'Foo!', 'Bar!', 22, 23, 'Foo!', 25, 26, 27, 'FooBar!' ];
    const tst_minus15_15 = ["FizzBuzz!",-14,-13,"Fizz!",-11,"Buzz!","Fizz!",-8,-7,"Fizz!","Buzz!",-4,"Fizz!",-2,-1,0,1,2,"Fizz!",4,"Buzz!","Fizz!",7,8,"Fizz!","Buzz!",11,"Fizz!",13,14,"FizzBuzz!"]
    const tst_hugeNums = ["900000000000000000000001","900000000000000000000002","Fizz!","900000000000000000000004","Buzz!","Fizz!","900000000000000000000007","900000000000000000000008","Fizz!","Buzz!","900000000000000000000011","Fizz!","900000000000000000000013","900000000000000000000014","FizzBuzz!"]
    it('and should do a standard fizzbuzz with no other arguments', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz(1, 15)), JSON.stringify(tst_1_15));
    });


    it('and should take custom parameters', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz(1, 28, 4, 7, 'Foo', 'Bar')), JSON.stringify(tst_1_28_4_7));
    });


    it('and it should be able to count backwards', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz(15, 1)), JSON.stringify(tst_1_15.reverse()));
    });

    it('and it should be able to count backwards with custom parameters', function () {
        const tst_15_1 = ["FizzBuzz!" ,14 ,13, "Fizz!", 11, "Buzz!", "Fizz!", 8, 7, "Fizz!", "Buzz!", 4, "Fizz!", 2, 1];
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz(28, 1, 4, 7, 'Foo', 'Bar')), JSON.stringify(tst_1_28_4_7.reverse()));
    });

    it('and should handle positive numbers, negative numbers, and 0', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz(-15, 15)), JSON.stringify(tst_minus15_15));
    });

    it('and should handle big numbers', function () {
        // two identical arrays will not evaluate to be "equal" to each other. Stringification is a good solution to this problem.
        assert.equal(JSON.stringify(bigCreateFizzBuzz("900000000000000000000001", "900000000000000000000015")), JSON.stringify(tst_hugeNums));
    });
})
