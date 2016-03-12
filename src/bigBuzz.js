// ./bigBuzz.js
// a specialty library for handling big integers.

var bigInt = require("big-integer");

var bigFizzbuzzer = function (stringNumber, fizzer = 3, buzzer = 5, fizzOutput = "Fizz", buzzOutput = "Buzz") {
    // one could argue that 0 is modulo all numbers, but I think this is better default behavior.
    // The fizzer and buzzer are going to be javascript numbers.
    if (bigInt(stringNumber).isSmall & bigInt(stringNumber).value === 0){
      return 0
    };
    if ((bigInt(stringNumber).mod(fizzer).value === 0) && ((bigInt(stringNumber).mod(buzzer).value === 0))){
        return "" + fizzOutput + buzzOutput + '!'
    } else if (bigInt(stringNumber).mod(fizzer).value === 0) {
        return (fizzOutput + "!")
    } else if ((bigInt(stringNumber).mod(buzzer).value === 0)) {
        return (buzzOutput + "!");
    } else {
        return bigInt(stringNumber).isSmall ? bigInt(stringNumber).value : bigInt(stringNumber).toString();
    }
}

var bigCreateFizzBuzz = function (start, end, fizzer = 3, buzzer = 5, fizzOutput = "Fizz", buzzOutput = "Buzz")  {
    var output = [];
    //bigInt(a).compare(b) => a<b: -1, a=b: 0, a>b: 1
    var incre = bigInt(start).compare(end) * -1
    // Bad code: while (bigInt(start).compare(end) != 0){ will not run the last number inclusive.
    while (bigInt(start).compare(end) - incre !== 0){
      output.push(bigFizzbuzzer(start, fizzer, buzzer, fizzOutput, buzzOutput));
      // can do this without mutation?
      start = bigInt(start).add(incre);
    }
    return output;
}

export {
    bigFizzbuzzer,
    bigCreateFizzBuzz
}
