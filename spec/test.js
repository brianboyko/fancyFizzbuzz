// test fizzbuzz
var assert = require('assert'); 

import {
    fizzbuzzer, 
    createFizzBuzz, 
    HELP_TEXT, 
    VERSION, 
    showAndRemoveSpecialFlags,
    getArgumentsFromCommandLine,
    processInput
} from '../build/main.js'

describe('Fizzbuzzer should return the correct output', function () {

    it('and should correctly default', function () {
        assert.equal(fizzbuzzer(3), "Fizz!");
        assert.equal(fizzbuzzer(5), "Buzz!");
        assert.equal(fizzbuzzer(15), "FizzBuzz!");
        assert.equal(fizzbuzzer(4), 4); 
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

    it('and should accept alternative modulos', function () {
        assert.equal(fizzbuzzer(3, 4, 7), 3);
        assert.equal(fizzbuzzer(5, 4, 7), 5);
        assert.equal(fizzbuzzer(15, 4, 7), 15);
        assert.equal(fizzbuzzer(8, 4, 7), "Fizz!");
        assert.equal(fizzbuzzer(21, 4, 7), "Buzz!");
        assert.equal(fizzbuzzer(28, 4, 7), "FizzBuzz!");
    });

    it('should handle 0 as a special case', function () {
        assert.equal(fizzbuzzer(0), 0);
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

describe('should correctly parse command line arguments', function(){
    const helpFlags = ['-h', 'h', 'help', '-help', '--help', '--h'];
    const helpFlagsTest = ['-h', 'one', 'two', '-help', 'three', "help", 'four']
    const versionFlags = ['-v', 'v', '-version', '--version', '--v'];
    const versionFlagsTest = ['one', '-v', 'two', '-version', '--v', 'three', 'four']
    const RF = ['one', 'two', 'three', 'four']
      // Since getArgumentsFromCommandLine uses process.argv, we have to reassign it to test. 
    var processArgvTempHolder = process.argv;

    it('and remove help and version flags after displaying the associated text', function(){
        assert.equal(JSON.stringify(showAndRemoveSpecialFlags(helpFlagsTest, helpFlags, HELP_TEXT)), JSON.stringify(RF))
        assert.equal(JSON.stringify(showAndRemoveSpecialFlags(versionFlagsTest, versionFlags, VERSION)), JSON.stringify(RF))
    })

    it('should lop off the first two things from the command line', function(){
      process.argv = ['/usr/local/bin/node', './build/main.js', 1, 15, '-m', 3, 5, '-t', 'Fizz', 'Buzz'];
      assert.equal(JSON.stringify(getArgumentsFromCommandLine()), JSON.stringify([1, 15, '-m', 3, 5, '-t', 'Fizz', 'Buzz']))
    })

    it('should take the correct inputs from the command line and send them to the object', function(){
      process.argv = ['/usr/local/bin/node', './build/main.js', '-h', '-v', 20, 40, '-m', 6, 10, '-t', 'Fudder', 'Dudder', '-i', 'dummyInput.csv', '-o', 'dummyOutput.csv'];
      const shouldBeObj = {
        first: 20,
        last: 40,
        firstModulus: 6,
        secondModulus: 10,
        input: 'dummyInput.csv',
        output: 'dummyOutput.csv',
        fizzTerm: 'Fudder',
        buzzTerm: 'Dudder'
      }
      assert.equal(JSON.stringify(processInput()), JSON.stringify(shouldBeObj))
    })

      // here we restore process.argv to it's original value. 
    process.argv = processArgvTempHolder;
})