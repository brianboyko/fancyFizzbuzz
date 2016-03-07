"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// ./lib/index.js

var fizzbuzzer = function fizzbuzzer(number) {
    var fizzer = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
    var buzzer = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
    var fizzOutput = arguments.length <= 3 || arguments[3] === undefined ? "Fizz" : arguments[3];
    var buzzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Buzz" : arguments[4];

    // one could argue that 0 is modulo all numbers, but I think this is better default behavior.
    if (number === 0) {
        return 0;
    };

    if (number % fizzer === 0 && number % buzzer === 0) {
        return "" + fizzOutput + buzzOutput + '!';
    } else if (number % fizzer === 0) {
        return fizzOutput + "!";
    } else if (number % buzzer === 0) {
        return buzzOutput + "!";
    } else {
        return number;
    }
};

var createFizzBuzz = function createFizzBuzz(start, end) {
    var fizzer = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];
    var buzzer = arguments.length <= 3 || arguments[3] === undefined ? 5 : arguments[3];
    var fizzOutput = arguments.length <= 4 || arguments[4] === undefined ? "Fizz" : arguments[4];
    var buzzOutput = arguments.length <= 5 || arguments[5] === undefined ? "Buzz" : arguments[5];

    var output = [];
    var incre = 1;
    if (start > end) {
        incre = -1;
    }
    for (var i = start; end >= start ? i <= end : i >= end; i = i + incre) {
        output.push(fizzbuzzer(i, fizzer, buzzer, fizzOutput, buzzOutput));
    }
    return output;
};

exports.fizzbuzzer = fizzbuzzer;
exports.default = createFizzBuzz;