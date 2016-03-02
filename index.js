// index.js
var prompt = require('prompt');
import { getCommand } from './inputProcessing'

var initialInput = function () {
    var commandLineArguments = [];
    process.argv.forEach(function (val, index, array) {
        commandLineArguments.push(val)
    });
    commandLineArguments = commandLineArguments.slice(2); 
}






var fizzbuzzer = function (number, fizzer = 3, buzzer = 5, fizzOutput = "Fizz", buzzOutput = "Buzz") {
    if ((number % fizzer === 0) && (number % buzzer === 0)){
        let output = "" + fizzOutput + buzzOutput + '!'
        return (output)
    } else if (number % fizzer === 0) {
        return (fizzOutput + "!")
    } else if (number % buzzer === 0) {
        return (buzzOutput + "!");
    } else {
        return number;
    }
}

var mainFizzBuzz = function (min, max) {
    if (min > max) {
        console.log("Sorry, min is greater than max")
    } else if (false){
        // min or max is not a number 
    } else {
        for (var i = min; i <= max; i++) {
            console.log(fizzbuzzer(i));
        }
    }
}


mainFizzBuzz(parseInt(commandLineArguments[0]), parseInt(commandLineArguments[1])); 


module.exports = {
    fizzbuzzer: fizzbuzzer
}