// JavaScript source code
var commandLineArguments = [];

process.argv.forEach(function (val, index, array) {
    commandLineArguments.push(val)
});

commandLineArguments = commandLineArguments.slice(2); 

var fizzbuzzer = function (number) {
    if (number % 15 === 0){
        return ("FizzBuzz!")
    } else if (number % 5 === 0) {
        return ("Buzz!")
    } else if (number % 3 === 0) {
        return ("Fizz!");
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